import axiosInterceptor from "../middleware/axiosInterceptor";
import config from "../config/config";
import authHeader from "./DataService";
import { HTTP_GET } from "../config/constants";
import { createFormData, queryBuilder } from "../utils/helper";

function getEndpoint(method, endpoint, data) {
  let backendUrl = config.backendUrl;
  if (endpoint.includes("http")) {
    backendUrl = "";
  }

  return method === HTTP_GET
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
      var response = await axiosInterceptor({
        method: method,
        url: getEndpoint(method, endpoint, data),
        headers: await authHeader(authRequired, includeFile),
        data:
          method !== HTTP_GET
            ? includeFile
              ? createFormData(file, data)
              : JSON.stringify(data)
            : null,
      });
      // console.log("API Endpoint = " + endpoint);
      // console.log("-----------SUCCESS RESPONSE-----------");
      // console.log(response);
      // console.log("--------------------------------------");
      return response;
    } catch (error) {
      console.error("Serivice layer error", error);
      const ob = {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        data: error?.response?.data?.data,
      };

      // console.error("API Endpoint = " + endpoint);
      // console.error("-------------ERROR RESPONSE-------------");
      // console.error(error);
      // console.error("----------------------------------------");
      throw ob;
    }
  }
}

export default new AppService();
