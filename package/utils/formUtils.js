// eslint-disable-next-line import/no-unresolved
import { getConfigurationObject } from "@wrappid/styles";
import * as yup from "yup";

import { getGridSizeProps } from "./componentUtil";
import { FORM_DATA_TABLE_FUNCTION_MAP } from "./formDataTableFunctionMap";
import { queryBuilder } from "./helper";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SANITIZATOIN_FUNCTION_MAP,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE,
  INPUT_TYPE
} from "../components/forms/coreFormConstants";
import CoreInput from "../components/inputs/CoreInput";
import CoreBox from "../components/layouts/CoreBox";
import { GET_FORM_API, GET_FORM_API_AUTHENTICATED } from "../config/api";
import { ENV_DEV_MODE, HTTP } from "../config/constants";
import { mergedComponentRegistry, functionsRegistry, validationsRegistry } from "../layout/PageContainer";
import axiosInterceptor from "../middleware/axiosInterceptor";
import authHeader from "../service/DataService";
import {
  DELETE_DATA_ERROR,
  DELETE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_SUCCESS
} from "../store/types/dataManagementTypes";
import CoreClasses from "../styles/CoreClasses";

let configuration = getConfigurationObject();

export function getFormikRequiredMessage(name = "", isShort = false) {
  let message = "";

  if (isShort) {
    message = name.toUpperCase() + " is required";
  } else {
    message = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2") + " is required";
    message = message[0].toUpperCase() + message.slice(1);
  }
  return message;
}

function getComponentArray(formJson) {
  let allComps = [];
  let actionComps = [];
  let allValidations = {};
  let helperButtonFlag = false;
  let renderComp = mergedComponentRegistry[formJson?.render]?.comp || null;
  let skeletonComp =
    mergedComponentRegistry[formJson?.skeletonRender]?.comp || null;

  if (formJson?.fields) {
    let temp = formJson?.fields?.map((fields) => {
      return {
        ...fields,
        order: fields.order ? fields.order : 0,
      };
    });

    temp = temp?.sort((elementA, elementB) => elementA.order - elementB.order);
    formJson.fields = temp;
  }
  for (let i = 0; i < formJson?.fields?.length; i++) {
    let formField = formJson.fields[i];

    allComps.push({
      ...formField,
      box : { comp: CoreBox, gridSize: formField?.gridSize },
      comp: formField?.hidden
        ? null
        : mergedComponentRegistry[formField?.type]
          ? mergedComponentRegistry[formField?.type]?.comp
          : CoreInput,
      dependencies: formField?.dependencies,
      onlyView:
        mergedComponentRegistry[formField?.type]?.onlyView === true ? true : false,
      tabIndex: formField?.tabIndex ? formField?.tabIndex : i + 1,
      viewComp: mergedComponentRegistry[formField?.viewComp]
        ? mergedComponentRegistry[formField?.viewComp].comp
        : CoreTypographyBody1,
    });
    allValidations[formField?.id] = formField?.required
      ? mergedComponentRegistry[formField?.type]?.defaultValidation?.required
      : mergedComponentRegistry[formField?.type]?.defaultValidation?.notRequired;

    if (formField?.helperText && formField?.helperText !== "") {
      helperButtonFlag = true;
    }
  }

  for (
    let actionIndex = 0;
    actionIndex < formJson?.actions?.length;
    actionIndex++
  ) {
    let action = formJson.actions[actionIndex];

    actionComps.push({
      box : { comp: CoreBox },
      comp: mergedComponentRegistry[action?.type]?.comp,
      ...action,
    });
  }

  return {
    actionComps,
    allComps,
    allValidations,
    helperButtonFlag,
    renderComp,
    skeletonComp,
  };
}

