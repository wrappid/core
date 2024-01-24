/* eslint-disable no-console */
import { createForm } from "../../utils/formUtils";
import {
  ADD_FORM,
  CANCEL_CORE_FORM_EDIT_ADD,
  CREATE_FORM,
  EDIT_FORM,
  FORM_DATA_SAVE,
  FORM_RESET,
  UPDATE_API_META
} from "../types/formTypes";

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
    let formData = await createForm(
      formId,
      initData,
      rawFormJson,
      authenticated,
      formSchema
    );

    dispatch({ payload: { formData, formId }, type: CREATE_FORM });
    dispatch({
      payload: {
        apiDetails: formData.apiDetails,
        data      : formData.initialDataOb,
        id        : formId,
      },
      type: FORM_DATA_SAVE,
    });
  };
};

export const onEditForm = (formId, formArrayId) => {
  return (dispatch) => {
    dispatch({ payload: { formArrayId, formId }, type: EDIT_FORM });
  };
};

export const onAddForm = (formId, data) => {
  return (dispatch) => {
    dispatch({ payload: { data, formId }, type: ADD_FORM });
  };
};

export const handleFormLocalAction = (data, localAction) => {
  return (dispatch) => {
    console.log("---------------------action", data, localAction);
    dispatch({ payload: data, type: localAction });
  };
};

export const cancelFormEdit = (formId) => {
  return (dispatch) => {
    dispatch({ payload: { formId }, type: CANCEL_CORE_FORM_EDIT_ADD });
  };
};

export const resetFormReducer = (data) => {
  return (dispatch) => {
    console.log("---------------------action", data);
    dispatch({ payload: data, type: FORM_RESET });
  };
};

export const storeForm = (type, payload) => {
  return (dispatch) => {
    dispatch({ payload, type });
  };
};

export const updateApiMeta = (formId, apiMeta) => {
  return (dispatch) => {
    dispatch({ payload: { apiMeta, formId }, type: UPDATE_API_META });
  };
};
