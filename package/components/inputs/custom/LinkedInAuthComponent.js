/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeLinkedInAuthComponent } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreButton from "./../CoreButton";
import CoreBox from "../../layouts/CoreBox";

const fetchUserData = async (authCode) => {
  // Send access token to backend to exchange for long-lived token
  const response = await fetch("http://localhost:8080/social/login/linkedin", {
    body   : JSON.stringify({ authCode }),
    headers: { "Content-Type": "application/json" },
    method : "POST",
  });
    
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();
    
};

export default function LinkedInAuthComponent(props){
  const { config } = React.useContext(WrappidDataContext);

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
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    // Extract the authorization code from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");

    if (code) {
      setAuthCode(code);
    }

    console.log("AuthCode from useState", authCode);
    if(authCode){
      // eslint-disable-next-line no-unused-vars
      
      fetchUserData(authCode);
    }
  }, [authCode]);

  return (
    <CoreBox>
      <NativeLinkedInAuthComponent onClick={handleClick} {...props}/>
    </CoreBox>
  );
}

LinkedInAuthComponent.validProps = [...CoreButton.validProps];