export function createInitialData(formJson, initData) {
  let initialDataOb = Array.isArray(initData) ? [] : {};
  let fields = formJson?.formJson
    ? formJson?.formJson?.fields
    : formJson?.fields;

  for (let i = 0; i < fields?.length; i++) {
    let formField = fields[i];

    if (formField?.onlyView) continue;
    if (initData) {
      if (Array.isArray(initData)) {
        for (let j = 0; j < initData.length; j++) {
          if (initialDataOb[j]) {
            initialDataOb[j][formField?.id] = initData[j][formField?.id];
          } else {
            initialDataOb[j] = {
              id             : initData[j]?.id,
              [formField?.id]: initData[j][formField?.id],
            };
          }
        }
      } else if (initData[formField?.id]) {
        initialDataOb[formField?.id] = initData[formField?.id];
      } else {
        initialDataOb[formField?.id] = "";
      }
    } else {
      initialDataOb[formField?.id] = "";
    }
  }

  if (formJson?.keepAllData) {
    if (initData) {
      if (Array.isArray(initData)) {
        for (let j = 0; j < initData.length; j++) {
          initialDataOb[j] = { ...initialDataOb[j], ...initData[j] };
        }
      } else {
        initialDataOb = { ...initialDataOb, ...initData };
      }
    } else {
      initialDataOb = {};
    }
  }
  // eslint-disable-next-line no-console
  console.log("inititla ob", initialDataOb);
  if (!Array.isArray(initData) && !Array.isArray(initialDataOb)) {
    return { ...initData, ...initialDataOb };
  } else {
    return initialDataOb;
  }
}

function concateValidations(formJson, defValidations) {
  let validationOb = {};

  for (let i = 0; i < formJson?.fields?.length; i++) {
    let formField = formJson.fields[i];

    if (formJson.validation) {
      let formValidation = validationsRegistry[formJson.validation];

      validationOb[formField?.id] = formValidation[formField?.id];
    } else {
      validationOb[formField?.id] = defValidations[formField?.id]
        ? defValidations[formField?.id]
        : yup.string();
    }
  }

  return yup.object(validationOb);
}

export async function createForm(
  formId,
  initialData,
  rawFormJson,
  auth,
  formSchema
) {
  let formJson =
    rawFormJson && rawFormJson[formId]
      ? rawFormJson[formId]?.formJson
        ? rawFormJson[formId]?.formJson
        : rawFormJson[formId]
      : formSchema;

  // eslint-disable-next-line no-console
  console.log("form", formJson);
  let {
    allComps,
    allValidations,
    actionComps,
    renderComp,
    skeletonComp,
    helperButtonFlag,
  } = getComponentArray(formJson);
  let validationOb = concateValidations(formJson, allValidations);
  let initialDataOb = createInitialData(formJson, initialData);

  let allowSubmit = formJson?.allowSubmit === false ? false : true;
  let submitButtonLabel = formJson?.submitButtonLabel || "Save";
  let allowCancel = formJson?.allowCancel === false ? false : true;
  let cancelButtonLabel = formJson?.cancelButtonLabel || "Cancel";
  let arrayDataNotDeletable = formJson?.arrayDataNotDeletable;
  let arrayDataNotEditable = formJson?.arrayDataNotEditable;

  return {
    actionComps,
    actionContainerStyle: formJson?.actionContainerStyle,
    allComps,
    allowCancel,
    allowSubmit,
    apiDetails          : formJson?.read,
    arrayDataNotDeletable,
    arrayDataNotEditable,
    cancelButtonLabel,
    helperButtonFlag,
    initialDataOb,
    inlineAction        : formJson?.inlineAction,
    renderComp,
    skeletonComp,
    submitButtonLabel,
    validationOb,
  };
}

export function createFormGridProps(element) {
  let finalProps = { item: true };

  if (element?.gridSize && !isNaN(element?.gridSize)) {
    finalProps = {
      ...finalProps,
      lg: element?.gridSize ? element?.gridSize : FORM_LG_DEFAULT_GRID_SIZE,
      md: element?.gridSize ? element?.gridSize : FORM_MD_DEFAULT_GRID_SIZE,
      sm: element?.gridSize ? element?.gridSize : FORM_SM_DEFAULT_GRID_SIZE,
      xl: element?.gridSize ? element?.gridSize : FORM_XL_DEFAULT_GRID_SIZE,
      xs: element?.gridSize ? element?.gridSize : FORM_XS_DEFAULT_GRID_SIZE,
    };
  } else {
    finalProps = {
      ...finalProps,
      lg: element?.gridSize?.lg
        ? element?.gridSize?.lg
        : FORM_LG_DEFAULT_GRID_SIZE,
      md: element?.gridSize?.md
        ? element?.gridSize?.md
        : FORM_MD_DEFAULT_GRID_SIZE,
      sm: element?.gridSize?.sm
        ? element?.gridSize?.sm
        : FORM_SM_DEFAULT_GRID_SIZE,
      xl: element?.gridSize?.xl
        ? element?.gridSize?.xl
        : FORM_XL_DEFAULT_GRID_SIZE,
      xs: element?.gridSize?.xs
        ? element?.gridSize?.xs
        : FORM_XS_DEFAULT_GRID_SIZE,
    };
  }

  return finalProps;
}

