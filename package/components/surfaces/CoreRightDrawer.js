// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeRightDrawer } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import { toggleRightMenuState } from "../../store/action/menuAction";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreRightDrawer(props) {
  props = sanitizeComponentProps(CoreRightDrawer, props);
  const dispatch = useDispatch();
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  const toggleRightDrawer = () => {
    dispatch(toggleRightMenuState());
  };

  return (
    rightMenuOpen && (
      <NativeRightDrawer
        onOpen={toggleRightDrawer}
        onClose={toggleRightDrawer}
        open={rightMenuOpen}
        {...props}
      >
        {props.children}
      </NativeRightDrawer>
    )
  );
}

CoreRightDrawer.validProps = [
  {
    description: "Side from which the drawer will appear.",
    name       : "anchor",
    types      : [
      { 
        default    : "left",
        type       : "string",
        validValues: ["left", "top", "right", "bottom"],
      }
    ],
  },
  {
    description: "The elevation of the drawer.",
    name       : "elevation",
    types      : [
      { 
        default    : "16",
        type       : "integer",
        validValues: ["left", "top", "right", "bottom"],
      }
    ],
  },
  {
    description: "If true, the backdrop is not rendered.",
    name       : "hideBackdrop",
    types      : [
      { 
        default    : "false",
        type       : "boolean",
        validValues: [true, false],
      }
    ],
  },
  {
    description: "Callback fired when the component requests to be closed. The reason parameter can optionally be used to control the response to onClose. Signature: function(event: object, reason: string) => void event The event source of the callback. Reason Can be 'escapeKeyDown', 'backdropClick'",
    name       : "ModalProps",
    types      : [
      { 
        default: {},
        type   : "object",
      }
    ],
  },
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [
      { 
        default    : "false",
        type       : "boolean",
        validValues: [true, false],
      }
    ],
  },
  {
    description: "Props applied to the Paper element.",
    name       : "PaperProps",
    types      : [
      { 
        default: {},
        type   : "object",
      }
    ],
  },
  {
    description: "Props applied to the Slide element.",
    name       : "SlideProps",
    types      : [
      { 
        default: {},
        type   : "object",
      }
    ],
  },
  {
    description: "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name       : "SlideProps",
    types      : [
      { 
        default: "enter: theme.transitions.duration.enteringScreen exit: theme.transitions.duration.leavingScreen",
        type   : "object",
      }
    ],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      { 
        default: "temporary",
        type   : "permanent' | 'persistent' | 'temporary",
      }
    ],
  },
];

CoreRightDrawer.invalidProps = [];
