// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreSection from "../components/layouts/CoreSection";
import CoreClasses from "../styles/CoreClasses";

export default function DevelopmentInfo() {
  const { config } = React.useContext(
    WrappidDataContext
  );

  return (config?.wrappid?.environment === "development") && (
    <CoreSection styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.WIDTH.VW_100]}>
      <CoreTypographyBody1>Development Info</CoreTypographyBody1>
    </CoreSection>
  );
}
