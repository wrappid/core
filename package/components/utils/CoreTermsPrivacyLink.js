// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useSelector } from "react-redux";

import CoreClasses from "../../styles/CoreClasses";
import CoreLink from "../navigation/CoreLink";

export default function CoreTermsPrivacyLink() {
  const { config } = React.useContext(WrappidDataContext);
  
  const auth = useSelector(state => state.auth);
  const { accessToken } = auth;
  let authenticated = accessToken ? true : false;

  return (
    <>
      <CoreLink
        styleClasses={[CoreClasses?.MARGIN?.MR1]}
        href={config?.wrappid?.helpLink}
      >Help</CoreLink>

      <CoreLink
        styleClasses={authenticated ? [] : [CoreClasses?.COLOR?.TEXT_WHITE]}
        href={config?.wrappid?.privacyLink}
      >Privacy</CoreLink>

      <CoreLink
        styleClasses={authenticated
          ? [CoreClasses?.MARGIN?.ML1]
          : [CoreClasses?.MARGIN?.ML1, CoreClasses?.COLOR?.TEXT_WHITE]
        }
        href={config?.wrappid?.termsLink}
      >Terms</CoreLink>
    </>
  );
}
