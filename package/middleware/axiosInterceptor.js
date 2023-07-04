import { reloadToken } from "../utils/appUtils";

async function tempFetch(apiConfig) {
  console.log("API CALLL", apiConfig);
  let res = await fetch(apiConfig.url, {
    method: apiConfig.method,
    headers: apiConfig.headers,
    body: apiConfig.data,
  });

  let data = await res.json();
  if (res.status === 401 || res.status === 403) {
    /**
     * @todo
     *
     */
    throw {
      response: {
        status: res.status,
        data,
      },
    };
    // reloadToken();
  } else if (res.status === 500) {
    throw {
      response: {
        status: res.status,
        data,
      },
    };
  } else {
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

export default axiosInterceptor;
