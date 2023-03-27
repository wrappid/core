import {
  SanAddEmailOrPhone,
  SanAddEmailOrPhoneRemoveConfirmPassword,
  SanBasicEditUrlChange,
  SanChangePrimaryContact,
  SanClinicAddUrlChange,
  SanClinicDeleteUrlChange,
  SanClinicEditUrlChange,
  SanClinicReadUrlChange,
  SanContactEmailsCreate,
  SanContactPhonesCreate,
  SanContactsRead,
  SanContactsReadUrlChange,
  SanContactWapCreate,
  SanCoreFormCancelFormId,
  SanCreateAppointment,
  SanDoctorCreate,
  SanEditAppointment,
  SanEducationAddUrlChange,
  SanEducationEditUrlChange,
  SanEducationReadUrlChange,
  SanExperienceAddUrlChange,
  SanExperienceEditUrlChange,
  SanExperienceReadUrlChange,
  SanPatientCreate,
  SanPatientRelativeCreate,
  SanPrescription,
  SanProfileBasicRead,
  SanProfileClinicRead,
  SanProfileEducationRead,
  SanProfileExperienceRead,
  SanProfileRegistrationRead,
  SanReadPrimaryEmail,
  SanReadPrimaryPhone,
  SanRegistrationReadUrlChange,
  SanRxRexharge,
  San_URL_ADD_PATH_PARAM_ID,
  SanStringValueAdd,
  SanStringValueEdit,
  DefaultLangEditDel,
  SanChemDeptReadMap,
  SanChemDeptMap,
  SanRolePermissionReadMap,
  SanRolePermission,
  SanCreateCommunicationTemplate,
  SanEditCommunicationTemplate,
  SanTestCommunicationTemplate,
} from "../../utils/formSubmitSanitizations";

export const FORM_EDIT_MODE = "edit";
export const FORM_VIEW_MODE = "view";

export const FORM_XS_DEFAULT_GRID_SIZE = 12;
export const FORM_SM_DEFAULT_GRID_SIZE = 6;
export const FORM_MD_DEFAULT_GRID_SIZE = 4;
export const FORM_LG_DEFAULT_GRID_SIZE = 3;
export const FORM_XL_DEFAULT_GRID_SIZE = 3;

