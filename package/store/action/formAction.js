import config from "../../config/config";
import { createForm } from "../../utils/formUtils";
import { queryBuilder } from "../../utils/helper";
import {
  ADD_FORM,
  CANCEL_CORE_FORM_EDIT_ADD,
  CREATE_FORM,
  EDIT_FORM,
  FORM_DATA_SAVE,
  FORM_RESET,
} from "../types/formTypes";

var scraperDBUrl = config.scraperDBUrl;
var adminUrl = config.adminUrl;
var backendUrl = config.backendUrl;

export const createAllForms = (
  formId,
  initData,
  mode,
  rawFormJson,
  authenticated,
  formSchema
) => {
  //formId: form ids , initData: object of init data
  return async (dispatch) => {
    console.log("FORM CREATE_FORM ACTION------");
    var formData = await createForm(
      formId,
      initData,
      rawFormJson,
      authenticated,
      formSchema
    );
    dispatch({ type: CREATE_FORM, payload: { formData, formId } });
    dispatch({
      type: FORM_DATA_SAVE,
      payload: {
        data: formData.initialDataOb,
        id: formId,
        apiDetails: formData.apiDetails,
      },
    });
  };
};

export const onEditForm = (formId, formArrayId) => {
  return (dispatch) => {
    dispatch({ type: EDIT_FORM, payload: { formId, formArrayId } });
  };
};

export const onAddForm = (formId, data) => {
  return (dispatch) => {
    dispatch({ type: ADD_FORM, payload: { formId, data } });
  };
};

export const handleFormLocalAction = (data, localAction) => {
  return (dispatch) => {
    console.log("---------------------action", data, localAction);
    dispatch({ type: localAction, payload: data });
  };
};

export const cancelFormEdit = (formId) => {
  return (dispatch) => {
    dispatch({ type: CANCEL_CORE_FORM_EDIT_ADD, payload: { formId } });
  };
};

export const resetFormReducer = (data) => {
  return (dispatch) => {
    console.log("---------------------action", data);
    dispatch({ type: FORM_RESET, payload: data });
  };
};

export const storeForm = (type, payload) => {
  return (dispatch) => {
    dispatch({ type, payload });
  };
};
