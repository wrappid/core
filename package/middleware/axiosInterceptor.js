import axios from "axios";
import moment from "moment";
import swal from "sweetalert";
import {
  LOGIN_WITH_OTP_API,
  LOGIN_WITH_PASSWORD_API,
  REFRESH_TOKEN_API,
} from "../config/api";
import config from "../config/config";
import { store } from "../store/store";
import {
  LOGOUT_SUCCESS,
  SESSION_EXPIRED,
  TOKEN_REFRESH_SUCCESS,
} from "../store/types/authTypes";
import {
  TOKEN_REJUVINATED,
  TOKEN_REQUESTED,
} from "../store/types/pendingRequestTypes";

async function tempFetch(apiConfig) {
  console.log("API CALLL", apiConfig);
  let res = await fetch(apiConfig.url, {
    method: apiConfig.method,
    headers: apiConfig.headers,
    body: apiConfig.data,
  });

  let data = await res.json();
  if (res.status === 401 || res.status === 403) {
    throw {
      response: {
        status: res.status,
        data,
      },
    };
  } else if (res.status === 500) {
    throw {
      response: {
        status: res.status,
        data,
      },
    };
  }

  return { status: res.status, data };
}

async function axiosInterceptor(apiConfig) {
  console.log("apiConfig", apiConfig);
  return await tempFetch(apiConfig);
}

// // Add a request interceptor
// axiosInterceptor.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // console.log("1##############################" + JSON.stringify(config));
//     console.log("API call " + config.url + " intiate @" + new Date().getTime());
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     // console.error("2##############################" + JSON.stringify(error));
//     Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInterceptor.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     // console.log("3##############################" + JSON.stringify(response));
//     console.log("API call processed @", new Date().getTime());
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     // console.error(
//     //   "4##############################" + JSON.stringify(error.response)
//     // );
//     console.log("API call processed @", new Date());

//     if (
//       error.response.status === 401 &&
//       (error.request.url !== LOGIN_WITH_OTP_API ||
//         error.request.url !== LOGIN_WITH_PASSWORD_API)
//     ) {
//       /**
//        * @todo
//        * check if keep me logged in
//        * if enable keep me logged in
//        * then get new access token
//        * if not then remove access token and refresh token
//       //  */

//       let wholeStore = store.getState();

//       let refreshToken = wholeStore.auth.refreshToken;
//       let accessToken = wholeStore.auth.accessToken;
//       let tokenRequested = wholeStore.pendingRequests.tokenRequested;
//       let tokenRequestTimeStamp =
//         wholeStore.pendingRequests.tokenRequestTimeStamp;
//       var diff = moment().diff(tokenRequestTimeStamp, "seconds");

//       console.log("__tokenRequested__", tokenRequested, diff);
//       if (!tokenRequested || diff > 60) {
//         store.dispatch({ type: TOKEN_REQUESTED });
//         axios
//           .post(
//             config.backendUrl + REFRESH_TOKEN_API,
//             {
//               refreshToken,
//             },
//             {
//               headers: {
//                 Authorization: "Bearer " + accessToken,
//               },
//             }
//           )
//           .then((tokenResponse) => {
//             console.log("-----REJUVINATE IN INSPECTOR--------");
//             store.dispatch({
//               type: TOKEN_REFRESH_SUCCESS,
//               payload: {
//                 accessToken: tokenResponse.data?.accessToken,
//               },
//             });
//             store.dispatch({ type: TOKEN_REJUVINATED });
//           })
//           .catch((err) => {
//             if (
//               err?.response?.status === 401 ||
//               err?.response?.status === 403
//             ) {
//               store.dispatch({ type: SESSION_EXPIRED });
//             }
//           });
//       }
//       throw error;
//     }
//     throw error;
//     // return error.response;
//   }
// );

export default axiosInterceptor;
