// eslint-disable-next-line import/no-unresolved
import { WrappidData } from "@wrappid/styles";

import { HTTP } from "../config/constants";
import axiosInterceptor from "../middleware/axiosInterceptor";
import { createFormData, queryBuilder } from "../utils/helper";
// eslint-disable-next-line import/order
import authHeader from "./DataService";

class AppService {
  async apiRequest(
    method,
    endpoint,
    authRequired,
    data,
    includeFile = false,
    file = null,
    dispatch = null
  ) {
    try {
      let response = await axiosInterceptor({
        data:
          method !== HTTP.GET
            ? includeFile
              ? createFormData(file, data)
              : JSON.stringify(data)
            : null,
        dispatch   : dispatch,
        externalApi: await this.isUrl(endpoint),
        headers    : await authHeader(authRequired, includeFile),
        method     : method.toUpperCase(),
        url        : await this.getEndpoint(method, endpoint, data)
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
  
  /**
 * Check if the given string is a valid URL
 * @param {*} url 
 * @returns {boolean} 
 */
  async isUrl(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)/;

    return await urlPattern.test(url);
  }
  // eslint-disable-next-line no-unused-vars

  async getEndpoint(method, endpoint, data) {

    let processEndpoint = endpoint;

    (processEndpoint.indexOf("?") === -1) ? processEndpoint += "?" : processEndpoint += "&";

    processEndpoint += `appID=${WrappidData?.config?.appID || ""}`;

    if(!await this.isUrl(processEndpoint))
    // return endpoint;
    // }else
    {
      let backendUrl = WrappidData?.config?.backendUrl;

      return method === HTTP.GET
        ? queryBuilder(backendUrl + processEndpoint, data)
        : backendUrl + processEndpoint;
    }
    return processEndpoint;
  }
}

export default new AppService();
