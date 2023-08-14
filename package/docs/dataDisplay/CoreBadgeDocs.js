
import CoreIcon from "../../components/dataDisplay/CoreIcon";
import CoreClasses from "../../styles/CoreClasses";

export default {
  categoryGroup: [
    {
      description:
        "Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.",
      propsGroups: [
        {
          badgeContent: 4,
          children    : <CoreIcon>MailIcon</CoreIcon>,
          styleClasses: [CoreClasses.COLOR.TEXT_PRIMARY],
        },
      ],
      title: "Basic badge",
    },
    {
      description:
        "Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.",
      propsGroups: [
        {
          badgeContent: "{4}",
          color       : "primary",
        },
      ],
      title: "Color",
    },
    {
      description: "Here is an example of customizing the component.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Customization (NOT IMPLEMENTED)",
    },
    {
      description:
        "The visibility of badges can be controlled using the invisible prop.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Badge visibility",
    },
    {
      description:
        "You can use the max prop to cap the value of the badge content.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Maximum value",
    },
    {
      description:
        "The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Dot badge",
    },
    {
      description:
        "You can use the overlap prop to place the badge relative to the corner of the wrapped element.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Badge overlap",
    },
    {
      description:
        "You can use the anchorOrigin prop to move the badge to any corner of the wrapped element.",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Badge alignment",
    },
    {
      description:
        "You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with aria-label:",
      propsGroups: [
        {
          badgeContent: "",
          color       : "",
        },
      ],
      title: "Accessibility",
    },
  ],
  description:
    "Badge generates a small badge to the top-right of its child(ren).",

  props: [
    {
      defaultValues: { horizontal: "right", vertical: "top" },
      description:
        "The anchor of the badge.",
      title      : "anchorOrigin",
      type       : { horizontal: "left" | "right", vertical: "bottom" | "top" },
      validValues: "",
    },
    {
      defaultValues: "",
      description:
        "The content rendered within the badge.",
      title      : "badgeContent",
      type       : "node",
      validValues: "",
    },
    {
      defaultValues: "",
      description:
        "The badge will be added relative to this node.",
      title      : "children",
      type       : "node",
      validValues: "",
    },
    {
      defaultValues: "",
      description  : "Override or extend the styles applied to the component.",
      title        : "styleClasses",
      type         : "object",
      validValues  : "",
    },
    {
      defaultValues: "",
      description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
      title      : "component",
      type       : "elementType",
      validValues: "",
    },
    {
      defaultValues: "",
      description:
        "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
      title      : "components",
      type       : "Badge?: elementType, Root?: elementType",
      validValues: "",
    },
    {
      defaultValues: "",
      description:
        "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
      title      : "componentsProps",
      type       : "badge?: func | object, root?: func | object",
      validValues: "",
    },
    {
      defaultValues: "false",
      description:
        "If true, the badge is invisible.",
      title      : "invisible",
      type       : "bool",
      validValues: "",
    },
    {
      defaultValues: "99",
      description:
        "Max count to show.",
      title      : "max",
      type       : "number",
      validValues: "",
    },
    {
      defaultValues: "rectangular",
      description:
        "Wrapped shape the badge should overlap.",
      title      : "overlap",
      type       : "circular | rectangular",
      validValues: "",
    },
    {
      defaultValues: "false",
      description:
        "Controls whether the badge is hidden when badgeContent is zero.",
      title      : "showZero",
      type       : "bool",
      validValues: "",
    },
    {
      defaultValues: "false",
      description:
        "The props used for each slot inside the Badge.",
      title      : "slotProps",
      type       : "badge?: func | object, root?: func | object",
      validValues: "",
    },
    {
      defaultValues: "",
      description:
        "The components used for each slot inside the Badge. Either a string to use a HTML element or a component.",
      title      : "slots",
      type       : " badge?: elementType, root?: elementType",
      validValues: "",
    },
    {
      defaultValues: "standard",
      description:
        "The variant to use.",
      title      : "variant",
      type       : "dot | standard | string",
      validValues: "",
    },
  ],
  title: "Core Badge",
};
