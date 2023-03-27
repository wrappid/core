// import { setClinic } from "../store/action/prescriptionAction";
import { getFullName } from "./helper";

export const changePrimaryContact = {
  getOptionValue: (data) => {
    return data;
  },
  getOptionLabel: (data) => {
    return data.data;
  },
  isOptionsEqualToValue: (option, value) => {
    return option.id === value.data;
  },
};

export const profileBasicgender = {
  getOptionValue: (data) => {
    return typeof data === "string"
      ? { label: data, id: data }
      : { label: data.label, id: data.label };
  },
  getOptionLabel: (data) => {
    return data.label;
  },
  isOptionEqualToValue: (option, value) => {
    if (typeof option === typeof value && typeof option === "string") {
      return option === value;
    } else {
      return option.id === value.id;
    }
  },
};

export const profileRegistrationSpecilization = {
  getOptionValue: (data) => {
    return { label: data.name, id: data.id };
  },
};

export const prescriptionAsyncSelects = {
  getOptionValue: (data) => {
    return data.map((d) => {
      return typeof d === "string"
        ? { label: d }
        : { label: d.label, id: d.id };
    });
  },
  getOptionLabel: (data) => {
    return data.label;
  },
  isOptionEqualToValue: (option, value) => {
    console.log("COMPARE", option, value);
    if (typeof option === "string") {
      if (typeof value === "string") {
        return option === value;
      } else if (value.id) {
        return option === value.id;
      } else if (value.label) {
        return option === value.label;
      }
    } else {
      return option.id === value.id;
    }
  },
};

export const searchPatient = {
  getOptionValue: (data) => {
    return data;
  },
  getOptionLabel: (data) => {
    if (data)
      return data.phone + "|" + data.email + "|" + getFullName(data?.Person);
    else return "Add data";
  },
  isOptionsEqualToValue: (option, value) => {
    return option.id === value.id;
  },
  onChangeDispatch: {
    type: "SET_PATIENT",
  },
};

export const searchClinic = {
  // onChangeDispatch: setClinic,
  getOptionValue: (data) => {
    return data;
  },
  getOptionLabel: (data) => {
    return data && data.fullName ? data.fullName : "";
  },
  isOptionsEqualToValue: (option, value) => {
    return option.id === value.id;
  },
};

export const masterData = {
  getOptionValue: (data) => {
    return data.name;
  },
  getOptionLabel: (data) => {
    return data.label;
  },
  isOptionsEqualToValue: (option, value) => {
    return option.name === value;
  },
};
