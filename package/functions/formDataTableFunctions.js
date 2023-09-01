export function setCrowdDataTableEntity(formikprops, state) {
  return formikprops?.values?.crowdsourceTable?.value || "MasterData";
}
