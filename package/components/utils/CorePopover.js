// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativePopover } from "@wrappid/native";

export default function CorePopover(props) {
  return <NativePopover {...props} />;
}
CorePopover.validProps = [
  {
    description: "If true, the component is shown.",
    name: "open*",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "A ref for imperative actions. It currently only supports updatePosition() action.",
    name: "action",
    types: [{ default: "", type: "ref" }],
  },
  {
    description:
      "An HTML element, PopoverVirtualElement, or a function that returns either. It's used to set the position of the popover.",
    name: "anchorEl",
    types: [{ default: "", type: "HTML element| func" }],
  },
  {
    description:
      "This is the point on the anchor where the popover's anchorEl will attach to. This is not used when the anchorReference is 'anchorPosition'.Options: vertical: [top, center, bottom]; horizontal: [left, center, right].",
    name: "anchorOrigin",
    types: [
      {
        default: "{ vertical: 'top', horizontal: 'left', }",
        type: "object",
        validValues: [
          {
            horizontal: ["center", "left", "right", "number"],
            vertical: ["bottom", "center", "top", "number"],
          },
        ],
      },
    ],
  },
  {
    description:
      "This is the position that may be used to set the position of the popover. The coordinates are relative to the application's client area.",
    name: "anchorPosition",
    types: [
      {
        default: "",
        type: "object",
        validValues: [{ left: "number", top: "number" }],
      },
    ],
  },
  {
    description:
      "This determines which anchor prop to refer to when setting the position of the popover.",
    name: "anchorReference",
    types: [
      {
        default: "anchorEl'",
        type: "string",
        validValues: ["anchorElanchorEl", "anchorPosition", "none"],
      },
    ],
  },
  {
    description:
      "An HTML element, component instance, or function that returns either. The container will passed to the Modal component.By default, it uses the body of the anchorEl's top-level document object, so it's simply document.body most of the time.",
    name: "container",
    types: [{ default: "", type: "HTML element| func" }],
  },
  {
    description: "Disable the scroll lock behavior.",
    name: "disableScrollLock",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The elevation of the popover.",
    name: "elevation",
    types: [{ default: "8", type: "integer" }],
  },
  {
    description:
      "Specifies how close to the edge of the window the popover can appear. If null, the popover will not be constrained by the window.",
    name: "marginThreshold",
    types: [{ default: "16", type: "number" }],
  },
  {
    description:
      "Callback fired when the component requests to be closed. The reason parameter can optionally be used to control the response to onClose.",
    name: "onClose",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "Props applied to the Paper element.This prop is an alias for slotProps.paper and will be overriden by it if both are used.Deprecated - Use slotProps.paper instead.",
    name: "PaperProps",
    types: [
      {
        default: "{}",
        type: "object",
        validValues: [`{ component?: element type }`],
      },
    ],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.",
    name: "slotProps",
    types: [
      {
        default: "{}",
        type: "object",
        validValues: [`{ paper?: func| object, root?: func| object }`],
      },
    ],
  },
  {
    description: "The components used for each slot inside.",
    name: "slots",
    types: [
      {
        default: "{}",
        type: "object",
        validValues: [`{ paper?: elementType, root?: elementType }`],
      },
    ],
  },
  {
    description:
      "This is the point on the popover which will attach to the anchor's origin.Options: vertical: [top, center, bottom, x(px)]; horizontal: [left, center, right, x(px)].",
    name: "transformOrigin",
    types: [
      {
        default: "{ vertical: 'top', horizontal: 'left', }",
        type: "object",
        validValues: [
          {
            horizontal: ["center", "left", "right", "number"],
            vertical: ["bottom", "center", "top", "number"],
          },
        ],
      },
    ],
  },
  {
    description:
      "The component used for the transition. Follow this guide to learn more about the requirements for this component.",
    name: "TransitionComponent",
    types: [{ default: "Grow", type: "elementType" }],
  },
  {
    description:
      "Set to 'auto' to automatically calculate transition time based on height.",
    name: "transitionDuration",
    types: [
      {
        default: "auto'",
        type: "string",
        validValues: [`'sxauto'| number| { appear?: number, enter?: number, exit?: number }`,],
      },
    ],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name: "TransitionProps",
    types: [{ default: "{}", type: "object" }],
  },
];
CorePopover.invalidProps = ["sx", "classes"];
