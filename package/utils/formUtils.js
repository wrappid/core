import { componentMap } from "./componentMap";
import * as yup from "yup";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreInput from "../components/inputs/CoreInput";
import CoreBox from "../components/layouts/CoreBox";
import {
  ENV_DEV_MODE,
  HTTP_GET,
  HTTP_PATCH,
  HTTP_POST,
  HTTP_PUT,
} from "../config/constants";
import {
  DELETE_DATA_ERROR,
  DELETE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_SUCCESS,
} from "../store/types/dataManagementTypes";
import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE,
} from "../components/forms/coreFormConstants";
import config from "../config/config";
import { CoreClasses } from "@wrappid/styles";
import { FORM_VALIDATION_MAP } from "./fromValidationMap";
import { ASYNC_SELECT_FUNCTION_MAP } from "./asyncSelectFunctionMap";
// import { store } from "../store/CoreProvider";
import {
  GET_FORM_ERROR,
  GET_FORM_LOADING,
  GET_FORM_SUCCESS,
} from "../store/types/formTypes";
import { GET_FORM_API, GET_FORM_API_AUTHENTICATED } from "../config/api";
import axiosInterceptor from "../middleware/axiosInterceptor";
import authHeader from "../service/DataService";
import { queryBuilder } from "./helper";

export function getFormikRequiredMessage(name = "", isShort = false) {
  var message = "";
  if (isShort) {
    message = name.toUpperCase() + " is required";
  } else {
    message = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2") + " is required";
  }
  return message;
}

function getComponentArray(formJson) {
  var allComps = [];
  var actionComps = [];
  var allValidations = {};
  var helperButtonFlag = false;
  var renderComp = componentMap[formJson?.render]?.comp || null;
  var skeletonComp = componentMap[formJson?.skeletonRender]?.comp || null;

  console.log("FORM JSON", formJson?.fields);
  if (formJson?.fields) {
    var temp = formJson?.fields?.map((m) => {
      return {
        ...m,
        order: m.order ? m.order : 0,
      };
    });
    temp = temp?.sort((a, b) => a.order - b.order);
    formJson.fields = temp;
  }
  for (var i = 0; i < formJson?.fields?.length; i++) {
    var x = formJson.fields[i];
    allComps.push({
      ...x,
      box: { comp: CoreBox, gridSize: x.gridSize },
      comp: x.hidden
        ? null
        : componentMap[x.type]
        ? componentMap[x.type]?.comp
        : CoreInput,
      viewComp: componentMap[x.viewComp]
        ? componentMap[x.viewComp].comp
        : CoreTypographyBody1,
      onlyView: componentMap[x.type]?.onlyView === true ? true : false,
      tabIndex: x.tabIndex ? x.tabIndex : i + 1,
      dependencies: x.dependencies,
    });
    allValidations[x.id] = x.required
      ? componentMap[x.type]?.defaultValidation?.required
      : componentMap[x.type]?.defaultValidation?.notRequired;

    if (x.helperText && x.helperText !== "") {
      helperButtonFlag = true;
    }
  }

  for (
    var actionIndex = 0;
    actionIndex < formJson?.actions?.length;
    actionIndex++
  ) {
    var action = formJson.actions[actionIndex];
    actionComps.push({
      box: { comp: CoreBox },
      comp: componentMap[x.type]?.comp,
      ...action,
    });
  }

  console.log("allValidations", allValidations);
  console.log("helperButtonFlag", helperButtonFlag);

  return {
    allComps,
    allValidations,
    actionComps,
    renderComp,
    skeletonComp,
    helperButtonFlag,
  };
}

