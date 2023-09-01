import * as yup from "yup";
import { getFormikRequiredMessage } from "./formUtils";

export function clearValidatePhoneEmail(text) {
  var t = text;
  if (!text || (text && text.length === 0)) return false;
  if (t[0] === "'") {
    t = t.slice(1);
    t = t.toLowerCase();
  }
  var f = String(t).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (f) {
    return f;
  } else if (!f) {
    f = String(t).match(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    );

    return f;
  }

  return f;
}

export const defaultValidations = {
  text: {
    required: yup.string().required(getFormikRequiredMessage("text")),
    notRequired: yup.string().nullable(),
  },
  email: {
    required: yup.string().email().required(getFormikRequiredMessage("email")),
    notRequired: yup.string().email().nullable(),
  },
  phone: {
    required: yup
      .string()
      .length(10)
      .required(getFormikRequiredMessage("Phone")),
    notRequired: yup.string().nullable(),
  },
  emailOrPhone: {
    required: yup
      .string()
      .test(
        "email-phone-validation",
        "Not a valid email or phone no.",
        clearValidatePhoneEmail
      )
      .required(getFormikRequiredMessage("emailOrPhone")),
    notRequired: yup
      .string()
      .test(
        "email-phone-validation",
        "Not a valid email or phone no.",
        clearValidatePhoneEmail
      ),
  },

  password: {
    required: yup
      .string()
      .required(getFormikRequiredMessage("password"))
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      ),
    notRequired: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      ),
  },
  confirmPassword: {
    required: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    notRequired: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  },
  select: {
    required: yup.string().required(getFormikRequiredMessage("Select")),
    notRequired: yup.string(),
  },
  date: {
    required: yup.string().required(getFormikRequiredMessage("Select")),
    notRequired: yup.string(),
  },
  datetime: {
    required: yup.string().required(getFormikRequiredMessage("dateTime")),
    notRequired: yup.string(),
  },
  checkbox: {
    required: yup.bool(),
  },
  time: {
    required: yup.string().required(getFormikRequiredMessage("Time")),
    notRequired: yup.string(),
  },
  json: {
    required: yup.object().required(getFormikRequiredMessage("JSON")),
    notRequired: yup.object().nullable(),
  },
  otp: {
    required: yup
      .string()
      .length(6)
      .required(getFormikRequiredMessage("OneTimePassword")),
    notRequired: yup.string(),
  },
  asyncSelect: {
    required: yup.array().required(getFormikRequiredMessage("selection")),
    notRequired: yup.array(),
  },
  asyncSelectMulti: {
    required: yup.array().required(getFormikRequiredMessage("selection")),
    notRequired: yup.array(),
  },
  multiTimeRange: {
    required: yup.array().required(getFormikRequiredMessage("TimeRange")),
    notRequired: yup.array(),
  },
  timeRange: {
    required: yup.object().required(getFormikRequiredMessage("TimeRange")),
    notRequired: yup.object().nullable(),
  },
  parentChildMap: {
    required: yup.array().required(),
    notRequired: yup.array().nullable(),
  },
  imagePicker: {
    required: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().required(); // schema for object
        case "string":
          return yup.string().url().required(); // schema for string
        default:
          return yup.string().required(); // here you can decide what is the default
      }
    }),
    notRequired: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().notRequired().nullable(); // schema for object
        case "string":
          return yup.string().url().notRequired().nullable(); // schema for string
        default:
          return yup.string().notRequired().nullable(); // here you can decide what is the default
      }
    }),
  },
  filePicker: {
    required: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().required(); // schema for object
        case "string":
          return yup.string().url().required(); // schema for string
        default:
          return yup.string().required(); // here you can decide what is the default
      }
    }),
    notRequired: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().notRequired().nullable(); // schema for object
        case "string":
          return yup.string().url().notRequired().nullable(); // schema for string
        default:
          return yup.string().notRequired().nullable(); // here you can decide what is the default
      }
    }),
  },
};
