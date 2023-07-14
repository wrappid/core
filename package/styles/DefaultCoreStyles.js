import { SMALL_WINDOW_WIDTH } from "../config/constants";
import {
  defaultUtilityStyles,
  DEFAULT_PADDING,
  PX_TAG,
  IMPORTANT,
} from "@wrappid/styles";

const MIN_WIDTH = 0;
const MAX_WIDTH = SMALL_WINDOW_WIDTH - 1;

/**
 * @todo: have to calculate manually nav height varying depending on screen size
 */
const HEADING_TOP_MARGIN = "56px";

export const DEFAULT_SPACING = 1;

export const defaultCoreStyles = {
  devBorder: { ...defaultUtilityStyles.border },

  /**
   * Core App Bar Styles
   */
  appbarHeight: { top: HEADING_TOP_MARGIN + IMPORTANT },
  appDrawerPaperHeight: {
    height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT,
  },
  appBarLogo: { height: "30px" + IMPORTANT },

  /**
   * App Styles
   */
  footer: {
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
    textAlign: "center" + IMPORTANT,
    backgroundColor: defaultUtilityStyles.bgSecondaryLight + IMPORTANT,
  },
  ucImg: { width: "50%" + IMPORTANT },
  basicInfoCard: {},
  // ------------------------------------------
  /**
   * Others
   */
  scAppDiv: {
    /**
     * DO NOT TOUCH THIS STYLE WITHOUT DISCUSSION
     */
    height: "100vh" + IMPORTANT,
    width: "100vw" + IMPORTANT,
  },
  fullWidth: { width: "100%" + IMPORTANT },
  fullHeight: { height: "100%" + IMPORTANT },
  flexBox: { display: "flex" + IMPORTANT },
  fullWidthHeight: { width: "100%" + IMPORTANT, height: "100%" + IMPORTANT },
  pageContainer: {
    minHeight: "100%" + IMPORTANT,
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },
  contentContainer: {
    ...defaultUtilityStyles.bgWhite,
    ...defaultUtilityStyles.borderTop,
    ...defaultUtilityStyles.borderLeft,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.w100,
    ...defaultUtilityStyles.overflowYAuto,
    marginTop: HEADING_TOP_MARGIN + IMPORTANT,
  },
  loggedOutContentContainer: {
    flexGrow: 1 + IMPORTANT,
    width: "100%" + IMPORTANT,
    overflowY: "auto" + IMPORTANT,
  },
  avatar: {
    borderWidth: "2px" + IMPORTANT,
    borderStyle: "solid" + IMPORTANT,
    borderColor: defaultUtilityStyles.borderPrimaryLight + IMPORTANT,
  },
  avatarSmall: { height: "24px" + IMPORTANT, width: "24px" + IMPORTANT },
  avatarMedium: { height: "48px" + IMPORTANT, width: "48px" + IMPORTANT },
  avatarLarge: { height: "72px" + IMPORTANT, width: "72px" + IMPORTANT },
  avatarXLarge: { height: "96px" + IMPORTANT, width: "96px" + IMPORTANT },
  avatarXXLarge: { height: "120px" + IMPORTANT, width: "120px" + IMPORTANT },

  miniDrawerListItemButton: {
    // minHeight: 48,
    // paddingTop: 2,
    // paddingBottom: 2,
  },
  miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

  listItem: {},
  listItemButton: {
    // paddingTop: 2,
    // paddingBottom: 2,
  },
  listItemIcon: {},
  listItemText: {},

  headerItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  headerButtonItem: {},
  headerIconItem: {},
  headerTextItem: {},

  parentItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  parentButtonItem: {},
  parentIconItem: {},
  parentTextItem: {},

  seperatorItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  seperatorButtonItem: {
    height: 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
    // backgroundColor: "gray"
  },
  seperatorIconItem: {
    height: 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
    display: "none" + IMPORTANT,
  },
  seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },

  menuItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  menuItemButtonItem: {},
  menuItemTextItem: {},
  menuItemIconItem: {},

  /**
   * text styles
   */
  hiddenBodyText: {
    overflow: "hidden" + IMPORTANT,
    textOverflow: "ellipsis" + IMPORTANT,
    "-webkit-box-orient": "vertical" + IMPORTANT,
    display: "-webkit-box" + IMPORTANT,
  },

  /**
   * MODAL
   */
  modalContainer: {
    position: "absolute" + IMPORTANT,
    top: "50%" + IMPORTANT,
    left: "50%" + IMPORTANT,
    transform: "translate(-50%, -50%)" + IMPORTANT,
    width: "30%" + IMPORTANT,
    minHeight: "60%" + IMPORTANT,
    boxShadow: 24 + IMPORTANT,
    borderRadius: 10 + IMPORTANT,
    outline: 0 + IMPORTANT,
  },
  modalHeader: { padding: 20 + IMPORTANT },
  modalBody: { padding: 40 + IMPORTANT },

  helperOutsideForm: { marginTop: "-2rem" + IMPORTANT },

  /**
   * Popover Content Styles
   */
  popoverHeader: {
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
    maxWidth: "70vw" + IMPORTANT,
  },
  popoverContent: {
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
    maxWidth: "70vw" + IMPORTANT,
    maxHeight: "70vh" + IMPORTANT,
    minWidth: "300px" + IMPORTANT,
    overflowY: "auto" + IMPORTANT,
  },
  popoverFooter: {
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
    maxWidth: "70vw" + IMPORTANT,
  },

  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    ...defaultUtilityStyles.bgWhite,
    width: "calc(100% + 16px)" + IMPORTANT,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.w100,
    // ...defaultUtilityStyles.mxN1,
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
    // ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.bgWhite,
    // ...defaultUtilityStyles.stickyTop,
    // zIndex: "1025",
  },
  dataTableToolbar: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderBottom,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.pr1,
  },
  dataTableHead: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.borderBottom,
    // ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.shadow,
    ...defaultUtilityStyles.stickyTop,
    top: "-1px" + IMPORTANT,
    // top: "-8px",
  },
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
    padding: DEFAULT_PADDING + PX_TAG + IMPORTANT,
    maxHeight: "70vh" + IMPORTANT,
    maxWidth: "80vw" + IMPORTANT,
  },

  /**
   * Custom table features
   */
  tableRowActionPopover: { backgroundColor: "transparent" + IMPORTANT },

  auditData: {},

  // ----------Data Table Styles Ends------------

  // ----------Widget Styles Starts--------------
  // Counter Widget
  counterWidgetCard: { /* position: "relative",*/ ...defaultUtilityStyles.mb1 },
  counterWidgetCardHeader: { ...defaultUtilityStyles.p1 },
  counterWidgetCardContent: {
    /* position: "inherit", */ ...defaultUtilityStyles.p1,
  },
  counterWidgetCardActions: {},
  counterWidgetCardIcon: {
    /* position: "absolute", */
    bottom: "-16px" + IMPORTANT,
    right: "-16px" + IMPORTANT,
    color: defaultUtilityStyles.bgDefault + IMPORTANT,
    fontSize: "120px" + IMPORTANT,
  },
  counterWidgetCounterStack: {
    ...defaultUtilityStyles.justifyContentSpaceEvenly,
  },
  counterWidgetCounter: {
    ...defaultUtilityStyles.flexDirectionColumn,
    ...defaultUtilityStyles.justifyContentFlexEnd,
    ...defaultUtilityStyles.alignItemsCenter,
  },
  counterWidgetCounterPrimary: {
    color: defaultUtilityStyles.bgPrimary + IMPORTANT,
  },
  // ----------Widget Styles Ends----------------

  // ---------Business Entity Comp---------------
  includedModelCard: {
    borderLeft: `1px solid ${defaultUtilityStyles.bgPrimaryLight}` + IMPORTANT,
    margin: "8px" + IMPORTANT,
    paddingLeft: "8px" + IMPORTANT,
  },
  fiContentWidth: {},
  fitContentHeight: {},
  authWrapper: {
    ...defaultUtilityStyles.justifyContentCenter,
    ...defaultUtilityStyles.alignContentCenter,
    ...defaultUtilityStyles.flexWrapWrap,
    ...defaultUtilityStyles.vh100,
    width: "98vw" + IMPORTANT,
  },
};
