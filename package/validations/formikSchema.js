import moment from "moment";
import * as yup from "yup";

import { getFormikRequiredMessage } from "../utils/formUtils";
import { clearValidatePhoneEmail } from "../utils/helper";

const phone = yup
  .string()
  .trim()
  .matches(/^[0-9]{10}$/, "Phone number must contains 10 digits");
const email = yup
  .string()
  .trim()
  .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email");

export const phoneSchema = yup.object({ phone: phone.required("Phone number is required") });

export const emailSchema = yup.object({ email: email.required("Email is required") });

export const clinicSchemas = yup.object({
  
  addLine1: yup
    .string()
    .required("Address Line is required")
    .matches(
      /^[a-zA-Z0-9\s,-/]+$/,
      "Special charecters are not allowed except , - and /"
    ),
  
  addLine2: yup
    .string()
    .matches(
      /^[a-zA-Z0-9\s,-/]+$/,
      "Special charecters are not allowed except , - and /"
    ),
  
  city: yup
    .string()
    .required("City is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  
  country: yup.string().required("Country is required"),
  
  district: yup.string().required("District is required"),
  // -- addressTypeId: yup.number().required('Address Type is required'),
  fullName: yup
    .string()
    .required("Name is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  landmark: yup
    .string()
    .required("City is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  phone: phone.required("Phone number is required"),
  pin  : yup
    .string()
    .required("PIN is required")
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
  state: yup.string().required("State is required"),
  // clinicLogo: yup.string().trim().required('File name is required')
});

export const clinicSchemasProfile = yup.object({
  
  addLine1: yup
    .string()
    .required("Address Line is required")
    .matches(
      /^[a-zA-Z0-9\s,-/]+$/,
      "Special charecters are not allowed except , - and /"
    ),
  
  addLine2: yup
    .string()
    .matches(
      /^[a-zA-Z0-9\s,-/]+$/,
      "Special charecters are not allowed except , - and /"
    ),
  
  addressTypeId: yup.number().required("Address type is required"),
  
  city: yup
    .string()
    .required("City is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  
  country: yup.string().required("Country is required"),
  
  district: yup.string().required("District is required"),
  // -- addressTypeId: yup.number().required('Address Type is required'),
  fullName: yup
    .string()
    .required("Name is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  landmark: yup
    .string()
    .required("City is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  phone: phone.required("Phone number is required"),
  pin  : yup
    .string()
    .required("PIN is required")
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
  state: yup.string().required("State is required"),
});

export const registrationDetailSchemas = yup.object({
  departmentId: yup.number().required("Department is required"),
  regDate     : yup
    .date()
    .max(new Date(), "Registration date must be today or earlier than today")
    .required("Registration date is required"),
  regNo: yup
    .string()
    .trim()
    .required("Registration No. is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
});

export const basicIntroSchemas = yup.object({
  bio: yup
    .string()
    .trim()
    .required("Bio is required")
    .matches(
      /^[a-zA-Z0-9\s.'"@$&-/\\?]+$/,
      "All special charecters are not allowed"
    ),
  dob: yup
    .date()
    .min(moment().subtract(115, "years"), "MIN_AGE")
    .max(moment().endOf("day").subtract(18, "years"), "Min age should be 18"),
  gender: yup.string().required("Gender is required"),
  name  : yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
});

export const experienceSchemas = yup.object({
  designation: yup
    .string()
    .trim()
    .required("Designation is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is       : true,
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // -- console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            // -- console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
      then: yup.date(),
    }),
  location: yup
    .string()
    .trim()
    .required("Location is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  organization: yup
    .string()
    .trim()
    .required("Organization name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
});

export const educationSchemas = yup.object({
  board: yup
    .string()
    .trim()
    .required("Board name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  degree: yup
    .string()
    .trim()
    .required("Degree is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is       : true,
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // --console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            // --console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
      then: yup.date(),
    }),
  school: yup
    .string()
    .trim()
    .required("School name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
});

export const loginSchema = yup.object({
  emailOrPhone: yup
    .string()
    .test(
      "email-phone-validation",
      "Not a valid email or phone no.",
      clearValidatePhoneEmail
    )
    .required("Please enter email or phone"),
});

export const passwordSetSchema = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
});

export const loginOtpSchema = yup.object({
  otp: yup.string().required().min(6)
    .max(6)
});

export const passwordSchema = yup.object({ password: yup.string().required("Enter password") });

export const contactSchema = yup.object({
  email  : email,
  phone  : phone,
  website: yup.string(),
});

/**
 * JSON objets
 */

export const checkEmailorPhone = {
  emailOrPhone: yup
    .string()
    .test(
      "email-phone-validation",
      "Not a valid email or phone no.",
      clearValidatePhoneEmail
    )
    .required("Please enter email or phone"),
};

export const enterPassword = { password: yup.string().required("Enter password") };

export const requiredPassword = { password: yup.string().required("Enter password") };

export const complaint = { complaint: yup.array().min(1).required(getFormikRequiredMessage("Complaint")) };
export const history = { history: yup.array().min(1).required(getFormikRequiredMessage("History")) };
export const reffer = { history: yup.array().min(1).required(getFormikRequiredMessage("Reffer")) };
export const guideline = { guideline: yup.array() };
export const diagnoses = { diagnosis: yup.array() };
export const procedure = { procedure: yup.array() };
export const followup = { followup: yup.array() };
export const prescriptionClinic = {
  address : yup.string().required(getFormikRequiredMessage("Address")),
  fullName: yup.string().required(getFormikRequiredMessage("Name")),
  phone   : yup.string().required(getFormikRequiredMessage("Phone")),
};
export const prescriptionPatientProfile = {
  dob   : yup.date().required(getFormikRequiredMessage("DOB")),
  gender: yup.string().required(getFormikRequiredMessage("Gender")),
  name  : yup.string().required(getFormikRequiredMessage("Name")),
};

export const prescriptionClinicSearch = { clinic: yup.object().required(getFormikRequiredMessage("Clinic")) };

export const prescriptionPatientSearch = { patient: yup.object().required(getFormikRequiredMessage("Patient")) };

export const profileBaic = {
  bio: yup
    .string()
    .trim()
    // .required(getFormikRequiredMessage("bio"))
    .matches(
      /^[a-zA-Z0-9\s.'"@$&-/\\?]+$/,
      "All special charecters are not allowed"
    ),
  dob: yup
    .date()
    .min(moment().subtract(115, "years"), "MIN_AGE")
    .max(moment().endOf("day").subtract(18, "years"), "Min age should be 18"),
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  gender  : yup.object().required("Gender is required"),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
};

export const createPatient = {
  dob      : yup.date().required(),
  email    : yup.string().email().required(),
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  gender  : yup.object().required(),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  phone: yup.string().length(10).required(),
};

export const createPatientRelative = {
  dob      : yup.date().required(),
  email    : yup.string().email().required(),
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  gender  : yup.object().required(),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  phone   : yup.string().length(10).required(),
  relation: yup.string().required(),
};

export const createDoctor = {
  dob      : yup.date().required(),
  email    : yup.string().email().required(),
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  gender  : yup.object().required(),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  phone  : yup.string().length(10).required(),
  regDate: yup.string(),
  regNo  : yup.string().required(),
};

export const profileRegistration = {
  departmentId: yup.object().required("Department is required"),
  regDate     : yup
    .date()
    .max(new Date(), "Registration date must be today or earlier than today")
    .required("Registration date is required"),
  regNo: yup
    .string()
    .trim()
    .required("Registration No. is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  registrationDocument: yup.object().nullable(),
};

export const confirmPassword = {
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  newPassword: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
};

export const changePrimaryContact = { data: yup.object().required() };

export const consultationTimings = { clinic: yup.object().nullable() };

export const stringValueManager = {
  locale: yup.string().required(),
  value : yup.string().required(),
};

export const createAppointment = {
  date     : yup.date().required(),
  endTime  : yup.string().required(),
  isForce  : yup.boolean(),
  startTime: yup.string().required(),
};

export const profileExperience = {
  designation: yup
    .string()
    .trim()
    .required("Designation is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is       : true,
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // --console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            // console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
      then: yup.date(),
    }),
  isCurrent: yup.boolean().notRequired(),
  location : yup
    .string()
    .trim()
    .required("Location is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    )
    .required(),
  organization: yup
    .string()
    .trim()
    .required("Organization name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
};

export const profileEducation = {
  board: yup
    .string()
    .trim()
    .required("Board name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  degree: yup
    .string()
    .trim()
    .required("Degree is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is       : true,
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // -- console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            // console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
      then: yup.date(),
    }),
  isCurrent: yup.boolean().notRequired(),
  school   : yup
    .string()
    .trim()
    .required("School name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
};

export const smsCommunicationTemplateSchema = {
  body     : yup.string().required("Body is required"),
  extraInfo: yup.object(),
  name     : yup.string().required("Name is required"),
  type     : yup.mixed().required("Type is required"),
};

export const mailCommunicationTemplateSchema = {
  body     : yup.string().required("Body is required"),
  bodyType : yup.mixed().required("Body Type is required"),
  extraInfo: yup.object(),
  name     : yup.string().required("Name is required"),
  subject  : yup.string().required("Subject is required"),
  type     : yup.mixed().required("Type is required"),
};

export const whatsappCommunicationTemplateSchema = {
  body     : yup.string().required("Body is required"),
  extraInfo: yup.object(),
  name     : yup.string().required("Name is required"),
  type     : yup.mixed().required("Type is required"),
};

export const createSMSTemplateSchema = {
  extraInfo    : yup.object().required("Extra Info is required"),
  message      : yup.string().required("Message is required"),
  name         : yup.string().required("Name is required"),
  sampleMessage: yup.string().nullable(),
  type         : yup.mixed().required("Type is required"),
};

export const updateSMSTemplateSchema = {
  _status           : yup.string().required("Status is required"),
  externalReason    : yup.string().nullable(),
  externalStatus    : yup.string().nullable(),
  externalTemplateId: yup.string().nullable(),
  extraInfo         : yup.object().required("Extra Info is required"),
  message           : yup.string().required("Message is required"),
  name              : yup.string().required("Name is required"),
  sampleMessage     : yup.string(),
  type              : yup.mixed().required("Type is required"),
};

export const createWhatsappTemplateSchema = {
  config       : yup.object().required("Object is required"),
  extraInfo    : yup.object().required("Extra Info is required"),
  footer       : yup.string().nullable(),
  header       : yup.mixed().nullable(),
  message      : yup.string().required("Message is required"),
  name         : yup.string().required("Name is required"),
  sampleMessage: yup.string().nullable(),
  type         : yup.mixed().required("Type is required"),
};

export const updateWhatsappTemplateSchema = {
  _status           : yup.string().required("Status is required"),
  config            : yup.object().required("Object is required"),
  externalReason    : yup.string().nullable(),
  externalStatus    : yup.string().nullable(),
  externalTemplateId: yup.string().nullable(),
  extraInfo         : yup.object().required("Extra Info is required"),
  footer            : yup.string().nullable(),
  header            : yup.mixed().nullable(),
  message           : yup.string().required("Message is required"),
  name              : yup.string().required("Name is required"),
  sampleMessage     : yup.string().nullable(),
  type              : yup.mixed().required("Type is required"),
};

export const createMailTemplateSchema = {
  contentType  : yup.mixed().required("Content type is required"),
  extraInfo    : yup.object().required("Extra Info is required"),
  message      : yup.string().required("Message is required"),
  name         : yup.string().required("Name is required"),
  sampleMessage: yup.string().nullable(),
  sampleSubject: yup.string().nullable(),
  subject      : yup.string().required("Subject is required"),
  type         : yup.mixed().required("Type is required"),
};

export const updateMailTemplateSchema = {
  _status           : yup.string().required("Status is required"),
  contentType       : yup.mixed().required("Content type is required"),
  externalReason    : yup.string().nullable(),
  externalStatus    : yup.string().nullable(),
  externalTemplateId: yup.string().nullable(),
  extraInfo         : yup.object().required("Extra Info is required"),
  message           : yup.string().required("Message is required"),
  name              : yup.string().required("Name is required"),
  sampleMessage     : yup.string().nullable(),
  sampleSubject     : yup.string().nullable(),
  subject           : yup.string().required("Subject is required"),
  type              : yup.mixed().required("Type is required"),
};

export const testMailCommunicationTemplateSchema = { sendTo: email.required("Email is required") };

export const testSMSCommunicationTemplateSchema = { sendTo: phone.required("Phone is required") };
