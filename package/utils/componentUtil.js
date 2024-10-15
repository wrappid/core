/* eslint-disable no-console */
import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE
} from "../components/inputs/forms/coreFormConstants";

const XS_DEFAULT_GRID_SIZE = 12;
const SM_DEFAULT_GRID_SIZE = 12;
const MD_DEFAULT_GRID_SIZE = 12;
const LG_DEFAULT_GRID_SIZE = 12;
const XL_DEFAULT_GRID_SIZE = 12;

export function getGridSizeProps(gridSize, formFlag, speechToText) {
  let finalProps = {
    lg: formFlag ? FORM_LG_DEFAULT_GRID_SIZE : LG_DEFAULT_GRID_SIZE,
    md: formFlag ? FORM_MD_DEFAULT_GRID_SIZE : MD_DEFAULT_GRID_SIZE,
    sm: formFlag ? FORM_SM_DEFAULT_GRID_SIZE : SM_DEFAULT_GRID_SIZE,
    xl: formFlag ? FORM_XL_DEFAULT_GRID_SIZE : XL_DEFAULT_GRID_SIZE,
    xs: formFlag ? FORM_XS_DEFAULT_GRID_SIZE : XS_DEFAULT_GRID_SIZE,
  };
  
  if (gridSize && !isNaN(gridSize)) {
    finalProps = {
      lg: gridSize,
      md: gridSize,
      sm: gridSize,
      xl: gridSize,
      xs: gridSize,
    };
  } else if (gridSize) {
    if (gridSize.xs) {
      finalProps = {
        lg: gridSize.xs,
        md: gridSize.xs,
        sm: gridSize.xs,
        xl: gridSize.xs,
        xs: gridSize.xs,
      };
    }
    if (gridSize.sm) {
      finalProps = {
        ...finalProps,
        lg: gridSize.sm,
        md: gridSize.sm,
        sm: gridSize.sm,
        xl: gridSize.sm,
      };
    }
    if (gridSize.md) {
      finalProps = {
        ...finalProps,
        lg: gridSize.md,
        md: gridSize.md,
        xl: gridSize.md,
      };
    }
    if (gridSize.lg) {
      finalProps = {
        ...finalProps,
        lg: gridSize.lg,
        xl: gridSize.lg,
      };
    }
    if (gridSize.xl) {
      finalProps = {
        ...finalProps,
        xl: gridSize.xl,
      };
    }
  }

  if (formFlag && speechToText) {
    finalProps.xs = finalProps.xs - 1;
    finalProps.sm = finalProps.sm - 1;
    finalProps.md = finalProps.md - 1;
    finalProps.lg = finalProps.lg - 1;
    finalProps.xl = finalProps.xl - 1;
  }

  return finalProps;
}

export const defaultValidProps = [
  { 
    description: "This prop allows you to set the height of a component.",
    name       : "height",
    types      : [{ type: "number" }]
  },
  { 
    description: "This prop enables you to set the width of a component",
    name       : "width",
    types      : [{ type: "number" }]
  },
  {
    description: "Override or extend the styles applied to the component. See UtilityClasses in @wrappid/styles for more details.",
    name       : "styleClasses",
    types      : [{ type: "object" }]
  },
  {
    description: "A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists.It is recommended to use a string as a key that uniquely identifies the items in the list.",
    name       : "key",
    types      : [{ type: "string" }]
  },
  {
    description: "Refs provide a way to access DOM nodes or React or React Native elements created in the render method.",
    name       : "ref",
    types      : [{ type: "object" }]
  },
  {
    description: "Used to render node elements inside the node element. This can be an element, or just a string.",
    name       : "children",
    types      : [{ type: "node" }]
  },
];

export const defaultFormControlProps = [
  {
    default: "true",
    name   : "fullWidth",
    types  : [{ type: "boolean", validValues: [true, false] }],
  }
];

