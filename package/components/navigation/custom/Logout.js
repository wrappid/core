import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  NativeDomNavigate,
  nativeUseLocation,
} from "@wrappid/styled-components";

import { LOGOUT_API } from "../../../config/api";
import { HTTP } from "../../../config/constants";

import { CoreTypographyBody1, CoreBox, apiRequestAction } from "@wrappid/core";

import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from "../../../modules/auth/types/authTypes";
import CoreClasses from "../../../styles/CoreClasses";

export default function Logout() {
  const dispatch = useDispatch();
  let location = nativeUseLocation();
  const auth = useSelector((state) => state.auth);

  //   console.log("LOCALTION", location);

  React.useEffect(() => {
    if (location?.state?.logout !== false)
      dispatch(
        apiRequestAction(
          HTTP.POST,
          LOGOUT_API,
          true,
          {},
          LOGOUT_SUCCESS,
          LOGOUT_ERROR
        )
      );
  }, []);

  if (!auth?.uid) {
    if (location?.state?.sessionExpired) {
      return <NativeDomNavigate to={"/"} state={{ sessionExpired: true }} />;
    } else {
      return <NativeDomNavigate to={"/"} />;
    }
  }

  return (
    <CoreBox
      styleClasses={[
        CoreClasses.HEIGHT.VH_100,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
    >
      {/* <RxLoadingGif /> */}

      <CoreTypographyBody1>Signing Off...</CoreTypographyBody1>
    </CoreBox>
  );
}
