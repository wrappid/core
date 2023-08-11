import { defaultValidations } from "./componentDefaultValidations";
import CoreAvatar from "../components/dataDisplay/CoreAvatar";
import CoreDivider from "../components/dataDisplay/CoreDivider";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreDataTable from "../components/dataTable/CoreDataTable";
import CoreAsyncSelect from "../components/inputs/CoreAsyncSelect";
import CoreCheckbox from "../components/inputs/CoreCheckbox";
import CoreConfirmPassword from "../components/inputs/CoreConfirmPassword";
import CoreContainedButton from "../components/inputs/CoreContainedButton";
import CoreDatePicker from "../components/inputs/CoreDatepicker";
import CoreDateRangepicker from "../components/inputs/CoreDateRangepicker";
import CoreDateTimePicker from "../components/inputs/CoreDateTimePicker";
import CoreDateTimeRangePicker from "../components/inputs/CoreDateTimeRangePicker";
import CoreFilePicker from "../components/inputs/CoreFilePicker";
import CoreImagePicker from "../components/inputs/CoreImagePicker";
import CoreInput from "../components/inputs/CoreInput";
import CoreInputPassword from "../components/inputs/CoreInputPassword";
import CoreJSONInput from "../components/inputs/CoreJSONInput";
import CoreMultiTimeRangePicker from "../components/inputs/CoreMultiTimeRangePicker";
import CoreOtpInput from "../components/inputs/CoreOtpInput";
import CoreOutlinedButton from "../components/inputs/CoreOutlinedButton";
import CorePhone from "../components/inputs/CorePhone";
import CoreSelect from "../components/inputs/CoreSelect";
import CoreTextarea from "../components/inputs/CoreTextarea";
import CoreTextButton from "../components/inputs/CoreTextButton";
import CoreTimePicker from "../components/inputs/CoreTimePicker";
// import ClinicCard from "../module/clinic/ClinicCard";
// import RegistrationCard from "../module/registration/RegistrationCard";
// import EducationCard from "../module/education/EducationCard";
// import ExperienceCard from "../module/experience/ExperienceCard";
// import BasicInfoCard from "../module/basicInfo/BasicInfoCard";
// import ContactInfoCard from "../module/contactInfo/ContactInfoCard";
// import PrescriptionDoctorProfileCard from "../module/prescription/CustomRenders/PrescriptionDoctorProfileCard";
// import PrescriptionClinicCard from "../module/prescription/CustomRenders/PrescriptionClinicCard";
// import PrescriptionPatientProfileCard from "../module/prescription/CustomRenders/PrescriptionPatientProfileCard";
// import ProfileClinicSkeleton from "../module/clinic/ProfileClinicSkeleton";
// import ProfileRegistrationSkeleton from "../module/registration/ProfileRegistrationSkeleton";
// import ProfileContactSkeleton from "../module/contactInfo/ProfileContactSkeleton";
// import ProfileBasicSkeleton from "../module/basicInfo/ProfileBasicSkeleton";
// import ProfileEducationSkeleton from "../module/education/ProfileEducationSkeleton";
// import ProfileExperienceSkeleton from "../module/experience/ProfileExperienceSkeleton";
// import SettingsAccount from "../module/settings/SettingsAccount";
// import SettingsPassword from "../module/settings/SettingsPassword";
// import SettingsContact from "../module/settings/SettingsContact";
// import SettingsNotification from "../module/settings/SettingsNotification";
// import SettingsAppearance from "../module/settings/SettingsAppearance";
// import RxEmailOrPhoneLink from "../components/rxLayout/RxEmailOrPhoneLink";
// import SearchUserCard from "../module/prescription/SearchUserCard";
// import GenderOption from "../module/common/GenderOption";
import CoreTimeRangePicker from "../components/inputs/CoreTimeRangePicker";
import CoreFormLabelCheckbox from "../components/inputs/custom/CoreFormLabelCheckbox";
import CoreRichTextEditor from "../components/inputs/custom/CoreRichTextEditor";
import ParentChildMap from "../components/inputs/custom/ParentChildMap";
import CoreSpan from "../components/layouts/CoreSpan";
// import BusinessEntityComp from "../module/builder/BusinessEntity/BusinessEntityComp";
// import RxCashPackages from "../components/rxLayout/RxCashPackages";
// import FormPreview from "../module/builder/form/FormPreview";
// import ConsultationTimingCard from "../module/conultationTimings/ConsultationTimingCard";
// import StringValueInputField from "../components/rxLayout/StringValueInputField";
// import SearchAssistantCard from "../module/assistantManagement/SearchAssistantCard";
// import SMSCommunicationTemplates from "../module/communication/SMSCommunicationTemplates";
// import MailCommunicationTemplates from "../module/communication/MailCommunicationTemplates";
// import WhatsappCommunicationTemplates from "../module/communication/WhatsappCommunicationTemplates";
// import UpcomingAppointment from "../module/appointment/UpcomingAppointment";
// import CurrentAppointment from "../module/appointment/CurrentAppointment";
// import CompletedAppointment from "../module/appointment/CompletedAppointment";

