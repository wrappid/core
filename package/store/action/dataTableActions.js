import { UPDATE_QUERY_SEARCH_VALUE_DATA } from "../types/dataManagementTypes";

export const reloadDataTableAction = (entity) => {
  return (dispatch) => {
    dispatch({ payload: { entity }, type: UPDATE_QUERY_SEARCH_VALUE_DATA });
  };
};
  