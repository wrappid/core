import { BaseComponentData, Prop } from "../POC/POC-PRITAM/BaseComponent";

export class CoreSnackbarData extends BaseComponentData {
  action: Prop = {
    name: "action",
    description: "The action to display.",
    types: [{ type: "node" }],
    value: null,
  };

  anchorOrigin: Prop = {
    name: "anchorOrigin",
    description: "The anchor position of the Snackbar.",
    types: [
      {
        type: "object",
        validValues: [
          {
            horizontal: ["center", "left", "right"],
            vertical: ["bottom", "top"],
          },
        ],
      },
    ],
    value: { horizontal: "left", vertical: "bottom" },
  };

  autoHideDuration: Prop = {
    name: "autoHideDuration",
    description: "The number of milliseconds before auto-hiding the Snackbar.",
    types: [{ type: "number" }],
    value: 5000,
  };

  children: Prop = {
    name: "children",
    description: "Replace the SnackbarContent component.",
    types: [{ type: "element" }],
    value: null,
  };

  disableWindowBlurListener: Prop = {
    name: "disableWindowBlurListener",
    description:
      "If true, the auto-hide duration will expire even if the window is not focused.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false,
  };

  message: Prop = {
    name: "message",
    description: "The message to display.",
    types: [{ type: "string" }],
    value: "",
  };

  onClose: Prop = {
    name: "onClose",
    description: "Callback fired when the component requests to be closed.",
    types: [{ type: "function" }],
    value: undefined,
  };

  open: Prop = {
    name: "open",
    description: "If true, the component is shown.",
    types: [{ type: "boolean" }],
    value: false,
  };

  resumeHideDuration: Prop = {
    name: "resumeHideDuration",
    description:
      "The number of milliseconds before dismissing after user interaction.",
    types: [{ type: "number" }],
    value: undefined,
  };

  TransitionComponent: Prop = {
    name: "TransitionComponent",
    description: "The component used for the transition.",
    types: [{ type: "elementType", validValues: ["Grow"] }],
    value: "Grow",
  };

  transitionDuration: Prop = {
    name: "transitionDuration",
    description: "The duration for the transition, in milliseconds.",
    types: [{ type: "object" }],
    value: {},
  };

  TransitionProps: Prop = {
    name: "TransitionProps",
    description: "Props applied to the transition element.",
    types: [{ type: "object", validValues: [] }],
    value: {},
  };
}