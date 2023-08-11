
async function tempFetch(apiConfig) {
  console.log("API CALLL", apiConfig);
  let res = await fetch(apiConfig.url, {
    body   : apiConfig.data,
    headers: apiConfig.headers,
    method : apiConfig.method,
  });

  let data = await res.json();

  if (res.status === 401 || res.status === 403) {
    /**
     * @todo
     *
     */
    throw {
      response: {
        data,
        status: res.status,
      },
    };
    // reloadToken();
  } else if (res.status === 500 || !String(res.status).startsWith("20")) {
    throw {
      response: {
        data,
        status: res.status,
      },
    };
  } else {
    return { data, status: res.status };
  }
}

async function axiosInterceptor(apiConfig) {
  console.log("apiConfig", apiConfig);
  return await tempFetch(apiConfig);
}

export default axiosInterceptor;
