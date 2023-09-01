import { defaultValidations } from "./componentDefaultValidations";
import CoreAvatar from "../components/dataDisplay/CoreAvatar";
import CoreDivider from "../components/dataDisplay/CoreDivider";
import CoreEmailOrPhoneLink from "../components/dataDisplay/custom/CoreEmailOrPhoneLink";
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
import CoreTimeRangePicker from "../components/inputs/CoreTimeRangePicker";
import CoreFormLabelCheckbox from "../components/inputs/custom/CoreFormLabelCheckbox";
import CoreRichTextEditor from "../components/inputs/custom/CoreRichTextEditor";
import ParentChildMap from "../components/inputs/custom/ParentChildMap";
import CoreSpan from "../components/layouts/CoreSpan";

/* com key will have component reference, 
defaultValidation will have object with 
two key required and notRequired both of them
having yup validation object for requires
and not required field respectively */
export const componentMap = {
  CoreEmailOrPhoneLink: { comp: CoreEmailOrPhoneLink },
  asyncSelect         : {
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

  timeRange: {
    comp             : CoreTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
};
