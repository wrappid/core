import * as yup from "yup";
import { getFormikRequiredMessage } from "./formUtils";
import { clearValidatePhoneEmail } from "./helper";
const moment = require("moment");

const phone = yup
  .string()
  .trim()
  .matches(/^[0-9]{10}$/, "Phone number must contains 10 digits");
const email = yup
  .string()
  .trim()
  .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email");

export const phoneSchema = yup.object({
  phone: phone.required("Phone number is required"),
});

export const emailSchema = yup.object({
  email: email.required("Email is required"),
});

export const clinicSchemas = yup.object({
  // addressTypeId: yup.number().required('Address Type is required'),
  fullName: yup
    .string()
    .required("Name is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
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
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  city: yup
    .string()
    .required("City is required")
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
  pin: yup
    .string()
    .required("PIN is required")
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
  phone: phone.required("Phone number is required"),
  // clinicLogo: yup.string().trim().required('File name is required')
});

export const clinicSchemasProfile = yup.object({
  // addressTypeId: yup.number().required('Address Type is required'),
  fullName: yup
    .string()
    .required("Name is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
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
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  city: yup
    .string()
    .required("City is required")
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
  pin: yup
    .string()
    .required("PIN is required")
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
  phone: phone.required("Phone number is required"),
  addressTypeId: yup.number().required("Address type is required"),
});

export const registrationDetailSchemas = yup.object({
  departmentId: yup.number().required("Department is required"),
  regNo: yup
    .string()
    .trim()
    .required("Registration No. is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  regDate: yup
    .date()
    .max(new Date(), "Registration date must be today or earlier than today")
    .required("Registration date is required"),
});

export const basicIntroSchemas = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
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
});

export const experienceSchemas = yup.object({
  organization: yup
    .string()
    .trim()
    .required("Organization name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  designation: yup
    .string()
    .trim()
    .required("Designation is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  location: yup
    .string()
    .trim()
    .required("Location is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is: true,
      then: yup.date(),
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
    }),
});

export const educationSchemas = yup.object({
  school: yup
    .string()
    .trim()
    .required("School name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
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
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is: true,
      then: yup.date(),
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
    }),
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
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginOtpSchema = yup.object({
  otp: yup.string().required().min(6).max(6),
});

export const passwordSchema = yup.object({
  password: yup.string().required("Enter password"),
});

export const contactSchema = yup.object({
  phone: phone,
  email: email,
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

export const enterPassword = {
  password: yup.string().required("Enter password"),
};

export const requiredPassword = {
  password: yup.string().required("Enter password"),
};

export const complaint = {
  complaint: yup.array().min(1).required(getFormikRequiredMessage("Complaint")),
};
export const history = {
  history: yup.array().min(1).required(getFormikRequiredMessage("History")),
};
export const reffer = {
  history: yup.array().min(1).required(getFormikRequiredMessage("Reffer")),
};
export const guideline = {
  guideline: yup.array(),
};
export const diagnoses = {
  diagnosis: yup.array(),
};
export const procedure = {
  procedure: yup.array(),
};
export const followup = {
  followup: yup.array(),
};
export const prescriptionClinic = {
  fullName: yup.string().required(getFormikRequiredMessage("Name")),
  address: yup.string().required(getFormikRequiredMessage("Address")),
  phone: yup.string().required(getFormikRequiredMessage("Phone")),
};
export const prescriptionPatientProfile = {
  name: yup.string().required(getFormikRequiredMessage("Name")),
  gender: yup.string().required(getFormikRequiredMessage("Gender")),
  dob: yup.date().required(getFormikRequiredMessage("DOB")),
};

export const prescriptionClinicSearch = {
  clinic: yup.object().required(getFormikRequiredMessage("Clinic")),
};

export const prescriptionPatientSearch = {
  patient: yup.object().required(getFormikRequiredMessage("Patient")),
};

export const profileBaic = {
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
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
  gender: yup.object().required("Gender is required"),
};

export const createPatient = {
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  dob: yup.date().required(),
  gender: yup.object().required(),
  phone: yup.string().length(10).required(),
  email: yup.string().email().required(),
};

export const createPatientRelative = {
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  dob: yup.date().required(),
  relation: yup.string().required(),
  gender: yup.object().required(),
  phone: yup.string().length(10).required(),
  email: yup.string().email().required(),
};

export const createDoctor = {
  firstName: yup
    .string()
    .trim()
    .required(getFormikRequiredMessage("firstName"))
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
  dob: yup.date().required(),
  gender: yup.object().required(),
  phone: yup.string().length(10).required(),
  email: yup.string().email().required(),
  regNo: yup.string().required(),
  regDate: yup.string(),
};

export const profileRegistration = {
  departmentId: yup.object().required("Department is required"),
  regNo: yup
    .string()
    .trim()
    .required("Registration No. is required")
    .matches(
      /^[a-zA-Z0-9\s-/]+$/,
      "Special charecters are not allowed except - and /"
    ),
  regDate: yup
    .date()
    .max(new Date(), "Registration date must be today or earlier than today")
    .required("Registration date is required"),
  registrationDocument: yup.object().nullable(),
};

export const confirmPassword = {
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
  newPassword: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
      "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
};

export const changePrimaryContact = { data: yup.object().required() };

export const consultationTimings = {
  clinic: yup.object().nullable(),
};

export const stringValueManager = {
  locale: yup.string().required(),
  value: yup.string().required(),
};

export const createAppointment = {
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
  isForce: yup.boolean(),
};

export const profileExperience = {
  organization: yup
    .string()
    .trim()
    .required("Organization name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  designation: yup
    .string()
    .trim()
    .required("Designation is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
  location: yup
    .string()
    .trim()
    .required("Location is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    )
    .required(),
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is: true,
      then: yup.date(),
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
    }),
  isCurrent: yup.boolean().notRequired(),
};

export const profileEducation = {
  school: yup
    .string()
    .trim()
    .required("School name is required")
    .matches(
      /^[a-zA-Z0-9\s-.,/()[\]]+$/,
      "All special charecters are not allowed except - . , / ( ) [ ]"
    ),
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
  startDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .required("Start date is required"),
  endDate: yup
    .date()
    .max(new Date(), "Must be today or earlier than today")
    .when("isCurrent", {
      is: true,
      then: yup.date(),
      otherwise: yup
        .date()
        .required("End date required")
        .test(
          "start-end-check",
          "End date should be after start date",
          (val, props) => {
            // console.log("kkikikiki", props.parent.startDate, val, moment(props.parent.startDate).diff(moment(val), 'days'));
            console.log("HERER", val);
            if (
              props.parent.startDate &&
              val &&
              moment(val).diff(moment(props.parent.startDate), "days") > 0
            ) {
              return true;
            } else return false;
          }
        ),
    }),
  isCurrent: yup.boolean().notRequired(),
};

export const smsCommunicationTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  body: yup.string().required("Body is required"),
  extraInfo: yup.object(),
};

export const mailCommunicationTemplateSchema = {
  name: yup.string().required("Name is required"),
  subject: yup.string().required("Subject is required"),
  bodyType: yup.mixed().required("Body Type is required"),
  type: yup.mixed().required("Type is required"),
  body: yup.string().required("Body is required"),
  extraInfo: yup.object(),
};

export const whatsappCommunicationTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  body: yup.string().required("Body is required"),
  extraInfo: yup.object(),
};

export const createSMSTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  message: yup.string().required("Message is required"),
  sampleMessage: yup.string().nullable(),
};

export const updateSMSTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  message: yup.string().required("Message is required"),
  sampleMessage: yup.string(),
  externalTemplateId: yup.string().nullable(),
  externalStatus: yup.string().nullable(),
  externalReason: yup.string().nullable(),
  _status: yup.string().required("Status is required"),
};

export const createWhatsappTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  header: yup.mixed().nullable(),
  footer: yup.string().nullable(),
  config: yup.object().required("Object is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  message: yup.string().required("Message is required"),
  sampleMessage: yup.string().nullable(),
};

export const updateWhatsappTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  header: yup.mixed().nullable(),
  footer: yup.string().nullable(),
  config: yup.object().required("Object is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  message: yup.string().required("Message is required"),
  sampleMessage: yup.string().nullable(),
  externalTemplateId: yup.string().nullable(),
  externalStatus: yup.string().nullable(),
  externalReason: yup.string().nullable(),
  _status: yup.string().required("Status is required"),
};

export const createMailTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  subject: yup.string().required("Subject is required"),
  contentType: yup.mixed().required("Content type is required"),
  message: yup.string().required("Message is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  sampleSubject: yup.string().nullable(),
  sampleMessage: yup.string().nullable(),
};

export const updateMailTemplateSchema = {
  name: yup.string().required("Name is required"),
  type: yup.mixed().required("Type is required"),
  subject: yup.string().required("Subject is required"),
  contentType: yup.mixed().required("Content type is required"),
  message: yup.string().required("Message is required"),
  extraInfo: yup.object().required("Extra Info is required"),
  sampleSubject: yup.string().nullable(),
  sampleMessage: yup.string().nullable(),
  externalTemplateId: yup.string().nullable(),
  externalStatus: yup.string().nullable(),
  externalReason: yup.string().nullable(),
  _status: yup.string().required("Status is required"),
};

export const testMailCommunicationTemplateSchema = {
  sendTo: email.required("Email is required"),
};

export const testSMSCommunicationTemplateSchema = {
  sendTo: phone.required("Phone is required"),
};
