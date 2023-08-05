import React from "react";

import CoreAvatar from "./dataDisplay/CoreAvatar.js";
import CoreClasses from "../styles/CoreClasses.js";
import CoreTypography from "./dataDisplay/CoreTypography.js";

const CoreComponentsRegistryDocs = {
  CoreAvatar: {
    categoryGroup: [
      {
        description: "Here you can see multiple sizes of the image avatar",
        propsGroups: [
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          },
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_SMALL],
          },
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM],
          },
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_LARGE],
          },
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XLARGE],
          },
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE],
          }
        ],
        title: "Different Sizes"
      },
      {
        description: "Here you can see multiple sizes of the text avatar",
        propsGroups: [
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          },
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_SMALL],
          },
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM],
          },
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_LARGE],
          },
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XLARGE],
          },
          {
            children    : <CoreTypography>A</CoreTypography>,
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE],
          }
        ],
        title: "Different Sizes"
      }
    ],
    comp       : CoreAvatar,
    description: "This is a Core Avatar",
    props      : [
      {
        description: "Used with a combination with src and srcSet.",
        title      : "alt",
      },
      {
        description: "Used for image element",
        title      : "src",
      },
    ],
    readme:
      "https://github.com/wrappid/docs/blob/main/components/dataDisplay/CoreAvatar.md",
    title: "Core Avatar",
  },
};

export default CoreComponentsRegistryDocs;
