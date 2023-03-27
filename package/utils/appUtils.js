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

// export async function reloadToken(
//   refreshToken,
//   accessToken,
//   tokenRequested,
//   tokenRequestTimeStamp
// ) {
//   /**
//        * @todo
//        * check if keep me logged in
//        * if enable keep me logged in
//        * then get new access token
//        * if not then remove access token and refresh token
//       //  */
//   var diff = moment().diff(tokenRequestTimeStamp, "seconds");

//   console.log("__tokenRequested__", tokenRequested, diff);
//   if (!tokenRequested || diff > 60) {
//     // return {reducer: true, type: TOKEN_REQUESTED };
//     axios
//       .post(
//         config.backendUrl + REFRESH_TOKEN_API,
//         {
//           refreshToken,
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + accessToken,
//           },
//         }
//       )
//       .then((tokenResponse) => {
//         console.log("-----REJUVINATE IN INSPECTOR--------");
//         store.dispatch({
//           type: TOKEN_REFRESH_SUCCESS,
//           payload: {
//             accessToken: tokenResponse.data?.accessToken,
//           },
//         });
//         store.dispatch({ type: TOKEN_REJUVINATED });
//       })
//       .catch((err) => {
//         if (err?.response?.status === 401 || err?.response?.status === 403) {
//           store.dispatch({ type: SESSION_EXPIRED });
//         }
//       });
//   }
//   throw error;
// }
