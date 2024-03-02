// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH6 from "../components/dataDisplay/CoreH6";
import CoreImage from "../components/dataDisplay/CoreImage";
import BlankLayout from "../components/layouts/_system/BlankLayout";
import CoreLayoutItem from "../layout/CoreLayoutItem";
import CoreClasses from "../styles/CoreClasses";

export default function Error404() {
  /**
   * @todo have replace br with core component
   */
  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreImage
          src="https://cdn.dribbble.com/users/329098/screenshots/6563414/404-ill.jpg"
          alt="404"
        />

        <CoreH6 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        Page not found!
        </CoreH6>

      </CoreLayoutItem>
    </>
  );
}
