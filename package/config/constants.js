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
  
  APPOINTMENT_MANAGE: "appointment/manage",
  
  // appointment
  APPOINTMENT_SCHEDULE: "appointment/schedule",
  
  BASE_CHEMICALS: "chemical/base",
  
  BUSINESS_ENTITY: "business_entity",
  
  CHEMICAL_COMPOSITIONS: "chemical/compositions",
  
  //Communication Templates
  COMMUNITATION_TEMPLATES: "communication/templates",
  
  COMPONENTS: "dev/guide/components",
  
  CONSULTATION_TIMINGS: "consultation_timings",
  
  CREATE_AND_APPOINT_ASSISTANT: "assistant/invite",
  
  CREATE_ASSISTANT: "create_Assistant",
  
  CREATE_DOCTOR: "create_doctor",
  
  CREATE_ONBOARDING_BACK_OFFICE: "create_onboarding_back_office",
  
  CREATE_ONBOARDING_SALESFORCE: "create_onboarding_salesforce",
  
  CREATE_PATIENT: "create_patient",
  
  CREATE_PATIENT_BACK_OFFICE: "create_patient_back_office",
  
  CREATE_PATIENT_RELATIVE: "patient/:id/create_patient_relative",
  
  // common routes
  DASHBOARD: "dashboard",
  
  DATABASE_EDITOR: "database/editor",
  
  // Admin Route
  DATA_CREATOR: "dataCreator",
  
  DATA_VIEWER: "dataViewer",
  
  //medicine db
  DEPARTMENTS: "departments",
  
  DOCTOR_INVITATIONS: "invitations/doctor",
  
  // verification
  DOCTOR_VERIFICATION: "verify/doctor",
  
  // drug data
  DRUG_DATA_MANAGEMENT: "drug_data_management",
  
  EDIT_SUGGESTIONS: "edit_suggestions",
  
  FORMS: "forms",
  
  FROMS: "forms",
  
  HELP_DOCUMENTS: "help_documents",
  
  HOME_ROUTE: "home",
  
  INUSE_DRUG_DATA: "inuse_drug_data",
  
  INUSE_MEDICAL_TEST_DATA: "inuse_medical_test_data",
  
  LANGUAGES: "languages",
  
  LOGIN_OTP_ROUTE: "enterOtp",
  
  // auth
  LOGIN_ROUTE: "checkUserExist",
  
  LOGOUT: "logout",
  
  // Assistant
  MANAGE_ASSISTANT: "assistant/manage",
  
  MANAGE_CLINICS: "manage_clinics",
  
  MANAGE_DOCUMENTS: "documents/manage",
  
  // patient
  MANAGE_PATIENT: "patient/manage",
  
  MASTER_DATA: "masterData/all",
  
  MASTER_DATA_TYPES: "masterData/types",
  
  MASTER_DATA_TYPE_SPECIFIC: "masterData/all/:parentID",
  
  MASTER_DATA_TYPE_SPECIFIC_CROWDSOURCED: "masterData/crowdsourced/:parentID",
  
  MASTER_DATA_TYPE_SPECIFIC_SCRAPED: "masterData/scraped/:parentID",
  
  // master data
  MDM: "mdm",
  
  // medical test data
  MEDICAL_TEST_DATA_MANAGEMENT: "medical_test_data_management",
  
  MEDICINES: "medicine/all",
  
  MEDICINE_COMPANIES: "medicine/companies",
  
  // medicine rxefy
  MEDICINE_DATA: "medicine_data",
  
  MEDICINE_DATABASE: "medicine_database",

  MEDICINE_DETAILS: "medicine/details",

  MEDICINE_PACKAGES: "medicine/packages",

  MENU: "menu",

  MTDM_EDIT_SUGGESTIONS: "mtdm_edit_suggestions",

  PASSWORD_ROUTE: "enterPassword",

  PERMISSION: "permission",
  
  // doctor routes
  // prescription
  PRESCRIPTION: "prescription",
  
  PRESCRIPTION_MANAGE: "prescription/manage",
  
  PRESCRIPTION_TEMPLATE_EDIT: "prescription/template/edit/:id",
  
  PRESCRIPTION_TEMPLATE_MANAGE: "prescription/template/manage",
  
  PROFILE: "profile",
  
  // salesforce
  PROSPECTED_DOCTORS: "prospected_doctors",
  
  REGISTER_ROUTE: "register",
  
  REPORTS: "reports",
  
  REPORT_BUG: "/report/bug",
  
  REQUEST_ENHANCEMENT: "/request/enhancement",
  
  REQUEST_FEATURE: "/request/feature",
  
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
  
  SORT_DATA    : "SORT_DATA",
  // FILTER_DATA: "FILTER_DATA",
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
  
  ACTIVE: "active",
  
  APPROVED: "approved",
  
  CHANGE_REQUESTED: "change_requested",

  CURRENT         : "current",
  // UNKNOWN:0,
  // NEW: 1,
  // ACTIVE: 2,
  // INACTIVE: 3,
  // DELETED: 4,
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