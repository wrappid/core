import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreLayoutItem(props) {
  const { id, children, ...restProps } = props;
  
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(restProps);
  }, []);
    
  return (
    <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_PRIMARY]}>
      <CoreTypographyBody1>{id}</CoreTypographyBody1>

      {children}
    </CoreBox>
  );
}