export function createFormFieldProps(props, type) {
  const {
    forms,
    formId,
    element,
    formikprops,
    initProps,
    mode, 
    preview,
    handleButtonCLick,
    submitLoading,
    submitSuccess,
    OnEditClick,
    editFormId,
    allowEdit,
    onFormFocus,
  } = props;
  
  if (type === "edit") {
    if (element?.onlyView) {
      return {
        id          : String(element?.id),
        key         : "formElement" + element?.id,
        label       : element?.label,
        styleClasses: element?.styleClasses,
        ...(initProps[element?.id] || {})
      };
    } else
      return {
        OnEditClick : OnEditClick,
        allowEdit   : allowEdit,
        asyncLoading: element?.asyncLoading,
        
        coreId: "coreFormElement-" + element?.id,
        
        creatable: element?.creatable,
        
        dependencies: element?.dependencies,
        
        editId: editFormId,
        
        endpoint: element?.endpoint,
        
        //data table
        entity: element?.entity
          ? element?.entity
          : element?.getEntity
            ? FORM_DATA_TABLE_FUNCTION_MAP[element?.getEntity](formikprops)
            : "",
        
        error       : formikprops?.errors ? formikprops?.errors[element?.id] : "",
        //below field are passed on for inline actions
        fieldActions: forms[formId]?.formActions,

        formik        : formikprops,
        freeSolo      : element?.freeSolo,
        getOptionLabel: element?.getOptionLabel
          ? functionsRegistry[element.getOptionLabel]
          : null,
        getOptionValue: element?.getOptionValue
          ? functionsRegistry[element.getOptionValue]
          : null,
        gridProps           : { gridSize: getGridSizeProps(element?.gridSize, true) },
        handleButtonCLick   : handleButtonCLick,
        helperText          : element?.helperText,
        id                  : String(element?.id),
        inlineAction        : forms[formId].inlineAction,
        inputProps          : { tabIndex: element?.tabIndex },
        isOptionEqualToValue: element?.isOptionEqualToValue
          ? functionsRegistry[element.isOptionEqualToValue]
          : null,
        itemKey         : element?.itemKey,
        key             : "formElement" + element?.id,
        label           : element?.label,
        multiple        : element?.multiple,
        navigateUrl     : element?.navigateUrl,
        onChange        : formikprops.handleChange,
        onChangeDispatch: element?.onChangeDispatch
          ? functionsRegistry[element.onChangeDispatch]
          : null,
        onFormFocus    : onFormFocus,
        optionComp     : element?.optionComp,
        optionCompProps: element?.optionCompProps,
        //this will be arrow function like (d) => { return d.value }to show the label
        optionDisplay  : element?.optionDisplay,
        
        //this will be arrow function like (d) => { return d.value } to show the value
        optionValue: element?.optionValue,
        
        options: element?.options,
        
        optionsData: element?.optionsData,
        
        preview: preview,
        
        query: element?.query,
        
        readOnly: !mode || preview || element?.readOnly,
        
        skeletonProps: element?.skeletonProps,
        
        src:
          element.type === "avatar" || element.type === "imagePicker"
            ? formikprops?.values
              ? formikprops?.values[element?.id]
              : ""
            : "",
        
        styleClasses: element?.styleClasses
          ? Array.isArray(element.styleClasses)
            ? element.styleClasses
            : [element.styleClasses]
          : [],
        
        submitLoading: submitLoading,
        
        submitSuccess: submitSuccess,
        
        touched: formikprops?.touched ? formikprops?.touched[element?.id] : "",
        type   : element?.type,
        value  : formikprops?.values ? formikprops?.values[element?.id] : "",
        ...(initProps[element?.id] || {})
      };
  } else {
    return {
      id   : element?.id ? String(element?.id) : "",
      label: element?.label,
      ...(initProps[element?.id] || {})
    };
  }
}

