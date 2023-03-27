import { defaultValidations } from "./componentDefaultValidations";
import CoreInputPassword  from "../components/inputs/CoreInputPassword";
import CoreInput  from "../components/inputs/CoreInput";
import CoreSelect  from "../components/inputs/CoreSelect";
import CoreConfirmPassword  from "../components/inputs/CoreConfirmPassword";
import CoreDatePicker from "../components/inputs/CoreDatepicker";
import CoreTimePicker from "../components/inputs/CoreTimePicker";
import CoreDateTimePicker from "../components/inputs/CoreDateTimePicker";
import CoreOtpInput from "../components/inputs/CoreOtpInput";
import CoreContainedButton from "../components/inputs/CoreContainedButton";
import CoreOutlinedButton from "../components/inputs/CoreOutlinedButton";
import CoreTextButton from "../components/inputs/CoreTextButton";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreAvatar from "../components/dataDisplay/CoreAvatar";
import CoreFilePicker  from "../components/inputs/CoreFilePicker";
import CoreImagePicker  from "../components/inputs/CoreImagePicker";
// import ClinicCard from "../module/clinic/ClinicCard";
// import RegistrationCard from "../module/registration/RegistrationCard";
// import EducationCard from "../module/education/EducationCard";
// import ExperienceCard from "../module/experience/ExperienceCard";
// import BasicInfoCard from "../module/basicInfo/BasicInfoCard";
import CoreAsyncSelect from "../components/inputs/CoreAsyncSelect";
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
import CoreJSONInput from "../components/inputs/CoreJSONInput";
// import SettingsAccount from "../module/settings/SettingsAccount";
// import SettingsPassword from "../module/settings/SettingsPassword";
// import SettingsContact from "../module/settings/SettingsContact";
// import SettingsNotification from "../module/settings/SettingsNotification";
// import SettingsAppearance from "../module/settings/SettingsAppearance";
import CorePhone  from "../components/inputs/CorePhone";
// import RxEmailOrPhoneLink from "../components/rxLayout/RxEmailOrPhoneLink";
// import SearchUserCard from "../module/prescription/SearchUserCard";
// import GenderOption from "../module/common/GenderOption";
import CoreSpan from "../components/layouts/CoreSpan";
import CoreDivider from "../components/dataDisplay/CoreDivider";
import CoreTextarea  from "../components/inputs/CoreTextarea";
// import BusinessEntityComp from "../module/builder/BusinessEntity/BusinessEntityComp";
// import RxCashPackages from "../components/rxLayout/RxCashPackages";
import CoreDateTimeRangePicker from "../components/inputs/CoreDateTimeRangePicker";
import CoreTimeRangePicker from "../components/inputs/CoreTimeRangePicker";
import CoreDateRangepicker from "../components/inputs/CoreDateRangepicker";
// import FormPreview from "../module/builder/form/FormPreview";
import CoreMultiTimeRangePicker from "../components/inputs/CoreMultiTimeRangePicker";
import CoreCheckbox from "../components/inputs/CoreCheckbox";
// import ConsultationTimingCard from "../module/conultationTimings/ConsultationTimingCard";
import CoreFormLabelCheckbox from "../components/inputs/custom/CoreFormLabelCheckbox";
import CoreDataTable from "../components/dataTable/CoreDataTable";
// import StringValueInputField from "../components/rxLayout/StringValueInputField";
// import SearchAssistantCard from "../module/assistantManagement/SearchAssistantCard";
import ParentChildMap from "../components/inputs/custom/ParentChildMap";
// import SMSCommunicationTemplates from "../module/communication/SMSCommunicationTemplates";
// import MailCommunicationTemplates from "../module/communication/MailCommunicationTemplates";
// import WhatsappCommunicationTemplates from "../module/communication/WhatsappCommunicationTemplates";
// import UpcomingAppointment from "../module/appointment/UpcomingAppointment";
// import CurrentAppointment from "../module/appointment/CurrentAppointment";
// import CompletedAppointment from "../module/appointment/CompletedAppointment";
import CoreRichTextEditor from "../components/inputs/custom/CoreRichTextEditor";

/* com key will have component reference, 
defaultValidation will have object with 
two key required and notRequired both of them
having yup validation object for requires
and not required field respectively */
export const componentMap = {
  text: {
    comp: CoreInput,
    defaultValidation: defaultValidations.text,
  },
  textarea: {
    comp: CoreTextarea,
  },
  email: {
    comp: CoreInput,
    defaultValidation: defaultValidations.email,
  },
  phone: {
    comp: CorePhone,
    defaultValidation: defaultValidations.phone,
  },
  emailOrPhone: {
    comp: CoreInput,
    defaultValidation: defaultValidations.emailOrPhone,
  },
  password: {
    comp: CoreInputPassword,
    defaultValidation: defaultValidations.password,
  },
  confirmPassword: {
    comp: CoreConfirmPassword,
    defaultValidation: defaultValidations.confirmPassword,
  },
  select: {
    comp: CoreSelect,
    defaultValidation: defaultValidations.select,
  },
  date: {
    comp: CoreDatePicker,
    defaultValidation: defaultValidations.date,
  },
  time: {
    comp: CoreTimePicker,
    defaultValidation: defaultValidations.time,
  },
  dateTime: {
    comp: CoreDateTimePicker,
    defaultValidation: defaultValidations.datetime,
  },
  checkbox: {
    comp: CoreCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  otp: {
    comp: CoreOtpInput,
    defaultValidation: defaultValidations.otp,
  },
  json: {
    comp: CoreJSONInput,
    // defaultValidation: defaultValidations.json,
  },
  coreContainedButton: {
    comp: CoreContainedButton,
  },
  coreOutlinedButton: {
    comp: CoreOutlinedButton,
  },
  coreTextButton: {
    comp: CoreTextButton,
  },
  coreBody1: {
    /**
     * @todo this one should be removed ASAP
     * instead coreTypographyBody1 should be used
     */
    comp: CoreTypographyBody1,
    onlyView: true,
  },
  coreTypographyBody1: {
    comp: CoreTypographyBody1,
    onlyView: true,
  },
  avatar: {
    comp: CoreAvatar,
    onlyView: true,
  },
  file: {
    comp: CoreFilePicker,
    defaultValidation: defaultValidations.filePicker,
  },
  imagePicker: {
    comp: CoreImagePicker,
    defaultValidation: defaultValidations.imagePicker,
  },
  asyncSelect: {
    comp: CoreAsyncSelect,
    defaultValidation: defaultValidations.asyncSelect,
  },
  spacer: {
    comp: CoreSpan,
  },
  divider: {
    comp: CoreDivider,
  },
  // businessEntityComp: {
  //   comp: BusinessEntityComp,
  // },
  // rxPackages: {
  //   comp: RxCashPackages,
  // },

  timeRange: {
    comp: CoreTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
  multiTimeRange: {
    comp: CoreMultiTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
  dateRange: {
    comp: CoreDateRangepicker,
  },
  dateTimeRange: {
    comp: CoreDateTimeRangePicker,
  },
  formLabelCheckbox: {
    comp: CoreFormLabelCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  // stringValue: {
  //   comp: StringValueInputField,
  //   defaultValidation: defaultValidations.text,
  // },
  parentChildMap: {
    comp: ParentChildMap,
    defaultValidation: defaultValidations.parentChildMap,
  },

  /**
   * Data table
   */
  dataTable: {
    comp: CoreDataTable,
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

  richTextEditor: {
    comp: CoreRichTextEditor,
  },
};
