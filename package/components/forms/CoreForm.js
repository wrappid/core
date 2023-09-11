import React, { Component } from "react";

import { connect } from "react-redux";

import CoreEditForm from "./CoreEditForm";
import {
  FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP,
  FORM_EDIT_MODE
} from "./coreFormConstants";
import CoreFormDialogs from "./CoreFormDialogs";
import CoreFormHeader from "./CoreFormHeader";
import CoreFormHeaderActions from "./CoreFormHeaderActions";
import { urls } from "../../config/constants";
// eslint-disable-next-line import/namespace
import { functionsRegistry } from "../../layout/PageContainer";
import { apiRequestAction } from "../../store/action/appActions";
import {
  cancelFormEdit,
  createAllForms,
  handleFormLocalAction,
  onAddForm,
  onEditForm,
  resetFormReducer,
  storeForm,
  updateApiMeta
} from "../../store/action/formAction";
import { GET_FORM_ERROR, GET_FORM_SUCCESS } from "../../store/types/formTypes";
import CoreClasses from "../../styles/CoreClasses";
// eslint-disable-next-line import/namespace
import { createApiMeta, forReloadCheck, getForm, hookcallCheck } from "../../utils/formUtils";
import { compareObject } from "../../utils/objectUtils";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import { CORE_DIALOG_TYPES } from "../feedback/CoreDialog";
import CoreSkeleton from "../feedback/CoreSkeleton";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreLink from "../navigation/CoreLink";

/**
 * @TODO
 * 1. render function for each field with string, json object, react component
 * 2. render field if display true
 */
class CoreForm extends Component {
  state = {
    addForm          : null,
    dialogContent    : null,
    dialogSet        : false,
    editing          : null,
    firstDataLoadFail: false,
    formId           : this.props.formId,
    formIdAtMount    : null,
    hideFlag         : true,
    prevQuery        : this.props.query,
    recreateForm     : null,
    submitMode       : null,
  };

  componentDidMount = () => {
    this.onMountLoad();
  };
  componentDidUpdate = () => {
    this.onUpdateLoad();
    this.setErrorAlert();
  };

  getAndStoreForm = async () => {
    let formJson =
      this.props.formJson && this.props.formJson[this.props.formId]
        ? this.props.formJson[this.props.formId]
        : null;

    if (!formJson) {
      //forms fetched from api ar stored
      let rawForm = this.props.rawFormSchema;
      let rawFormStatus = this.props.rawFormStatus;

      // eslint-disable-next-line id-length
      let formOb = await getForm(this.props.formId, this.props.authenticated, {
        rawForm,
        rawFormStatus,
      });

      formJson = formOb.formJson;
      let success = formOb.success;
      let formId = formOb.formId;
      
      if (success) {
        this.props.storeForm(GET_FORM_SUCCESS, { data: formJson, formId });
      } else {
        this.props.storeForm(GET_FORM_ERROR, { data: null, formId });
      }
    } else {
      //local forms supplied via props are stored in rawForm
      let tempFields = null;

      if (formJson?.fields) {
        tempFields = formJson?.fields;
      }
      formJson = formJson.formJson;
      if (tempFields) {
        formJson = { ...formJson, fields: tempFields };
      }
      this.props.storeForm(GET_FORM_SUCCESS, {
        data     : formJson,
        formId   : this.props.formId,
        localForm: true,
      });
    }
    return formJson;
  };

