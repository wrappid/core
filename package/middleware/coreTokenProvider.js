import { globalAccessToken } from "../CoreRoutes";

async function getCoreAccessToken() {
  try {
    let token = globalAccessToken;

    return token;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error in token fetch from native storage", err);
  }
}

export { getCoreAccessToken };
