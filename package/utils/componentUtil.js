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
    name       : "children"
  },
];

export const defaultInvalidProps = ["sx", "classes"];

export function sanitizeComponentProps(component, props) {
  console.log(`----------------Props=${Object.keys(props)}`);
  let validProps = [...defaultValidProps, ...(component?.validProps || [])];
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

  console.log(`----------------sanitizedProps[${component.toString()}]=${Object.keys(sanitizedProps)}`);
  return sanitizedProps;
}
