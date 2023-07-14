import { LARGE_WINDOW_WIDTH, MEDIUM_WINDOW_WIDTH } from "../config/constants";
import {
  defaultUtilityStyles,
  DEFAULT_PADDING,
  IMPORTANT,
  mediumUtilityStyles,
} from "@wrappid/styles";

const MIN_WIDTH = MEDIUM_WINDOW_WIDTH;
const MAX_WIDTH = LARGE_WINDOW_WIDTH - 1;
const HEADING_TOP_MARGIN = "64px";

export const mediumCoreStyles = {
  devBorder: { ...defaultUtilityStyles.borderInfo },
  /**
   * Core App Bar Styles
   */
  appBarLogo: {},

  authBanner: {
    backgroundImage: "url(./images/welcome-bg.png)" + IMPORTANT,
    backgroundPosition: "center" + IMPORTANT,
    backgroundSize: "cover" + IMPORTANT,
    backgroundRepeat: "no-repeat" + IMPORTANT,
    height: "100%" + IMPORTANT,
  },
  authForm: { height: "100%" + IMPORTANT },
  authFormContainer: { width: "60%" + IMPORTANT },
  authContainer: { height: "100%" + IMPORTANT },
  profileBarWidth: { maxWidth: "40vw" + IMPORTANT },
  tableFilterColumnBox: {
    padding: DEFAULT_PADDING + IMPORTANT,
    maxHeight: "70vh" + IMPORTANT,
    maxWidth: "25vw" + IMPORTANT,
  },

  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    // ...defaultUtilityStyles.bgWarningLight,
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
  dataTableToolbarContainer: {
    ...defaultUtilityStyles.stickyTop,
    zIndex: "1025" + IMPORTANT,
  },
  dataTableToolbar: {
    ...defaultUtilityStyles.mtN2,
    ...defaultUtilityStyles.pr0,
  },
  dataTableHead: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.borderBottom,
    // ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.shadow,
    top: "-8px" + IMPORTANT,
  },
  dataTableHeadTop: {
    // top: "50px",
    top: "53px" + IMPORTANT,
  },
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

  authCardMinWidth: { minWidth: "25%" + IMPORTANT },
  authCardMaxWidth: { maxWidth: "25%" + IMPORTANT },

  // ----------Data Table Styles Ends------------
};
