// import swal from "sweetalert";
import { LOGOUT_SUCCESS } from "../../modules/auth/types/authTypes";
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
  UPDATE_HELPER_TEXT_VIEW,
} from "../types/formTypes";

const initState = {
  helperButtonFlag: false,
  showHelperText: true,
  editForm: {},
  addForm: {},
  processedForms: {},
  formSubmitSuccess: {},
  formSubmitError: {},
  formSubmitLoading: {},
  formDataReadLoading: {},
  rawForm: {},
  rawFormStatus: {},
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      var data = action.payload.formData;
      var id = action.payload.formId;
      return {
        ...state,
        processedForms: {
          ...state.processedForms,
          [id]: {
            formElements: data.allComps || [],
            formActions: data.actionComps || [],
            formValidationOb: data.validationOb,
            actionContainerStyle: data.actionContainerStyle,
            renderComp: data.renderComp,
            skeletonComp: data.skeletonComp,
            inlineAction: data.inlineAction,
            allowSubmit: data.allowSubmit,
            submitButtonLabel: data.submitButtonLabel,
            allowCancel: data.allowCancel,
            cancelButtonLabel: data.cancelButtonLabel,
            arrayDataNotDeletable: data.arrayDataNotDeletable,
            arrayDataNotEditable: data.arrayDataNotEditable,
          },
        },
        helperButtonFlag: data.helperButtonFlag
          ? data.helperButtonFlag
          : state.helperButtonFlag,
      };

    case EDIT_FORM:
      console.log("FORM EDIT_FORM REDUCER------", action);
      return {
        ...state,
        editForm: {
          ...state.editForm,
          [action.payload.formId]: {
            editing: true,
            formArrayId: action.payload.formArrayId,
          },
        },
        addForm: {
          ...state.addForm,
          [action.payload.formId]: {
            add: false,
          },
        },
      };
    case ADD_FORM:
      var finalData = state.processedForms[action.payload.formId];
      console.log("FORM ADD_FORM REDUCER------", action.payload.formId);
      var ob = {};
      for (var i = 0; i < finalData?.formElements?.length; i++) {
        ob[finalData.formElements[i].id] = "";
      }
      finalData["formInitialOb"] = ob;
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
            editing: false,
            formArrayId: null,
          },
        },
      };
    case CANCEL_CORE_FORM_EDIT_ADD:
      console.log("FORM CANCEL_CORE_FORM_EDIT_ADD REDUCER------", action);
      return {
        ...state,
        editForm: {
          ...state.editForm,
          [action.payload.formId]: {
            editing: false,
            formArrayId: null,
          },
        },
        addForm: {
          ...state.addForm,
          [action.payload.formId]: {
            add: false,
          },
        },
      };

    case FORM_SUBMIT_SUCCESS:
      console.log("FORM FORM_SUBMIT_SUCCESS REDUCER------", action);
      return {
        ...state,
        formSubmitSuccess: {
          ...state.formSubmitSuccess,
          [action.payload.formId]: {
            success: true,
            data: action.payload.data,
          },
        },
        formSubmitLoading: {
          ...state.formSubmitLoading,
          [action.payload.formId]: false,
        },
        formDataReadLoading: {
          ...state.formDataReadLoading,
          [action.payload.formId]: false,
        },
      };
    case FORM_SUBMIT_ERROR:
      console.log("FORM FORM_SUBMIT_ERROR REDUCER------", action);
      
      var errorMsg = "Something went wrong!";
    
      if (action?.payload?.data?.message &&
        typeof action?.payload?.data?.message === "string") {
        errorMsg = action?.payload?.data?.message;
      }
      
      alert(errorMsg);
      
      return {
        ...state,
        formSubmitError: {
          ...state.formSubmitError,
          [action.payload.formId]: {
            error: true,
            data: action.payload.data,
          },
        },
        formSubmitLoading: {
          ...state.formSubmitLoading,
          [action.payload.formId]: false,
        },
        formDataReadLoading: {
          ...state.formDataReadLoading,
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
            loading: true,
            success: false,
            error: false,
          },
        },
      };
    case GET_FORM_SUCCESS:
      console.log("FORM GET_FORM_SUCCESS REDUCER------", action);
      return {
        ...state,
        rawFormStatus: {
          ...state.rawFormStatus,
          [action.payload.formId]: {
            loading: false,
            success: true,
            error: false,
          },
        },
        rawForm: {
          ...state.rawForm,
          [action.payload.formId]: action.payload.data,
        },
      };
    case GET_FORM_ERROR:
      console.log("FORM GET_FORM_ERROR REDUCER------", action);
      return {
        ...state,
        rawFormStatus: {
          ...state.rawFormStatus,
          [action.payload.formId]: {
            loading: false,
            success: false,
            error: true,
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
