import React from "react";

export default function CoreLayoutPlaceholder(props) {
  const { /* id,  */children, ...restProps } = props;

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(restProps);
  }, []);
    
  /* return (
    <CoreBox key={`placeholder-${id}`} {...restProps}>{children}</CoreBox>
  ); */
  return children;
}
