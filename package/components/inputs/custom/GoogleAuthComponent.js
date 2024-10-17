/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch } from "react-redux";

import { HTTP } from "../../../config/constants";
import { apiRequestAction } from "../../../store/action/appActions";
import CoreBox from "../../layouts/CoreBox";

const GoogleAuthComponent = () => {
  const { config } = React.useContext(WrappidDataContext);
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    // You can send this token to your server or handle it as needed
    const data = { platformToken: response.credential };

    dispatch(
      apiRequestAction(
        HTTP.POST,
        "/login/social/google",
        false,
        data,
        "LOGIN_SUCCESS",
        "LOGIN_ERROR"
      )
    );
  };

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        
        auto_select: false, 
        // Replace with your actual client ID
        callback   : handleCredentialResponse,
        client_id  : config.wrappid.socialLogin.google.clientId
      });

      window.google.accounts.id.renderButton(
        buttonRef.current,
        {
          logo_alignment: "center",
          shape         : "circle",
          size          : "large",
          theme         : "filled_grey",
          type          : "icon"
        } // customization attributes
      );
      window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
  };

  return (

    <CoreBox ref={buttonRef} />
  );
};

export default GoogleAuthComponent;