export function createFormActionProps(element) {
  let styleProps = {};

  if (
    element.actionContainerStyle &&
    typeof element.actionContainerStyle === "string"
  ) {
    styleProps["styleClasses"] = [element.actionContainerStyle];
  } else if (
    element.actionContainerStyle &&
    Array.isArray(element.actionContainerStyle)
  ) {
    styleProps["styleClasses"] = element.actionContainerStyle;
  } else {
    styleProps["styleClasses"] = [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.FLEX.DIRECTION_ROW];
  }

  return styleProps;
}

export function createFormButtonProps(element, formikprops, handleButtonCLick) {
  return {
    OnClick: element.onClick
      ? typeof element.onClick === "object"
        ? () => {
          handleButtonCLick(element.onClick);
        }
        : element.onClick
      : () => {
        alert("error in button action");
      },
    alignment: element.actionContainerStyle ? null : "end",
    label    : element.label,
    type     : element.actionType === "submit" ? "submit" : "button",
  };
}

export function createFieldSkeletonProps(element) {
  if (element.skeletonProps) {
    return element.skeletonProps;
  } else {
    return {};
  }
}

export function createApiMeta(state, formJson, values, props) {
  const apiMode = props?.apiMode;
  const editForm = props?.editForm?.editing;
  const addForm = props?.addForm?.add;

  // eslint-disable-next-line no-console
  console.log("API METa REATE", values, addForm, editForm, apiMode);
  let apiAction = formJson?.create || {};
  let mode = "create";

  if (apiMode && formJson && formJson[apiMode]) {
    apiAction = formJson[apiMode];
    mode = apiMode;
  } else if (addForm) {
    apiAction = formJson?.create;
    mode = "create";
  } else if (editForm) {
    apiAction = formJson?.edit;
    mode = "edit";
  }

  return {
    authRequired: apiAction?.authRequired,
    endpoint:
    apiAction?.method === HTTP.GET && state.query
      ? queryBuilder(apiAction.endpoint, state.query)
      : apiAction.endpoint,
    errorType  : apiAction.errorType,
    files      : [],
    includeFile: apiAction?.includeFile,
    localAction: apiAction?.localAction,
    method     : apiAction?.method,
    mode       : mode,
    reduxData  : { reduxData: { query: props._query } },
    reload     : apiAction?.reload,
    successType: apiAction?.successType,
    values,
  };
}

export function createTableFormJson(
  dataJson,
  apiRoute,
  mode,
  successType,
  errorType
) {
  let initOb = {};

  for (let i = 0; i < dataJson.filter((data) => data?.input).length; i++) {
    initOb[dataJson[i]?.id] = dataJson[i].value;
  }

  let apiObject = {};

  if (apiRoute) {
    if (mode === "create") {
      apiObject["create"] = {
        authRequired: true,
        endpoint    : apiRoute,
        errorType   : errorType
          ? errorType.create
            ? errorType.create
            : errorType
          : UPDATE_DATA_ERROR,
        includeFile   : false,
        method        : HTTP.POST,
        onSubmitRefine: null,
        successType   : successType
          ? successType.create
            ? successType.create
            : successType
          : UPDATE_DATA_SUCCESS,
      };
    } else if (mode === "read") {
      apiObject["read"] = {
        authRequired: true,
        endpoint    : apiRoute,
        errorType   : errorType
          ? errorType.read
            ? errorType.read
            : errorType
          : UPDATE_DATA_ERROR,
        includeFile   : false,
        method        : HTTP.GET,
        onSubmitRefine: null,
        successType   : successType
          ? successType.read
            ? successType.read
            : successType
          : UPDATE_DATA_SUCCESS,
      };
    } else if (mode === "edit") {
      apiObject["edit"] = {
        authRequired: true,
        endpoint    : apiRoute + "/" + initOb?.id,
        errorType   : errorType
          ? errorType.edit
            ? errorType.edit
            : errorType
          : UPDATE_DATA_ERROR,
        includeFile   : false,
        method        : HTTP.PUT,
        onSubmitRefine: null,
        successType   : successType
          ? successType.edit
            ? successType.edit
            : successType
          : UPDATE_DATA_SUCCESS,
      };
    } else if (mode === "delete") {
      apiObject["edit"] = {
        authRequired: true,
        endpoint    : apiRoute + "/" + initOb?.id,
        errorType   : errorType
          ? errorType.edit
            ? errorType.edit
            : errorType
          : DELETE_DATA_ERROR,
        includeFile   : false,
        method        : HTTP.PATCH,
        onSubmitRefine: null,
        successType   : successType
          ? successType.edit
            ? successType.edit
            : successType
          : DELETE_DATA_SUCCESS,
      };
    }
  }

  // remove common fields
  dataJson = dataJson.filter((data) => data?.input);

  return {
    form: {
      ...apiObject,
      actions: [
        {
          actionType: "submit",
          gridSize  : 12,
          id        : "button1",
          label     : "Save",
          name      : "coreContainedButton",
          required  : true,
          type      : "coreContainedButton",
        },
      ],
      fields: dataJson.map((data) => {
        return {
          id      : data?.id,
          label   : data?.label,
          name    : data?.id,
          required: true,
          type    : "text",
        };
      }),

      validation: null,
    },
    initData: initOb,
  };
}

