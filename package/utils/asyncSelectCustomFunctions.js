// import { setClinic } from "../store/action/prescriptionAction";
import { getFullName } from "./helper";

export const changePrimaryContact = {
  getOptionLabel: (data) => {
    return data?.data;
  },
  getOptionValue: (data) => {
    return data;
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.id === value?.data;
  },
};

export const profileBasicgender = {
  getOptionLabel: (data) => {
    return data?.label || "";
  },
  getOptionValue: (data) => {
    return typeof data === "string"
      ? { id: data, label: data }
      : { id: data?.label || "", label: data?.label || "" };
  },
  isOptionEqualToValue: (option, value) => {
    if (typeof option === typeof value && typeof option === "string") {
      return option === value;
    } else {
      return option?.id === value?.id;
    }
  },
};

export const profileRegistrationSpecilization = {
  getOptionValue: (data) => {
    return { id: data?.id || "", label: data?.name || "" };
  },
};

export const prescriptionAsyncSelects = {
  getOptionLabel: (data) => {
    return data?.label || "";
  },
  getOptionValue: (data) => {
    return data?.map((d) => {
      return typeof d === "string"
        ? { label: d }
        : { id: d?.id || "", label: d?.label || "" };
    });
  },
  isOptionEqualToValue: (option, value) => {
    console.log("COMPARE", option, value);
    if (typeof option === "string") {
      if (typeof value === "string") {
        return option === value;
      } else if (value?.id) {
        return option === value?.id;
      } else if (value?.label) {
        return option === value?.label;
      }
    } else {
      return option?.id === value?.id;
    }
  },
};

export const searchPatient = {
  getOptionLabel: (data) => {
    if (data)
      return data?.phone + "|" + data?.email + "|" + getFullName(data?.Person);
    else return "Add data";
  },
  getOptionValue: (data) => {
    return data;
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.id === value?.id;
  },
  onChangeDispatch: { type: "SET_PATIENT" },
};

export const searchClinic = {
  
  getOptionLabel: (data) => {
    return data && data?.fullName ? data?.fullName : "";
  },
  // onChangeDispatch: setClinic,
  getOptionValue: (data) => {
    return data;
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.id === value?.id;
  },
};

export const masterData = {
  getOptionLabel: (data) => {
    return data?.label || "";
  },
  getOptionValue: (data) => {
    return data?.name || "";
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.name === value;
  },
};
