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

    if (currentUrl.includes("checkuserexist?code=")) {
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
  }, [github_code]);

  const handleAuthoriseGithub = () => {

    const github_client_id = config.wrappid.socialLogin.github.github_client_id;

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${github_client_id}&scope=repo,discussions,read:user user:email `;
    return;
  };

  return (<NativeGithubAuthComponent onClick={handleAuthoriseGithub} {...props} label="Github"/>);
}