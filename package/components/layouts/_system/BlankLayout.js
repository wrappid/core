// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function BlankLayout() {

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("BlankLayoutPage::useEffect");
  }, []);
  
  return (
    <>
      <CoreLayoutPlaceholder 
        id={BlankLayout.PLACEHOLDER.CONTENT} 
        styleClasses={[CoreClasses.LAYOUT.BLANK_CONTENT]} />
    </>
  );
}

BlankLayout.PLACEHOLDER = { CONTENT: "content" };
