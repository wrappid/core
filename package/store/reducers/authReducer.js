import { urls } from "../../config/constants";
import {
  AUTH_LOADING,
  CHECK_LOGIN_SUCCESS_REGISTERED,
  CHECK_LOGIN_SUCCESS_UNREGISTERED,
  GET_PROFILE_BASIC_SUCCESS,
  GET_ROLE_PERMISSION_ERROR,
  GET_ROLE_PERMISSION_LOADING,
  GET_ROLE_PERMISSION_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  NAVIGATE_TO_OTP_LOGIN_LOADING,
  NAVIGATE_TO_OTP_LOGIN_SUCCESS,
  NAVIGATE_TO_RESET_PASSWORD_SUCCESS,
  SAVE_EXPIRED_SESSION,
  SAVE_NAV_DATA,
  SESSION_EXPIRED,
  SESSION_RECALLED,
  TOKEN_REFRESH_SUCCESS,
} from "../types/authTypes";

const initState = {
  authError: null,
  authLoading: false,
  logoutLoading: false,

  registerRequestLoading: false,
  registerRequestError: false,
  registerRequestSuccess: false,

  user: null,
  name: "",
  photo: null,
  accessToken: null,
  refreshToken: null,
  resetPasswordLoading: false,
  resetPasswordError: false,
  resetPasswordSuccess: false,

  changePasswordLoading: false,
  changePasswordError: false,
  changePasswordSuccess: false,

  checkLoginOrRegisterLoading: false,
  checkLoginOrRegisterSuccess: false,
  checkLoginOrRegisterError: false,
  checkLoginOrRegister: null,
  checkLoginOrRegisterMsg: null,
  checkLoginOrRegisterOtp: false,
  checkSignup: false,

  authNextPage: urls.LOGIN_ROUTE,

  navigateToResetPasswordLoading: false,
  navigateToResetPasswordSuccess: false,
  navigateToResetPasswordError: false,
  navigateToResetPasswordMsg: false,

  navigateToOtpLoading: false,
  navigateToOtpSuccess: false,
  navigateToOtpError: false,
  navigateToOtpMsg: false,

  navData: {},
  loginPage: null,

  rolePermissionsLoading: false,
  rolePermissionsSuccess: false,
  rolePermissionsError: false,
  rolePermissionsMsg: false,
  permissions: null,
  role: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
        authError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.message
          ? "Login failed due to " + String(action.message).toLowerCase()
          : "Login Failed",
        authLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        authLoading: false,
        uid: action.payload.id,
        user: action.payload,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case TOKEN_REFRESH_SUCCESS:
      // //console.log("REDU:", action.payload.accessToken, action.payload.refreshToken );
      return {
        ...state,
        authError: null,
        authLoading: false,
        accessToken: action.payload.accessToken,
      };
    // case "AUTHENTICATION_ERROR":s
    //   //console.log("HERE");
    //   return initState;
    case LOGOUT_LOADING:
      //console.log("signout success");
      // window.location.reload();
      return {
        ...state,
        logoutLoading: true,
      };
    case LOGOUT_SUCCESS:
      //console.log("signout success");
      // window.location.reload();
      return initState;
    case LOGOUT_ERROR:
      //console.log("signout error");
      return initState;
    case "SIGNUP_ERROR":
      //console.log("sign up error");
      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGNUP_SUCCESS":
      //console.log("sign up success");
      return {
        ...state,
        authError: null,
      };
    case "RESET_PASSWORD_LOADING":
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordError: false,
        resetPasswordSuccess: false,
      };
    case "RESET_PASSWORD_SUCCESS":
      alert("Password reset successfuly. Check your mail.");
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordError: false,
        resetPasswordSuccess: true,
      };
    case "RESET_PASSWORD_ERROR":
      alert("Password reset error...");
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordError: true,
        resetPasswordSuccess: false,
      };
    case "CHANGE_PASSWORD_LOADING":
      return {
        ...state,
        changePasswordLoading: true,
        changePasswordError: false,
        changePasswordSuccess: false,
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordError: false,
        changePasswordSuccess: true,
      };
    case "CHANGE_PASSWORD_ERROR":
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordError: true,
        changePasswordSuccess: false,
      };
    case "ADD_USER_LOADING":
      return {
        ...state,
        signUpLoading: true,
        signUpError: false,
        signUpSuccess: false,
        signUpMessage: null,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        signUpLoading: false,
        signUpError: false,
        signUpSuccess: true,
        signUpMessage: action.message,
      };
    case "ADD_USER_ERROR":
      return {
        ...state,
        signUpLoading: false,
        signUpError: true,
        signUpSuccess: false,
        signUpMessage: action.message,
      };
    case "SAVE_DEFAULT":
      return {
        ...state,
        defaultData: action.data,
      };
    case "CHECK_LOGIN_LOADING":
      return {
        ...state,
        checkLoginOrRegisterLoading: true,
        checkLoginOrRegisterSuccess: false,
        checkLoginOrRegisterError: false,
        checkLoginOrRegister: null,
        checkLoginOrRegisterMsg: null,
      };
    case CHECK_LOGIN_SUCCESS_REGISTERED:
      console.log("AUTH REDUCER", action);

      return {
        ...state,
        checkLoginOrRegisterLoading: false,
        checkLoginOrRegisterSuccess: true,
        checkLoginOrRegisterError: false,
        authNextPage: urls.PASSWORD_ROUTE,
        name: action.payload.data.name,
        photo: action.payload.data.photoUrl,
        checkLoginOrRegisterMsg: null,
      };
    case CHECK_LOGIN_SUCCESS_UNREGISTERED:
      return {
        ...state,
        checkLoginOrRegisterLoading: false,
        checkLoginOrRegisterSuccess: true,
        checkLoginOrRegisterError: false,
        checkLoginOrRegisterMsg: action.message,
        authNextPage: urls.REGISTER_ROUTE,
      };
    case NAVIGATE_TO_OTP_LOGIN_LOADING:
      return {
        ...state,
        navigateToOtpLoading: true,
        navigateToOtpSuccess: false,
        navigateToOtpError: false,
      };
    case NAVIGATE_TO_OTP_LOGIN_SUCCESS:
      return {
        ...state,
        navigateToOtpLoading: false,
        navigateToOtpSuccess: true,
        navigateToOtpError: false,
        navigateToOtpMsg: action.message,
        authNextPage: urls.LOGIN_OTP_ROUTE,
      };
    case NAVIGATE_TO_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        navigateToResetPasswordLoading: false,
        navigateToResetPasswordSuccess: true,
        navigateToResetPasswordError: false,
        navigateToResetPasswordMsg: action.message,
        authNextPage: urls.RESET_PASSWORD_ROUTE,
      };
    case GET_ROLE_PERMISSION_LOADING:
      return {
        ...state,
        rolePermissionsLoading: true,
        rolePermissionsSuccess: false,
        rolePermissionsError: false,
        rolePermissionsMsg: action.message,
        permissions: null,
        role: null,
      };
    case GET_ROLE_PERMISSION_SUCCESS:
      return {
        ...state,
        rolePermissionsLoading: false,
        rolePermissionsSuccess: true,
        rolePermissionsError: false,
        rolePermissionsMsg: action.payload.message,
        permissions: action.payload?.data?.permissions,
        role: action.payload?.data?.role,
      };
    case GET_ROLE_PERMISSION_ERROR:
      return {
        ...state,
        rolePermissionsLoading: false,
        rolePermissionsSuccess: false,
        rolePermissionsError: true,
        rolePermissionsMsg: action.message,
        permissions: null,
        role: null,
      };
    case "CHECK_LOGIN_ERROR":
      return {
        ...state,
        checkLoginOrRegisterLoading: false,
        checkLoginOrRegisterSuccess: false,
        checkLoginOrRegisterError: true,
        checkLoginOrRegister: null,
        checkLoginOrRegisterMsg: action.message,
      };
    case GET_PROFILE_BASIC_SUCCESS:
      return {
        ...state,
        photo: action?.payload?.data?.data?.photoUrl,
      };
    case SAVE_NAV_DATA:
      return {
        ...state,
        navData: action.payload,
      };
    case SESSION_EXPIRED: {
      return {
        ...state,
        sessionExpired: true,
        accessToken: null,
        refreshToken: null,
        sessionDetail: null,
        authNextPage: urls.LOGIN_ROUTE,
        loginPage: null,
        checkLoginOrRegisterSuccess: false,
      };
    }
    case SAVE_EXPIRED_SESSION: {
      return {
        ...state,
        sessionDetail: action.payload,
        uid: null,
      };
    }
    case SESSION_RECALLED: {
      return {
        ...state,
        sessionExpired: false,
        sessionDetail: null,
      };
    }
    case "AUTH_DATA_SAVED":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
export default authReducer;
