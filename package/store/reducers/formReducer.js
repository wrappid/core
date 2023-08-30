/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
import { LOGOUT_SUCCESS } from "../types/authTypes";
import {
  ADD_FORM,
  CANCEL_CORE_FORM_EDIT_ADD,
  CREATE_FORM,
  EDIT_FORM,
  FORM_DATA_READ_LOADING,
  FORM_INIT_UPDATE,
  FORM_RESET,
  FORM_SUBMIT_ERROR,
  FORM_SUBMIT_LOADING,
  FORM_SUBMIT_SUCCESS,
  GET_FORM_ERROR,
  GET_FORM_LOADING,
  GET_FORM_SUCCESS,
  UPDATE_HELPER_FLAG,
  UPDATE_HELPER_TEXT_VIEW
} from "../types/formTypes";

const initState = {
  addForm            : {},
  editForm           : {},
  formDataReadLoading: {},
  formSubmitError    : {},
  formSubmitLoading  : {},
  formSubmitSuccess  : {},
  helperButtonFlag   : false,
  processedForms     : {},
  rawForm            : {},
  rawFormStatus      : {},
  showHelperText     : true,
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      let data = action.payload.formData;
      let id = action.payload.formId;

      return {
        ...state,
        helperButtonFlag: data.helperButtonFlag
          ? data.helperButtonFlag
          : state.helperButtonFlag,
        processedForms: {
          ...state.processedForms,
          [id]: {
            actionContainerStyle : data.actionContainerStyle,
            allowCancel          : data.allowCancel,
            allowSubmit          : data.allowSubmit,
            arrayDataNotDeletable: data.arrayDataNotDeletable,
            arrayDataNotEditable : data.arrayDataNotEditable,
            cancelButtonLabel    : data.cancelButtonLabel,
            formActions          : data.actionComps || [],
            formElements         : data.allComps || [],
            formValidationOb     : data.validationOb,
            inlineAction         : data.inlineAction,
            renderComp           : data.renderComp,
            skeletonComp         : data.skeletonComp,
            submitButtonLabel    : data.submitButtonLabel,
          },
        },
      };

    case EDIT_FORM:
      console.log("FORM EDIT_FORM REDUCER------", action);
      return {
        ...state,
        addForm: {
          ...state.addForm,
          [action.payload.formId]: { add: false },
        },
        editForm: {
          ...state.editForm,
          [action.payload.formId]: {
            editing    : true,
            formArrayId: action.payload.formArrayId,
          },
        },
      };

    case ADD_FORM:
      let finalData = state.processedForms[action.payload.formId];

      console.log("FORM ADD_FORM REDUCER------", action.payload.formId);
      let obj = {};

      for (let i = 0; i < finalData?.formElements?.length; i++) {
        obj[finalData.formElements[i].id] = "";
      }
      finalData["formInitialOb"] = obj;
      return {
        ...state,
        addForm: {
          ...state.addForm,
          [action.payload.formId]: {
            add: true,
            ...finalData,
          },
        },
        editForm: {
          ...state.editForm,
          [action.payload.formId]: {
            editing    : false,
            formArrayId: null,
          },
        },
      };

    case CANCEL_CORE_FORM_EDIT_ADD:
      console.log("FORM CANCEL_CORE_FORM_EDIT_ADD REDUCER------", action);
      return {
        ...state,
        addForm: {
          ...state.addForm,
          [action.payload.formId]: { add: false },
        },
        editForm: {
          ...state.editForm,
          [action.payload.formId]: {
            editing    : false,
            formArrayId: null,
          },
        },
      };

    case FORM_SUBMIT_SUCCESS:
      console.log("FORM FORM_SUBMIT_SUCCESS REDUCER------", action);
      return {
        ...state,
        formDataReadLoading: {
          ...state.formDataReadLoading,
          [action.payload.formId]: false,
        },
        formSubmitLoading: {
          ...state.formSubmitLoading,
          [action.payload.formId]: false,
        },
        formSubmitSuccess: {
          ...state.formSubmitSuccess,
          [action.payload.formId]: {
            data   : action.payload.data,
            success: true,
          },
        },
      };

    case FORM_SUBMIT_ERROR:
      console.log("FORM FORM_SUBMIT_ERROR REDUCER------", action);

      let errorMsg = "Something went wrong!";

      if (
        action?.payload?.data?.message &&
        typeof action?.payload?.data?.message === "string"
      ) {
        errorMsg = action?.payload?.data?.message;
      }

      return {
        ...state,
        formDataReadLoading: {
          ...state.formDataReadLoading,
          [action.payload.formId]: false,
        },
        formSubmitError: {
          ...state.formSubmitError,
          [action.payload.formId]: {
            data : action.payload.data,
            error: true,
            errorMsg,
          },
        },
        formSubmitLoading: {
          ...state.formSubmitLoading,
          [action.payload.formId]: false,
        },
      };

    case FORM_SUBMIT_LOADING:
      console.log("FORM FORM_SUBMIT_LOADING REDUCER------", action);
      return {
        ...state,
        formSubmitLoading: {
          ...state.formSubmitLoading,
          [action.payload.formId]: true,
        },
      };

    case FORM_DATA_READ_LOADING:
      console.log("FORM FORM_DATA_READ_LOADING REDUCER------", action);
      return {
        ...state,
        formDataReadLoading: {
          ...state.formDataReadLoading,
          [action.payload.formId]: true,
        },
      };

    case FORM_INIT_UPDATE:
      console.log("FORM FORM_INIT_UPDATE REDUCER------", action);
      //TODO: haveto put support for created forms like in datatable forms
      return {
        ...state,
        formDataReadLoading: {
          ...state.formDataReadLoading,
          [action.payload.formId]: false,
        },
      };

    case FORM_RESET:
      console.log("FORM FORM_RESET REDUCER------", action);
      return {
        ...state,
        ...action.payload,
      };

    case GET_FORM_LOADING:
      return {
        ...state,
        rawFormStatus: {
          ...state.rawFormStatus,
          [action.payload.formId]: {
            error  : false,
            loading: true,
            success: false,
          },
        },
      };

    case GET_FORM_SUCCESS:
      console.log("FORM GET_FORM_SUCCESS REDUCER------", action);
      return {
        ...state,
        localForm: action.payload.localForm || false,
        rawForm  : {
          ...state.rawForm,
          [action.payload.formId]: action.payload.data,
        },
        rawFormStatus: {
          ...state.rawFormStatus,
          [action.payload.formId]: {
            error  : false,
            loading: false,
            success: true,
          },
        },
      };

    case GET_FORM_ERROR:
      console.log("FORM GET_FORM_ERROR REDUCER------", action);
      return {
        ...state,
        rawFormStatus: {
          ...state.rawFormStatus,
          [action.payload.formId]: {
            error  : true,
            loading: false,
            success: false,
          },
        },
      };

    case UPDATE_HELPER_TEXT_VIEW:
      return { ...state, showHelperText: !state.showHelperText };

    case UPDATE_HELPER_FLAG:
      return { ...state, helperButtonFlag: action?.payload?.helperButtonFlag };

    case LOGOUT_SUCCESS:
      console.log("FORM LOGOUT_SUCCESS REDUCER------", action);
      return initState;

    default:
      return state;
  }
};

export default formReducer;
