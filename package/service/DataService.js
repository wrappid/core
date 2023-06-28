import { getCoreAccessToken } from "../middleware/coreTokenProvider";

export default async function authHeader(
  authRequired = true,
  includeFile = false
) {
  let headers = {};

  if (authRequired) {
    let accessToken = await getCoreAccessToken();
    headers["Authorization"] = "Bearer " + accessToken;
  }
  if (includeFile) {
    // headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  headers["Access-Control-Allow-Origin"] = "no-cors";

  return headers;
}
