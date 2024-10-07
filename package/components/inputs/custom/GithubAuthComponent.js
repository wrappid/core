/* eslint-disable etc/no-commented-out-code */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from "react";

import { apiRequestAction, HTTP } from "@wrappid/core";
import { NativeGithubAuthComponent } from "@wrappid/native";
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

export default function GithubAuthComponent(props) {
  const { config } = React.useContext(WrappidDataContext);
  const dispatch = useDispatch();
  const github_code = useSelector(state => state.auth.github_code);

  useEffect(() => {
    // console.log("trying to find the github code from url");
    const currentUrl = window.location.href;
  
    // console.log(currentUrl, "currentUrl");
    if (currentUrl.includes("checkuserexist?code=")) {
      // Extract the code from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const extractedCode = urlParams.get("code");

      // console.log(extractedCode, "extractedCode");
      // console.log(github_code, "GITHUB_code from the redux store before the calling");
      dispatch({ "github_code": extractedCode, "type": "GITHUB_CODE" });
    }
  }, []);

  useEffect(() => {
    const backend_Endpoint = "/login/social/github";

    // console.log("github_code in the useeffect", github_code);
    if(github_code === ""){return;}
    // console.log("called the backend");
    dispatch(
      apiRequestAction(HTTP.POST, backend_Endpoint, false, { "platformToken": github_code }, "LOGIN_SUCCESS",
        "LOGIN_ERROR"));
    dispatch({ "github_code": "", "type": "GITHUB_CODE" });
  }, [github_code]);

  useEffect(() => {
    const backend_Endpoint = "/login/social/github";

    // console.log("github_code in the useeffect", github_code);
    if(github_code === ""){return;}
    // console.log("called the backend");
    dispatch(apiRequestAction(HTTP.POST, backend_Endpoint, false, { "platformToken": github_code }, "GET_GITHUB_PERSISTANT_ACCESSTOKEN"));
    dispatch({ "github_code": "", "type": "GITHUB_CODE" });
  }, [github_code]);
  const handleAuthoriseGithub = () => {
    //change to config dynamic client id
    const github_client_id = config.wrappid.socialLogin.github.github_client_id;

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${github_client_id}&scope=read:user user:email`;
    return;
  };

  return (<NativeGithubAuthComponent onClick={handleAuthoriseGithub} {...props} label="Github"/>);
}