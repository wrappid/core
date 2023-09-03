import {
  masterData,
  masterDataMap,
  searchClinic,
  searchPatient
} from "./asyncSelectCustomFunctions";

export const __SEARCHPATIENT_ON_CHANGE_DISPATCH = "__SEARCHPATIENT_ON_CHANGE_DISPATCH";
export const __SEARCHPATIENT_GET_OPTION_VALUE = "__SEARCHPATIENT_GET_OPTION_VALUE";
export const __SEARCHPATIENT_GET_OPTION_LABEL = "__SEARCHPATIENT_GET_OPTION_LABEL";
export const __SEARCHPATIENT_IS_OPTIONS_EQUAL_TO_VALUE =
  "__SEARCHPATIENT_IS_OPTIONS_EQUAL_TO_VALUE";
export const __SEARCH_CLINIC_ON_CHANGE_DISPATCH = "__SEARCH_CLINIC_ON_CHANGE_DISPATCH";
export const __SEARCH_CLINIC_GET_OPTION_VALUE = "__SEARCH_CLINIC_GET_OPTION_VALUE";
export const __SEARCH_CLINIC_GET_OPTION_LABEL = "__SEARCH_CLINIC_GET_OPTION_LABEL";
export const __SEARCH_CLINIC_IS_OPTIONS_EQUAL_TO_VALUE =
  "__SEARCH_CLINIC_IS_OPTIONS_EQUAL_TO_VALUE";

export const __MASTERDATA_GET_OPTION_LABEL =
  "__MASTERDATA_GET_OPTION_LABEL";
export const __MASTERDATA_GET_OPTION_VALUE =
  "__MASTERDATA_GET_OPTION_VALUE";
export const __MASTERDATA_IS_OPTIONS_EQUAL_TO_VALUE =
  "__MASTERDATA_IS_OPTIONS_EQUAL_TO_VALUE";

const coreFunctionMaps = {
  /**
   * core async select maps
   */
  masterDataIsEqualValue: masterData.isOptionsEqualToValue,
  masterDataLabel       : masterDataMap.getOptionLabel,
  masterDataValue       : masterDataMap.getOptionValue,
};

export const ASYNC_SELECT_FUNCTION_MAP = {
  ...coreFunctionMaps,
  /**
   * next ones should be removed 
   */
  __MASTERDATA_GET_OPTION_LABEL: masterData.getOptionLabel,
  
  __MASTERDATA_GET_OPTION_VALUE: masterData.getOptionValue,
  
  __MASTERDATA_IS_OPTIONS_EQUAL_TO_VALUE: masterData.isOptionsEqualToValue,
  
  __SEARCHPATIENT_GET_OPTION_LABEL: searchPatient.getOptionLabel,

  __SEARCHPATIENT_GET_OPTION_VALUE: searchPatient.getOptionValue,

  __SEARCHPATIENT_IS_OPTIONS_EQUAL_TO_VALUE: searchPatient.isOptionsEqualToValue,
  __SEARCHPATIENT_ON_CHANGE_DISPATCH       : searchPatient.onChangeDispatch,
  __SEARCH_CLINIC_GET_OPTION_LABEL         : searchClinic.getOptionLabel,

  __SEARCH_CLINIC_GET_OPTION_VALUE         : searchClinic.getOptionValue,
  __SEARCH_CLINIC_IS_OPTIONS_EQUAL_TO_VALUE: searchClinic.isOptionsEqualToValue,
  __SEARCH_CLINIC_ON_CHANGE_DISPATCH       : searchClinic.onChangeDispatch,
};
