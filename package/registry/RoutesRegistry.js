import ModelData from "../components/dataDisplay/dataTable/ModelData";

export const RoutesRegistry = {
  modelData: {
    Page        : { appComponent: ModelData.name },
    authRequired: false,
    entityRef   : "modelData",
    url         : "data/:model"
  },
};