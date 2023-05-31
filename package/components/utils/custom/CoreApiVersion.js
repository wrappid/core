import React from "react";

import { useDispatch, useSelector } from "react-redux";

import config from "../../../config";
import { HTTP } from "../../../config/constants";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import CoreLink from "../../navigation/CoreLink";
import CoreClasses from "../../../styles/CoreClasses";
import { apiRequestAction } from "../../../store/action/appActions";
import { API_VERSION_ERROR, API_VERSION_SUCCESS } from "../../../store/types/appTypes";

export default function ApiVersion() {
    const dispatch = useDispatch();

    const { apiVersion } = useSelector((state) => state.app);

    React.useEffect(() => {
        dispatch(
            apiRequestAction(HTTP.GET, "/version", false, null, API_VERSION_SUCCESS, API_VERSION_ERROR)
        );
    }, []);

    return (
        <>
            <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>
                <CoreTypographyCaption>API Version:</CoreTypographyCaption>

                <CoreTypographyCaption>{apiVersion?.version || "unknown"}</CoreTypographyCaption>
            </CoreBox>

            <CoreBox
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
            >
                <CoreTypographyCaption>API Swagger:</CoreTypographyCaption>

                <CoreTypographyCaption>
                    <CoreLink target="_blank" href={config.backendUrl + "/apiDocs"}>
                        {config.backendUrl + "/apiDocs"}
                    </CoreLink>
                </CoreTypographyCaption>
            </CoreBox>
        </>
    );
}