/* com key will have component reference, 
defaultValidation will have object with 
two key required and notRequired both of them
having yup validation object for requires
and not required field respectively */
export const componentMap = {
  asyncSelect: {
    comp             : CoreAsyncSelect,
    defaultValidation: defaultValidations.asyncSelect,
  },
  avatar: {
    comp    : CoreAvatar,
    onlyView: true,
  },
  checkbox: {
    comp             : CoreCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  confirmPassword: {
    comp             : CoreConfirmPassword,
    defaultValidation: defaultValidations.confirmPassword,
  },
  coreBody1: {
    /**
     * @todo this one should be removed ASAP
     * instead coreTypographyBody1 should be used
     */
    comp    : CoreTypographyBody1,
    onlyView: true,
  },
  coreContainedButton: { comp: CoreContainedButton },
  coreOutlinedButton : { comp: CoreOutlinedButton },
  coreTextButton     : { comp: CoreTextButton },
  coreTypographyBody1: {
    comp    : CoreTypographyBody1,
    onlyView: true,
  },
  /**
   * Data table
   */
  dataTable: { comp: CoreDataTable },
  
  date: {
    comp             : CoreDatePicker,
    defaultValidation: defaultValidations.date,
  },
  
  dateRange: { comp: CoreDateRangepicker },
  
  dateTime: {
    comp             : CoreDateTimePicker,
    defaultValidation: defaultValidations.datetime,
  },
  
  dateTimeRange: { comp: CoreDateTimeRangePicker },
  
  divider: { comp: CoreDivider },
  
  email: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.email,
  },
  
  emailOrPhone: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.emailOrPhone,
  },
  
  file: {
    comp             : CoreFilePicker,
    defaultValidation: defaultValidations.filePicker,
  },
  
  formLabelCheckbox: {
    comp             : CoreFormLabelCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  
  imagePicker: {
    comp             : CoreImagePicker,
    defaultValidation: defaultValidations.imagePicker,
  },
  
  json: {
    comp: CoreJSONInput,
    // defaultValidation: defaultValidations.json,
  },
  
  multiTimeRange: {
    comp             : CoreMultiTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
  
  newPassword: {
    comp             : CoreInputPassword,
    defaultValidation: defaultValidations.password,
  },
  
  otp: {
    comp             : CoreOtpInput,
    defaultValidation: defaultValidations.otp,
  },
  
  // stringValue: {
  //   comp: StringValueInputField,
  //   defaultValidation: defaultValidations.text,
  // },
  parentChildMap: {
    comp             : ParentChildMap,
    defaultValidation: defaultValidations.parentChildMap,
  },

  password: {
    comp             : CoreInputPassword,
    defaultValidation: defaultValidations.password,
  },

  phone: {
    comp             : CorePhone,
    defaultValidation: defaultValidations.phone,
  },
  
  /**
   * Card Components
   */
  // clinicCard: {
  //   comp: ClinicCard,
  // },
  // registrationCard: {
  //   comp: RegistrationCard,
  // },
  // educationCard: {
  //   comp: EducationCard,
  // },
  // experienceCard: {
  //   comp: ExperienceCard,
  // },
  // basicInfoCard: {
  //   comp: BasicInfoCard,
  // },
  // contactInfoCard: {
  //   comp: ContactInfoCard,
  // },
  // prescriptionDoctorProfileCard: {
  //   comp: PrescriptionDoctorProfileCard,
  // },
  // prescriptionClinicCard: {
  //   comp: PrescriptionClinicCard,
  // },
  // prescriptionPatientProfileCard: {
  //   comp: PrescriptionPatientProfileCard,
  // },
  // consultationTimingCard: {
  //   comp: ConsultationTimingCard,
  // },
  // /**
  //  * Card Components
  //  */
  // profileBasicSkeleton: {
  //   comp: ProfileBasicSkeleton,
  // },
  // profileContactSkeleton: {
  //   comp: ProfileContactSkeleton,
  // },
  // profileRegistrationSkeleton: {
  //   comp: ProfileRegistrationSkeleton,
  // },
  // profileClinicSkeleton: {
  //   comp: ProfileClinicSkeleton,
  // },
  // profileEducationSkeleton: {
  //   comp: ProfileEducationSkeleton,
  // },
  // profileExperienceSkeleton: {
  //   comp: ProfileExperienceSkeleton,
  // },
  // rxEmailOrPhoneLink: {
  //   comp: RxEmailOrPhoneLink,
  // },
  // searchUserCard: {
  //   comp: SearchUserCard,
  // },
  // searchAssistantCard: {
  //   comp: SearchAssistantCard,
  // },
  // /**
  //  * settings components
  //  */
  // SettingsAccount: { comp: SettingsAccount },
  // SettingsPassword: { comp: SettingsPassword },
  // SettingsContact: { comp: SettingsContact },
  // SettingsNotification: { comp: SettingsNotification },
  // SettingsAppearance: { comp: SettingsAppearance },
  // GenderOptionComp: { comp: GenderOption },
  /**
   * Form Schema Form Preview Component
   */
  // FormPreview: {
  //   comp: FormPreview,
  // },
  /**
  //  * Communication templates
  //  */
  // smsCommunicationTemplates: {
  //   comp: SMSCommunicationTemplates,
  // },
  // mailCommunicationTemplates: {
  //   comp: MailCommunicationTemplates,
  // },
  // whatsappCommunicationTemplates: {
  //   comp: WhatsappCommunicationTemplates,
  // },
  // /**
  //  * Appointments
  //  */
  // upcomingAppointment: {
  //   comp: UpcomingAppointment,
  // },
  // currentAppointment: {
  //   comp: CurrentAppointment,
  // },
  // completedAppointment: {
  //   comp: CompletedAppointment,
  // },
  richTextEditor: { comp: CoreRichTextEditor },

  select: {
    comp             : CoreSelect,
    defaultValidation: defaultValidations.select,
  },
  
  spacer: { comp: CoreSpan },
  
  text: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.text,
  },
  
  textarea: { comp: CoreTextarea },
  
  time: {
    comp             : CoreTimePicker,
    defaultValidation: defaultValidations.time,
  },

  // businessEntityComp: {
  //   comp: BusinessEntityComp,
  // },
  // rxPackages: {
  //   comp: RxCashPackages,
  // },
  timeRange: {
    comp             : CoreTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
};
