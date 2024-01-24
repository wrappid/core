// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeModal } from "@wrappid/native";

import { toggleModalState } from "../../store/action/modalAction";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreModal(props) {
  props = sanitizeComponentProps(CoreModal, props);
  return <NativeModal {...props} toggleModalState={toggleModalState} />;
}
CoreModal.validProps = [
  {
    description: "If true, the component is shown.",
    name       : "open*",
    types      : [{ type: "boolean" }],
  },
  {
    description:
      "A backdrop component. This prop enables custom backdrop rendering.Deprecated - Use slots.backdrop instead. While this prop currently works, it will be removed in the next major version.",
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
    description:
      "Props applied to the Backdrop element.Deprecated - Use slotProps.backdrop instead.",
    name : "BackdropProps",
    types: [{ type: "object" }],
  },
  {
    description:
      "When set to true the Modal waits until a nested Transition is completed before closing.",
    name : "closeAfterTransition",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "ementType" }],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["classes{ Backdrop?: elementType, Root?: elementType }"],
      },
    ],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: "{ backdrop?: func| object, root?: func| object }",
        
      },
    ],
  },
  {
    description:
      "An HTML element or function that returns one. The container will have the portal children appended to it.By default, it uses the body of the top-level document object, so it's simply document.body most of the time.",
    name : "container",
    types: [{ type: "HTML element| func" }],
  },
  {
    description:
      "If true, the modal will not automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. This also works correctly with any modal children that have the disableAutoFocus prop.Generally this should never be set to true as it makes the modal less accessible to assistive technologies, like screen readers.",
    name : "disableAutoFocus",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the modal will not prevent focus from leaving the modal while open.Generally this should never be set to true as it makes the modal less accessible to assistive technologies, like screen readers.",
    name : "disableEnforceFocus",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, hitting escape will not fire the onClose callback.",
    name       : "disableEscapeKeyDown",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The children will be under the DOM hierarchy of the parent component.",
    name : "disablePortal",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the modal will not restore focus to previously focused element once modal is hidden or unmounted.",
    name : "disableRestoreFocus",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description: "Disable the scroll lock behavior.",
    name       : "disableScrollLock",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the backdrop is not rendered.",
    name       : "hideBackdrop",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal.",
    name : "keepMounted",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Callback fired when the backdrop is clicked.Deprecated - Use the onClose prop with the reason argument to handle the backdropClick events.",
    name : "onBackdropClick",
    types: [{ type: "function" }],
  },
  {
    description: "Callback fired when the component requests to be closed. The reason parameter can optionally be used to control the response to onClose.Signature:function(event: object, reason: string) => voidevent The event source of the callback.reason Can be: \"escapeKeyDown\", \"backdropClick\".",
    name       : "onClose",
    types      : [{ type: "function" }],
  },
  {
    description: "A function called when a transition enters.",
    name       : "onTransitionEnter",
    types      : [{ type: "function" }],
  },
  {
    description: "A function called when a transition has exited.",
    name       : "onTransitionExited",
    types      : [{ default: "", type: "function" }],
  },
  {
    description: "The props used for each slot inside the Modal.",
    name       : "slotProps",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: ["{ backdrop?: func| object, root?: func| object }"],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside the Modal. Either a string to use a HTML element or a component.",
    name : "slots",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ backdrop?: elementType, root?: elementType }"],
      },
    ],
  },
];
CoreModal.invalidProps = ["sx", "classes"];
