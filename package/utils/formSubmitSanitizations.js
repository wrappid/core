import { FORM_IDS } from "../components/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";
import { queryBuilder } from "./helper";

export function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta, state) {
  return {
    values: formData,
    endpoint: apiMeta.endpoint + "/" + formData?.id,
  };
}

export function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: {
      formId: others.formId,
      formArrayId: others?.editForm[others.formId]?.formArrayId,
    },
    endpoint: "",
  };
}

export function SanDoctorCreate(formData, apiMeta, state, others) {
  console.error("formData", formData);
  console.error("endpoint", apiMeta.endpoint);
  console.error("reduxData", apiMeta.reduxData);
  return {
    values: {
      ...formData,
      gender: formData?.gender?.label,
    },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanStringValueAdd(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: {
      ...formData,
      table: state?.language?.languageTable?.id,
      key: state?.language?.languageTableData?.key,
    },
    endpoint: apiMeta.endpoint,
  };
}

export function SanStringValueEdit(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: {
      ...formData,
      table: state?.language?.languageTable?.id,
      key: state?.language?.languageTableData?.key,
    },
    endpoint: apiMeta.endpoint.replace(":id", others?.editing),
  };
}
