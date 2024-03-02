// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../components/layouts/CoreBox";
import CoreClasses from "../styles/CoreClasses";

export default function DevelopmentInfo() {
  const { config, development } = React.useContext(
    WrappidDataContext
  );

  return (config?.wrappid?.environment === "development" || config?.wrappid?.environment === "stage") && (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.BG.BG_BLACK]}>
      <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_WHITE]}>Development Info</CoreTypographyBody1>

      <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_WHITE]} code={true}>{ JSON.stringify(development, null, 2)}</CoreTypographyBody1>
    </CoreBox>
  );
}