export function viewString(text, type) {
  if (text) {
    return text;
  } else if (configuration?.wrappid?.env === ENV_DEV_MODE) {
    if (type) {
      return "No " + type + " found";
    } else return "NA";
  } else return "";
}

export function forReloadCheck(
  formSubmitSuccess,
  formId,
  formJson,
  rawFormSchema
) {
  /**
   * @todo need to be correted reload for specific cred operation flag
   * should be checked
   */
  return (
    formSubmitSuccess &&
    formSubmitSuccess[formId] &&
    formSubmitSuccess[formId].success &&
    ((formJson &&
      formJson[formId] &&
      (formJson[formId]?.create?.reload ||
        formJson[formId]?.edit?.reload ||
        formJson[formId]?.delete?.reload)) ||
      rawFormSchema?.create?.reload ||
      rawFormSchema?.edit?.reload ||
      rawFormSchema?.delete?.reload)
  );
}
export function hookcallCheck(
  formSubmitStatus,
  formId,
  mode,
  data,
  type = "success"
) {
  if (
    formSubmitStatus &&
    formSubmitStatus[formId] &&
    formSubmitStatus[formId][type]
  ) {
    if (data[mode]) {
      return { flag: true, process: data[mode], type };
    } else {
      return { flag: false, process: null, type };
    }
  } else {
    return { flag: false, process: null, type };
  }
}

