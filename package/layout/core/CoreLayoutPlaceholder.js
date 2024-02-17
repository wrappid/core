import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";

export default function CoreLayoutPlaceholder(props) {
  const { id, ...restProps } = props;

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(restProps);
  }, []);
    
  return (
    <CoreTypographyBody1>{id}</CoreTypographyBody1>
  );
}
