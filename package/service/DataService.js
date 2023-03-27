// import { store } from "../store/store";

export default async function authHeader(
  authRequired = true,
  includeFile = false
) {
  let headers = {};
  // console.log("####################1");
  let auth = localStorage.getItem("persist:auth");
  // console.log("####################2", auth);
  let reducer = JSON.parse(auth);
  // console.log("####################3", reducer);
  if (authRequired) {
    let accessToken = reducer?.accessToken
      ? JSON.parse(reducer?.accessToken)
      : "";
    headers["Authorization"] = "Bearer " + accessToken;
  }
  if (includeFile) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  return headers;
}
