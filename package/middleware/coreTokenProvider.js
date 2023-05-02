import { nativeStorage } from "@wrappid/styled-components";
let AUTH_STORE = "persist:auth";

async function getCoreAccessToken() {
  try {
    let t = await nativeStorage.getItem(AUTH_STORE);
    console.log("AUTH ITEM", t);
    let auth = JSON.parse(t);
    console.log("AUTH PARSED", auth);
    let token = "";
    token = auth?.accessToken;
    if (token && token.length > 0 && token[0] === '"') {
      return token.slice(1, token.length - 1);
    } else {
      return token;
    }
  } catch (err) {
    console.error("Error in token fetch from native storage", err);
  }
}

export { getCoreAccessToken };
