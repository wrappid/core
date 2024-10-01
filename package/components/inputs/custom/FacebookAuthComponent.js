// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFacebookAuthComponent } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreButton from "../CoreButton";

const FacebookAuthComponent = (props) => {
  const { config } = React.useContext(WrappidDataContext);

  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId  : config?.wrappid?.socialLogin?.facebook?.apiKey, // Replace with your Facebook App ID
        cookie : true,
        version: "v20.0",
        xfbml  : true,
      });
    };

    (function (document, elementType, scriptId) {
      let facebookScript,
        fjs = document.getElementsByTagName(elementType)[0];

      if (document.getElementById(scriptId)) return;
      facebookScript = document.createElement(elementType);
      facebookScript.id = scriptId;
      facebookScript.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(facebookScript, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          fetchUserData(response.authResponse.accessToken);
        }
      },
      {
        scope:
          "pages_manage_posts,pages_read_engagement,pages_manage_engagement",
      }
    );
  };

  const fetchUserData = (accessToken) => {
    // Send access token to backend to exchange for long-lived token
    fetch("http://localhost:8080/social/login/facebook", {
      body   : JSON.stringify({ accessToken }),
      headers: { "Content-Type": "application/json" },
      method : "POST",
    })
      .then((res) => res.json());
  };

  return (
    <NativeFacebookAuthComponent
      onClick={() => handleFacebookLogin()}
      {...props}
    />
  );
};

FacebookAuthComponent.ValidProps = [...CoreButton.validProps];

export default FacebookAuthComponent;