export const defaultValidEvents = [
  // Mouse Events
  {
    description: "Fired when an element is clicked.",
    name       : "onClick",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the right mouse button is clicked (before the context menu appears).",
    name       : "onContextMenu",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element is double-clicked.",
    name       : "onDoubleClick",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a mouse button is pressed down on an element.",
    name       : "onMouseDown",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the mouse enters an element.",
    name       : "onMouseEnter",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the mouse leaves an element.",
    name       : "onMouseLeave",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the mouse moves over an element.",
    name       : "onMouseMove",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the mouse leaves an element or its child elements.",
    name       : "onMouseOut",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the mouse enters an element or its child elements.",
    name       : "onMouseOver",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a mouse button is released over an element.",
    name       : "onMouseUp",
    types      : [{ type: "function" }]
  },

  // Keyboard Events
  {
    description: "Fired when a key is pressed down.",
    name       : "onKeyDown",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a key is pressed and released.",
    name       : "onKeyPress",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a key is released.",
    name       : "onKeyUp",
    types      : [{ type: "function" }]
  },

  // Form Events
  {
    description: "Fired when the value of an input element changes.",
    name       : "onChange",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element gets user input.",
    name       : "onInput",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element is invalid.",
    name       : "onInvalid",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a form is submitted.",
    name       : "onSubmit",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a form is reset.",
    name       : "onReset",
    types      : [{ type: "function" }]
  },

  // Focus Events
  {
    description: "Fired when an element receives focus.",
    name       : "onFocus",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element loses focus.",
    name       : "onBlur",
    types      : [{ type: "function" }]
  },

  // Touch Events
  {
    description: "Fired when a touch point has been disrupted.",
    name       : "onTouchCancel",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a touch point is removed from the touch surface.",
    name       : "onTouchEnd",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a touch point is moved along the touch surface.",
    name       : "onTouchMove",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a touch point is placed on the touch surface.",
    name       : "onTouchStart",
    types      : [{ type: "function" }]
  },

  // UI Events
  {
    description: "Fired when an element's scrollbar is being scrolled.",
    name       : "onScroll",
    types      : [{ type: "function" }]
  },

  // Wheel Events
  {
    description: "Fired when the mouse wheel rolls up or down over an element.",
    name       : "onWheel",
    types      : [{ type: "function" }]
  },

  // Clipboard Events
  {
    description: "Fired when the user copies the content of an element.",
    name       : "onCopy",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the user cuts the content of an element.",
    name       : "onCut",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the user pastes content into an element.",
    name       : "onPaste",
    types      : [{ type: "function" }]
  },

  // Drag & Drop Events
  {
    description: "Fired when an element is dragged.",
    name       : "onDrag",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the user has finished dragging an element.",
    name       : "onDragEnd",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a dragged element enters a valid drop target.",
    name       : "onDragEnter",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element is no longer the drag operation's immediate selection target.",
    name       : "onDragExit",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a dragged element leaves a valid drop target.",
    name       : "onDragLeave",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an element is being dragged over a valid drop target.",
    name       : "onDragOver",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the user starts dragging an element.",
    name       : "onDragStart",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a dragged element is dropped on a valid drop target.",
    name       : "onDrop",
    types      : [{ type: "function" }]
  },

  // Animation & Transition Events
  {
    description: "Fired when a CSS animation has started.",
    name       : "onAnimationStart",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a CSS animation has completed.",
    name       : "onAnimationEnd",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a CSS animation is repeated.",
    name       : "onAnimationIteration",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when a CSS transition has completed.",
    name       : "onTransitionEnd",
    types      : [{ type: "function" }]
  },

  // Other Events
  {
    description: "Fired when the loading of a resource has been aborted.",
    name       : "onAbort",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the browser can start playing the media.",
    name       : "onCanPlay",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the browser estimates it can play the media without stopping for buffering.",
    name       : "onCanPlayThrough",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the duration of the media changes.",
    name       : "onDurationChange",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media has become empty.",
    name       : "onEmptied",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media encounters an encryption key.",
    name       : "onEncrypted",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media has reached the end.",
    name       : "onEnded",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when an error occurs while loading an external file.",
    name       : "onError",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when media data is loaded.",
    name       : "onLoadedData",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when metadata (like dimensions and duration) are loaded.",
    name       : "onLoadedMetadata",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the browser starts looking for the specified media.",
    name       : "onLoadStart",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media is paused.",
    name       : "onPause",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media is ready to start playing.",
    name       : "onPlay",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media actually starts playing.",
    name       : "onPlaying",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired periodically as the browser loads a resource.",
    name       : "onProgress",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the playing speed of the media changes.",
    name       : "onRateChange",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the seeking attribute is set to false indicating that seeking has ended.",
    name       : "onSeeked",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the seeking attribute is set to true indicating that seeking is active.",
    name       : "onSeeking",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the browser is trying to get media data, but data is not available.",
    name       : "onStalled",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the browser is intentionally not getting media data.",
    name       : "onSuspend",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the current playback position has changed.",
    name       : "onTimeUpdate",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the volume has changed.",
    name       : "onVolumeChange",
    types      : [{ type: "function" }]
  },
  {
    description: "Fired when the media has paused but is expected to resume.",
    name       : "onWaiting",
    types      : [{ type: "function" }]
  },
];

export const defaultInvalidProps = ["sx", "classes"];

export function sanitizeComponentProps(component, props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // console.log(`----------------Props=${Object.keys(props)}`);
  let validProps = [...defaultValidProps, ...defaultValidEvents, ...(component?.validProps || [])];
  let sanitizedProps = {};

  let validPropKeys = validProps.map(prop => { return prop?.name; });

  if (validProps) {
    validPropKeys.push(...component.validProps.map(prop => { return prop?.name; }));
    Object.keys(props).forEach(eachPropKey => {
      // if prop key is a valid prop key
      if (validPropKeys.includes(eachPropKey)) {
        /**
         * @todo
         * 1. check if prop value type is valid type
         * 2. check if prop value is a valid value
        */
        let propObj = validProps?.filter(eachProp => eachProp?.name === eachPropKey)[0];

        if (propObj?.types
          && propObj?.types?.length > 0) {
          let validPropTypes = propObj?.types?.map(eachType => eachType?.type);
          let typeOfPropValue = typeof props[eachPropKey];

          /**
           * @todo check if prop value type is valid type
           */
          if (validPropTypes.includes(typeOfPropValue) || 1 === 1) {
            // do nothing
            let propTypeObj = propObj?.types?.filter(eachType => eachType?.type === typeOfPropValue)[0];

            if (propTypeObj?.validValues
              && propTypeObj?.validValues?.length > 0) {
              let validValues = propTypeObj?.validValues;

              if (propTypeObj?.type !== "object" && validValues?.includes(props[eachPropKey])) {
                sanitizedProps[eachPropKey] = props[eachPropKey];
              }else{
                /**
                 * @todo
                 * @techoneel please write proper logic for type object.
                 * 
                 */
                sanitizedProps[eachPropKey] = props[eachPropKey];
              }
            } else {
              sanitizedProps[eachPropKey] = props[eachPropKey];
            }
          }
        } else {
          /**
           * @todo
           * we will remove this else conditions once all valid props declared in all components 
           */
          sanitizedProps[eachPropKey] = props[eachPropKey];
        }
      }
    });
  } else {
    /**
     * @todo
     * we will remove this else conditions once all valid props declared in all components 
     */
    validProps = props;
  }

  // eslint-disable-next-line etc/no-commented-out-code
  // console.log(`----------------sanitizedProps[${component.toString()}]=${Object.keys(sanitizedProps)}`);
  return sanitizedProps;
}
