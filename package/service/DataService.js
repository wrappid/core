// import { store } from "../store/store";

export default async function authHeader(
  authRequired = true,
  includeFile = false
) {
  let headers = {};
  // console.log("####################1");
  let auth = null;
  try {
    auth = localStorage.getItem("persist:auth");
  } catch (err) {
    console.log("Local storage not found");
    /**
     * @todo have to write native specific code
     */
    auth = JSON.stringify({});
  }
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
