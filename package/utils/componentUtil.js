import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE
} from "../components/forms/coreFormConstants";

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

export function sanitizeComponentProps(component, props) {
  console.log(`component.validProps`);
  console.log(component.validProps);
  return props;
}