  onMountLoad = async () => {
    // -- console.log("ROW FORM JSON", this.props.formJson, this.props.initData);
    this.setState({ formIdAtMount: this.props.formId });
    let formJson = await this.getAndStoreForm();

    this.props.CreateAllForms(
      this.props.formId,
      this.props.initData,
      this.props.mode,
      this.props.formJson,
      this.props.authenticated,
      formJson
    );

    if (!formJson) {
      this.setState({ firstDataLoadFail: true, prevQuery: this.props.query });
    }
    if (
      formJson?.read &&
      !formJson?.read?.entity &&
      formJson?.onMountRead !== false &&
      this.props?.onMountRead !== false
    ) {
      let values = {};
      let apiMeta = createApiMeta(
        { addForm: null, editing: null, query: this.props.query },
        formJson,
        values,
        {
          _query  : this.props._query,
          addForm : this.props.addForm[this.props.formId],
          apiMode : "read",
          editForm: this.props.editForm[this.props.formId],
        }
      );
      let sanData = { endpoint: apiMeta.endpoint, values: values };

      sanData = formJson?.read?.onSubmitRefine
        ? functionsRegistry[formJson?.read?.onSubmitRefine](
          values,
          apiMeta,
          this.props.state,
          this.state
        )
        : sanData;

      if (sanData.values) {
        apiMeta.values = sanData.values;
      }
      if (sanData.endpoint) {
        apiMeta.endpoint = sanData.endpoint;
      }

      if (sanData.reduxData) {
        apiMeta.reduxData = sanData.reduxData;
      }

      // -- console.log("-----ON MOUNT READ", apiMeta);
      if (apiMeta.endpoint && apiMeta.method) {
        this.props.HandleFormSubmit(
          apiMeta.method,
          apiMeta.endpoint,
          apiMeta.authRequired,
          apiMeta.values,
          apiMeta.successType,
          apiMeta.errorType,
          apiMeta.localAction,
          apiMeta.includeFile,
          apiMeta.files,
          this.props.formId,
          true,
          apiMeta.reduxData,
          false,
          null,
          null,
          null
        );
        this.props.UpdateApiMeta(this.props.formId, {
          ...apiMeta,
          onSubmitRefine: formJson?.read?.onSubmitRefine,
        });
      }
    }
  };

  onUpdateLoad = async () => {
    if (this.props.formId !== this.state.formIdAtMount) {
      
      this.setState({ formIdAtMount: this.props.formId }, async () => {
        let formJson = await this.getAndStoreForm();

        this.props.CreateAllForms(
          this.props.formId,
          this.props.initData,
          this.props.mode,
          this.props.formJson,
          this.props.authenticated,
          formJson
        );
      });
    }

    if(this.props.formId !== this.state.formIdAtMount){
      return;
    }

    let formSchema = this.props.rawFormSchema
      ? this.props.rawFormSchema[this.props.formId]
      : {};
    // eslint-disable-next-line id-length
    let dataReloadFlag = forReloadCheck(
      this.props.formSubmitSuccess,
      this.props.formId,
      this.props.formJson,
      formSchema
    );

    let hookCallSuccess = null;
    let hookCallError = null;

    hookCallSuccess = hookcallCheck(
      this.props.formSubmitSuccess,
      this.props.formId,
      this.state.submitMode,
      {
        create: this.props.afterCreateSuccess,
        delete: this.props.afterDeleteSuccess,
        edit  : this.props.afterEditSuccess,
      }
    );

    hookCallError = hookcallCheck(
      this.props.formSubmitError,
      this.props.formId,
      this.state.submitMode,
      {
        create: this.props.afterCreateError,
        delete: this.props.afterDeleteError,
        edit  : this.props.afterEditError,
      },
      "error"
    );
    // -- console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    // -- console.log(hookCallSuccess, hookCallError);
    // -- console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    if (
      hookCallSuccess?.flag &&
      hookCallSuccess?.process &&
      this.state.submitMode
    ) {
      hookCallSuccess.process();
      await this.setState({ submitMode: null });
    }
    if (
      hookCallError?.flag &&
      hookCallError?.process &&
      this.state.submitMode
    ) {
      hookCallError.process();
      if (hookCallError.type === "error") {
        this.props.FormReset({
          formSubmitError: {
            ...this.props.formSubmitError,
            [this.props.formId]: null,
          },
        });
      }
      await this.setState({ submitMode: null });
    }

    // eslint-disable-next-line id-length
    let dataReloadFlag2 =
      this.state.firstDataLoadFail &&
      formSchema?.read &&
      formSchema?.onMountRead !== false &&
      this.props?.onMountRead !== false;
      
    // eslint-disable-next-line id-length
    let dataReloadFlag3 = compareObject(this.props.query, this.state.prevQuery);

