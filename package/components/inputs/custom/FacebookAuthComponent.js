// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFacebookAuthComponent } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch } from "react-redux";

import { HTTP } from "../../../config/constants";
import { apiRequestAction } from "../../../store/action/appActions";
import CoreButton from "../CoreButton";

const FacebookAuthComponent = (props) => {
  const dispatch = useDispatch();
  const { config } = React.useContext(WrappidDataContext);

  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId  : config?.wrappid?.socialLogin?.facebook?.appId, // Replace with your Facebook App ID
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
        config_id: config?.wrappid?.socialLogin?.facebook?.configId,
        scope    : "public_profile,email",
      }
    );
  };

  const fetchUserData = (accessToken) => {
    const data = { platformToken: accessToken };

    dispatch(
      apiRequestAction(
        HTTP.POST,
        "/login/social/facebook",
        false,
        data,
        "LOGIN_SUCCESS",
        "LOGIN_ERROR"
      )
    );
  };

  return (
    <NativeFacebookAuthComponent
      onClick={() => handleFacebookLogin()}
      label="Facebook"
      {...props}
    />
  );
};

FacebookAuthComponent.ValidProps = [...CoreButton.validProps];

export default FacebookAuthComponent;
