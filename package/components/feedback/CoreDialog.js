// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDialog } from "@wrappid/native";

import { coreDialogInitValue } from "../../config/constants";
import { CoreDialogContext } from "../../config/contextHandler";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export const CORE_DIALOG_TYPES = {
  FAILURE: "error",
  INFO   : "info",
  SUCCESS: "success",
};

export default function CoreDialog(props) {
  props = sanitizeComponentProps(CoreDialog, props);

  return (
    <NativeDialog 
      {...props}
      dialogInitValue={coreDialogInitValue}
      DialogContext={CoreDialogContext}
    />
  );
}

CoreDialog.validProps = [
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The id(s) of the element(s) that describe the dialog.",
    name       : "aria-describedby",
    types      : [{ type: "string" }],
  },
  {
    description: "The id(s) of the element(s) that label the dialog.",
    name       : "aria-labelledby",
    types      : [{ type: "string" }],
  },
  {
    description:
      "A backdrop component. This prop enables custom backdrop rendering.\
    Deprecated - Use slots.backdrop instead. While this prop currently works, it will be removed in the next major version.",
    name : "BackdropComponent",
    types: [
      {
        default:
          "styled(Backdrop, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (props, styles) => { return styles.backdrop; }, })({ zIndex: -1, })",
        type: "elementType",
      },
    ],
  },
  {
    description: "Dialog children, usually the included sub-components.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "If true, hitting escape will not fire the onClose callback.",
    name       : "disableEscapeKeyDown",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the dialog is full-screen.",
    name       : "fullScreen",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the dialog stretches to maxWidth.\
    Notice that the dialog width grow is limited by the default margin.",
    name : "fullWidth",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.",
    name : "maxWidth",
    types: [
      {
        default    : "sm",
        type       : "string",
        validValues: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          false
        ],
      },
    ],
  },
  {
    description:
      "Callback fired when the backdrop is clicked.\
    Deprecated - Use the onClose prop with the reason argument to handle the backdropClick events.",
    name : "onBackdropClick",
    types: [{ type: "function" }],
  },
  {
    description: `Callback fired when the component requests to be closed.
    Signature:function(event: object, reason: string) => voidevent The event source of the callback.
    reason Can be: "escapeKeyDown", "backdropClick".`,
    name : "onClose",
    types: [{ type: "function" }],
  },
  {
    description: "The component used to render the body of the dialog.",
    name       : "PaperComponent",
    types      : [{ default: "Paper", type: "elementType" }],
  },
  {
    description: "Props applied to the Paper element.",
    name       : "PaperProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "Determine the container for scrolling the dialog.",
    name       : "scroll",
    types      : [{ default: "paper", type: "string", validValues: ["body", "paper"] }],
  },
  {
    description:
      "The component used for the transition. Follow this guide to learn more about the requirements for this component.",
    name : "TransitionComponent",
    types: [{ default: "Fade", type: "elementType" }],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name : "TransitionProps",
    types: [{ default: {}, type: "object" }],
  },
  {
    description:
      "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name : "transitionDuration",
    types: [
      {
        default:
          "{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen, }",
        type: "number \
      | { appear?: number, enter?: number, exit?: number }",
      },
    ],
  },
];

CoreDialog.invalidProps = [];
