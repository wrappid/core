import { LOGOUT_SUCCESS } from "../../modules/auth/types/authTypes"
import {
    REMOVE_PENDING_REQUESTS,
    SET_PENDING_REQUESTS,
    TOKEN_REJUVINATED,
    TOKEN_REQUESTED
} from "../types/pendingRequestTypes";

export const RECALL_IDLE = "idle";
export const RECALL_TOKEN_EXPIRED = "expired";
export const RECALL_TOKEN_REJUVINDATED = "rejuvinated";

const initState = {
    pendingRequest       : null,
    recall               : "idle",
    requests             : [],
    tokenRequestTimeStamp: null,
    tokenRequested       : false,
};

const pendingRequestReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PENDING_REQUESTS:
            if (!state?.pendingRequest) {
                // eslint-disable-next-line no-console
                console.log("PENIG IF");
                return {
                    ...state,
                    pendingRequest: action.payload,
                };
            } else {
                // eslint-disable-next-line no-console
                console.log("PENIG ELSE");
    
                let exists = state.requests.find(
                    (req) => req.endpoint === action.payload.endpoint
                );

                if (exists) {
                    return state;
                } else if (state.pendingRequest?.endpoint !== action.payload.endpoint) {
                    return {
                        ...state,
                        requests: [...state.requests, action.payload],
                    };
                } else {
                    return state;
                }
            }

        case REMOVE_PENDING_REQUESTS:
            // eslint-disable-next-line no-console
            console.log("------REMOVE STACK----------");
            if (state.recall !== RECALL_TOKEN_REJUVINDATED) {
                // eslint-disable-next-line no-console
                console.log("------REMOVE STACK SAME----------");
                return state;
            } else if (state?.requests?.length === 0) {
                // eslint-disable-next-line no-console
                console.log("______resource stack empty____");
                return {
                    ...state,
                    pendingRequest: null,
                    recall        : RECALL_IDLE,
                    requests      : [],
                };
            } else {
                let newRequests = [...state.requests];
    
                let pendingRequest = newRequests.pop();

                // eslint-disable-next-line no-console
                console.log(
                    "------REMOVE STACK----------",
                    newRequests,
                    pendingRequest
                );
                return {
                    ...state,
                    pendingRequest,
                    requests: newRequests,
                };
            }

        case TOKEN_REQUESTED:
            return {
                ...state,
                recall               : RECALL_TOKEN_EXPIRED,
                tokenExpired         : true,
                tokenRequestTimeStamp: Date.now(),
                tokenRequested       : true,
            };

        case TOKEN_REJUVINATED:
            return {
                ...state,
                recall               : RECALL_TOKEN_REJUVINDATED,
                tokenExpired         : false,
                tokenRequestTimeStamp: null,
                tokenRequested       : false,
            };

        case LOGOUT_SUCCESS:
            // eslint-disable-next-line no-console
            console.log("FORM LOGOUT_SUCCESS REDUCER------", action);
            return initState;

        default:
            return state;
    }
};

export default pendingRequestReducer;
