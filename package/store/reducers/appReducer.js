import {
  API_VERSION_ERROR,
  API_VERSION_LOADING,
  API_VERSION_SUCCESS,
  CLEAR_SNACK_MESSAGE,
  GET_ROUTE_FAILURE,
  GET_ROUTE_SUCCESS,
  MESSAGE_SHOWED,
  PUSH_SNACK_MESSAGE,
  RESET_LOADING,
  RESET_PROGRESS_BAR,
  SEND_OTP_ERROR,
  SEND_OTP_LOADING,
  SEND_OTP_SUCCESS,
  SET_LOADING,
  SET_PROGRESS_BAR,
  SET_USER_THEME
} from "./../types/appTypes";

const DEFAULT_ERROR_MSG = "Something went wrong!";
const initState = {
  apiVersion: {
    error  : false,
    loading: false,
    success: false,
    version: "N/A",
  },
  errorMsg             : false,
  loading              : false,
  requestProgress      : { visible: false },
  routes               : [],
  sendOtpError         : false,
  sendOtpLoading       : false,
  sendOtpSuccess       : false,
  snackMessages        : [],
  snackMessagesMaxCount: 5,
  userThemeID          : null,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case API_VERSION_LOADING:
      // eslint-disable-next-line no-console
      console.log("------API_VERSION_LOADING REDUCER TYPE CALLED------");
      return {
        ...state,
        apiVersion: { ...state.apiVersion, error: false, loading: true, success: false },
      };

    case API_VERSION_SUCCESS:
      // eslint-disable-next-line no-console
      console.log("------API_VERSION_SUCCESS REDUCER TYPE CALLED------");
      return {
        ...state,
        apiVersion: { error: false, loading: false, success: true, version: action?.payload?.data },
      };

    case API_VERSION_ERROR:
      // eslint-disable-next-line no-console
      console.log("------API_VERSION_ERROR REDUCER TYPE CALLED------");
      return {
        ...state,
        apiVersion: { ...state.apiVersion, error: true, loading: false, success: false },
      };

    case SET_LOADING:
      // eslint-disable-next-line no-console
      console.log("------SET_LOADING REDUCER TYPE CALLED------");
      return {
        ...state,
        loading: true,
      };

    case RESET_LOADING:
      // eslint-disable-next-line no-console
      console.log("------RESET_LOADING REDUCER TYPE CALLED------");
      return {
        ...state,
        loading: false,
      };

    case PUSH_SNACK_MESSAGE:
      // eslint-disable-next-line no-console
      console.log("------PUSH_MESSAGE REDUCER TYPE CALLED------");
      // eslint-disable-next-line no-console
      console.log("WITH PAYLOAD = ", action?.payload);
      return {
        ...state,
        snackMessages: [...(state?.snackMessages || []), { ...action?.payload, shown: false }],
      };

    case MESSAGE_SHOWED:
      // eslint-disable-next-line no-console
      console.log("------MESSAGE_SHOWED REDUCER TYPE CALLED------");
      // eslint-disable-next-line no-console
      console.log("WITH PAYLOAD = ", action?.payload);
      // eslint-disable-next-line no-case-declarations
      let updatedSnackMessage = state.snackMessages.map((_snackMsg) => {
        if (_snackMsg._timestamp === action?.payload?._timestamp) {
          return { ..._snackMsg, shown: true };
        }
        return _snackMsg;
      });

      return {
        ...state,
        snackMessages: updatedSnackMessage,
      };

    case CLEAR_SNACK_MESSAGE:
      // eslint-disable-next-line no-console
      console.log("------CLEAR_SNACK_MESSAGE REDUCER TYPE CALLED------");
      return {
        ...state,
        snackMessages: [],
      };

    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        routes: action?.payload?.data?.rows || [],
      };

    case GET_ROUTE_FAILURE:
      return {
        ...state,
        routes: [],
      };

    case SET_PROGRESS_BAR: 
      return {
        ...state,
        requestProgress: { visible: true },
      };

    case RESET_PROGRESS_BAR: 
      return {
        ...state,
        requestProgress: { visible: false },
      };
        
    case SEND_OTP_LOADING:
      return {
        ...state,
        sendOtpError  : false,
        sendOtpLoading: true,
        sendOtpSuccess: false,
      };

    case SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOtpError  : false,
        sendOtpLoading: false,
        sendOtpSuccess: true,
      };

    case SEND_OTP_ERROR:
      return {
        ...state,
        errorMsg      : action?.payload?.data?.message && typeof action?.payload?.data?.message === "string" ? action?.payload?.data?.message : DEFAULT_ERROR_MSG,
        sendOtpError  : false,
        sendOtpLoading: false,
        sendOtpSuccess: false
      };

    case SET_USER_THEME:
      return {
        ...state,
        userThemeID: action.payload
      };

    default:
      return state;
  }
};

export default appReducer;