    if (dataReloadFlag || dataReloadFlag2 || dataReloadFlag3) {
      if (dataReloadFlag2) {
        this.setState({
          firstDataLoadFail: false,
          prevQuery        : this.props.query,
        });
      } else if (dataReloadFlag3) {
        this.setState({ prevQuery: this.props.query });
      }
      let tempFormSubmitSuccess = {
        ...this.props.formSubmitSuccess,
        [this.props.formId]: null,
      };
      let tempFormEdit = { ...this.props.editForm, [this.props.formId]: null };
      let tempFormAdd = { ...this.props.addForm, [this.props.formId]: null };

      this.props.FormReset({
        addForm          : tempFormAdd,
        editForm         : tempFormEdit,
        formSubmitSuccess: tempFormSubmitSuccess,
      });

      let values = this.props.formData[this.props.formId]?.data?.rows || {};
      let formJson =
        this.props.formJson && this.props.formJson[this.props.formId]
          ? this.props.formJson[this.props.formId]
          : this.props.rawFormSchema
            ? this.props.rawFormSchema[this.props.formId]
            : {};
      let apiMeta = null;

      if (formJson?.read?.entity) {
        apiMeta = this.props.formData[formJson?.read?.entity]?.api;
      } else
        apiMeta = createApiMeta(
          { addForm: null, editing: null, query: this.props.query },
          formJson,
          values,
          {
            _query  : this.props._query,
            addForm : this.props.addForm[this.props.formId],
            apiMode : "read",
            editForm: this.props.editForm[this.props.formId],
          }
        );
      let sanData = { endpoint: apiMeta.endpoint, values: values };

      sanData = formJson?.read?.entity
        ? functionsRegistry[apiMeta?.onSubmitRefine](
          values,
          apiMeta,
          this.props.state,
          this.state
        )
        : formJson?.read?.onSubmitRefine
          ? functionsRegistry[formJson?.read?.onSubmitRefine](
            values,
            apiMeta,
            this.props.state,
            this.state
          )
          : sanData;

      if (sanData.values) {
        apiMeta.values = sanData.values;
      }
      if (sanData.endpoint) {
        apiMeta.endpoint = sanData.endpoint;
      }
      if (sanData.reduxData) {
        apiMeta.reduxData = sanData.reduxData;
      }

      // -- console.log("-----RELOAD", apiMeta);
      if (apiMeta.method && apiMeta.endpoint) {
        let reloadForm = formJson?.read?.entity || this.props.formId;

        this.props.HandleFormSubmit(
          apiMeta.method,
          apiMeta.endpoint,
          apiMeta.authRequired,
          {},
          apiMeta.successType,
          apiMeta.errorType,
          apiMeta.localAction,
          apiMeta.includeFile,
          apiMeta.files,
          this.props.formId,
          true,
          apiMeta.reduxData,
          false,
          null,
          null,
          reloadForm
        );
        this.props.UpdateApiMeta(this.props.formId, {
          ...apiMeta,
          onGetRefine   : formJson?.read?.onGetRefine,
          onSubmitRefine: formJson?.read?.onSubmitRefine,
        });
      }
    }
  };

  handleSubmit = async values => {
    let formJson =
      this.props.formJson && this.props.formJson[this.props.formId]
        ? this.props.formJson[this.props.formId]?.formJson
          ? this.props.formJson[this.props.formId]?.formJson
          : this.props.formJson[this.props.formId]
        : this.props.rawFormSchema
          ? this.props.rawFormSchema[this.props.formId]
          : {};

    //hook function to excute befire submit
    if (this.props.beforeSubmit) this.props.beforeSubmit();

    let apiMeta = createApiMeta(this.state, formJson, values, {
      _query  : this.props._query,
      addForm : this.props.addForm[this.props.formId],
      apiMode : this.props.apiMode,
      editForm: this.props.editForm[this.props.formId],
    });

    let sanData = { endpoint: apiMeta.endpoint, values: values };

    if (apiMeta.mode === "edit" && formJson?.edit?.onSubmitRefine) {
      // -- console.log("EDITING");
      sanData = functionsRegistry[formJson?.edit?.onSubmitRefine](
        values,
        apiMeta,
        this.props.state,
        this.state
      );
    } else if (apiMeta.mode === "create" && formJson?.create?.onSubmitRefine) {
      // -- console.log("ADDING");
      sanData = functionsRegistry[
        formJson?.create?.onSubmitRefine
      ](values, apiMeta, this.props.state, this.state);
    }

    // -- console.log("SANITIZED DATA", sanData);

    if (sanData.values) {
      apiMeta.values = sanData.values;
    }
    if (sanData.endpoint) {
      apiMeta.endpoint = sanData.endpoint;
    }
    if (sanData.reduxData) {
      apiMeta.reduxData = sanData.reduxData;
    }

    // -- console.log("SUBMIT", apiMeta);
    this.props.HandleFormSubmit(
      apiMeta.method,
      apiMeta.endpoint,
      apiMeta.authRequired,
      apiMeta.values,
      apiMeta.successType,
      apiMeta.errorType,
      apiMeta.localAction,
      apiMeta.includeFile,
      apiMeta.files,
      this.props.formId,
      apiMeta.reload,
      apiMeta.reduxData,
      null,
      null,
      null,
      null
    );

    this.setState({ submitMode: apiMeta.mode });

    //hook function to excute after submit
    if (this.props.afterSave) this.props.afterSave();
  };

  handleButtonClick = data => {
    let values = {};

    if (data.onSubmitRefine) {
      let othersFormData = {
        editForm: this.props.editForm,
        formId  : this.props.formId,
      };

      values = functionsRegistry[data.onSubmitRefine](
        values,
        {},
        this.props.state,
        othersFormData
      );
    }

    if (data.localAction) {
      this.props.HandleLocalFormAction(values?.values, data.localAction);
    } else
      this.props.HandleFormSubmit(
        data.method,
        data.endpoint,
        data.authRequired,
        values,
        data.successType,
        data.errorType,
        data.localAction,
        data.includeFile,
        data.files,
        this.props.formId,
        data.reload,
        null,
        null,
        null,
        null,
        null
      );
  };

  OnEditClick = id => {
    //hook function to excute before edit
    if (this.props.beforeEdit) this.props.beforeEdit();
    this.setState({
      addForm: null,
      editing: id,
    });
    this.props.OnEditForm(this.props.formId, id);
    //hook function to excute after edit
    if (this.props.afterEdit) this.props.afterEdit();
  };

  OnDeleteClick = id => {
    this.setState({
      deleting     : id,
      dialogContent: {
        cancelButton: () => {
          this.setState({ dialogContent: null, dialogSet: false });
        },
        doneButton: () => {
          this.CompleteDelete();
          this.setState({ dialogContent: null, dialogSet: false });
        },
        doneButtonLabel: "Delete",
        noCancelButton : true,
        showDialog     : true,
        subtitle       : "Are you Sure",
        title          : "Confirm",
        type           : CORE_DIALOG_TYPES.INFO,
      },
      dialogSet: true,
    });
  };

  CompleteDelete = () => {
    let formJson =
      this.props.formJson && this.props.formJson[this.props.formId]
        ? this.props.formJson[this.props.formId]?.formJson
          ? this.props.formJson[this.props.formId]?.formJson
          : this.props.formJson[this.props.formId]
        : this.props.rawFormSchema
          ? this.props.rawFormSchema[this.props.formId]
          : {};
    let apiMeta = createApiMeta(
      this.state,
      formJson,
      this.props.formData[this.props.formId]?.data?.rows,
      {
        _query  : this.props._query,
        addForm : this.props.addForm[this.props.formId],
        apiMode : "delete",
        editForm: this.props.editForm[this.props.formId],
      }
    );

    let sanData = {
      endpoint: apiMeta.endpoint,
      values  : this.props.formData[this.props.formId]?.data?.rows,
    };

    if (formJson?.delete?.onSubmitRefine) {
      // -- console.log("DELETING");
      sanData = functionsRegistry[
        formJson?.delete?.onSubmitRefine
      ](
        this.props.formData[this.props.formId]?.data?.rows,
        apiMeta,
        this.props.state,
        this.state
      );
    }

    if (sanData.values) {
      apiMeta.values = sanData.values;
    }
    if (sanData.endpoint) {
      apiMeta.endpoint = sanData.endpoint;
    }
    //hook function to excute befire submit
    if (this.props.beforeDelete) this.props.beforeDelete();

    this.props.HandleFormSubmit(
      apiMeta.method,
      apiMeta.endpoint,
      apiMeta.authRequired,
      {},
      apiMeta.successType,
      apiMeta.errorType,
      apiMeta.localAction,
      apiMeta.includeFile,
      apiMeta.files,
      this.props.formId,
      apiMeta.reload,
      null,
      null,
      null,
      null,
      null
    );
    this.setState({ submitMode: "delete" });

    //hook function to excute after submit
    if (this.props.afterDelete) this.props.afterDelete();
  };

  OnAdd = () => {
    //hook function to excute before add
    if (this.props.beforeAdd) this.props.beforeAdd();
    let temp = this.props.processedForms[this.props.formId];

    // -- console.log("here", temp);

    this.setState({ addForm: { [this.props.formId]: temp }, editing: null });
    this.props.OnAddForm(
      this.props.formId,
      this.props.processedForms[this.props.formId]
    );
    //hook function to excute after submit
    if (this.props.afterAdd) this.props.afterAdd();
  };

  OnCancel = () => {
    //hook function to excute before cancel
    if (this.props.beforeCancel) this.props.beforeCancel();

    this.props.CancelFormEdit(this.props.formId);

    //hook function to excute after cancel
    if (this.props.afterCancel) this.props.afterCancel();
  };

  /**
   * Checking if error occured and errorAlert flag
   * is not false in formjson or json
   *
   * if not setting core dialog
   */

  setErrorAlert = async () => {
    let alertFlag = false;

    if (
      this.props.formSubmitError &&
      this.props.formSubmitError[this.props.formId] &&
      !this.state.dialogSet
    ) {
      alertFlag = true;

      let formJson =
        this.props.formJson && this.props.formJson[this.props.formId]
          ? this.props.formJson[this.props.formId]
          : null;

      if (formJson && formJson.errorAlert === false) {
        alertFlag = false;
      } else {
        let rawForm = this.props.rawFormSchema;
        let rawFormStatus = this.props.rawFormStatus;
        // eslint-disable-next-line id-length
        let t = await getForm(this.props.formId, this.props.authenticated, {
          rawForm,
          rawFormStatus,
        });

        if (t?.formJson?.errorAlert === false) {
          alertFlag = false;
        }
      }

      if (this.props.errorAlert === false) {
        alertFlag = false;
      }
    }

    if (alertFlag) {
      let message = this.props.formSubmitError[this.props.formId]?.errorMsg;

      this.setState(
        {
          dialogContent: {
            cancelButton: () => {
              this.setState({ dialogContent: null, dialogSet: false });
            },
            doneButton: () => {
              this.setState({ dialogContent: null, dialogSet: false });
            },
            noCancelButton: true,
            showDialog    : true,
            subtitle      : message,
            title         : "ERROR",
            type          : CORE_DIALOG_TYPES.FAILURE,
          },
          dialogSet: true,
        },
        () => {
          this.props.FormReset({
            formSubmitError: {
              ...this.props.formSubmitError,
              [this.props.formId]: null,
            },
          });
        }
      );
    }
  };

  render() {
    const {
      processedForms,
      mode,
      arrayView,
      formId,
      allowEdit,
      allowAdd,
      allowDelete,
      editForm,
      addForm,
      formSubmitLoading,
      formSubmitSuccess,
      formDataReadLoading,
      formRef,
      formData,
      onFormFocus,
      rawFormSchema,
      preview,
      arrayDataLimit,
      initProps,
      deleteId
    } = this.props;
    const arrayFlag =
      arrayView || (rawFormSchema ? rawFormSchema[formId]?.arrayView : false);

    let { initData } = this.props;

    if (!initData) {
      let newData = formData[formId]?.data?.rows;

      if (newData) {
        if (Array.isArray(newData)) {
          if (newData?.length > 0) {
            initData = newData;
          }
        } else if (Object.keys(newData).length > 0) {
          initData = newData;
        }
      }
    }

    // -- console.log("LOC STATE", initData);
    // -- console.log("LOC props", this.props);

    // -- console.log(
    //   "SPECIAL ---------------",
    //   arrayFlag,
    //   formId,
    //   arrayView
    // );

    return (
      <>
        <CoreFormDialogs
          dialogset={this.state.dialogSet}
          content={this.state.dialogContent}
        />

        {rawFormSchema && !rawFormSchema[formId]?.inlineAction && (
          <CoreFormHeader
            mode={
              mode === FORM_EDIT_MODE ||
              (editForm[formId] && editForm[formId].editing)
            }
            heading={rawFormSchema ? rawFormSchema[formId]?.heading : ""}
            subHeading={rawFormSchema ? rawFormSchema[formId]?.subHeading : ""}
            headerAction={
              rawFormSchema &&
              rawFormSchema[formId] &&
              rawFormSchema[formId].headerAction
                ? rawFormSchema[formId]?.headerAction
                : true
            }
            formId={deleteId || formId}
            action={
              arrayFlag
                ? allowAdd !== false
                  ? [
                    {
                      OnClick: this.OnAdd,
                      disable: preview,
                      icon   : "add",
                      title  : "add",
                    },
                  ]
                  : []
                : allowEdit !== false
                  ? allowDelete !== false
                    ? [
                      {
                        OnClick: this.OnEditClick,
                        disable: preview,
                        icon   : "edit_note",
                        title  : "edit",
                      },
                      {
                        
                        OnClick: this.OnDeleteClick,
                        
                        // -- OnClick: () => {
                        //   // alert("Single component delete tobe done");
                        // },
                        disable: preview,
                        icon   : "delete_outline",
                        title  : "delete",
                      },
                    ]
                    : [
                      {
                        OnClick: this.OnEditClick,
                        disable: preview,
                        icon   : "edit_note",
                        title  : "edit",
                      },
                    ]
                  : allowDelete !== false
                    ? [
                      {
                        OnClick: this.OnDeleteClick,
                      
                        disable: preview,
                        
                        icon : "delete_outline",
                        // -- OnClick: () => {
                        //   alert("Single component delete tobe done");
                        // },
                        title: "delete",
                      },
                    ]
                    : []
            }
          />
        )}

        <CoreGrid coreId="coreFormGrid" {...this.props.designProps}>
          {addForm && addForm[formId] && addForm[formId].add && (
            <CoreEditForm
              styleClasses={this.props.styleClasses}
              forms={addForm}
              formId={formId}
              handleSubmit={this.handleSubmit}
              handleButtonCLick={this.handleButtonClick}
              mode={true}
              submitLoading={formSubmitLoading[formId]}
              submitSuccess={formSubmitSuccess[formId]}
              OnEditClick={this.OnEditClick}
              OnCancelClick={this.OnCancel}
              formRef={formRef}
              formDataReadLoading={formDataReadLoading}
              //Only add form case gets data from fom reducer
              formData={addForm[formId]?.formInitialOb}
              allowEdit={allowEdit}
              preview={preview}
              initProps={initProps}
            />
          )}

          {arrayFlag ? (
            <>
              {!initData ? (
                <CoreTypographyBody1>No Data found</CoreTypographyBody1>
              ) : formDataReadLoading && formDataReadLoading[formId] ? (
                processedForms[formId]?.skeletonComp ? (
                  React.createElement(processedForms[formId]?.skeletonComp, {})
                ) : (
                  <CoreSkeleton variant="rectangular" height={60} />
                )
              ) : Array.isArray(initData) ? (
                <>
                  {initData?.map((initDataOb, index) =>
                    !arrayDataLimit ||
                    !this.state.hideFlag ||
                    (arrayDataLimit && index < arrayDataLimit) ? (
                        <CoreGrid key={`CoreForm-${formId}-initData-${index}`}>
                          <CoreBox gridProps={{ gridSize: !editForm[formId]?.editing ? 10 : 12 }}>
                            <CoreEditForm
                              styleClasses={this.props.styleClasses}
                              index={index}
                              forms={processedForms}
                              formId={formId}
                              handleSubmit={this.handleSubmit}
                              handleButtonCLick={this.handleButtonClick}
                              initData={initDataOb}
                              submitLoading={formSubmitLoading[formId]}
                              submitSuccess={formSubmitSuccess[formId]}
                              mode={
                                mode === FORM_EDIT_MODE ||
                              (editForm[formId] &&
                                editForm[formId].editing &&
                                editForm[formId].formArrayId === initDataOb.id)
                              }
                              OnEditClick={this.OnEditClick}
                              OnCancelClick={this.OnCancel}
                              editFormId={initDataOb.id}
                              formRef={formRef}
                              formDataReadLoading={formDataReadLoading}
                              formData={formData[formId]?.data?.rows}
                              allowEdit={allowEdit}
                              onFormFocus={onFormFocus}
                              preview={preview}
                              initProps={initProps}
                            />
                          </CoreBox>
                          
                          {!editForm[formId]?.editing && (
                            <CoreBox
                              gridProps={{ gridSize: 2 }}
                              styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
                              {formDataReadLoading[formId] ? null : (
                                <CoreFormHeaderActions
                                  mode={mode}
                                  index={index}
                                  id={initDataOb.id}
                                  preview={preview}
                                  action={
                                    allowEdit !== false
                                      ? allowDelete !== false
                                        ? [
                                          {
                                            OnClick:
                                              processedForms[formId] &&
                                              processedForms[formId]
                                                .arrayDataNotEditable
                                                ? FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP[
                                                  processedForms[formId]
                                                    .arrayDataNotEditable
                                                ](initDataOb)
                                                  ? this.OnEditClick
                                                  : () => {
                                                    // -- swal(
                                                    //   "Error",
                                                    //   "Data not editable",
                                                    //   "error"
                                                    // );
                                                  }
                                                : this.OnEditClick,
                                            disable: preview,
                                            icon   : "edit_note",
                                            title  : "edit",
                                          },
                                          {
                                            OnClick:
                                              processedForms[formId] &&
                                              processedForms[formId]
                                                .arrayDataNotDeletable
                                                ? FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP[
                                                  processedForms[formId]
                                                    .arrayDataNotDeletable
                                                ](initDataOb)
                                                  ? this.OnDeleteClick
                                                  : () => {
                                                    // -- swal(
                                                    //   "Error",
                                                    //   "Data not deletable",
                                                    //   "error"
                                                    // );
                                                  }
                                                : this.OnDeleteClick,
                                            disable: preview,
                                            icon   : "delete_outline",
                                            title  : "delete",
                                          },
                                        ]
                                        : [
                                          mode === FORM_EDIT_MODE && {
                                            OnClick:
                                              processedForms[formId] &&
                                              processedForms[formId]
                                                .arrayDataNotEditable
                                                ? FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP[
                                                  processedForms[formId]
                                                    .arrayDataNotEditable
                                                ](initDataOb)
                                                  ? this.OnEditClick
                                                  : () => {
                                                    // -- swal(
                                                    //   "Error",
                                                    //   "Data not editable"
                                                    // );
                                                  }
                                                : this.OnEditClick,
                                            disable: preview,
                                            icon   : "edit_note",
                                            title  : "edit",
                                          },
                                        ]
                                      : allowDelete !== false
                                        ? [
                                          {
                                            OnClick:
                                            processedForms[formId] &&
                                            processedForms[formId]
                                              .arrayDataNotDeletable
                                              ? FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP[
                                                processedForms[formId]
                                                  .arrayDataNotDeletable
                                              ](initDataOb)
                                                ? this.OnDeleteClick
                                                : () => {
                                                  // -- swal(
                                                  //   "Error",
                                                  //   "Data not deletable"
                                                  // );
                                                }
                                              : this.OnDeleteClick,
                                            disable: preview,
                                            icon   : "delete_outline",
                                            title  : "delete",
                                          },
                                        ]
                                        : []
                                  }
                                />
                              )}
                            </CoreBox>
                          )}
                        </CoreGrid>
                      ) : null
                  )}

                  {arrayDataLimit &&
                    initData?.length > arrayDataLimit &&
                    this.state.hideFlag && (
                    <CoreBox
                      styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.FLEX.DIRECTION_ROW]}>
                      <CoreLink
                        href={
                          !this.props.query
                            ? urls.SHOW_SPECIFIC.replace(":formId", formId)
                            : urls.SHOW_SPECIFIC.replace(":formId", formId) +
                                "?query=" +
                                encodeURIComponent(
                                  JSON.stringify(this.props.query)
                                )
                        }>
                        {Number(initData?.length - arrayDataLimit) > 1
                          ? "Show " +
                              Number(initData?.length - arrayDataLimit) +
                              " others"
                          : "Show " +
                              Number(initData?.length - arrayDataLimit) +
                              " other"}
                      </CoreLink>
                    </CoreBox>
                  )}
                </>
              ) : !initData ? (
                <CoreTypographyBody1>No Data found</CoreTypographyBody1>
              ) : null}
            </>
          ) : allowEdit === false ? (
            <CoreEditForm
              styleClasses={this.props.styleClasses}
              forms={processedForms}
              formId={formId}
              handleSubmit={this.handleSubmit}
              handleButtonCLick={this.handleButtonClick}
              initData={initData}
              mode={false}
              formRef={formRef}
              formDataReadLoading={formDataReadLoading}
              formData={formData[formId]?.data?.rows}
              allowEdit={allowEdit}
              preview={preview}
              initProps={initProps}
            />
          ) : (
            <CoreEditForm
              styleClasses={this.props.styleClasses}
              forms={processedForms}
              formId={formId}
              handleSubmit={this.handleSubmit}
              handleButtonCLick={this.handleButtonClick}
              initData={initData}
              mode={
                mode === FORM_EDIT_MODE ||
                (editForm[formId] && editForm[formId].editing)
              }
              submitLoading={formSubmitLoading[formId]}
              submitSuccess={formSubmitSuccess[formId]}
              OnEditClick={this.OnEditClick}
              OnCancelClick={this.OnCancel}
              editFormId={formId}
              formRef={formRef}
              formDataReadLoading={formDataReadLoading}
              formData={formData[formId]?.data?.rows}
              allowEdit={allowEdit}
              onFormFocus={onFormFocus}
              preview={preview}
              initProps={initProps}
            />
          )}
        </CoreGrid>
      </>
    );
  }
}

