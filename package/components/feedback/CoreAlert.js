// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAlert } from "@wrappid/native";
import { sanitizeComponentProps } from "../../utils/componentUtil";

/** @todo to be implemented later
 * components
 * componentsProps
 * slotProps
 * slots
*/

export default function CoreAlert(props) {
  props = sanitizeComponentProps(CoreAlert, props);
  const {
    action, children, closeText, color, icon, iconMapping, onClose, role, severity, variant
  } = props;
  return (
    <NativeAlert
      action={action}
      closeText={closeText}
      color={color}
      icon={icon}
      iconMapping={iconMapping}
      onClose={onClose}
      role={role}
      severity={severity}
      variant={variant}
    >
      {children}
    </NativeAlert>
  );
  // return <NativeAlert {...props}>{props.children}</NativeAlert>;
}

CoreAlert.validProps = [
  {
  description: "The action to display. It renders after the message, at the end of the alert.",
  name       : "action",
  types      : [
    {
      type: "node"
    }
  ]
  },{
  description: "The content of the component.",
  name       : "children",
  types      : [
    {
      type: "node"
    }
  ]
},{
  description: "Override the default label for the close popup icon button.",
  name       : "closeText",
  types      : [
    {
      default: "Close",
      type   : "string"
    }
  ]
},
{
  description: "The color of the component. Unless provided, the value is taken from the severity prop.",
  name       : "color",
  types      : [
    {
      type       : "string",
      validValues: [
        "error",
        "info",
        "success",
        "warning",
        "string"
      ]
    }
  ]
},

{
  description: "Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.",
  name       :"icon",
  types      : [
    {
      type:"node"
    }
  ]
},
{
  description: "Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.",
  name       : "onClose",
  types      : [
    {
      type:"func"
    }
  ]
},
{
  description: "The ARIA role attribute of the element.",
  name       : "role",
  types      : [
    {
      type :  "alert"
    }
  ]
},
{
  description: "The severity of the alert. This defines the color and icon used.",
  name       : "severity",
  types      : [
    {
      defaultValue: "success",
      type :  "string",
      validValues:[
        "error",
        "info",
        "success",
        "warning"
      ]
    }
  ]
},

{
  description: "The variant to use.",
  name       : "variant",
  types      : [
    {
      defaultValue: "standard",
      type :  "string",
      validValues:[
        "filled",
        "outlined",
        "standard",
        "string"
      ]
    }
  ]
},
];

CoreAlert.invalidProps = ["sx", "classes"];

