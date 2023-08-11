/* eslint-disable import/order */
import * as yup from "yup";

import { ASYNC_SELECT_FUNCTION_MAP } from "./asyncSelectFunctionMap";
import { FORM_VALIDATION_MAP } from "./fromValidationMap";
import { queryBuilder } from "./helper";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SANITIZATOIN_FUNCTION_MAP,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE
} from "../components/forms/coreFormConstants";
import CoreInput from "../components/inputs/CoreInput";
import CoreBox from "../components/layouts/CoreBox";
import { GET_FORM_API, GET_FORM_API_AUTHENTICATED } from "../config/api";
import config from "../config/config";
import { ENV_DEV_MODE, HTTP } from "../config/constants";
import { mergedComponentRegistry } from "../layout/PageContainer";
import axiosInterceptor from "../middleware/axiosInterceptor";
import authHeader from "../service/DataService";
import {
  DELETE_DATA_ERROR,
  DELETE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_SUCCESS
} from "../store/types/dataManagementTypes";
// import { store } from "../store/CoreProvider";

import CoreClasses from "../styles/CoreClasses";

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

  console.log("FORM JSON", formJson?.fields);
  if (formJson?.fields) {
    let temp = formJson?.fields?.map((m) => {
      return {
        ...m,
        order: m.order ? m.order : 0,
      };
    });

    temp = temp?.sort((a, b) => a.order - b.order);
    formJson.fields = temp;
  }
  for (let i = 0; i < formJson?.fields?.length; i++) {
    var x = formJson.fields[i];

    allComps.push({
      ...x,
      box : { comp: CoreBox, gridSize: x.gridSize },
      comp: x.hidden
        ? null
        : mergedComponentRegistry[x.type]
          ? mergedComponentRegistry[x.type]?.comp
          : CoreInput,
      dependencies: x.dependencies,
      onlyView:
        mergedComponentRegistry[x.type]?.onlyView === true ? true : false,
      tabIndex: x.tabIndex ? x.tabIndex : i + 1,
      viewComp: mergedComponentRegistry[x.viewComp]
        ? mergedComponentRegistry[x.viewComp].comp
        : CoreTypographyBody1,
    });
    allValidations[x.id] = x.required
      ? mergedComponentRegistry[x.type]?.defaultValidation?.required
      : mergedComponentRegistry[x.type]?.defaultValidation?.notRequired;

    if (x.helperText && x.helperText !== "") {
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
      comp: mergedComponentRegistry[x.type]?.comp,
      ...action,
    });
  }

  console.log("allValidations", allValidations);
  console.log("helperButtonFlag", helperButtonFlag);

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
    var x = fields[i];

    if (x.onlyView) continue;
    if (initData) {
      if (Array.isArray(initData)) {
        for (var j = 0; j < initData.length; j++) {
          if (initialDataOb[j]) {
            initialDataOb[j][x.id] = initData[j][x.id];
          } else {
            initialDataOb[j] = {
              id    : initData[j].id,
              [x.id]: initData[j][x.id],
            };
          }
        }
      } else if (initData[x.id]) {
        initialDataOb[x.id] = initData[x.id];
      } else {
        console.log("inititla ob A", x.id);
        initialDataOb[x.id] = "";
      }
    } else {
      console.log("inititla ob A", x.id);
      initialDataOb[x.id] = "";
    }
  }

  if (formJson?.keepAllData) {
    if (initData) {
      if (Array.isArray(initData)) {
        for (var j = 0; j < initData.length; j++) {
          initialDataOb[j] = { ...initialDataOb[j], ...initData[j] };
        }
      } else {
        console.log("inititla ob A", x.id);
        initialDataOb = { ...initialDataOb, ...initData };
      }
    } else {
      console.log("inititla ob A", x.id);
      initialDataOb[x.id] = "";
    }
  }
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
    let x = formJson.fields[i];

    if (formJson.validation) {
      let formValidation = FORM_VALIDATION_MAP[formJson.validation];

      validationOb[x.id] = formValidation[x.id];
    } else {
      validationOb[x.id] = defValidations[x.id]
        ? defValidations[x.id]
        : yup.string();
    }
  }
  console.log("Validations", validationOb);

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

export function createFormFieldProps(element, formikprops, type, allElements, initProps) {
  // console.log("FORMIK props", formikprops);
  if (type === "edit") {
    if (element?.onlyView) {
      return {
        id          : String(element.id),
        label       : element.label,
        styleClasses: element.styleClasses,
        ...(initProps[element.id] || {})
      };
    } else
      return {
        asyncLoading  : element?.asyncLoading,
        creatable     : element?.creatable,
        endpoint      : element?.endpoint,
        error         : formikprops?.errors ? formikprops?.errors[element.id] : "",
        formik        : formikprops,
        freeSolo      : element?.freeSolo,
        getOptionLabel: element?.getOptionLabel
          ? ASYNC_SELECT_FUNCTION_MAP[element.getOptionLabel]
          : null,
        getOptionValue: element?.getOptionValue
          ? ASYNC_SELECT_FUNCTION_MAP[element.getOptionValue]
          : null,
        helperText          : element?.helperText,
        id                  : String(element?.id),
        inputProps          : { tabIndex: element?.tabIndex },
        isOptionEqualToValue: element?.isOptionEqualToValue
          ? ASYNC_SELECT_FUNCTION_MAP[element.isOptionEqualToValue]
          : null,
        itemKey    : element?.itemKey,
        label      : element?.label,
        multiple   : element?.multiple,
        navigateUrl: element?.navigateUrl,
        onChange   : (e)=>{
          let dependentElement = allElements?.find(el => el?.dependencies?.getValue);

          if(dependentElement){
            let val = checkDependencies(dependentElement, formikprops, allElements)?.derivedValue;

            formikprops?.setFieldValue(dependentElement?.id, val);
          }
          formikprops?.handleChange(e);
        },
        onChangeDispatch: element?.onChangeDispatch
          ? ASYNC_SELECT_FUNCTION_MAP[element.onChangeDispatch]
          : null,
        optionComp     : element?.optionComp,
        optionCompProps: element?.optionCompProps,
        //this will be arrow function like (d) => { return d.value }to show the label
        optionDisplay  : element?.optionDisplay,
        
        //this will be arrow function like (d) => { return d.value } to show the value
        optionValue: element?.optionValue,
        
        options: element?.options,
        
        optionsData: element?.optionsData,
        
        query: element?.query,
        
        skeletonProps: element?.skeletonProps,
        
        src:
          element.type === "avatar" || element.type === "imagePicker"
            ? formikprops?.values
              ? formikprops?.values[element.id]
              : ""
            : "",
        
        styleClasses: element?.styleClasses
          ? Array.isArray(element.styleClasses)
            ? element.styleClasses
            : [element.styleClasses]
          : [],
        
        touched: formikprops?.touched ? formikprops?.touched[element.id] : "",
        type   : element?.type,
        value  : formikprops?.values ? formikprops?.values[element.id] : "",
        ...(initProps[element.id] || {})
      };
  } else {
    return {
      id   : element?.id ? String(element.id) : "",
      label: element?.label,
      ...(initProps[element.id] || {})
    };
  }
}

