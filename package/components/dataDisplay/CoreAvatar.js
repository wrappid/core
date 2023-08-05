
import React from "react";
import { NativeAvatar } from "@wrappid/styled-components";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreAvatar(props) {
  return <NativeAvatar src={props.src || "../../assets/no_image.jpg"} {...props} />;
}

export const documentation  = {
    categoryGroup: [
      {
        title: "Image avatars",
        description: "Here you can see multiple sizes of the image avatar",
        propsGroups: [
          {
            alt         : "Some Alternative",
            src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            styleClasses:[CoreClasses.DATA_DISPLAY.AVATAR],
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
      },
      {
        title: "Letter avatars",
        description: "Here you can see multiple sizes of the text avatar",
        propsGroups: [
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          },
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_SMALL],
          },
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM],
          },
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_LARGE],
          },
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XLARGE],
          },
          {
            children    : "A",
            styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE],
          }
        ],
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
  };