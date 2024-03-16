export const ENV_DEV_MODE = "development";
export const ENV_STAGE_MODE = "stage";
export const ENV_PROD_MODE = "production";

export const refreshInterval = 15 * 60 * 1000; // 15 minutes

// bootstrap - BREAKPOINTS
// -- export const SMALL_WINDOW_WIDTH = "576";
// -- export const MEDIUM_WINDOW_WIDTH = "768";
// -- export const LARGE_WINDOW_WIDTH = "992";
// -- export const X_LARGE_WINDOW_WIDTH = "1200";
// -- export const XX_LARGE_WINDOW_WIDTH = "1400";

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
  GET  : "get",
  PATCH: "patch",
  POST : "post",
  PUT  : "put",
};

export const DB_CONST = {
  RXEFY_DB         : "RXEFY_DB",
  RXEFY_MEDICINE_DB: "RXEFY_MEDICINE_DB",
};

export const urls = {
  
  COMPONENTS: "dev/guide/components",
  
  CREATE_DOCTOR: "create_doctor",
  
  DATABASE_EDITOR    : "database/editor",
  // Admin Route
  DATA_CREATOR       : "dataCreator",
  DATA_VIEWER        : "dataViewer",
  // salesforce
  // verification
  DOCTOR_VERIFICATION: "verify/doctor",

  FROMS: "forms",

  HOME_ROUTE: "home",

  REPORTS: "reports",

  /**
   * Bug Report, Feature, Enhancement & Support Requests
   */
  REQUEST_SUPPORT: "/request/support",
  
  RESET_PASSWORD_ROUTE: "resetPassword",
  
  ROLE: "role",
  
  ROLE_PERMISSION: "role_permission",
  
  ROUTES: "routes",
  
  RX_RECHARGE: "rx_recharge",
  
  RX_RECHARGE_FAILED: "rx_recharge_failed",
  
  RX_RECHARGE_SUCCESS: "rx_recharge_success",
  
  SCRAPED_DRUG_DATA: "scraped_drug_data",
  
  SCRAPED_MEDICAL_TEST_DATA: "scraped_medical_test_data",
  
  SCRAPED_MEDICINES: "medicine/scraped",
  
  SETTINGS: "settings",
  
  /**
   * SHOW_SPECIFIC
   */
  SHOW_SPECIFIC: "/showAll/:formId",
  
  STRING_TABLE: "string_table",
  
  STRING_TABLE_FILTERED: "string_table/:key",
  
  STYLE_UTILITIES: "dev/guide/style_utilities",
  
  SUBSCRIPTION: "subscription",
  
  TABLES: "tables",
  
  TEST: "test",
  
  // admin
  USER: "user",
  
  USER_PERMISSION: "user_permission",
};

/**
 * Message Type
 */
export const MESSAGE_TYPE = {
  ERROR_MESSAGE  : "error",
  INFO_MESSAGE   : "info",
  SUCCESS_MESSAGE: "success",
  WARNING_MESSAGE: "warning",
};

/**
 * table toolbar options
 */
export const tableToolbar = {
  EXPORT_DATA  : "EXPORT_DATA",
  FILTER_COLUMN: "FILTER_COLUMN",
  
  FILTER_DATA  : "FILTER_DATA",
  SORT_DATA    : "SORT_DATA",
  TABLE_DENSITY: "TABLE_DENSITY",
};

/**
 * Table density
 */
export const __TableDensity = {
  COMFORTABLE: "Comfortable",
  COMPACT    : "Compact",
  STANDARD   : "Standard",
};

export const __EntityStatus = {
  ACTIVE          : "active",
  APPROVED        : "approved",
  CHANGE_REQUESTED: "change_requested",
  CURRENT         : "current",
  DEFAULT         : "active",
  DELETED         : "deleted",
  DRAFT           : "draft",
  INACTIVE        : "inactive",
  NEW             : "new",
  PUBLISHED       : "published",
  REJECTED        : "rejected",
  REVIEW          : "review",
  REVIEW_REQUESTED: "review_requested",
  UNKNOWN         : "unknown",
  UPDATED         : "updated",
};

export const userSettingsConstants = {
  DATA_TABLE_DETAILS_PANE: "dataTableDetailsPane",
  LEFT_DRAWER_STATE      : "leftDrawerState",
  MAX_ROWS_IN_PAGE       : "maxRowsInPage",
};

export const communicationTypes = {
  MAIL        : "email",
  NOTIFICATION: "notification",
  SMS         : "sms",
  WHATSAPP    : "whatsapp",
};

export const coreDialogInitValue = { showDialog: false };

export const auditTypes = {
  CREATED: "created",
  DELETED: "deleted",
  UPDATED: "updated",
};