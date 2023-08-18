export function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta) {
  return {
    endpoint: apiMeta.endpoint + "/" + formData?.id,
    values  : formData,
  };
}

export function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  return {
    endpoint: "",
    values  : {
      formArrayId: others?.editForm[others.formId]?.formArrayId,
      formId     : others.formId,
    },
  };
}

// eslint-disable-next-line no-unused-vars
export function SanDoctorCreate(formData, apiMeta, state, others) {
  // -- console.error("formData", formData);
  // -- console.error("endpoint", apiMeta.endpoint);
  // -- console.error("reduxData", apiMeta.reduxData);
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender: formData?.gender?.label,
    },
  };
}

// eslint-disable-next-line no-unused-vars
export function SanStringValueAdd(formData, apiMeta, state, others) {
  // -- console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}

export function SanStringValueEdit(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others?.editing),
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}
