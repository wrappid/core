import { defaultUtilityStyles, DEFAULT_PADDING, PX_TAG, IMPORTANT } from "@wrappid/styles";

// -- import { SMALL_WINDOW_WIDTH } from "../config/constants";

// -- const MIN_WIDTH = 0;
// -- const MAX_WIDTH = SMALL_WINDOW_WIDTH - 1;

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

  authCard: {
    background: "transparent" + IMPORTANT,
    boxShadow : "none" + IMPORTANT
  },

  authWrapper: {
    ...defaultUtilityStyles.justifyContentCenter,
    ...defaultUtilityStyles.alignContentCenter,
    ...defaultUtilityStyles.flexWrapWrap,
    ...defaultUtilityStyles.vh100,
    width: "98vw" + IMPORTANT,
  },

  avatar: {},

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

  counterWidgetCard: { ...defaultUtilityStyles.mb1 },

  counterWidgetCardActions: {},

  counterWidgetCardContent: { ...defaultUtilityStyles.p1 },

  counterWidgetCardHeader: { ...defaultUtilityStyles.p1 },

  counterWidgetCardIcon: {
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

  dataTableContainer: {
    ...defaultUtilityStyles.bgWhite,
    width: "calc(100% + 16px)" + IMPORTANT,
  },

  dataTableFoot: {},

  dataTableFullWidthPane: {},

  dataTableHead: {
    ...defaultUtilityStyles.stickyTop,
    top: "-1px" + IMPORTANT,
  },

  dataTableHeadTop: {},

  dataTableMiniWidthPane: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderRight,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.positionSticky,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.overflowXHidden,
    height: "calc(100vh - 118px)" + IMPORTANT,
    top   : "53px" + IMPORTANT
  },

  dataTableToolbar: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderBottom,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.pr1,
  },

  dataTableToolbarContainer: { ...defaultUtilityStyles.bgWhite },

  devBorder: { ...defaultUtilityStyles.border },

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
  headerItem    : { padding: 0 + IMPORTANT },

  headerTextItem: {},

  helperOutsideForm: { marginTop: "-2rem" + IMPORTANT },

  hiddenBodyText: {
    "-webkit-box-orient": "vertical" + IMPORTANT,
    display             : "-webkit-box" + IMPORTANT,
    overflow            : "hidden" + IMPORTANT,
    textOverflow        : "ellipsis" + IMPORTANT,
  },

  includedModelCard: {
    borderLeft : `1px solid ${defaultUtilityStyles.bgPrimaryLight}` + IMPORTANT,
    margin     : "8px" + IMPORTANT,
    paddingLeft: "8px" + IMPORTANT,
  },

  listItem: {},

  listItemButton: {},

  listItemIcon: {},

  listItemText: {},

  loggedOutContentContainer: {
    ...defaultUtilityStyles.w100,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.bgPrimaryDark
  },

  loggedOutPageContainer: { minHeight: `calc(100vh - ${HEADING_TOP_MARGIN})` + IMPORTANT },

  menuItem: { padding: 0 + IMPORTANT },

  menuItemButtonItem: {},

  menuItemIconItem: {},

  menuItemTextItem: {},

  menuPopover: { minWidth: "75vw" },

  miniDrawerListItemButton: {},

  miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

  modalBody: { padding: 40 + IMPORTANT },

  modalContainer: {
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

  parentItem: { padding: 0 + IMPORTANT },

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

  popoverHeader: {
    maxWidth: "70vw" + IMPORTANT,
    padding : DEFAULT_PADDING + PX_TAG + IMPORTANT,
  },

  profileBarWidth: { minWidth: "250px" },

  scAppDiv: {
    height: "100vh" + IMPORTANT,
    width : "100vw" + IMPORTANT,
  },

  seperatorButtonItem: {
    height   : 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
  },

  seperatorIconItem: {
    display  : "none" + IMPORTANT,
    height   : 0 + IMPORTANT,
    minHeight: 0 + IMPORTANT,
  },

  seperatorItem: { padding: 0 + IMPORTANT },

  seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },

  tableCell: { ...defaultUtilityStyles.px1 },

  tableHeadCell: {
    ...defaultUtilityStyles.bgSecondaryLight,
    ...defaultUtilityStyles.textPrimaryDark,
    ...defaultUtilityStyles.px1,
  },

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
    ...defaultUtilityStyles.textWarningDark,
    ...defaultUtilityStyles.pl1,
    fontSize: "0.9rem" + IMPORTANT,
  }
};