export async function getForm(formId, auth = true, formReducer) {
  if (formReducer?.rawForm && formReducer?.rawForm[formId]) {
    return {
      formId,
      formJson: formReducer?.rawForm[formId],
      message : "Local fetch success",
      success : true,
    };
  } else if (
    !formReducer?.rawFormStatus ||
    (formReducer?.rawFormStatus && !formReducer?.rawFormStatus[formId]) ||
    (formReducer?.rawFormStatus &&
      formReducer?.rawFormStatus[formId] &&
      !formReducer?.rawFormStatus[formId]?.loading) ||
    (formReducer?.rawFormStatus &&
      formReducer?.rawFormStatus[formId] &&
      formReducer?.rawFormStatus[formId]?.error)
  ) {
    try {
      let backendUrl = configuration?.wrappid?.backendUrl;
      let url = auth ? GET_FORM_API_AUTHENTICATED : GET_FORM_API;
      let formRes = await axiosInterceptor({
        headers: await authHeader(auth, false),
        method : HTTP.GET,
        url    : backendUrl + url + formId,
      });

      if (formRes.status === 200) {
        // eslint-disable-next-line no-console
        console.log("IN GET FORM SUCCESS:", formRes);
        return {
          formId,
          formJson: formRes?.data?.data?.schema,
          message : formRes?.data?.message,
          success : true,
        };
      } else {
        return {
          formId,
          formJson: null,
          message : formRes?.data?.message,
          success : false,
        };
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error in form fetch");
      return {
        formId,
        formJson: {},
        message : "Form fetch error",
        success : false,
      };
    }
  }
}

function checkConditions(dependencies, formik) {
  let finalStr = "";

  for (let i = 0; i < dependencies.length; i++) {
    let dependency = dependencies[i];

    if (dependency?.type === "operand") {
      // eslint-disable-next-line no-console
      console.log("EVALUATEING,", dependency?.id, formik.values);
      let dependentValue = formik.values ? formik.values[dependency?.id] : {};

      try {
        if (dependency.operator === "===") {
          if (dependentValue === dependency.value) {
            finalStr += "true";
          } else {
            finalStr += "false";
          }
        } else if (dependency.operator === "==") {
          if (dependentValue === dependency.value) {
            finalStr += "true";
          } else {
            finalStr += "false";
          }
        } else if (dependency.operator === ">=") {
          if (Number(dependentValue) >= Number(dependency.value)) {
            finalStr += "true";
          } else {
            finalStr += "false";
          }
        } else if (dependency.operator === "<=") {
          if (Number(dependentValue) <= Number(dependency.value)) {
            finalStr += "true";
          } else {
            finalStr += "false";
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("Not correct checking", err);
        finalStr += "false";
      }
    } else if (dependency?.type === "operator") {
      finalStr += dependency.operator;
    }

    // eslint-disable-next-line no-console
    console.log("FINAL STR,", finalStr);
  }

  return eval(finalStr);
}

export function getDependentProps(getPropsFunction, formik, elem, allElements){
  if(getPropsFunction && FORM_SANITIZATOIN_FUNCTION_MAP[getPropsFunction]){
    let newProps =  FORM_SANITIZATOIN_FUNCTION_MAP[getPropsFunction](formik, elem, allElements);
    
    if(newProps){
      return newProps;
    }
    else{
      return {};
    }
  }
  else{
    return {};
  }
}

export function checkDependencies(element, formik) {
  let finalStr = "";

  if (element?.dependencies) {
    if(element?.dependencies?.hide)
      finalStr += String(checkConditions(element?.dependencies?.hide, formik));
    return { hide: eval(finalStr) };
  } else {
    return { hide: false };
  }
}

export function getDependents(element, forms, formikprops, type, formId){
  if(element && element.isDependent && type === INPUT_TYPE && element?.dependencies?.props?.elements){
    let dependents = [];
    let dependentOn = element?.dependencies?.props?.elements;
    let dependentProps = element?.dependencies?.props?.dependentProps || [];

    if(dependentProps){
      if(Array.isArray( dependentProps) && dependentProps.length === 0){
        dependentProps = ["values"];
      }
    }

    /**
     * @todo
     * only considering formik props for now as dependent props.
     * This may have extend to all props of depending elements
     */
    for(let i = 0;i < dependentProps.length;i++){
      let prop = dependentProps[[i]];

      if(element?.dependencies?.props?.identifier){
        const identifier = element?.dependencies?.props?.identifier;
        let elemIds = forms[formId]?.formElements?.
          filter(elem=>dependentOn.includes(elem[identifier]))
          .map(elem=>{
            return elem?.id;
          });
  
        dependents = elemIds?.map(id=> formikprops && formikprops[prop] ? formikprops[prop][id] : "");
      }
      else {
        dependents = element?.dependencies?.props?.elements?.map((elem) => {
          return formikprops && formikprops[prop] ? formikprops && formikprops[prop][elem?.id] : "";
        });
      }
    }

    return dependents;
  }
  else{
    return [];
  }
}

export function detectChange(element, forms, formikprops, type, formId, oldProps){
  let dependentValues = getDependents(element, forms, formikprops, type, formId);

  if(dependentValues?.length === 0){
    return false;
  }
  let dependentValuesOld = getDependents(element, forms, oldProps, type, formId);

  if(dependentValues?.length !== dependentValuesOld?.length){
    // eslint-disable-next-line no-console
    console.error("POssible error");
    return false;
  }
  else{
    for(let i = 0;i < dependentValues?.length;i++){
      if(dependentValues[i] !== dependentValuesOld[i]){
        return true;
      }
    }
    return false;
  }
  
}
