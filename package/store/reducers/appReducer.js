import {
    API_VERSION_SUCCESS,
    API_VERSION_ERROR,
    API_VERSION_LOADING,
    CLEAR_SNACK_MESSAGE,
    GET_ROUTE_FAILURE,
    GET_ROUTE_SUCCESS,
    MESSAGE_SHOWED,
    PUSH_SNACK_MESSAGE,
    RESET_LOADING,
    SET_LOADING,
    SET_PROGRESS_BAR,
    RESET_PROGRESS_BAR,
    SEND_OTP_LOADING,
    SEND_OTP_SUCCESS,
    SEND_OTP_ERROR
} from "./../types/appTypes";

const initState = {
    apiVersion: {
        error  : false,
        loading: false,
        success: false,
        version: "N/A",
    },
    loading              : false,
    routes               : [],
    snackMessages        : [],
    snackMessagesMaxCount: 5,
    requestProgress: {
        visible: false,
    },
    sendOtpLoading: false,
    sendOtpSuccess: false,
    sendOtpError: false,
    errorMsg: false,
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
                requestProgress: {visible: true},
            };

        case RESET_PROGRESS_BAR: 
            return {
                ...state,
                requestProgress: {visible: false},
        };
        
        case SEND_OTP_LOADING:
            return {
                ...state,
                sendOtpLoading: true,
                sendOtpSuccess: false,
                sendOtpError: false,
            }
        case SEND_OTP_SUCCESS:
            return {
                ...state,
                sendOtpLoading: false,
                sendOtpSuccess: true,
                sendOtpError: false,
            }
        case SEND_OTP_ERROR:
            var errorMsg = "Something went wrong!";

            if (
                action?.payload?.data?.message &&
                typeof action?.payload?.data?.message === "string"
            ) {
                errorMsg = action?.payload?.data?.message;
            }
            return {
                ...state,
                sendOtpLoading: false,
                sendOtpSuccess: false,
                sendOtpError: false,
                errorMsg: errorMsg
            }
        // case LOGOUT_SUCCESS:
        //     return { ...initState, routes: state?.routes?.filter((tmp) => !tmp.authRequired) };

        default:
            return state;
    }
};

export default appReducer;
