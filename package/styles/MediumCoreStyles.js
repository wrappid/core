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
    ...new DefaultUtilityStyles().getStyle().mtN1,
    ...new DefaultUtilityStyles().getStyle().mlN1,
    width: "calc(100% + 8px)" + IMPORTANT,
  },
  
  dataTableBody         : {},
  // ----------Data Table Styles Starts----------
  dataTableContainer    : { /* -- ...new DefaultUtilityStyles().getStyle().bgWarningLight, */ },
  dataTableFoot         : {},
  dataTableFullWidthPane: {},
  dataTableHead         : { top: "-8px" + IMPORTANT },
  dataTableHeadTop      : { top: "53px" + IMPORTANT },
  dataTableMiniWidthPane: {
    ...new DefaultUtilityStyles().getStyle().border,
    ...new DefaultUtilityStyles().getStyle().borderRight,
    ...new DefaultUtilityStyles().getStyle().borderPrimaryLight,
    ...new DefaultUtilityStyles().getStyle().positionSticky,
    ...new DefaultUtilityStyles().getStyle().overflowYAuto,
    ...new DefaultUtilityStyles().getStyle().overflowXHidden,
    height: "calc(100vh - 118px)" + IMPORTANT,
    top   : "53px" + IMPORTANT,
  },
  dataTableToolbar: {
    ...new DefaultUtilityStyles().getStyle().mtN2,
    ...new DefaultUtilityStyles().getStyle().pr0,
  },
  dataTableToolbarContainer: {
    ...new DefaultUtilityStyles().getStyle().stickyTop,
    zIndex: "1025" + IMPORTANT,
  },
  
  devBorder: { boxShadow: "inset 0px 0px 1px 1px cyan" },
  
  menuPopover: { minWidth: "25vw" },

  profileBarWidth: { maxWidth: "40vw" + IMPORTANT },
  
  tableCell: { ...new DefaultUtilityStyles().getStyle().px1 },
  
  tableFilterColumnBox: {
    maxHeight: "70vh" + IMPORTANT,
    maxWidth : "25vw" + IMPORTANT,
    padding  : DEFAULT_PADDING + IMPORTANT,
  },
  
  /**
   * Table
   */
  tableHeadCell: {
    ...new DefaultUtilityStyles().getStyle().bgSecondaryLight,
    ...new DefaultUtilityStyles().getStyle().textPrimaryDark,
    ...new DefaultUtilityStyles().getStyle().px1,
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
