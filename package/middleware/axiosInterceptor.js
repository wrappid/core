// eslint-disable-next-line import/namespace
import { reloadToken } from "../utils/appUtils";

async function tempFetch(apiConfig) {
  // -- console.log("API CALLL", apiConfig);
  try {
    let reqObj = {};

    if(apiConfig.externalApi){
      reqObj = {
        body   : apiConfig.data ? apiConfig.data : undefined,
        headers: apiConfig.data ? apiConfig.headers : undefined,
        method : apiConfig.method,
      };
    }else{
      reqObj = {
        body   : apiConfig.data,
        headers: apiConfig.headers,
        method : apiConfig.method,
      };
    }

    let res = await fetch(apiConfig.url, { ...reqObj });

    if (res.status === 401 || res.status === 403) {
      /**
       * @todo
       *
      */
      let data = await res.json();

      throw {
        response: {
          data,
          status: res.status,
        },
      };
      // -- reloadToken();
    } else if (res.status === 500 || !String(res.status).startsWith("20")) {
      let data = await res.json();
      
      throw {
        response: {
          data,
          status: res.status,
        },
      };
    } else if (res.status === 204) {
      return { data: {}, status: res.status };
    } else {
      let data = await res.json();

      return { data, status: res.status };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    if(error?.response?.status === 401 || error?.response?.status === 403){
      reloadToken(apiConfig?.dispatch);
    }
    throw error;
  }

  // -- let data = await res.json();

  // if (res.status === 401 || res.status === 403) {
  //   /**
  //    * @todo
  //    *
  //    */
  //   throw {
  //     response: {
  //       data,
  //       status: res.status,
  //     },
  //   };
  //   // -- reloadToken();
  // } else if (res.status === 500 || !String(res.status).startsWith("20")) {
  //   throw {
  //     response: {
  //       data,
  //       status: res.status,
  //     },
  //   };
  // } else if (res.status === 204) {
  //   return { data: {}, status: res.status };
  // } else {
  //   return { data, status: res.status };
  // }
}

async function axiosInterceptor(apiConfig) {
  // -- console.log("apiConfig", apiConfig);
  return await tempFetch(apiConfig);
}

export default axiosInterceptor;
