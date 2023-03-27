import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE,
} from "../components/forms/coreFormConstants";

const XS_DEFAULT_GRID_SIZE = 12;
const SM_DEFAULT_GRID_SIZE = 12;
const MD_DEFAULT_GRID_SIZE = 12;
const LG_DEFAULT_GRID_SIZE = 12;
const XL_DEFAULT_GRID_SIZE = 12;

export function getGridSizeProps(gridSize, formFlag) {
  var finalProps = {
    xs: formFlag ? FORM_XS_DEFAULT_GRID_SIZE : XS_DEFAULT_GRID_SIZE,
    sm: formFlag ? FORM_SM_DEFAULT_GRID_SIZE : SM_DEFAULT_GRID_SIZE,
    md: formFlag ? FORM_MD_DEFAULT_GRID_SIZE : MD_DEFAULT_GRID_SIZE,
    lg: formFlag ? FORM_LG_DEFAULT_GRID_SIZE : LG_DEFAULT_GRID_SIZE,
    xl: formFlag ? FORM_XL_DEFAULT_GRID_SIZE : XL_DEFAULT_GRID_SIZE,
  };
  if (gridSize && !isNaN(gridSize)) {
    finalProps = {
      xs: gridSize,
      sm: gridSize,
      md: gridSize,
      lg: gridSize,
      xl: gridSize,
    };
  } else if (gridSize) {
    if (gridSize.xs) {
      finalProps = {
        xs: gridSize.xs,
        sm: gridSize.xs,
        md: gridSize.xs,
        lg: gridSize.xs,
        xl: gridSize.xs,
      };
    }
    if (gridSize.sm) {
      finalProps = {
        ...finalProps,
        sm: gridSize.sm,
        md: gridSize.sm,
        lg: gridSize.sm,
        xl: gridSize.sm,
      };
    }
    if (gridSize.md) {
      finalProps = {
        ...finalProps,
        md: gridSize.md,
        lg: gridSize.md,
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

  return finalProps;
}
