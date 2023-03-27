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

export const HTTP_GET = "get";
export const HTTP_POST = "post";
export const HTTP_PUT = "put";
export const HTTP_PATCH = "patch";

export const DB_CONST = {
  RXEFY_DB: "RXEFY_DB",
  RXEFY_MEDICINE_DB: "RXEFY_MEDICINE_DB",
};

export const urls = {
  // auth
  LOGIN_ROUTE: "checkUserExist",
  PASSWORD_ROUTE: "enterPassword",
  LOGIN_OTP_ROUTE: "enterOtp",
  RESET_PASSWORD_ROUTE: "resetPassword",
  REGISTER_ROUTE: "register",

  HOME_ROUTE: "home",
  PROFILE: "profile",
  SETTINGS: "settings",
  // Admin Route
  DATA_CREATOR: "dataCreator",
  DATA_VIEWER: "dataViewer",
  DATABASE_EDITOR: "database/editor",
  FROMS: "forms",
  ROUTES: "routes",
  TEST: "test",

  // common routes
  DASHBOARD: "dashboard",

  // doctor routes
  // prescription
  PRESCRIPTION: "prescription",
  PRESCRIPTION_MANAGE: "prescription/manage",
  PRESCRIPTION_TEMPLATE_MANAGE: "prescription/template/manage",
  PRESCRIPTION_TEMPLATE_EDIT: "prescription/template/edit/:id",
  // appointment
  APPOINTMENT_SCHEDULE: "appointment/schedule",
  APPOINTMENT_MANAGE: "appointment/manage",
  // patient
  MANAGE_PATIENT: "patient/manage",
  MANAGE_DOCUMENTS: "documents/manage",
  MEDICINE_DATABASE: "medicine_database",
  SUBSCRIPTION: "subscription",
  REPORTS: "reports",
  MANAGE_CLINICS: "manage_clinics",
  CREATE_PATIENT: "create_patient",
  CREATE_PATIENT_RELATIVE: "patient/:id/create_patient_relative",
  CREATE_DOCTOR: "create_doctor",
  CREATE_ONBOARDING_SALESFORCE: "create_onboarding_salesforce",
  CREATE_ONBOARDING_BACK_OFFICE: "create_onboarding_back_office",
  CREATE_PATIENT_BACK_OFFICE: "create_patient_back_office",
  CREATE_ASSISTANT: "create_Assistant",
  RX_RECHARGE: "rx_recharge",
  RX_RECHARGE_SUCCESS: "rx_recharge_success",
  RX_RECHARGE_FAILED: "rx_recharge_failed",
  CONSULTATION_TIMINGS: "consultation_timings",
  // salesforce
  PROSPECTED_DOCTORS: "prospected_doctors",
  STRING_TABLE: "string_table",
  STRING_TABLE_FILTERED: "string_table/:key",
  HELP_DOCUMENTS: "help_documents",
  // medical test data
  MEDICAL_TEST_DATA_MANAGEMENT: "medical_test_data_management",
  SCRAPED_MEDICAL_TEST_DATA: "scraped_medical_test_data",
  INUSE_MEDICAL_TEST_DATA: "inuse_medical_test_data",
  MTDM_EDIT_SUGGESTIONS: "mtdm_edit_suggestions",
  // drug data
  DRUG_DATA_MANAGEMENT: "drug_data_management",
  SCRAPED_DRUG_DATA: "scraped_drug_data",
  INUSE_DRUG_DATA: "inuse_drug_data",
  EDIT_SUGGESTIONS: "edit_suggestions",
  // master data
  MDM: "mdm",
  MASTER_DATA: "masterData/all",
  MASTER_DATA_TYPES: "masterData/types",
  MASTER_DATA_TYPE_SPECIFIC: "masterData/all/:parentID",
  MASTER_DATA_TYPE_SPECIFIC_SCRAPED: "masterData/scraped/:parentID",
  MASTER_DATA_TYPE_SPECIFIC_CROWDSOURCED: "masterData/crowdsourced/:parentID",

  //medicine db
  DEPARTMENTS: "departments",
  BASE_CHEMICALS: "chemical/base",
  CHEMICAL_COMPOSITIONS: "chemical/compositions",
  SCRAPED_MEDICINES: "medicine/scraped",
  MEDICINE_COMPANIES: "medicine/companies",
  MEDICINE_DETAILS: "medicine/details",
  MEDICINE_PACKAGES: "medicine/packages",
  MEDICINES: "medicine/all",

  // medicine rxefy
  MEDICINE_DATA: "medicine_data",
  // admin
  USER: "user",
  ROLE: "role",
  PERMISSION: "permission",
  ROLE_PERMISSION: "role_permission",
  USER_PERMISSION: "user_permission",
  MENU: "menu",
  // verification
  DOCTOR_VERIFICATION: "verify/doctor",
  TABLES: "tables",
  FORMS: "forms",
  BUSINESS_ENTITY: "business_entity",
  LANGUAGES: "languages",
  COMPONENTS: "dev/guide/components",
  STYLE_UTILITIES: "dev/guide/style_utilities",
  // Assistant
  MANAGE_ASSISTANT: "assistant/manage",
  CREATE_AND_APPOINT_ASSISTANT: "assistant/invite",
  DOCTOR_INVITATIONS: "invitations/doctor",

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
