export const CHECK_USER_EXISTS_API = "/checkLoginOrRegister";
export const NAVIGATE_TO_OTP_LOGIN_API = "/checkLoginOrRegister?loginWithOtp=1";
export const NAVIGATE_TO_RESET_PASSWORD_API = "/checkLoginOrRegister?loginWithOtp=1";
export const LOGIN_WITH_RESET_PASSWORD_API = "/loginWithOtp?reset=true";
export const LOGIN_WITH_OTP_API = "/loginWithOtp";
export const LOGIN_WITH_PASSWORD_API = "/login";
export const LOGIN_WITH_URL_API = "/loginWithUrl";
export const LOGOUT_API = "/logout";
export const REFRESH_TOKEN_API = "/refreshToken";

export const GET_ROLE_PERMISSIONS_API = "/rolePermission";

export const DATA_API = "/data";

export const GET_PROFILE_BASIC_API = "/business/individual/ProfileBasic";
export const GET_PROFILE_REGISTRATION_API = "/rx/registrationInfo";
export const GET_PROFILE_CLINIC_API = "/business/all/ProfileClinic";
export const GET_PROFILE_EDUCATION_API = "/business/all/ProfileEducation";
export const GET_PROFILE_EXPERIENCE_API = "/business/all/ProfileExperience";
export const GET_PROFILE_CONTACT_API = "/rx/contactInfo";

export const CREATE_PROFILE_ADDRESS_API = "/person/:id/address";
export const CREATE_PROFILE_EDUCATION_API = "/person/:id/education";
export const CREATE_PROFILE_EXPERIENCE_API = "/person/:id/experience";

export const UPDATE_PROFILE_BASIC_API = "/person/:id/basicDetails";
export const UPDATE_PROFILE_REGISTRATION_API = "/person/:id/doctorDetails";
export const UPDATE_PROFILE_ADDRESS_API = "/address/:id";
export const UPDATE_PROFILE_EDUCATION_API = "/education/:id";
export const UPDATE_PROFILE_EXPERIENCE_API = "/experience/:id";

export const DELETE_PROFILE_CLINIC_API = "/address/:id/delete";
export const DELETE_PROFILE_EDUCATION_API = "/education/:id/delete";
export const DELETE_PROFILE_EXPERIENCE_API = "/experience/:id/delete";

export const CREATE_PRESCRIPTION_API = "/prescription";

export const IS_USER_EXISTS_API = "/isUserExists";
export const USER_SEARCH_API = "/userSearch"; //should be removed removed
export const USER_SEARCH_PAGINATED_API = "/userSearchPaginated"; //shoulb kept with url change
export const CLINIC_SEARCH_PAGINATED_API = "/rx/clinic/all";

export const GET_PRESCRIPTION_TEMPLATE_DESIGNS_API = "/prescriptionTemplateDesigns";

export const SENT_OTP_API = "/sentOtp";
export const VERIFY_OTP_API = "/verifyOtp";

export const GET_ADDRESS_TYPES_API = "/addressType";

export const GET_MASTER_DATA_API = "/masterData";
export const GET_DEPARTMENTS_API = "/department";
/**
 * SETTINGS API
 */
export const GET_SETTINGS_META_API = "/settingMeta";
export const GET_SETTINGS_MENU = "/masterData?name=settings&level=5&_status=active";
export const CHANGE_PASSWORD_API = "/changePassword";
export const CREATE_CONTACTS_API = "/addContact";
export const GET_EMAILS_API = "/data/PersonContacts?type=email";
export const GET_PHONES_API = "/data/PersonContacts?type=phone";
export const DELETE_CONTACTS_API = "/contact/:id/delete";
export const GET_WAP_API = "/data/PersonContacts?type=wap";
export const CHANGE_PRIMARY_EMAIL_API = "/changePrimaryContact?type=email";
export const CHANGE_PRIMARY_PHONE_API = "/changePrimaryContact?type=phone";
export const DELETE_USER_ACCOUNT_API = "/deleteUserAccount";

/**
 * user settings
 */

export const GET_USER_SETTINGS = "/userSettings";
export const UPDATE_USER_SETTINGS = "/userSettings";

/**
 * New user create
 */
export const CREATE_PATIENT_API = "/user?role=patient";

/**
 * Profile
 */
export const PROFILE_COMPLETENESS_API = "/business/individual/ProfileCompleteness";
export const PROFILE_COMPLETENESS_CHECKLIST_API = "/business/individual/MasterData";

/**
 * Form
 */
export const GET_FORM_API_AUTHENTICATED = "/formSchema/";
export const GET_FORM_API = "/noauth/formSchema/";

/**
 * Template edit
 */
export const EDIT_PRESCRIPTION_TEMPLATE = "/person/:personId/master/:masterName";

/**
 * lanuguage
 */

export const GET_SUPPORTED_LANGUAGES = "/business/all/SupportedLanguages";
export const GENERATE_STRING_VALUE = "/tableData/:id/generateLocale";

/**
 * admin api s
 */
export const GET_BASE_CHEMICALS = "/chemicals";
export const BUSINESS_ENTITY = "/business/all";
