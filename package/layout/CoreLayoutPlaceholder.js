import React from "react";

export default function CoreLayoutPlaceholder(props) {
  const { children, ...restProps } = props;

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(restProps);
  }, []);

  return children;
}
