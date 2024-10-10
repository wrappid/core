/* eslint-disable etc/no-commented-out-code */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";

import { apiRequestAction, HTTP } from "@wrappid/core";
import { NativeGithubAuthComponent } from "@wrappid/native";
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch } from "react-redux";

export default function GithubAuthComponent(props) {
  const { config } = React.useContext(WrappidDataContext);
  const dispatch = useDispatch();
  const [github_code, setGithub_code] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;

    const state = new URLSearchParams(window.location.search).get("state"); 

    if (currentUrl.includes("checkuserexist?code=") && state === null) {
      const urlParams = new URLSearchParams(window.location.search);
      const extractedCode = urlParams.get("code");

      setGithub_code(extractedCode);
    }
  }, []);

  useEffect(() => {
    const backend_Endpoint = "/login/social/github";

    if(github_code === ""){return;}
    dispatch(
      apiRequestAction(HTTP.POST, backend_Endpoint, false, { "platformToken": github_code }, "LOGIN_SUCCESS",
        "LOGIN_ERROR"));
    setGithub_code("");
  }, [github_code]);

  const handleAuthoriseGithub = () => {

    const clientId = config.wrappid.socialLogin.github.clientId;

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,discussions,read:user,user:email `;
    return;
  };

  return (<NativeGithubAuthComponent onClick={handleAuthoriseGithub} {...props} label="Github"/>);
}