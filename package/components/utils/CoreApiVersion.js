// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../../config/constants";
import { apiRequestAction } from "../../store/action/appActions";
import { API_VERSION_ERROR, API_VERSION_SUCCESS } from "../../store/types/appTypes";
import CoreTypographyCaption from "../dataDisplay/CoreTypographyCaption";

export default function CoreApiVersion(props) {
  const dispatch = useDispatch();
  const { noTitle = false } = props;

  const { apiVersion } = useSelector((state) => state.app);

  React.useEffect(() => {
    dispatch(
      apiRequestAction(HTTP.GET, "/version", false, null, API_VERSION_SUCCESS, API_VERSION_ERROR)
    );
  }, []);

  return <CoreTypographyCaption>{!noTitle && "API Version: "}{`v${apiVersion?.version || "unknown"}`}</CoreTypographyCaption>;
}