export const FORM_IDS = {
  REGISTER: "register",
  __TEST_FORM: "testForm",
  __CHECK_USER_EXIST_FORM: "checkUserExist",
  __LOGIN_WITH_PASSWORD: "loginWithPassword",
  __NAVIGATE_TO_OTP_LOGIN: "navigateToOtpLogin",
  __NAVIGATE_TO_RESET_PASSWORD: "navigateToResetPassword",
  __LOGIN_WITH_OTP: "loginWithOtp",
  __LOGIN_WITH_RESET_PASSWORD: "loginWithResetPassword",
  __CHANGE_PASSWORD: "changePassword",
  __CHANGE_PRIMARY_PHONE: "changePrimaryPhone",
  __CHANGE_PRIMARY_EMAIL: "changePrimaryEmail",
  __CONTACT_PHONE: "contactPhone",
  __CONTACT_EMAIL: "contactEmail",
  __CONTACT_WAP: "contactWap",
  __EXPORT_ACCOUNT_DATA: "exportAccountData",
  __DELETE_ACCOUNT: "deleteAccount",
  __PROFILE_BASIC: "profileBasic",
  __PROFILE_CONTACT: "profileContact",
  __PROFILE_REGISTRATION: "profileRegistration",
  __PROFILE_CLINIC: "profileClinic",
  __PROFILE_EDUCATION: "profileEducation",
  __PROFILE_EXPERIENCE: "profileExperience",
  __VERIFY_EMAIL_OTP: "verifyEmailWithOtp",
  __VERIFY_PHONE_OTP: "verifyPhoneWithOtp",

  __PRESCRIPTION_PATIENT_PROFILE: "prescriptionPatientProfile",
  __PRESCRIPTION_VITALS: "prescriptionVitals",
  __PRESCRIPTION_COMPLAINTS: "prescriptionComplaints",
  __PRESCRIPTION_GUIDELINES: "prescriptionGuidelines",
  __PRESCRIPTION_HISTORIES: "prescriptionHistory",
  __PRESCRIPTION_REFFERS: "prescriptionRefferedTo",
  __PRESCRIPTION_FOLLOWUPS: "prescriptionFollowups",
  __PRESCRIPTION_DIAGNOSIS: "prescriptionDiagnosis",
  __PRESCRIPTION_PROCEDURES: "prescriptionProcedures",
  __PRESCRIPTION_DOCTOR_PROFILE: "prescriptionDoctorProfile",
  __PRESCRIPTION_CLINIC: "prescriptionClinic",
  __PRESCRIPTION_MEDICINE: "prescriptionMedicine",
  __PRESCRIPTION_GENERATE: "prescriptionGenerate",
  __PRESCRIPTION_INIT: "prescriptionInit",

  __SEARCH_CRATE_PATIENT: "searchCreatePatient",
  __SEARCH_PATIENT: "searchPatient",
  __SEARCH_CLINIC: "searchClinic",

  __CREATE_PATIENT: "createPatient",
  __CREATE_DOCTOR: "createDoctor",
  __CREATE_ONBOARDING_SALESFORCE: "createOnboardingSalesforce",
  __CREATE_ONBOARDING_BACK_OFFICE: "onboardingBackOffice",
  // __CREATE_PATIENT_BACK_OFFICE: "createPatientBackOffice",
  __CREATE_ASSISTANT: "createAssistant",
  __CREATE_PATIENT_RELATIVE: "createPatientRelative",

  __RX_RECHARGE: "rxRecharge",
  __CONSULTATION_TIMINGS: "consultationTimings",

  __CREATE_APPOINTMENT: "createAppointment",

  __LANGUAGE_DATA_MANAGER: "languageDataManager",
  __STRING_TABLE_MANAGER: "stringTableManager",

  __SEARCH_ASSISTANT: "searchAssistant",

  /**
   * Issue Reporting
   */
  __CREATE_ISSUE: "IssueReportingForm",

  /**
   * chemical department map
   */
  __CHEMICAL_DEPARTMENT_MAP: "chemicalDepartmentMap",

  /**
   * ROle permision management
   */
  __ROLE_PERMISSION_MAP: "rolePermissionMap",

  /**
   * Communication templates
   */
  __SMS_COMMUNICATION_TEMPLATE: "smsCommunicationTemplate",
  __WHATSAPP_COMMUNICATION_TEMPLATE: "whatsappCommunicationTemplate",
  __MAIL_COMMUNICATION_TEMPLATE: "mailCommunicationTemplate",

  __CREATE_SMS_COMMUNICATION_TEMPLATE: "createSMSCommunicationtemplate",
  __UPDATE_SMS_COMMUNICATION_TEMPLATE: "updateSMSCommunicationtemplate",

  __CREATE_WHATSAPP_COMMUNICATION_TEMPLATE:
    "createWhatsappCommunicationtemplate",
  __UPDATE_WHATSAPP_COMMUNICATION_TEMPLATE:
    "updateWhatsappCommunicationtemplate",

  __CREATE_MAIL_COMMUNICATION_TEMPLATE: "createMailCommunicationtemplate",
  __UPDATE_MAIL_COMMUNICATION_TEMPLATE: "UpdateMailCommunicationtemplate",

  __TEST_MAIL_COMMUNICATION_TEMPLATE: "testMailCommunicationTemplate",
  __TEST_SMS_COMMUNICATION_TEMPLATE: "testSMSCommunicationTemplate",
  __TEST_WHATSAPP_COMMUNICATION_TEMPLATE: "testWhatsappCommunicationTemplate",
};

