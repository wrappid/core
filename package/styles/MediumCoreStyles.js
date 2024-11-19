import {
  DEFAULT_PADDING,
  IMPORTANT,
  MediumUtilityStyles
  // eslint-disable-next-line import/no-unresolved
} from "@wrappid/styles";

import DefaultCoreStyles from "./DefaultCoreStyles";

// -- const MIN_WIDTH = MEDIUM_WINDOW_WIDTH;
// -- const MAX_WIDTH = LARGE_WINDOW_WIDTH - 1;
// const HEADING_TOP_MARGIN = "64px";

export default class MediumCoreStyles extends DefaultCoreStyles {
  mediumUtilityStyles = new MediumUtilityStyles().style;
  
  constructor() {
    super();

    this.style = {
      /**
       * Core App Bar Styles
       */
      appBarLogo: {},
  
      auditData: {},

      contentContainer: {},
  
      dataTable: {
        ...this.defaultUtilityStyles.mtN1,
        ...this.defaultUtilityStyles.mlN1,
        width: "calc(100% + 8px)" + IMPORTANT,
      },
  
      dataTableBody         : {},
      // ----------Data Table Styles Starts----------
      dataTableContainer    : { /* -- ...this.defaultUtilityStyles.bgWarningLight, */ },
      dataTableFoot         : {},
      dataTableFullWidthPane: {},
      dataTableHead         : { top: "0px" + IMPORTANT },
      dataTableHeadTop      : { top: "64px" + IMPORTANT },
      dataTableMiniWidthPane: {},
      dataTableToolbar      : {
        ...this.defaultUtilityStyles.mtN2,
        ...this.defaultUtilityStyles.pr0,
      },
      dataTableToolbarContainer: { zIndex: "1025" + IMPORTANT },
  
      devBorder: { boxShadow: "inset 0px 0px 1px 1px cyan" },
  
      menuPopover: { minWidth: "25vw" },

      profileBarWidth: { maxWidth: "40vw" + IMPORTANT },
  
      tableCell: { ...this.defaultUtilityStyles.px1 },
  
      tableFilterColumnBox: {
        maxHeight: "70vh" + IMPORTANT,
        maxWidth : "25vw" + IMPORTANT,
        padding  : DEFAULT_PADDING + IMPORTANT,
      },
  
      /**
       * Table
       */
      tableHeadCell: {
        ...this.defaultUtilityStyles.bgSecondaryLight,
        ...this.defaultUtilityStyles.textPrimaryDark,
        ...this.defaultUtilityStyles.px1,
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
  }
}
