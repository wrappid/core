import CoreClasses from "../styles/CoreClasses";

export default {
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
      title: "Image avatars",
    },
    {
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
      title: "Letter avatars",
    },
    {
      description: "Icon avatars are created by passing an icon as children",
      propsGroups: [
        {
          alt: "",
          src: ""
        }
      ],
      title: "Icon avatars"
    },
    {
      description: "If you need square or rounded avatars, use the variant prop.",
      propsGroups: [
        {
          alt: "",
          src: ""
        }
      ],
      title: "Variants"
    },
    {
      description: "If there is an error loading the avatar image, the component falls back to an alternative in the following order: the provided children, the first letter of the alt text, a generic avatar icon",
      propsGroups: [
        {
          alt: "",
          src: ""
        }
      ],
      title: "Fallbacks"
    },
    {
      description: "AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars.",
      propsGroups: [
        {
          alt: "",
          src: ""
        }
      ],
      title: "Grouped"
    },
    {
      description: " ",
      propsGroups: [
        {
          alt: "",
          src: ""
        }
      ],
      title: "With badge"
    },
  ],
  description: "This is a Core Avatar",
  title      : "Core Avatar",
};