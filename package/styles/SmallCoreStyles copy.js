import { MEDIUM_WINDOW_WIDTH, SMALL_WINDOW_WIDTH } from "../config/constants";
import {
  defaultUtilityStyles,
  DEFAULT_PADDING,
  IMPORTANT,
  PX_TAG,
  smallUtilityStyles,
} from "@wrappid/styles";

const MIN_WIDTH = SMALL_WINDOW_WIDTH;
const MAX_WIDTH = MEDIUM_WINDOW_WIDTH - 1;

const HEADING_TOP_MARGIN = "64px";

export const smallCoreStyles = {
  devBorder: { boxShadow: "inset 0px 0px 1px 1px yellow" },
  /**
   * Core App Bar Styles
   */
  appbarHeight: { top: HEADING_TOP_MARGIN + IMPORTANT },
  appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
  appBarLogo: {
    cursor: "pointer" + IMPORTANT,
    height: "40px" + IMPORTANT,
    paddingLeft: "8px" + IMPORTANT,
  },
  authAppLogo: {
    width: 190
  },

  contentContainer: { marginTop: HEADING_TOP_MARGIN + IMPORTANT },
  pageContainer: {
    minHeight: `calc(100vh - ${HEADING_TOP_MARGIN})` + IMPORTANT,
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },

  authFormContainer: { width: "100%" + IMPORTANT },
  authBanner: {
    backgroundImage: "url(./images/welcome-bg.png)" + IMPORTANT,
    backgroundPosition: "center" + IMPORTANT,
    backgroundSize: "cover" + IMPORTANT,
    backgroundRepeat: "no-repeat" + IMPORTANT,
    height: "100%" + IMPORTANT,
  },
  authContainer: { height: "100%" + IMPORTANT },
  authForm: { height: "100%" + IMPORTANT },
  profileBarWidth: { maxWidth: "80vw" + IMPORTANT },

  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    // ...defaultUtilityStyles.bgSuccessLight,
  },
  dataTableMiniWidthPane: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderRight,
    ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.bgWarningLight,
    ...defaultUtilityStyles.positionSticky,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.overflowXHidden,
    height: "calc(100vh - 118px)" + IMPORTANT,
    top: "53px" + IMPORTANT,
  },
  dataTableFullWidthPane: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.pl0,
  },
  dataTable: {
    ...defaultUtilityStyles.mtN1,
    ...defaultUtilityStyles.mlN1,
    width: "calc(100% + 8px)" + IMPORTANT,
  },
  dataTableToolbarContainer: {},
  dataTableToolbar: {},
  dataTableHead: {},
  dataTableHeadTop: {},
  dataTableBody: {},
  dataTableFoot: {},

  /**
   * Table
   */
  tableHeadCell: {
    ...defaultUtilityStyles.bgSecondaryLight,
    ...defaultUtilityStyles.textPrimaryDark,
    ...defaultUtilityStyles.px1,
  },
  tableCell: { ...defaultUtilityStyles.px1 },
  tableToolbarPopoverScrollableContainer: {
    padding: DEFAULT_PADDING + IMPORTANT,
    maxHeight: "70vh" + IMPORTANT,
    maxWidth: "80vw" + IMPORTANT,
  },

  /**
   * Custom table features
   */
  tableRowActionPopover: { backgroundColor: "transparent" + IMPORTANT },

  auditData: {},

  // ----------Data Table Styles Ends------------

  fiContentWidth: { width: "fit-content" + IMPORTANT },
  fitContentHeight: { height: "fit-content" + IMPORTANT },
};
