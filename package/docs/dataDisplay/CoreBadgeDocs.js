import React from "react";

import CoreIcon from "../../components/dataDisplay/CoreIcon";
import CoreClasses from "../../styles/CoreClasses";

export default {
  categoryGroup: [
    {
      description: "Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.",
      propsGroups: [
        {
          badgeContent: 4,
          children    : <CoreIcon>MailIcon</CoreIcon>, 
          styleClasses: [CoreClasses.COLOR.TEXT_PRIMARY],
        }
      ],
      title: "Basic badge",
    },
    {
      description: "Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.",
      propsGroups: [
        {
          badgeContent: "{4}", 
          color       : "primary",
        }
      ],
      title: "Color",
    },
    {
      description: "Here is an example of customizing the component.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Customization (NOT IMPLEMENTED)",
    },
    {
      description: "The visibility of badges can be controlled using the invisible prop.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Badge visibility",
    },
    {
      description: "You can use the max prop to cap the value of the badge content.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Maximum value",
    },
    {
      description: "The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Dot badge",
    },
    {
      description: "You can use the overlap prop to place the badge relative to the corner of the wrapped element.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Badge overlap",
    },
    {
      description: "You can use the anchorOrigin prop to move the badge to any corner of the wrapped element.",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Badge alignment",
    },
    {
      description: "You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with aria-label:",
      propsGroups: [
        {
          badgeContent: "", 
          color       : "",
        }
      ],
      title: "Accessibility",
    },
  ],
  description: "Badge generates a small badge to the top-right of its child(ren).",

  props: [
    {
      defaultValues: "",
      description  : "Used in combination with src or srcSet to provide an alt attribute for the rendered img element.",
      title        : "alt",
      type         : "string",
      validValues  : "",
    },
    {
      defaultValues: "",
      description  : "Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string.",
      title        : "children",
      type         : "node",
      validValues  : "",
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
      description  : "The component used for the root node. Either a string to use a HTML element or a component.",
      title        : "component",
      type         : "elementType",
      validValues  : "",
    },
    {
      defaultValues: "",
      description  : "Attributes applied to the img element if the component is used to display an image. It can be used to listen for the loading error event.",
      title        : "imgProps",
      type         : "object",
      validValues  : "",
    },
  ],
  title: "Core Badge",
};