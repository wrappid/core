import { getConfigurationObject } from "@wrappid/styles";

import authHeader from "./DataService";
import { HTTP } from "../config/constants";
import axiosInterceptor from "../middleware/axiosInterceptor";
import { createFormData, queryBuilder } from "../utils/helper";

function getEndpoint(method, endpoint, data) {
  let appConfig = getConfigurationObject();
  let backendUrl = appConfig?.wrappid?.backendUrl;
  /**
   * @todo @sumanta-m review required
   */
  /* -- if (endpoint.includes("http")) {
    backendUrl = "";
  } */

  return method === HTTP.GET
    ? queryBuilder(backendUrl + endpoint, data)
    : backendUrl + endpoint;
}

class AppService {
  async apiRequest(
    method,
    endpoint,
    authRequired,
    data,
    includeFile = false,
    file = null
  ) {
    try {
      let response = await axiosInterceptor({
        data:
          method !== HTTP.GET
            ? includeFile
              ? createFormData(file, data)
              : JSON.stringify(data)
            : null,
        headers: await authHeader(authRequired, includeFile),
        method : method,
        url    : getEndpoint(method, endpoint, data),
      });

      // -- console.log("API Endpoint = " + endpoint);
      // -- console.log("-----------SUCCESS RESPONSE-----------");
      // -- console.log(response);
      // -- console.log("--------------------------------------");

      return response;
    } catch (error) {
      // -- console.error("Service layer error:", error.message);
      // -- console.error(error);
      const errorRes = {
        data   : error?.response?.data?.data,
        message: error?.response?.data?.message,
        status : error?.response?.status,
      };

      // -- console.error("API Endpoint = " + endpoint);
      // -- console.error("-------------ERROR RESPONSE-------------");
      // -- console.error(error);
      // -- console.error("----------------------------------------");
      throw errorRes;
    }
  }
}

export default new AppService();
