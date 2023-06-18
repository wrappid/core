import moment from "moment";
import { REFRESH_TOKEN_API } from "../config/api";
import config from "../config/config";
import { HTTP } from "../config/constants";
import {
  LOGOUT_SUCCESS,
  SESSION_EXPIRED,
  TOKEN_REFRESH_SUCCESS,
} from "../modules/auth/types/authTypes";
import { TOKEN_REJUVINATED } from "../store/types/pendingRequestTypes";

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

export async function reloadToken(
  refreshToken,
  accessToken,
  tokenRequested,
  tokenRequestTimeStamp,
  dispatch
) {
  var diff = moment().diff(tokenRequestTimeStamp, "seconds");

  console.log("__tokenRequested__", tokenRequested, diff);
  if (!tokenRequested || diff > 60) {
    const backendUrl = config?.wrappid
      ? config.wrappid.backendUrl
      : process.env.REACT_APP_WRAPPID_backendUrl;
    dispatch({ type: TOKEN_REQUESTED });
    fetch(backendUrl + REFRESH_TOKEN_API, {
      method: HTTP.POST,
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    })
      .then((tokenResponse) => {
        tokenResponse
          .json()
          .then((tokenResponseParsed) => {
            console.log("-----REJUVINATE IN RELOAD TOKEN--------");
            if (tokenResponse.status === 200) {
              dispatch({
                type: TOKEN_REFRESH_SUCCESS,
                payload: {
                  accessToken: tokenResponseParsed?.accessToken,
                },
              });
              dispatch({ type: TOKEN_REJUVINATED });
            } else if (
              tokenResponse.status === 401 ||
              tokenResponse.status === 403
            ) {
              dispatch({
                type: SESSION_EXPIRED,
              });
            } else if (tokenResponse.status === 500) {
              dispatch({
                type: LOGOUT_SUCCESS,
              });
            }
          })
          .catch((err) => {
            console.error("Error in toke response parse", err);
            dispatch({ type: SESSION_EXPIRED });
          });
      })
      .catch(async (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          dispatch({ type: SESSION_EXPIRED });
        }
      });
  }
}
