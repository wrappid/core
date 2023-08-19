import { globalAccessToken } from "../layout/AppContainer";

async function getCoreAccessToken() {
  try {
    let token = globalAccessToken;

    return token;
  } catch (err) {
    console.error("Error in token fetch from native storage", err);
  }
}

export { getCoreAccessToken };
