import { defaultUtilityStyles, DEFAULT_PADDING, PX_TAG, IMPORTANT } from "@wrappid/styles";

import { SMALL_WINDOW_WIDTH } from "../config/constants";

const MIN_WIDTH = 0;
const MAX_WIDTH = SMALL_WINDOW_WIDTH - 1;

/**
 * @todo: have to calculate manually nav height varying depending on screen size
 */
const HEADING_TOP_MARGIN = "56px";

export const DEFAULT_SPACING = 1;

export const defaultCoreStyles = {
  
  appBarLogo: { height: "30px" + IMPORTANT },
  
  appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
  /**
   * Core App Bar Styles
   */
  appbarHeight        : { top: HEADING_TOP_MARGIN + IMPORTANT },
  auditData           : {},
  
  authAppLogo: {
    height: 50,
    width : 190
  },
  
  authWrapper: {
    ...defaultUtilityStyles.justifyContentCenter,
    ...defaultUtilityStyles.alignContentCenter,
    ...defaultUtilityStyles.flexWrapWrap,
    ...defaultUtilityStyles.vh100,
    width: "98vw" + IMPORTANT,
  },
  
  avatar: {
    borderColor: defaultUtilityStyles.borderPrimaryLight + IMPORTANT,
    borderStyle: "solid" + IMPORTANT,
    borderWidth: "2px" + IMPORTANT,
  },
  
  avatarLarge: { height: "72px" + IMPORTANT, width: "72px" + IMPORTANT },
  
  avatarMedium: { height: "48px" + IMPORTANT, width: "48px" + IMPORTANT },
  
  avatarSmall: { height: "24px" + IMPORTANT, width: "24px" + IMPORTANT },
  
  avatarXLarge: { height: "96px" + IMPORTANT, width: "96px" + IMPORTANT },
  
  avatarXXLarge: { height: "120px" + IMPORTANT, width: "120px" + IMPORTANT },
  
  basicInfoCard: {},
  
  contentContainer: {
    ...defaultUtilityStyles.w100,
    ...defaultUtilityStyles.overflowYAuto,
    marginTop: HEADING_TOP_MARGIN + IMPORTANT,
  },

  // ----------Data Table Styles Ends------------
  // ----------Widget Styles Starts--------------
  // Counter Widget
  counterWidgetCard: { /* position: "relative",*/ ...defaultUtilityStyles.mb1 },
  
  counterWidgetCardActions: {},
  
  counterWidgetCardContent: {
    /* position: "inherit", */ ...defaultUtilityStyles.p1 },
  
  counterWidgetCardHeader: { ...defaultUtilityStyles.p1 },
  
  counterWidgetCardIcon: {
    /* position: "absolute", */
    bottom  : "-16px" + IMPORTANT,
    color   : defaultUtilityStyles.bgDefault + IMPORTANT,
    fontSize: "120px" + IMPORTANT,
    right   : "-16px" + IMPORTANT,
  },
  
  counterWidgetCounter: {
    ...defaultUtilityStyles.flexDirectionColumn,
    ...defaultUtilityStyles.justifyContentFlexEnd,
    ...defaultUtilityStyles.alignItemsCenter,
  },
  
  counterWidgetCounterPrimary: { color: defaultUtilityStyles.bgPrimary + IMPORTANT },
  
  counterWidgetCounterStack: { ...defaultUtilityStyles.justifyContentSpaceEvenly },
  
  dataTable: {
    ...defaultUtilityStyles.mtN1,
    ...defaultUtilityStyles.mlN1,
    width: "calc(100% + 8px)" + IMPORTANT,
  },
  
  dataTableBody: {},
  
  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    ...defaultUtilityStyles.bgWhite,
    width: "calc(100% + 16px)" + IMPORTANT,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.w100,
    // ...defaultUtilityStyles.mxN1,
  },
  
  dataTableFoot: {},
  
  dataTableFullWidthPane: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.pl0,
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
  
  dataTableMiniWidthPane: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderRight,
    ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.bgWarningLight,
    ...defaultUtilityStyles.positionSticky,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.overflowXHidden,
    height: "calc(100vh - 118px)" + IMPORTANT,
    top   : "53px" + IMPORTANT,
  },
  
  dataTableToolbar: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderBottom,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.pr1,
  },
  
  dataTableToolbarContainer: {
    // ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.bgWhite,
    // ...defaultUtilityStyles.stickyTop,
    // zIndex: "1025",
  },
  
  devBorder: { boxShadow: "inset 0px 0px 1px 1px black" },
  
  fiContentWidth: {},
  
  fitContentHeight: {},
  
  flexBox: { display: "flex" + IMPORTANT },
  
  /**
   * App Styles
   */
  footer: {
    backgroundColor: defaultUtilityStyles.bgSecondaryLight + IMPORTANT,
    padding        : DEFAULT_PADDING + PX_TAG + IMPORTANT,
    textAlign      : "center" + IMPORTANT,
  },
  
  fullHeight: { height: "100%" + IMPORTANT },
  
  fullWidth: { width: "100%" + IMPORTANT },
  
  fullWidthHeight: { height: "100%" + IMPORTANT, width: "100%" + IMPORTANT },
  
  headerButtonItem: {},
  
  headerIconItem: {},
  
  headerItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  
  headerTextItem: {},
  
  helperOutsideForm: { marginTop: "-2rem" + IMPORTANT },

  /**
   * text styles
   */
  hiddenBodyText: {
    "-webkit-box-orient": "vertical" + IMPORTANT,
    display             : "-webkit-box" + IMPORTANT,
    overflow            : "hidden" + IMPORTANT,
    textOverflow        : "ellipsis" + IMPORTANT,
  },

  // ----------Widget Styles Ends----------------
  // ---------Business Entity Comp---------------
  includedModelCard: {
    borderLeft : `1px solid ${defaultUtilityStyles.bgPrimaryLight}` + IMPORTANT,
    margin     : "8px" + IMPORTANT,
    paddingLeft: "8px" + IMPORTANT,
  },

  listItem: {},

  listItemButton: {
    // paddingTop: 2,
    // paddingBottom: 2,
  },

  listItemIcon: {},

  listItemText: {},

  loggedOutContentContainer: {
    ...defaultUtilityStyles.w100,
    ...defaultUtilityStyles.overflowYAuto,
  },

  menuItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },

  menuItemButtonItem: {},
  
  menuItemIconItem: {},
  
  menuItemTextItem: {},

  miniDrawerListItemButton: {
    // minHeight: 48,
    // paddingTop: 2,
    // paddingBottom: 2,
  },

  miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

  modalBody: { padding: 40 + IMPORTANT },

  /**
   * MODAL
   */
  modalContainer: {
    borderRadius: 10 + IMPORTANT,
    borderRadius: "8px" + IMPORTANT,
    boxShadow   : 24 + IMPORTANT,
    left        : "50%" + IMPORTANT,
    minHeight   : "60%" + IMPORTANT,
    outline     : 0 + IMPORTANT,
    padding     : DEFAULT_PADDING,
    position    : "absolute" + IMPORTANT,
    top         : "50%" + IMPORTANT,
    transform   : "translate(-50%, -50%)" + IMPORTANT,
    width       : "30%" + IMPORTANT,
  },
  
  modalHeader: { padding: 20 + IMPORTANT },

  pageContainer: {
    minHeight: `calc(100vh - ${HEADING_TOP_MARGIN})` + IMPORTANT,
    padding  : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },

  parentButtonItem: {},

  parentIconItem: {},

  parentItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },

  parentTextItem: {},

  popoverContent: {
    maxHeight: "70vh" + IMPORTANT,
    maxWidth : "70vw" + IMPORTANT,
    minWidth : "300px" + IMPORTANT,
    overflowY: "auto" + IMPORTANT,
    padding  : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },

  popoverFooter: {
    maxWidth: "70vw" + IMPORTANT,
    padding : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },

  /**
   * Popover Content Styles
   */
  popoverHeader: {
    maxWidth: "70vw" + IMPORTANT,
    padding : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },
  
  profileBarWidth: { minWidth: "250px" },

  // ------------------------------------------
  /**
   * Others
   */
  scAppDiv: {
    /**
     * DO NOT TOUCH THIS STYLE WITHOUT DISCUSSION
     */
    height: "100vh" + IMPORTANT,
    width : "100vw" + IMPORTANT,
  },
  
  seperatorButtonItem: {
    height   : 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
    // backgroundColor: "gray"
  },
  
  seperatorIconItem: {
    display  : "none" + IMPORTANT,
    height   : 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
  },
  
  seperatorItem: {
    padding: 0 + IMPORTANT,
    // backgroundColor: theme.palette.secondary.light,
  },
  
  seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },
  
  tableCell: { ...defaultUtilityStyles.px1 },
  
  /**
   * Table
   */
  tableHeadCell: {
    ...defaultUtilityStyles.bgSecondaryLight,
    ...defaultUtilityStyles.textPrimaryDark,
    ...defaultUtilityStyles.px1,
  },
  
  /**
   * Custom table features
   */
  tableRowActionPopover: { backgroundColor: "transparent" + IMPORTANT },
  
  tableToolbarPopoverScrollableContainer: {
    maxHeight: "70vh" + IMPORTANT,
    maxWidth : "80vw" + IMPORTANT,
    padding  : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },
  ucImg          : { width: "50%" + IMPORTANT },
  verifiedSuccess: {
    ...defaultUtilityStyles.textSuccessDark,
    ...defaultUtilityStyles.pl1,
    fontSize: "0.9rem" + IMPORTANT,
  },
  verifiedWarning: {
    ...defaultUtilityStyles.textSuccessWarning,
    ...defaultUtilityStyles.pl1,
    fontSize: "0.9rem" + IMPORTANT,
  }
};
