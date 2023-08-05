export const ENV_DEV_MODE = "DEV";
export const ENV_STAGE_MODE = "STAGE";
export const ENV_PROD_MODE = "PROD";

export const refreshInterval = 15 * 60 * 1000; // 15 minutes

// bootstrap - BREAKPOINTS
// export const SMALL_WINDOW_WIDTH = "576";
// export const MEDIUM_WINDOW_WIDTH = "768";
// export const LARGE_WINDOW_WIDTH = "992";
// export const X_LARGE_WINDOW_WIDTH = "1200";
// export const XX_LARGE_WINDOW_WIDTH = "1400";
// mui - BREAKPOINTS
export const SMALL_WINDOW_WIDTH = "600";
export const MEDIUM_WINDOW_WIDTH = "900";
export const LARGE_WINDOW_WIDTH = "1200";
export const X_LARGE_WINDOW_WIDTH = "1536";
// applying same width of XLARGE
// since it's not present in MUI-Breakpoints
// so it could be supported later on
export const XX_LARGE_WINDOW_WIDTH = "1536";

export const PALETTE_PRIMARY = "primary";
export const PALETTE_SECONDARY = "secondary";
export const PALETTE_ERROR = "error";
export const PALETTE_WARNING = "warning";
export const PALETTE_SUCCESS = "success";
export const FONT_SMALL = "small";
export const FONT_MEDIUM = "medium";
export const FONT_LARGE = "large";

export const HTTP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
};

export const DB_CONST = {
  RXEFY_DB: "RXEFY_DB",
  RXEFY_MEDICINE_DB: "RXEFY_MEDICINE_DB",
};

export const urls = {
  HOME_ROUTE: "home",
  // Admin Route
  DATA_CREATOR: "dataCreator",
  DATA_VIEWER: "dataViewer",
  DATABASE_EDITOR: "database/editor",
  FROMS: "forms",
  ROUTES: "routes",
  TEST: "test",

  SUBSCRIPTION: "subscription",
  REPORTS: "reports",
  CREATE_DOCTOR: "create_doctor",
  // salesforce

  // verification
  DOCTOR_VERIFICATION: "verify/doctor",

  COMPONENTS: "dev/guide/components",
  STYLE_UTILITIES: "dev/guide/style_utilities",

  /**
   * Bug Report, Feature, Enhancement & Support Requests
   */
  REQUEST_SUPPORT: "/request/support",
  REQUEST_FEATURE: "/request/feature",
  REQUEST_ENHANCEMENT: "/request/enhancement",
  REPORT_BUG: "/report/bug",

  /**
   * SHOW_SPECIFIC
   */
  SHOW_SPECIFIC: "/showAll/:formId",

  //Communication Templates
  COMMUNITATION_TEMPLATES: "communication/templates",
};

/**
 * Message Type
 */
export const MESSAGE_TYPE = {
  INFO_MESSAGE: "info",
  SUCCESS_MESSAGE: "success",
  WARNING_MESSAGE: "warning",
  ERROR_MESSAGE: "error",
};

/**
 * table toolbar options
 */
export const tableToolbar = {
  FILTER_COLUMN: "FILTER_COLUMN",
  SORT_DATA: "SORT_DATA",
  // FILTER_DATA: "FILTER_DATA",
  TABLE_DENSITY: "TABLE_DENSITY",
  EXPORT_DATA: "EXPORT_DATA",
};

/**
 * Table density
 */
export const __TableDensity = {
  COMPACT: "Compact",
  STANDARD: "Standard",
  COMFORTABLE: "Comfortable",
};

export const __EntityStatus = {
  // UNKNOWN:0,
  // NEW: 1,
  // ACTIVE: 2,
  // INACTIVE: 3,
  // DELETED: 4,
  DEFAULT: "active",
  UNKNOWN: "unknown",
  NEW: "new",
  ACTIVE: "active",
  INACTIVE: "inactive",
  DELETED: "deleted",
  CURRENT: "current",
  UPDATED: "updated",
  DRAFT: "draft",
  REVIEW: "review",
  APPROVED: "approved",
  REJECTED: "rejected",
  PUBLISHED: "published",
  REVIEW_REQUESTED: "review_requested",
  CHANGE_REQUESTED: "change_requested",
};

export const userSettingsConstants = {
  LEFT_DRAWER_STATE: "leftDrawerState",
  MAX_ROWS_IN_PAGE: "maxRowsInPage",
  DATA_TABLE_DETAILS_PANE: "dataTableDetailsPane",
};

export const communicationTypes = {
  SMS: "sms",
  MAIL: "email",
  WHATSAPP: "whatsapp",
  NOTIFICATION: "notification",
};

export const coreDialogInitValue = {
  showDialog: false,
};

export const auditTypes = {
  CREATED: "created",
  UPDATED: "updated",
  DELETED: "deleted",
}