export const FORM_SANITIZATION_FUNCTION_IDS = {
  __URL_ADD_PATH_PARAM_ID: "San_URL_ADD_PATH_PARAM_ID",
  __ADD_EMAIL_OR_PHONE: "SanAddEmailOrPhone",
  __ADD_EMAIL_OR_PHONE_REMOVE_CONFIRM_PASSWORD:
    "SanAddEmailOrPhoneRemoveConfirmPassword",
  __PROFILE_BASIC_EDIT_URL_CHANGE: "SanBasicEditUrlChange",
  __PROFILE_REGISTRATION_READ_URL_CHANGE: "SanRegistrationReadUrlChange",
  __PROFILE_BASIC_READ: "SanProfileBasicRead",

  __PROFILE_CLINIC_ADD_URL_CHANGE: "SanClinicAddUrlChange",
  __PROFILE_CLINIC_EDIT_URL_CHANGE: "SanClinicEditUrlChange",
  __PROFILE_CLINIC_READ_URL_CHANGE: "SanClinicReadUrlChange",
  __PROFILE_CLINIC_DELETE_URL_CHANGE: "SanClinicDeleteUrlChange",
  __PROFILE_CLINIC_READ: "SanProfileClinicRead",

  __PROFILE_EDUCATION_ADD_URL_CHANGE: "SanEducationAddUrlChange",
  __PROFILE_EDUCATION_EDIT_URL_CHANGE: "SanEducationEditUrlChange",
  __PROFILE_EDUCATION_READ_URL_CHANGE: "SanEducationReadUrlChange",
  __PROFILE_EDUCATION_READ: "SanProfileEducationRead",

  __PROFILE_EXPERIENCE_ADD_URL_CHANGE: "SanExperienceAddUrlChange",
  __PROFILE_EXPERIENCE_EDIT_URL_CHANGE: "SanExperienceEditUrlChange",
  __PROFILE_EXPERIENCE_READ_URL_CHANGE: "SanExperienceReadUrlChange",
  __PROFILE_EXPERIENCE_READ: "SanProfileExperienceRead",

  __CORE_FORM_CANCEL_FORM_ID: "SanCoreFormCancelFormId",
  __PROFILE_REGISTRATION_READ: "SanProfileRegistrationRead",

  __PRESCRIPTION_DATA: "SanPrescription",

  //settings
  __ADD_EMAILS: "SanContactEmailsCreate",
  __ADD_PHONES: "SanContactPhonesCreate",
  __ADD_WAP: "SanContactWapCreate",
  __READ_CONTACTS: "SanContactsRead",
  __READ_CONTACTS_URL_CHANGE: "SanContactsReadUrlChange",
  __PRIMARY_CONTACT_CHANGE: "SanChangePrimaryContact",
  __READ_PRIMARY_PHONE: "SanReadPrimaryPhone",
  __READ_PRIMARY_EMAIL: "SanReadPrimaryEmail",

  __PATIENT_CREATE: "SanPatientCreate",
  __PATIENT_RELATIVE_CREATE: "SanPatientRelativeCreate",
  __DOCTOR_CREATE: "SanDoctorCreate",

  __RX_RECHARGE: "SanRxRexharge",

  //Appointment related
  __CREATE_APPOINTMENT: "SanCreateAppointment",
  __RESCHEDULE_APPOINTMENT: "SanEditAppointment",

  //language
  __CREATE_LOCALE: "SanStringValueAdd",
  __UPDATE_LOCALE: "SanStringValueEdit",

  __SAN_CHEM_DEPT_READ_MAP: "SanChemDeptReadMap",
  __SAN_CHEM_DEPT_MAP: "SanChemDept",

  __ROLE_PERMISSION_READ_MAP: "SanRolePermissionReadMap",
  __ROLE_PERMISSION_MAP: "SanRolePermission",

  __COMMUNICATION_TEMPLATE_CREATE: "SanCreateCommunicationTemplate",
  __COMMUNICATION_TEMPLATE_EDIT: "SanEditCommunicationTemplate",

  __COMMUNICATION_TEMPLATE_TEST: "SanTestCommunicationTemplate",
};

export const FORM_ARRAY_EDIT_DEL_FUNCTION_IDS = {
  __DEFAULT_LANG_NOT_EDIT_DELETE: "DefaultLangEditDel",
};

export const FORM_SELECT_DATA_FUNCTION_IDS = {
  __SPECILIZATION: "SanAddEmailOrPhone",
};

