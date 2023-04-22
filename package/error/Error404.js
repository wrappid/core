import React from "react";
import CoreImage from "../components/dataDisplay/CoreImage";
import CoreH6 from "../components/dataDisplay/heading/CoreH6";
import CoreStack from "../components/layouts/CoreStack";
import { CoreClasses } from "@wrappid/styles";

export default function Error404() {
  /**
   * @todo have replace br with core component
   */
  return (
    <CoreStack
      styleClasses={[
        CoreClasses.LAYOUT.FLEXBOX,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
    >
      <CoreImage
        src="https://cdn.dribbble.com/users/329098/screenshots/6563414/404-ill.jpg"
        alt="404"
        // onClick={() => {
        //   navigate({`/${urls.DASHBOARD}`});
        // }}
        styleClasses={[CoreClasses.APP.UC_IMG]}
      />
      {/* <br /> */}
      <CoreH6 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        Page not found!
      </CoreH6>
      {/* <br />
      <br /> */}
    </CoreStack>
  );
}