export function createFormActionProps(element) {
  let ob = {};

  if (
    element.actionContainerStyle &&
    typeof element.actionContainerStyle === "string"
  ) {
    ob["styleClasses"] = [element.actionContainerStyle];
  } else if (
    element.actionContainerStyle &&
    Array.isArray(element.actionContainerStyle)
  ) {
    ob["styleClasses"] = element.actionContainerStyle;
  } else {
    ob["styleClasses"] = [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.FLEX.DIRECTION_ROW];
  }

  // console.log("FORM ACTION PROPS BUILDRE", ob, element);
  return ob;
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

  console.log("API METa REATE", values, addForm, editForm, apiMode);
  let ob = formJson?.create || {};
  let mode = "create";

  if (apiMode && formJson && formJson[apiMode]) {
    ob = formJson[apiMode];
    mode = apiMode;
  } else if (addForm) {
    ob = formJson?.create;
    mode = "create";
  } else if (editForm) {
    ob = formJson?.edit;
    mode = "edit";
  }

  return {
    authRequired: ob.authRequired,
    endpoint:
      ob.method === HTTP.GET && state.query
        ? queryBuilder(ob.endpoint, state.query)
        : ob.endpoint,
    errorType  : ob.errorType,
    files      : [],
    includeFile: ob.includeFile,
    localAction: ob.localAction,
    method     : ob.method,
    mode       : mode,
    reduxData  : { reduxData: { query: props._query } },
    reload     : ob.reload,
    successType: ob.successType,
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
  let ob = {};

  for (let i = 0; i < dataJson.filter((d) => d.input).length; i++) {
    ob[dataJson[i].id] = dataJson[i].value;
  }
  console.log("---------------DATAJSON", dataJson);
  console.log("---------------INIT", ob);

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
        endpoint    : apiRoute + "/" + ob.id,
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
        endpoint    : apiRoute + "/" + ob.id,
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
  dataJson = dataJson.filter((d) => d.input);

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
      fields: dataJson.map((d) => {
        return {
          id      : d.id,
          label   : d.label,
          name    : d.id,
          required: true,
          type    : "text",
          // gridSize: 2,
        };
      }),

      validation: null,
    },
    initData: ob,
  };
}

export function viewString(text, type) {
  if (text) {
    return text;
  } else if (process.env.REACT_APP_ENV === ENV_DEV_MODE) {
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
      let backendUrl =
        process.env.REACT_APP_WRAPPID_backendUrl || config.wrappid.backendUrl;
      let url = auth ? GET_FORM_API_AUTHENTICATED : GET_FORM_API;
      var formRes = await axiosInterceptor({
        headers: await authHeader(auth, false),
        method : HTTP.GET,
        url    : backendUrl + url + formId,
      });

      if (formRes.status === 200) {
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
      console.error("Error in form fetch");
      return {
        formId,
        formJson: formRes?.data?.data?.schema,
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
      console.log("EVALUATEING,", dependency.id, formik.values);
      let dependentValue = formik.values ? formik.values[dependency.id] : {};

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
        console.warn("Not correct checking", err);
        finalStr += "false";
      }
    } else if (dependency?.type === "operator") {
      finalStr += dependency.operator;
    }

    console.log("FINAL STR,", finalStr);
  }

  return eval(finalStr);
}

function getDependentValue(getValueFunction, formik, elem, allElements){
  if(getValueFunction && FORM_SANITIZATOIN_FUNCTION_MAP[getValueFunction]){
    return FORM_SANITIZATOIN_FUNCTION_MAP[getValueFunction](formik, elem, allElements);
  }
  else{
    return "";
  }
}

export function checkDependencies(element, formik, allElements) {
  let finalStr = "";
  let finalVal = "";

  // console.log("CHEKING DEPENDENCIES");

  if (element.dependencies) {
    if(element?.dependencies?.hide)
      finalStr += String(checkConditions(element?.dependencies?.hide, formik));
    if(element?.dependencies?.getValue){
      finalVal = String(getDependentValue(element?.dependencies?.getValue, formik, element, allElements));
    }

    return {
      derivedValue: finalVal,
      hide        : eval(finalStr)
    };
  } else {
    return {
      derivedValue: null,
      hide        : false
    };
  }
}