export function createInitialData(formJson, initData) {
  var initialDataOb = Array.isArray(initData) ? [] : {};

  for (var i = 0; i < formJson?.fields?.length; i++) {
    var x = formJson.fields[i];
    if (x.onlyView) continue;
    if (initData) {
      if (Array.isArray(initData)) {
        for (var j = 0; j < initData.length; j++) {
          if (initialDataOb[j]) {
            initialDataOb[j][x.id] = initData[j][x.id];
          } else {
            initialDataOb[j] = {
              id: initData[j].id,
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
  var validationOb = {};
  for (var i = 0; i < formJson?.fields?.length; i++) {
    var x = formJson.fields[i];
    if (formJson.validation) {
      var formValidation = FORM_VALIDATION_MAP[formJson.validation];
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
  var formJson =
    rawFormJson && rawFormJson[formId] ? rawFormJson[formId] : formSchema;
  console.log("form", formJson);
  var {
    allComps,
    allValidations,
    actionComps,
    renderComp,
    skeletonComp,
    helperButtonFlag,
  } = getComponentArray(formJson);
  var validationOb = concateValidations(formJson, allValidations);
  var initialDataOb = createInitialData(formJson, initialData);

  var allowSubmit = formJson?.allowSubmit === false ? false : true;
  var submitButtonLabel = formJson?.submitButtonLabel || "Save";
  var allowCancel = formJson?.allowCancel === false ? false : true;
  var cancelButtonLabel = formJson?.cancelButtonLabel || "Cancel";
  var arrayDataNotDeletable = formJson?.arrayDataNotDeletable;
  var arrayDataNotEditable = formJson?.arrayDataNotEditable;

  return {
    allComps,
    validationOb,
    initialDataOb,
    actionComps,
    actionContainerStyle: formJson?.actionContainerStyle,
    inlineAction: formJson?.inlineAction,
    renderComp,
    skeletonComp,
    helperButtonFlag,
    allowSubmit,
    submitButtonLabel,
    allowCancel,
    cancelButtonLabel,
    apiDetails: formJson?.read,
    arrayDataNotDeletable,
    arrayDataNotEditable,
  };
}

export function createFormGridProps(element) {
  var finalProps = { item: true };
  if (element?.gridSize && !isNaN(element?.gridSize)) {
    finalProps = {
      ...finalProps,
      xs: element?.gridSize ? element?.gridSize : FORM_XS_DEFAULT_GRID_SIZE,
      sm: element?.gridSize ? element?.gridSize : FORM_SM_DEFAULT_GRID_SIZE,
      md: element?.gridSize ? element?.gridSize : FORM_MD_DEFAULT_GRID_SIZE,
      lg: element?.gridSize ? element?.gridSize : FORM_LG_DEFAULT_GRID_SIZE,
      xl: element?.gridSize ? element?.gridSize : FORM_XL_DEFAULT_GRID_SIZE,
    };
  } else {
    finalProps = {
      ...finalProps,
      xs: element?.gridSize?.xs
        ? element?.gridSize?.xs
        : FORM_XS_DEFAULT_GRID_SIZE,
      sm: element?.gridSize?.sm
        ? element?.gridSize?.sm
        : FORM_SM_DEFAULT_GRID_SIZE,
      md: element?.gridSize?.md
        ? element?.gridSize?.md
        : FORM_MD_DEFAULT_GRID_SIZE,
      lg: element?.gridSize?.lg
        ? element?.gridSize?.lg
        : FORM_LG_DEFAULT_GRID_SIZE,
      xl: element?.gridSize?.xl
        ? element?.gridSize?.xl
        : FORM_XL_DEFAULT_GRID_SIZE,
    };
  }

  return finalProps;
}

export function createFormFieldProps(element, formikprops, type) {
  // console.log("FORMIK props", formikprops);
  if (type === "edit") {
    if (element.onlyView) {
      return {
        id: element.id,
        label: element.label,
        styleClasses: element.styleClasses,
      };
    } else
      return {
        type: element?.type,
        id: element?.id,
        onChange: formikprops?.handleChange,
        label: element?.label,
        value: formikprops?.values ? formikprops?.values[element.id] : "",
        src:
          element.type === "avatar" || element.type === "imagePicker"
            ? formikprops?.values
              ? formikprops?.values[element.id]
              : ""
            : "",
        error: formikprops?.errors ? formikprops?.errors[element.id] : "",
        touched: formikprops?.touched ? formikprops?.touched[element.id] : "",
        formik: formikprops,
        helperText: element?.helperText,
        options: element.options,
        optionComp: element.optionComp,
        itemKey: element.itemKey,
        endpoint: element.endpoint,
        query: element.query,
        optionsData: element.optionsData,
        asyncLoading: element.asyncLoading,
        multiple: element.multiple,
        freeSolo: element.freeSolo,
        getOptionValue: element.getOptionValue
          ? ASYNC_SELECT_FUNCTION_MAP[element.getOptionValue]
          : null,
        getOptionLabel: element.getOptionLabel
          ? ASYNC_SELECT_FUNCTION_MAP[element.getOptionLabel]
          : null,
        isOptionEqualToValue: element.isOptionEqualToValue
          ? ASYNC_SELECT_FUNCTION_MAP[element.isOptionEqualToValue]
          : null,
        onChangeDispatch: element.onChangeDispatch
          ? ASYNC_SELECT_FUNCTION_MAP[element.onChangeDispatch]
          : null,
        //this will be arrow function like (d) => { return d.value } to show the value
        optionValue: element.optionValue,
        //this will be arrow function like (d) => { return d.value }to show the label
        optionDisplay: element.optionDisplay,
        inputProps: { tabIndex: element.tabIndex },
        styleClasses: element.styleClasses
          ? Array.isArray(element.styleClasses)
            ? element.styleClasses
            : [element.styleClasses]
          : [],

        skeletonProps: element.skeletonProps,
        navigateUrl: element.navigateUrl,
        creatable: element.creatable,
        optionCompProps: element.optionCompProps,
      };
  } else {
    return {
      id: element.id,
      label: element.label,
    };
  }
}

export function createFormActionProps(element) {
  var ob = {};
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
    ob["styleClasses"] = [CoreClasses.LAYOUT.RIGHT_ALIGN];
  }

  // console.log("FORM ACTION PROPS BUILDRE", ob, element);
  return ob;
}

export function createFormButtonProps(element, formikprops, handleButtonCLick) {
  return {
    label: element.label,
    OnClick: element.onClick
      ? typeof element.onClick === "object"
        ? () => {
            handleButtonCLick(element.onClick);
          }
        : element.onClick
      : () => {
          alert("error in button action");
        },
    type: element.actionType === "submit" ? "submit" : "button",
    alignment: element.actionContainerStyle ? null : "end",
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
  const apiMode = props.apiMode;
  const editForm = props?.editForm?.editing;
  const addForm = props?.addForm?.add;

  console.log("API METa REATE", values, addForm, editForm, apiMode);
  var ob = formJson.create;
  var mode = "create";
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
    method: ob.method,
    endpoint:
      ob.method === HTTP_GET && state.query
        ? queryBuilder(ob.endpoint, state.query)
        : ob.endpoint,
    authRequired: ob.authRequired,
    values,
    successType: ob.successType,
    errorType: ob.errorType,
    localAction: ob.localAction,
    includeFile: ob.includeFile,
    files: [],
    reload: ob.reload,
    mode: mode,
    reduxData: { reduxData: { query: props._query } },
  };
}

export function createTableFormJson(
  dataJson,
  apiRoute,
  mode,
  successType,
  errorType
) {
  var ob = {};
  for (var i = 0; i < dataJson.filter((d) => d.input).length; i++) {
    ob[dataJson[i].id] = dataJson[i].value;
  }
  console.log("---------------DATAJSON", dataJson);
  console.log("---------------INIT", ob);

  var apiObject = {};
  if (apiRoute) {
    if (mode === "create") {
      apiObject["create"] = {
        method: HTTP_POST,
        endpoint: apiRoute,
        authRequired: true,
        successType: successType
          ? successType.create
            ? successType.create
            : successType
          : UPDATE_DATA_SUCCESS,
        errorType: errorType
          ? errorType.create
            ? errorType.create
            : errorType
          : UPDATE_DATA_ERROR,
        onSubmitRefine: null,
        includeFile: false,
      };
    } else if (mode === "read") {
      apiObject["read"] = {
        method: HTTP_GET,
        endpoint: apiRoute,
        authRequired: true,
        successType: successType
          ? successType.read
            ? successType.read
            : successType
          : UPDATE_DATA_SUCCESS,
        errorType: errorType
          ? errorType.read
            ? errorType.read
            : errorType
          : UPDATE_DATA_ERROR,
        onSubmitRefine: null,
        includeFile: false,
      };
    } else if (mode === "edit") {
      apiObject["edit"] = {
        method: HTTP_PUT,
        endpoint: apiRoute + "/" + ob.id,
        authRequired: true,
        successType: successType
          ? successType.edit
            ? successType.edit
            : successType
          : UPDATE_DATA_SUCCESS,
        errorType: errorType
          ? errorType.edit
            ? errorType.edit
            : errorType
          : UPDATE_DATA_ERROR,
        onSubmitRefine: null,
        includeFile: false,
      };
    } else if (mode === "delete") {
      apiObject["edit"] = {
        method: HTTP_PATCH,
        endpoint: apiRoute + "/" + ob.id,
        authRequired: true,
        successType: successType
          ? successType.edit
            ? successType.edit
            : successType
          : DELETE_DATA_SUCCESS,
        errorType: errorType
          ? errorType.edit
            ? errorType.edit
            : errorType
          : DELETE_DATA_ERROR,
        onSubmitRefine: null,
        includeFile: false,
      };
    }
  }

  // remove common fields
  dataJson = dataJson.filter((d) => d.input);

  return {
    initData: ob,
    form: {
      ...apiObject,
      validation: null,
      fields: dataJson.map((d) => {
        return {
          id: d.id,
          name: d.id,
          label: d.label,
          type: "text",
          required: true,
          // gridSize: 2,
        };
      }),

      actions: [
        {
          id: "button1",
          name: "coreContainedButton",
          label: "Save",
          type: "coreContainedButton",
          required: true,
          gridSize: 12,
          actionType: "submit",
        },
      ],
    },
  };
}

export function viewString(text, type) {
  if (text) {
    return text;
  } else if (config.environment === ENV_DEV_MODE) {
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
    return formReducer?.rawForm[formId];
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
      var url = auth ? GET_FORM_API_AUTHENTICATED : GET_FORM_API;
      var formRes = await axiosInterceptor({
        method: HTTP_GET,
        url: config.backendUrl + url + formId,
        headers: await authHeader(auth, false),
      });
      if (formRes.status === 200) {
        console.log("IN GET FORM SUCCESS:", formRes);
        return {
          formJson: formRes?.data?.data?.schema,
          success: true,
          message: formRes?.data?.message,
          formId,
        };
      } else {
        return {
          formJson: null,
          success: false,
          message: formRes?.data?.message,
          formId,
        };
      }
    } catch (err) {
      console.error("Error in form fetch");
      return {
        formJson: formRes?.data?.data?.schema,
        success: false,
        message: "Form fetch error",
        formId,
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
      let dependentValue = formik.values[dependency.id];
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

export function checkDependencies(element, formik) {
  let finalStr = "";
  // console.log("CHEKING DEPENDENCIES");
  if (element.dependencies) {
    finalStr += String(checkConditions(element?.dependencies?.hide, formik));

    return {
      hide: eval(finalStr),
    };
  } else {
    return {
      hide: false,
    };
  }
}