export const FORM_SANITIZATOIN_FUNCTION_MAP = {
  [FORM_SANITIZATION_FUNCTION_IDS.__URL_ADD_PATH_PARAM_ID]:
    San_URL_ADD_PATH_PARAM_ID,
  [FORM_SANITIZATION_FUNCTION_IDS.__ADD_EMAIL_OR_PHONE]: SanAddEmailOrPhone,
  [FORM_SANITIZATION_FUNCTION_IDS.__ADD_EMAIL_OR_PHONE_REMOVE_CONFIRM_PASSWORD]:
    SanAddEmailOrPhoneRemoveConfirmPassword,

  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_CLINIC_ADD_URL_CHANGE]:
    SanClinicAddUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_CLINIC_EDIT_URL_CHANGE]:
    SanClinicEditUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_CLINIC_DELETE_URL_CHANGE]:
    SanClinicDeleteUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_CLINIC_READ]: SanProfileClinicRead,

  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EDUCATION_ADD_URL_CHANGE]:
    SanEducationAddUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EDUCATION_EDIT_URL_CHANGE]:
    SanEducationEditUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EDUCATION_READ_URL_CHANGE]:
    SanEducationReadUrlChange,

  //function to transform response data to form specific data
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EDUCATION_READ]:
    SanProfileEducationRead,

  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EXPERIENCE_ADD_URL_CHANGE]:
    SanExperienceAddUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EXPERIENCE_EDIT_URL_CHANGE]:
    SanExperienceEditUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EXPERIENCE_READ_URL_CHANGE]:
    SanExperienceReadUrlChange,

  //function to transform response data to form specific data
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_EXPERIENCE_READ]:
    SanProfileExperienceRead,

  //FORM RELATED
  [FORM_SANITIZATION_FUNCTION_IDS.__CORE_FORM_CANCEL_FORM_ID]:
    SanCoreFormCancelFormId,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_CLINIC_READ_URL_CHANGE]:
    SanClinicReadUrlChange,

  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_BASIC_EDIT_URL_CHANGE]:
    SanBasicEditUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_BASIC_READ]: SanProfileBasicRead,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_REGISTRATION_READ]:
    SanProfileRegistrationRead,
  [FORM_SANITIZATION_FUNCTION_IDS.__PROFILE_REGISTRATION_READ_URL_CHANGE]:
    SanRegistrationReadUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PRESCRIPTION_DATA]: SanPrescription,

  //settings related
  [FORM_SANITIZATION_FUNCTION_IDS.__ADD_EMAILS]: SanContactEmailsCreate,
  [FORM_SANITIZATION_FUNCTION_IDS.__ADD_PHONES]: SanContactPhonesCreate,
  [FORM_SANITIZATION_FUNCTION_IDS.__ADD_WAP]: SanContactWapCreate,

  [FORM_SANITIZATION_FUNCTION_IDS.__READ_CONTACTS]: SanContactsRead,
  [FORM_SANITIZATION_FUNCTION_IDS.__READ_CONTACTS_URL_CHANGE]:
    SanContactsReadUrlChange,
  [FORM_SANITIZATION_FUNCTION_IDS.__PRIMARY_CONTACT_CHANGE]:
    SanChangePrimaryContact,
  [FORM_SANITIZATION_FUNCTION_IDS.__READ_PRIMARY_PHONE]: SanReadPrimaryPhone,
  [FORM_SANITIZATION_FUNCTION_IDS.__READ_PRIMARY_EMAIL]: SanReadPrimaryEmail,
  [FORM_SANITIZATION_FUNCTION_IDS.__PATIENT_CREATE]: SanPatientCreate,
  [FORM_SANITIZATION_FUNCTION_IDS.__PATIENT_RELATIVE_CREATE]:
    SanPatientRelativeCreate,
  [FORM_SANITIZATION_FUNCTION_IDS.__DOCTOR_CREATE]: SanDoctorCreate,
  [FORM_SANITIZATION_FUNCTION_IDS.__RX_RECHARGE]: SanRxRexharge,

  //Appointment related
  [FORM_SANITIZATION_FUNCTION_IDS.__CREATE_APPOINTMENT]: SanCreateAppointment,
  [FORM_SANITIZATION_FUNCTION_IDS.__RESCHEDULE_APPOINTMENT]: SanEditAppointment,

  //language
  [FORM_SANITIZATION_FUNCTION_IDS.__CREATE_LOCALE]: SanStringValueAdd,
  [FORM_SANITIZATION_FUNCTION_IDS.__UPDATE_LOCALE]: SanStringValueEdit,

  //chem department
  [FORM_SANITIZATION_FUNCTION_IDS.__SAN_CHEM_DEPT_READ_MAP]: SanChemDeptReadMap,
  [FORM_SANITIZATION_FUNCTION_IDS.__SAN_CHEM_DEPT_MAP]: SanChemDeptMap,

  //Role Permission
  [FORM_SANITIZATION_FUNCTION_IDS.__ROLE_PERMISSION_READ_MAP]:
    SanRolePermissionReadMap,
  [FORM_SANITIZATION_FUNCTION_IDS.__ROLE_PERMISSION_MAP]: SanRolePermission,

  [FORM_SANITIZATION_FUNCTION_IDS.__COMMUNICATION_TEMPLATE_CREATE]:
    SanCreateCommunicationTemplate,
  [FORM_SANITIZATION_FUNCTION_IDS.__COMMUNICATION_TEMPLATE_EDIT]:
    SanEditCommunicationTemplate,
  [FORM_SANITIZATION_FUNCTION_IDS.__COMMUNICATION_TEMPLATE_TEST]:
    SanTestCommunicationTemplate,
};

export const FORM_ARRAY_EDIT_DELETE_FUNCTION_MAP = {
  [FORM_ARRAY_EDIT_DEL_FUNCTION_IDS.__DEFAULT_LANG_NOT_EDIT_DELETE]:
    DefaultLangEditDel,
};
