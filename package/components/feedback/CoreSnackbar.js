// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSnackbar } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreSnackbar(props) {
  props = sanitizeComponentProps(CoreSnackbar, props);

  const {
    action,
    anchorOrigin,
    autoHideDuration,
    children,
    ClickAwayListenerProps,
    ContentProps,
    disableWindowBlurListener,
    key,
    message,
    onClose,
    open,
    resumeHideDuration,
    TransitionComponent,
    transitionDuration,
    TransitionProps,
  } = props;

  return (
    <NativeSnackbar
      action={action}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      ClickAwayListenerProps={ClickAwayListenerProps}
      ContentProps={ContentProps}
      disableWindowBlurListener={disableWindowBlurListener}
      key={key}
      message={message}
      onClose={onClose}
      open={open}
      resumeHideDuration={resumeHideDuration}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      TransitionProps={TransitionProps}
    >
      {children}{" "}
    </NativeSnackbar>
  );
}
CoreSnackbar.validProps = [
  {
    description:
      "The action to display. It renders after the message, at the end of the snackbar.",
    name : "action",
    types: [
      {
        default: "",
        type   : "node",
      },
    ],
  },
  {
    description:
      "The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.",
    name : "anchorOrigin",
    types: [
      {
        default    : { horizontal: "left", vertical: "bottom" },
        type       : "object",
        validValues: [
          {
            horizontal: ["center", "left", "right"],
            vertical  : ["bottom", "top"],
          },
        ],
      },
    ],
  },
  {
    description:
      "The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the Snackbar. This behavior is disabled by default with the null value.",
    name : "autoHideDuration",
    types: [
      {
        default: "null",
        type   : "number",
      },
    ],
  },
  {
    description: "Replace the SnackbarContent component.",
    name       : "children",
    types      : [
      {
        default: "",
        type   : "element",
      },
    ],
  },
  {
    description: "Props applied to the ClickAwayListener element.",
    name       : "ClickAwayListenerProps",
    types      : [
      {
        default: "",
        type   : "object",
      },
    ],
  },
  {
    description: "Props applied to the SnackbarContent element.",
    name       : "ContentProps",
    types      : [
      {
        default: "",
        type   : "object",
      },
    ],
  },
  {
    description:
      "If true, the autoHideDuration timer will expire even if the window is not focused.",
    name : "disableWindowBlurListener",
    types: [
      {
        default: "FALSE",
        type   : "bool",
      },
    ],
  },
  {
    description:
      "When displaying multiple consecutive snackbars using a single parent-rendered <Snackbar/>, add the key prop to ensure independent treatment of each message. For instance, use <Snackbar key={message} />. Otherwise, messages might update in place, and features like autoHideDuration could be affected.",
    name : "key",
    types: [
      {
        default: "",
        type   : "any",
      },
    ],
  },
  {
    description: "The message to display.",
    name       : "message",
    types      : [
      {
        default: "",
        type   : "node",
      },
    ],
  },
  {
    description: `Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop. The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway.
    Signature:function(event: React.SyntheticEvent | Event, reason: string) => voidevent The event source of the callback.
    reason Can be: ""timeout"" (autoHideDuration expired), ""clickaway"", or ""escapeKeyDown"".`,
    name : "onClose",
    types: [
      {
        default: "",
        type   : "func",
      },
    ],
  },
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [
      {
        default: "",
        type   : "bool",
      },
    ],
  },
  {
    description:
      "The number of milliseconds to wait before dismissing after user interaction. If autoHideDuration prop isn't specified, it does nothing. If autoHideDuration prop is specified but resumeHideDuration isn't, we default to autoHideDuration / 2 ms.",
    name : "resumeHideDuration",
    types: [
      {
        default: "",
        type   : "string",
      },
    ],
  },
  {
    description:
      "The component used for the transition. Follow this guide to learn more about the requirements for this component.",
    name : "TransitionComponent",
    types: [
      {
        default: "Grow",
        type   : "string",
      },
    ],
  },
  {
    description:
      "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name : "transitionDuration",
    types: [
      {
        default:
          "{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen, }",
        type: "object",
        validValues:
          "{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen, }",
      },
    ],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name : "TransitionProps",
    types: [
      {
        default: {},
        type   : "object",
      },
    ],
  },
];
CoreSnackbar.invalidProps = ["sx", "classes"];