const mapStateToProps = state => {
  // -- console.log("STATE", state);
  return {
    addForm            : state.forms.addForm,
    auth               : state.auth,
    editForm           : state.forms.editForm,
    formData           : state.api,
    formDataReadLoading: state.forms.formDataReadLoading,
    formSubmitError    : state.forms.formSubmitError,
    formSubmitLoading  : state.forms.formSubmitLoading,
    formSubmitSuccess  : state.forms.formSubmitSuccess,
    processedForms     : state.forms.processedForms,
    rawFormSchema      : state.forms.rawForm,
    rawFormStatus      : state.forms.rawFormStatus,
    state              : state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    CancelFormEdit: formId => {
      dispatch(cancelFormEdit(formId));
    },
    CreateAllForms: (
      formId,
      initData,
      mode,
      rowFormJson,
      authenticated,
      formSchema
    ) => {
      dispatch(
        createAllForms(
          formId,
          initData,
          mode,
          rowFormJson,
          authenticated,
          formSchema
        )
      );
    },
    FormReset: data => {
      dispatch(resetFormReducer(data));
    },
    HandleFormSubmit: (
      method,
      endpoint,
      authRequired,
      data,
      successType,
      errorType,
      localAction,
      includeFile,
      files,
      formId,
      reload,
      reduxData,
      pushSnack,
      loadingType,
      resetLoadingType,
      reloadForm
    ) => {
      dispatch(
        apiRequestAction(
          method,
          endpoint,
          authRequired,
          data,
          successType,
          errorType,
          localAction,
          includeFile,
          files,
          formId,
          reload,
          reduxData,
          pushSnack,
          loadingType,
          resetLoadingType,
          reloadForm
        )
      );
    },
    HandleLocalFormAction: (data, localAction) => {
      dispatch(handleFormLocalAction(data, localAction));
    },
    OnAddForm: (formId, data) => {
      dispatch(onAddForm(formId, data));
    },
    OnEditForm: (formId, formArrayId) => {
      dispatch(onEditForm(formId, formArrayId));
    },
    UpdateApiMeta: (formId, apiMeta) => {
      dispatch(updateApiMeta(formId, apiMeta));
    },
    storeForm: (type, payload) => {
      dispatch(storeForm(type, payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreForm);
