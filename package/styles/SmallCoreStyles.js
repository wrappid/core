import {
  DefaultUtilityStyles,
  DEFAULT_PADDING,
  IMPORTANT,
  PX_TAG
} from "@wrappid/styles";

// -- import { MEDIUM_WINDOW_WIDTH, SMALL_WINDOW_WIDTH } from "../config/constants";

// -- const MIN_WIDTH = SMALL_WINDOW_WIDTH;
// -- const MAX_WIDTH = MEDIUM_WINDOW_WIDTH - 1;

const HEADING_TOP_MARGIN = "64px";

export const smallCoreStyles = {
  
  appBarLogo: {
    cursor     : "pointer" + IMPORTANT,
    height     : "40px" + IMPORTANT,
    paddingLeft: "8px" + IMPORTANT,
  },
  
  appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
  /**
   * Core App Bar Styles
   */
  appbarHeight        : { top: HEADING_TOP_MARGIN + IMPORTANT },
  auditData           : {},
  authAppLogo         : { width: 190 },

  /**
   * @todo review required 
    authAppLogo: {
      height: "auto",
      width : 190
    }, 
  */
  authBanner: {
    backgroundImage   : "url(./images/welcome-bg.png)" + IMPORTANT,
    backgroundPosition: "center" + IMPORTANT,
    backgroundRepeat  : "no-repeat" + IMPORTANT,
    backgroundSize    : "cover" + IMPORTANT,
    height            : "100%" + IMPORTANT,
  },

  authContainer    : { height: "100%" + IMPORTANT },
  authForm         : { height: "100%" + IMPORTANT },
  authFormContainer: { width: "100%" + IMPORTANT },
  
  contentContainer: { marginTop: HEADING_TOP_MARGIN + IMPORTANT },
  
  dataTable: {
    ...new DefaultUtilityStyles().getStyle().mtN1,
    ...new DefaultUtilityStyles().getStyle().mlN1,
    width: "calc(100% + 8px)" + IMPORTANT,
  },
  
  dataTableBody         : {},
  // ----------Data Table Styles Starts----------
  dataTableContainer    : {},
  dataTableFoot         : {},
  dataTableFullWidthPane: {},
  dataTableHead         : {},
  dataTableHeadTop      : {},
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
  dataTableToolbar         : {},
  dataTableToolbarContainer: {},
  devBorder                : { ...new DefaultUtilityStyles().getStyle().borderError },
  
  // ----------Data Table Styles Ends------------
  fiContentWidth: { width: "fit-content" + IMPORTANT },
  
  fitContentHeight: { height: "fit-content" + IMPORTANT },
  
  pageContainer: {
    minHeight: `calc(100vh - ${HEADING_TOP_MARGIN})` + IMPORTANT,
    padding  : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },
  
  profileBarWidth: { maxWidth: "80vw" + IMPORTANT },
  
  tableCell: { ...new DefaultUtilityStyles().getStyle().px1 },
  
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
  }
};
