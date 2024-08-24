import * as yup from "yup";

import { getFormikRequiredMessage } from "./formUtils";

export function clearValidatePhoneEmail(text) {
  let temp = text;

  if (!text || (text && text.length === 0)) return false;
  if (temp[0] === "'") {
    temp = temp.slice(1);
    temp = temp.toLowerCase();
  }
  let flag = String(temp).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (flag) {
    if(temp?.length > 255){
      return false;
    }
    return flag;
  } else if (!flag) {
    flag = String(temp).match(/^[4-9](\d{9})$/);
    return flag;
  }

  return flag;
}

export const defaultValidations = {
  asyncSelect: {
    notRequired: yup.string().nullable(),
    required   : yup.string().required(getFormikRequiredMessage("selection")),
  },
  asyncSelectMulti: {
    notRequired: yup.array().nullable(),
    required   : yup.array().required(getFormikRequiredMessage("selection")),
  },
  checkbox       : { required: yup.bool() },
  confirmPassword: {
    notRequired: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    required: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(getFormikRequiredMessage("confirmPassword")),
  },

  date: {
    notRequired: yup.string(),
    required   : yup.string().required(getFormikRequiredMessage("Select")),
  },
  datetime: {
    notRequired: yup.string(),
    required   : yup.string().required(getFormikRequiredMessage("dateTime")),
  },
  email: {
    notRequired: yup.string().email().nullable(),
    required   : yup.string().email().required(getFormikRequiredMessage("email")),
  },
  emailOrPhone: {
    notRequired: yup
      .string()
      .test(
        "email-phone-validation",
        "Not a valid email or phone no.",
        clearValidatePhoneEmail
      ),
    required: yup
      .string()
      .test(
        "email-phone-validation",
        "Not a valid email or phone no.",
        clearValidatePhoneEmail
      )
      .required(getFormikRequiredMessage("emailOrPhone")),
  },
  filePicker: {
    notRequired: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.mixed().notRequired().nullable(); // schema for object

        case "string":
          return yup.string().url().notRequired()
            .nullable(); // schema for string

        default:
          return yup.string().notRequired().nullable(); // here you can decide what is the default
      }
    }),
    required: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.mixed().required(); // schema for object

        case "string":
          return yup.string().url().required(); // schema for string

        default:
          return yup.string().required(); // here you can decide what is the default
      }
    }),
  },
  imagePicker: {
    notRequired: yup.lazy((value) => {
      switch (typeof value) {
        case "object":
          return yup.object().notRequired().nullable(); // schema for object

        case "string":
          return yup.string().url().notRequired()
            .nullable(); // schema for string

        default:
          return yup.string().notRequired().nullable(); // here you can decide what is the default
      }
    }),
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
  },
  json: {
    notRequired: yup.object().nullable(),
    required   : yup.object().required(getFormikRequiredMessage("JSON")),
  },
  multiTimeRange: {
    notRequired: yup.array(),
    required   : yup.array().required(getFormikRequiredMessage("TimeRange")),
  },
  newPassword: {
    notRequired: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      ),
    required: yup
      .string()
      .required(getFormikRequiredMessage("password"))
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      ),
  },
  otp: {
    notRequired: yup.string(),
    required   : yup
      .string()
      .length(6)
      .required(getFormikRequiredMessage("OneTimePassword")),
  },
  parentChildMap: {
    notRequired: yup.array().nullable(),
    required   : yup.array().required(),
  },
  password: {
    notRequired: yup.string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      ),
    required: yup.string()
      .required(getFormikRequiredMessage("password"))
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])(?=.{8,})/,
        "At least 8 Characters, a mixture of uppercase, lowercase, numbers and special  characters"
      )
      .required(getFormikRequiredMessage("password")),
  },
  phone: {
    notRequired: yup.string().matches(/^[4-9](\d{9})$/, "Not a valid number").length(10)
      .nullable(),
    required: yup
      .string()
      .matches(/^[4-9](\d{9})$/, "Not a valid number")
      .length(10)
      .required(getFormikRequiredMessage("Phone")),
  },
  select: {
    notRequired: yup.string(),
    required   : yup.string().required(getFormikRequiredMessage("Select")),
  },
  text: {
    notRequired: yup.string().nullable(),
    required   : yup.string().required(getFormikRequiredMessage("text")),
  },
  time: {
    notRequired: yup.string(),
    required   : yup.string().required(getFormikRequiredMessage("Time")),
  },
  timeRange: {
    notRequired: yup.object().nullable(),
    required   : yup.object().required(getFormikRequiredMessage("TimeRange")),
  },
};
