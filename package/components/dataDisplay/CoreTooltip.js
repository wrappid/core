// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTooltip } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTooltip(props) {
  props = sanitizeComponentProps(CoreTooltip, props);

  const {
    children,
    arrow,
    components,
    componentsProps,
    describeChild,
    disableFocusListener,
    disableHoverListener,
    disableInteractive,
    disableTouchListener,
    enterDelay,
    enterNextDelay,
    enterTouchDelay,
    followCursor,
    id,
    leaveDelay,
    leaveTouchDelay,
    onClose,
    onOpen,
    open,
    PopperComponen,
    PopperProp,
    title,
    TransitionComponen,
    TransitionProp,
    placement,
    slots,
  } = props;

  return (
    <NativeTooltip
      arrow={arrow}
      components={components}
      componentsProps={componentsProps}
      describeChild={describeChild}
      disableFocusListener={disableFocusListener}
      disableHoverListener={disableHoverListener}
      disableInteractive={disableInteractive}
      disableTouchListener={disableTouchListener}
      enterDelay={enterDelay}
      enterNextDelay={enterNextDelay}
      enterTouchDelay={enterTouchDelay}
      followCursor={followCursor}
      id={id}
      leaveDelay={leaveDelay}
      leaveTouchDelay={leaveTouchDelay}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      PopperComponen={PopperComponen}
      PopperProp={PopperProp}
      title={title}
      TransitionComponen={TransitionComponen}
      TransitionProp={TransitionProp}
      placement={placement}
      slots={slots}
    >
      {children}
    </NativeTooltip>
  );
}

CoreTooltip.validProps = [
  {
    description:
      "Tooltip reference element. This needs to be able to hold a ref.",
    name : "children",
    types: [{ type: "node" }],
  },
  {
    description: "If true, adds an arrow to the tooltip.",
    name       : "arrow",
    types      : [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: {
          Arrow     : "elementType",
          Popper    : "elementType",
          Tooltip   : "elementType",
          Transition: "elementType",
        },
      },
    ],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.\
      This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: {
          arrow     : "object",
          popper    : "object",
          tooltip   : "object",
          transition: "object",
        },
      },
    ],
  },
  {
    description:
      "Set to true if the title acts as an accessible description. By default the title acts as an accessible label for the child.",
    name : "describeChild",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description: "Do not respond to focus-visible events.",
    name       : "disableFocusListener",
    types      : [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description: "Do not respond to hover events.",
    name       : "disableHoverListener",
    types      : [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description:
      "Makes a tooltip not interactive, i.e. it will close when the user hovers over the tooltip before the leaveDelay is expired.",
    name : "disableInteractive",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description: "Do not respond to long press touch events.",
    name       : "disableTouchListener",
    types      : [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description:
      "The number of milliseconds to wait before showing the tooltip. This prop won't impact the enter touch delay (enterTouchDelay).",
    name : "enterDelay",
    types: [
      {
        default: 100,
        type   : "number",
      },
    ],
  },
  {
    description:
      "The number of milliseconds to wait before showing the tooltip when one was already recently opened.",
    name : "enterNextDelay",
    types: [
      {
        default: 0,
        type   : "number",
      },
    ],
  },
  {
    description:
      "The number of milliseconds a user must touch the element before showing the tooltip.",
    name : "enterTouchDelay",
    types: [
      {
        default: 700,
        type   : "number",
      },
    ],
  },
  {
    description:
      "If true, the tooltip follow the cursor over the wrapped element.",
    name : "followCursor",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description:
      "This prop is used to help implement the accessibility logic. If you don't provide this prop. It falls back to a randomly generated id.",
    name : "id",
    types: [{ type: "string" }],
  },
  {
    description:
      "The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay (leaveTouchDelay).",
    name : "leaveDelay",
    types: [
      {
        default: 0,
        type   : "number",
      },
    ],
  },
  {
    description:
      "The number of milliseconds after the user stops touching an element before hiding the tooltip.",
    name : "leaveTouchDelay",
    types: [
      {
        default: 1500,
        type   : "number",
      },
    ],
  },
  {
    description:
      "Callback fired when the component requests to be closed.\
    Signature:\
    function(event: React.SyntheticEvent) => void\
    event The event source of the callback",
    name : "onClose",
    types: [{ type: "function" }],
  },
  {
    description:
      "Callback fired when the component requests to be open.\
    Signature:\
    function(event: React.SyntheticEvent) => void\
    event The event source of the callback",
    name : "onOpen",
    types: [{ type: "function" }],
  },
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [{ type: "boolean", validValues: [true, false] }],
  },
  {
    description: "The component used for the popper.",
    name       : "PopperComponent",
    types      : [{ default: "Popper", type: "elementType" }],
  },
  {
    description: "Props applied to the Popper element.",
    name       : "PopperProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description:
      "Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",
    name : "title",
    types: [{ type: "node" }],
  },
  {
    description:
      "The component used for the transition. Follow this guide to learn more about the requirements for this component.",
    name : "TransitionComponent",
    types: [{ default: "Grow", type: "elementType" }],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name : "TransitionProps",
    types: [{ type: "object" }],
  },
  {
    description: "Tooltip placement.",
    name       : "placement",
    types      : [
      {
        default    : "bottom",
        type       : "string",
        validValues: [
          "bottom-end",
          "bottom-start",
          "bottom",
          "left-end",
          "left-start",
          "left",
          "right-end",
          "right-start",
          "right",
          "top-end",
          "top-start",
          "top",
        ],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside.\
        This prop is an alias for the components prop, which will be deprecated in the future.",
    name : "slots",
    types: [
      {
        default    : { horizontal: "right", vertical: "top" },
        type       : "object",
        validValues: {
          arrow     : "elementType",
          popper    : "elementType",
          tooltip   : "elementType",
          transition: "elementType",
        },
      },
    ],
  },
];

CoreTooltip.invalidProps = ["sx", "classes"];
