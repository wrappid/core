/* eslint-disable sort-keys-fix/sort-keys-fix */

// eslint-disable-next-line import/no-unresolved 
import { DefaultUtilityStyles, DEFAULT_PADDING, PX_TAG, IMPORTANT, BaseStyle } from "@wrappid/styles";

/**
 * @todo: have to calculate manually nav height varying depending on screen size
 */
const HEADING_TOP_MARGIN = "56px";

export const DEFAULT_SPACING = 1;

export default class DefaultCoreStyles extends BaseStyle {
  defaultUtilityStyles = new DefaultUtilityStyles().style;
  
  constructor(){
    super();

    this.style = {
      appBarLogo: { height: "30px" + IMPORTANT },

      appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
      /**
       * Core App Bar Styles
       */
      appbarHeight        : { top: HEADING_TOP_MARGIN + IMPORTANT },
      auditData           : {},
    
      avatar: {},
    
      avatarLarge: { height: "72px" + IMPORTANT, width: "72px" + IMPORTANT },
    
      avatarMedium: { height: "48px" + IMPORTANT, width: "48px" + IMPORTANT },
    
      avatarSmall: { height: "24px" + IMPORTANT, width: "24px" + IMPORTANT },
    
      avatarXLarge: { height: "96px" + IMPORTANT, width: "96px" + IMPORTANT },
    
      avatarXXLarge: { height: "120px" + IMPORTANT, width: "120px" + IMPORTANT },
    
      basicInfoCard: {},
    
      contentContainer: {
        ...this.defaultUtilityStyles.w100,
        ...this.defaultUtilityStyles.overflowYAuto,
        marginTop: HEADING_TOP_MARGIN + IMPORTANT,
      },
    
      counterWidgetCard: { ...this.defaultUtilityStyles.mb1 },
    
      counterWidgetCardActions: {},
    
      counterWidgetCardContent: { ...this.defaultUtilityStyles.p1 },
    
      counterWidgetCardHeader: { ...this.defaultUtilityStyles.p1 },
    
      counterWidgetCardIcon: {
        bottom  : "-16px" + IMPORTANT,
        color   : this.defaultUtilityStyles.bgDefault + IMPORTANT,
        fontSize: "120px" + IMPORTANT,
        right   : "-16px" + IMPORTANT,
      },
    
      counterWidgetCounter: {
        ...this.defaultUtilityStyles.flexDirectionColumn,
        ...this.defaultUtilityStyles.justifyContentFlexEnd,
        ...this.defaultUtilityStyles.alignItemsCenter,
      },
    
      counterWidgetCounterPrimary: { color: this.defaultUtilityStyles.bgPrimary + IMPORTANT },
    
      counterWidgetCounterStack: { ...this.defaultUtilityStyles.justifyContentSpaceEvenly },
    
      dataTable: {
        ...this.defaultUtilityStyles.mtN1,
        ...this.defaultUtilityStyles.mlN1,
        width: "calc(100% + 8px)" + IMPORTANT,
      },
    
      dataTableBody: {},
    
      dataTableContainer: {
        ...this.defaultUtilityStyles.bgWhite,
        width: "calc(100% + 16px)" + IMPORTANT,
      },
    
      dataTableFoot: {},
    
      dataTableFullWidthPane: {},
    
      dataTableHead: {
        ...this.defaultUtilityStyles.stickyTop,
        top: "-1px" + IMPORTANT,
      },
    
      dataTableHeadTop: {},
    
      dataTableMiniWidthPane: {
        ...this.defaultUtilityStyles.border,
        ...this.defaultUtilityStyles.borderRight,
        ...this.defaultUtilityStyles.borderPrimaryLight,
        ...this.defaultUtilityStyles.positionSticky,
        ...this.defaultUtilityStyles.overflowYAuto,
        ...this.defaultUtilityStyles.overflowXHidden,
        height: "calc(100vh - 118px)" + IMPORTANT,
        top   : "53px" + IMPORTANT
      },
    
      dataTableToolbar: {
        ...this.defaultUtilityStyles.border,
        ...this.defaultUtilityStyles.borderBottom,
        ...this.defaultUtilityStyles.borderPrimaryLight,
        ...this.defaultUtilityStyles.pr1,
      },
    
      dataTableToolbarContainer: { ...this.defaultUtilityStyles.bgWhite },
    
      devBorder: { ...this.defaultUtilityStyles.border },
    
      fiContentWidth: {},
    
      fitContentHeight: {},
    
      flexBox: { display: "flex" + IMPORTANT },
    
      /**
       * App Styles
       */
      footer: {
        backgroundColor: this.defaultUtilityStyles.bgSecondaryLight + IMPORTANT,
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
        borderLeft : `1px solid ${this.defaultUtilityStyles.bgPrimaryLight}` + IMPORTANT,
        margin     : "8px" + IMPORTANT,
        paddingLeft: "8px" + IMPORTANT,
      },
    
      listItem: {},
    
      listItemButton: {},
    
      listItemIcon: {},
    
      listItemText: {},
    
      loggedOutContentContainer: {
        ...this.defaultUtilityStyles.w100,
        ...this.defaultUtilityStyles.overflowYAuto,
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
    
      parentItem    : { padding: 0 + IMPORTANT },
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
    
      tableCell: { ...this.defaultUtilityStyles.px1 },
    
      tableHeadCell: {
        ...this.defaultUtilityStyles.bgSecondaryLight,
        ...this.defaultUtilityStyles.textPrimaryDark,
        ...this.defaultUtilityStyles.px1,
      },
    
      tableRowActionPopover                 : { backgroundColor: "transparent" + IMPORTANT },
      tableToolbarPopoverScrollableContainer: {
        maxHeight: "70vh" + IMPORTANT,
        maxWidth : "80vw" + IMPORTANT,
        padding  : DEFAULT_PADDING + PX_TAG + IMPORTANT,
      },
      ucImg          : { width: "50%" + IMPORTANT },
      verifiedSuccess: {
        ...this.defaultUtilityStyles.textSuccessDark,
        ...this.defaultUtilityStyles.pl1,
        fontSize: "0.9rem" + IMPORTANT,
      },
      verifiedWarning: {
        ...this.defaultUtilityStyles.textWarningDark,
        ...this.defaultUtilityStyles.pl1,
        fontSize: "0.9rem" + IMPORTANT,
      },
      /**
       * BELOW STYLES ARE REALTED TO LAYOUTS AND SHOULD NOT BE CHANGED.
       *  */ 
      blankLayout        : { ...this.defaultUtilityStyles.vw100 },
      centeredBlankLayout: {
        ...this.defaultUtilityStyles.vh100,
        ...this.defaultUtilityStyles.vw100,
        ...this.defaultUtilityStyles.displayFlex,
        ...this.defaultUtilityStyles.flexDirectionColumn,
        ...this.defaultUtilityStyles.justifyContentCenter,
        ...this.defaultUtilityStyles.alignItemsCenter,
      },
      vCenteredBlankLayout: {
        ...this.defaultUtilityStyles.vh100,
        ...this.defaultUtilityStyles.vw100,
        ...this.defaultUtilityStyles.displayFlex,
        ...this.defaultUtilityStyles.flexDirectionColumn,
        ...this.defaultUtilityStyles.justifyContentCenter,
      },
      hCenteredBlankLayout: {
        ...this.defaultUtilityStyles.vh100,
        ...this.defaultUtilityStyles.vw100,
        ...this.defaultUtilityStyles.displayFlex,
        ...this.defaultUtilityStyles.flexDirectionColumn,
        ...this.defaultUtilityStyles.alignItemsCenter,
      },
      headerLayoutHeader              : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgInfo },
      headerLayoutContent             : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn, ...this.defaultUtilityStyles.bgInfo },
      footerLayoutContent             : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn, ...this.defaultUtilityStyles.bgInfo },
      footerLayoutFooter              : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgSecondaryLight },
      headerFooterLayoutHeader        : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgPrimary },
      headerFooterLayoutContent       : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgPrimary, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn },
      headerFooterLayoutFooter        : { ...this.defaultUtilityStyles.bgSecondaryLight, ...this.defaultUtilityStyles.vw100 },
      fixedHeaderLayoutHeader         : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgPrimary },
      fixedHeaderLayoutContent        : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn, ...this.defaultUtilityStyles.bgPrimary },
      fixedFooterLayoutContent        : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn, ...this.defaultUtilityStyles.bgInfo },
      fixedFooterLayoutFooter         : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgPrimary },
      fixedHeaderFooterLayoutHeader   : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgInfo },
      fixedHeaderFooterLayoutContent  : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn, ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgSecondary },
      fixedHeaderFooterLayoutFooter   : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgSecondary },
      leftDrawerLayoutHeader          : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.bgSecondary },
      leftDrawerLayoutLeftDrawer      : {},
      leftDrawerLayoutRightContent    : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn },
      rightDrawerLayoutHeader         : { ...this.defaultUtilityStyles.vw100 },
      rightDrawerLayoutRightDrawer    : {},
      rightDrawerLayoutLeftContent    : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn },
      leftRightDrawerLayoutHeader     : { ...this.defaultUtilityStyles.vw100 },
      leftRightDrawerLayoutLeftDrawer : {},
      leftRightDrawerLayoutContent    : { ...this.defaultUtilityStyles.vw100, ...this.defaultUtilityStyles.displayFlex, ...this.defaultUtilityStyles.flexDirectionColumn },
      leftRightDrawerLayoutRightDrawer: {},
      twoColumnLayoutFirstCol         : { ...this.defaultUtilityStyles.bgSecondary },
      twoColumnLayoutSecondCol        : { ...this.defaultUtilityStyles.bgInfo },
      threeColumnLayoutFirstCol       : { ...this.defaultUtilityStyles.bgSecondary },
      threeColumnLayoutSecondCol      : {},
      threeColumnLayoutThirdCol       : { ...this.defaultUtilityStyles.bgSecondary },
    };
  }
}
