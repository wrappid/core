import moment from "moment";
import { REFRESH_TOKEN_API } from "../config/api";
import config from "../config/config";
import { HTTP, urls } from "../config/constants";
import { nativeStorage } from "@wrappid/styled-components";

const AUTH_STORE = "persist:auth";

export const getUUID = () => {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
  // return window.self.crypto.randomUUID();
};

export const getTimestamp = () => {
  return new Date().getTime();
};

export async function reloadToken() {
// refreshToken,
// accessToken,
// tokenRequested,
// tokenRequestTimeStamp
  /**
       * @todo
       * check if keep me logged in
       * if enable keep me logged in
       * then get new access token
       * if not then remove access token and refresh token
      //  */
  let authStore = await nativeStorage.getItem(AUTH_STORE);
  let refreshToken = authStore?.refreshToken;
  let accessToken = authStore?.accessToken;
  let tokenRequested = true;
  let tokenRequestTimeStamp = moment();

  var diff = moment().diff(tokenRequestTimeStamp, "seconds");

  console.log("__tokenRequested__", tokenRequested, diff);
  if (!tokenRequested || diff > 60) {
    // return {reducer: true, type: TOKEN_REQUESTED };
    fetch(config.wrappid.backendUrl + REFRESH_TOKEN_API, {
      method: HTTP.POST,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      body: { refreshToken },
    })
      .then(async (tokenResponse) => {
        console.log("-----REJUVINATE IN INSPECTOR--------");
        let authStore = await nativeStorage.getItem(AUTH_STORE);
        await nativeStorage.setItem({
          ...authStore,
          authError: null,
          authLoading: false,
          accessToken: tokenResponse.data?.accessToken,
        });
        // store.dispatch({
        //   type: TOKEN_REFRESH_SUCCESS,
        //   payload: {
        //     accessToken: tokenResponse.data?.accessToken,
        //   },
        // });
        // store.dispatch({ type: TOKEN_REJUVINATED });
      })
      .catch(async (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          // store.dispatch({ type: SESSION_EXPIRED });
          let authStore = await nativeStorage.getItem(AUTH_STORE);
          await nativeStorage.setItem({
            ...authStore,
            sessionExpired: true,
            accessToken: null,
            refreshToken: null,
            sessionDetail: null,
            authNextPage: urls.LOGIN_ROUTE,
            loginPage: null,
            checkLoginOrRegisterSuccess: false,
          });
        }
      });
  }
  // throw error;
}
