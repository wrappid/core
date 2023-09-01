import { ASYNC_SELECT_FUNCTION_MAP } from "../functions/asyncSelectFunctionMap";
import { FORM_DATA_TABLE_FUNCTION_MAP } from "../functions/formDataTableFunctionMap";
import formSubmitSanitizations from "../functions/formSubmitSanitizations";

export default {
  ...ASYNC_SELECT_FUNCTION_MAP,
  ...FORM_DATA_TABLE_FUNCTION_MAP,
  ...formSubmitSanitizations
};