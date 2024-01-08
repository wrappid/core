// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseScrollTrigger } from "@wrappid/native";
import PropTypes from "prop-types";

import CoreBox from "../layouts/CoreBox";
import CoreFade from "../utils/CoreFade";

export default function CoreScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = nativeUseScrollTrigger({
    disableHysteresis: true,
    target           : window ? window() : undefined,
    threshold        : 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ block: "center" });
    }
  };

  return (
    <CoreFade in={trigger}>
      <CoreBox
        onClick={handleClick}
        role="presentation"
        sx={{ bottom: 16, position: "fixed", right: 16 }}
      >
        {children}
      </CoreBox>
    </CoreFade>
  );
}

CoreScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window  : PropTypes.func,
};
