// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";
import CoreLink from "../navigation/CoreLink";

export default function CoreTermsPrivacyLink() {
  const { config: appConfig } = React.useContext(WrappidDataContext);

  return (
    <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.PADDING.PB2]}>
      <CoreLink
        href={ appConfig?.wrappid?.helpLink || "#" }
        target="_blank"
        rel="noopener noreferrer"
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>Help</CoreLink>

      <CoreLink
        href={ appConfig?.wrappid?.privacyLink || "#" }
        target="_blank"
        rel="noopener noreferrer"
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY, CoreClasses.PADDING.PL2]}>Privacy</CoreLink>

      <CoreLink
        href={ appConfig?.wrappid?.termsLink || "#" }
        target="_blank"
        rel="noopener noreferrer"
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY, CoreClasses.PADDING.PL2]}>Terms</CoreLink>
    </CoreBox>
  );
}
