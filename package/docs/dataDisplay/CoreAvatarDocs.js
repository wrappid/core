import React from "react";

import CoreIcon from "../../components/dataDisplay/CoreIcon";
import CoreClasses from "../../styles/CoreClasses";

export default {
  categoryGroup: [
    {
      description:
        "Image avatars can be created by passing standard img props src or srcSet to the component",
      propsGroups: [
        {
          alt         : "Some Alternative",
          src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
        {
          alt         : "Some Alternative",
          src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
        {
          alt         : "Some Alternative",
          src         : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
      ],
      title: "Image avatars",
    },
    {
      description:
        "Avatars containing simple characters can be created by passing a string as children.",
      propsGroups: [
        {
          children    : "H",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
        {
          children    : "N",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
        {
          children    : "OP",
          styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
      ],
      title: "Letter avatars",
    },
    {
      description:
        "(stringavatar NOT IMPLEMENTED) You can use different background colors for the avatar. The following demo generates the color based on the name of the person.",
      propsGroups: [
        {
          //   children: "SD",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          // },
          // {
          //   children: "ND",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          // },
          // {
          //   children: "AD",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
      ],
      title: "Letter avatars",
    },
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
        },
      ],
      title: "Sizes",
    },
    {
      description: "Icon avatars are created by passing an icon as children",
      propsGroups: [
        { children: <CoreIcon>FolderIcon</CoreIcon> },
        {
          children    : <CoreIcon>PageviewIcon</CoreIcon>,
          styleClasses: [CoreClasses.BG.BG_PRIMARY_LIGHT],
        },
        {
          children    : <CoreIcon>AssignmentIcon</CoreIcon>,
          styleClasses: [CoreClasses.BG.BG_SECONDARY],
        },
      ],
      title: "Icon avatars",
    },
    {
      description:
        "If you need square or rounded avatars, use the variant prop.",
      propsGroups: [
        {
          children: "N",
          variant : "square",
        },
        {
          children: <CoreIcon>FolderIcon</CoreIcon>,
          variant : "rounded",
        },
      ],
      title: "Variants",
    },
    {
      description:
        "If there is an error loading the avatar image, the component falls back to an alternative in the following order: the provided children, the first letter of the alt text, a generic avatar icon",
      propsGroups: [
        {
          // alt: "",
          // src: "",
        },
      ],
      title: "Fallbacks (NOT IMPLEMENTED)",
    },
    {
      description:
        "AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars. ",
      propsGroups: [
        // {
        //   alt: "Some Alternative",
        //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        // },
        // {
        //   alt: "Some Alternative",
        //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        // },
        // {
        //   alt: "Some Alternative",
        //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        // },
        // {
        //   alt: "Some Alternative",
        //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        // },
        // {
        //   alt: "Some Alternative",
        //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        // },
      ],
      title: "Grouped (NOT IMPLEMENTED)",
    },
    {
      description:
        "If you need to control the total number of avatars not shown, you can use the total prop.",
      propsGroups: [
        {
          //   alt: "Some Alternative",
          //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          // },
          // {
          //   alt: "Some Alternative",
          //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          // },
          // {
          //   alt: "Some Alternative",
          //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
          // },
          // {
          //   alt: "Some Alternative",
          //   src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          //   styleClasses: [CoreClasses.DATA_DISPLAY.AVATAR],
        },
      ],
      title: "Total avatars (NOT IMPLEMENTED)",
    },
    {
      description: " ",
      propsGroups: [
        {
          alt: "",
          src: "",
        },
      ],
      title: "With badge (NOT IMPLEMENTED)",
    },
  ],
  description:
    "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
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
    {
      defaultValues: "",
      description  : "The sizes attribute for the img element.",
      title        : "sizes",
      type         : "string",
      validValues  : "",
    },
    {
      defaultValues: "",
      description  : "The src attribute for the img element.",
      title        : "src",
      type         : "string",
      validValues  : "",
    },
    {
      defaultValues: "",
      description  : "The srcSet attribute for the img element. Use this attribute for responsive image display.",
      title        : "srcSet",
      type         : "string",
      validValues  : "",
    },
    {
      defaultValues: "circular",
      description  : "The shape of the avatar.",
      title        : "variant",
      type         : "circular | rounded | square | string",
      validValues  : "",
    },
  ],
  title: "Core Avatar",
};
