import {
  DefaultUtilityStyles,
  DEFAULT_PADDING,
  IMPORTANT
} from "@wrappid/styles";

// -- const MIN_WIDTH = MEDIUM_WINDOW_WIDTH;
// -- const MAX_WIDTH = LARGE_WINDOW_WIDTH - 1;
// -- const HEADING_TOP_MARGIN = "64px";

export const mediumCoreStyles = {
  /**
   * Core App Bar Styles
   */
  appBarLogo: {},
  
  auditData: {},

  authBanner: {
    backgroundImage   : "url(./images/welcome-bg.png)" + IMPORTANT,
    backgroundPosition: "center" + IMPORTANT,
    backgroundRepeat  : "no-repeat" + IMPORTANT,
    backgroundSize    : "cover" + IMPORTANT,
    height            : "100%" + IMPORTANT,
  },
  authCardMaxWidth: { maxWidth: "25%" + IMPORTANT },
  authCardMinWidth: { minWidth: "25%" + IMPORTANT },
  
  authContainer: { height: "100%" + IMPORTANT },
  
  authForm: { height: "100%" + IMPORTANT },
  
  authFormContainer: { width: "60%" + IMPORTANT },
  
  dataTable: {
    ...new DefaultUtilityStyles().style.mtN1,
    ...new DefaultUtilityStyles().style.mlN1,
    width: "calc(100% + 8px)" + IMPORTANT,
  },
  
  dataTableBody         : {},
  // ----------Data Table Styles Starts----------
  dataTableContainer    : { /* -- ...new DefaultUtilityStyles().style.bgWarningLight, */ },
  dataTableFoot         : {},
  dataTableFullWidthPane: {},
  dataTableHead         : { top: "-8px" + IMPORTANT },
  dataTableHeadTop      : { top: "53px" + IMPORTANT },
  dataTableMiniWidthPane: {
    ...new DefaultUtilityStyles().style.border,
    ...new DefaultUtilityStyles().style.borderRight,
    ...new DefaultUtilityStyles().style.borderPrimaryLight,
    ...new DefaultUtilityStyles().style.positionSticky,
    ...new DefaultUtilityStyles().style.overflowYAuto,
    ...new DefaultUtilityStyles().style.overflowXHidden,
    height: "calc(100vh - 118px)" + IMPORTANT,
    top   : "53px" + IMPORTANT,
  },
  dataTableToolbar: {
    ...new DefaultUtilityStyles().style.mtN2,
    ...new DefaultUtilityStyles().style.pr0,
  },
  dataTableToolbarContainer: {
    ...new DefaultUtilityStyles().style.stickyTop,
    zIndex: "1025" + IMPORTANT,
  },
  
  devBorder: { boxShadow: "inset 0px 0px 1px 1px cyan" },
  
  menuPopover: { minWidth: "25vw" },

  profileBarWidth: { maxWidth: "40vw" + IMPORTANT },
  
  tableCell: { ...new DefaultUtilityStyles().style.px1 },
  
  tableFilterColumnBox: {
    maxHeight: "70vh" + IMPORTANT,
    maxWidth : "25vw" + IMPORTANT,
    padding  : DEFAULT_PADDING + IMPORTANT,
  },
  
  /**
   * Table
   */
  tableHeadCell: {
    ...new DefaultUtilityStyles().style.bgSecondaryLight,
    ...new DefaultUtilityStyles().style.textPrimaryDark,
    ...new DefaultUtilityStyles().style.px1,
  },

  /**
   * Custom table features
   */
  tableRowActionPopover                 : { backgroundColor: "transparent" + IMPORTANT },
  tableToolbarPopoverScrollableContainer: {
    maxHeight: "70vh" + IMPORTANT,
    maxWidth : "80vw" + IMPORTANT,
    padding  : DEFAULT_PADDING + IMPORTANT,
  },

  // ----------Data Table Styles Ends------------
};
