// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAppDiv } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import { CoreApplicationContext } from "../../config/contextHandler";
import { APP_VERSION_SET, RESET_STATE } from "../../store/types/appTypes";
import { LOGOUT_SUCCESS } from "../../store/types/authTypes";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAppDiv(props) {
  const dispatch = useDispatch();

  props = sanitizeComponentProps(CoreAppDiv, props);

  /* if version mismatch please reset the state of all the reducer */
  const { version: newVersion } = React.useContext(CoreApplicationContext);
  const { appVersion: existingVersion } = useSelector(state => state.app);

  useEffect(() => {
    if (existingVersion) {
      // version exist
      // check if existing versions are matched with pattern - /[0-9]+\.[0-9]+\.[0-9]+/gm
      const matchedArr = existingVersion?.match(/[0-9]+\.[0-9]+\.[0-9]+/gm);
      const matched = matchedArr && matchedArr?.length === 1;
      
      if (matched) {
        // correct existing version
        if (existingVersion === newVersion) {
          // same version
        } else {
          // different version
          // reset redux store
          dispatch({ type: RESET_STATE });
          dispatch({ type: LOGOUT_SUCCESS });
        }
      } else {
        // in-correct existing version
        // setting new version
        dispatch({ payload: newVersion, type: APP_VERSION_SET });
      }
    } else {
      // version not exist
      // setting new version
      dispatch({ payload: newVersion, type: APP_VERSION_SET });
    }
  }, []);

  return <NativeAppDiv {...props} />;
}

CoreAppDiv.validProps = [];
CoreAppDiv.invalidProps = [];