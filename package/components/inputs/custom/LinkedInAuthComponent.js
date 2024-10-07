/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeLinkedInAuthComponent } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch } from "react-redux";

import CoreButton from "./../CoreButton";
import { HTTP } from "../../../config/constants";
import { apiRequestAction } from "../../../store/action/appActions";
import CoreBox from "../../layouts/CoreBox";

export default function LinkedInAuthComponent(props){
  const { config } = React.useContext(WrappidDataContext);
  const dispatch = useDispatch();

  const clientId = config?.wrappid?.socialLogin?.linkedin?.apiKey;
  const redirectUri = config?.wrappid?.socialLogin?.linkedin?.callbackURL;
  const scopes = "profile w_member_social email openid";
  const state = "4b1a92d8c1e7a9";
  
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&state=${state}&scope=${encodeURIComponent(scopes)}`;

  const handleClick = () => {
    // Redirect user to LinkedIn auth URL
    window.location.href = authUrl;
  };
  const fetchUserData = (authCode) => {
    const data = { platformToken: authCode };

    dispatch(
      apiRequestAction(
        HTTP.POST,
        "/login/social/linkedin",
        false,
        data,
        "LOGIN_SUCCESS",
        "LOGIN_ERROR"
      )
    );
  };
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    // Extract the authorization code from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");

    if (code != null) {
      setAuthCode(code);
    }

    if(authCode !== null){
      // eslint-disable-next-line no-unused-vars
      fetchUserData(authCode);
    }
  }, [authCode]);

  return (
    <CoreBox>
      <NativeLinkedInAuthComponent onClick={handleClick} {...props} label="LinkedIn"/>
    </CoreBox>
  );
}

LinkedInAuthComponent.validProps = [...CoreButton.validProps];