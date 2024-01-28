// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { WrappidDataContext } from "@wrappid/styles";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../components/layouts/CoreBox";
import CoreStack from "../components/layouts/CoreStack";
import CoreClasses from "../styles/CoreClasses";
import ThemeSelector from "../theme/ThemeSelector";

export default function WrappidGuestLayout(props) {

  const { config: { packageInfo } } = React.useContext(WrappidDataContext);

  return (
    <>
      {props.children}

      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.FLEX.DIRECTION_ROW,
        CoreClasses.PADDING.P2,
        CoreClasses.BG.BG_PRIMARY,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN
      ]}>
        <CoreTypographyBody1>{packageInfo?.name}</CoreTypographyBody1>

        <CoreTypographyBody1>Wrappid ©{new Date().getFullYear()}</CoreTypographyBody1>

        <CoreStack direction="row">
          <ThemeSelector />

          <CoreTypographyBody1>Version: {packageInfo?.version}</CoreTypographyBody1>
        </CoreStack>
      </CoreBox>
    </>
  );
}
