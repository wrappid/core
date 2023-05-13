import React from "react";

import {
    CoreBox,
    CoreGrid,
    CoreSection,
    CoreImage,
    CoreClasses
} from "@wrappid/core";
import { nativeUseNavigate } from "@wrappid/styled-components";
import { useSelector } from "react-redux";

export const AuthContainer = (props) => {
    const navigate = nativeUseNavigate();
    const auth = useSelector((state) => state.auth);
    const requestUrl = useSelector((state) => state?.manageAssistant?.requestUrl);

    React.useEffect(() => {
        if (auth.uid) {
            if (requestUrl) {
                navigate(requestUrl.requestUrl);
            } else if (
                auth.sessionExpired &&
        auth.sessionDetail &&
        auth.accessToken &&
        auth.refreshToken
            ) {
                let path = auth.sessionDetail?.location?.pathname;

                navigate("/", { state: { recalledPath: path } });
            } else {
                navigate("/");
            }
        }
    });
    return (
        <CoreGrid styleClasses={[CoreClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER]}>
            <CoreBox gridProps={{ gridSize: { md: 3, sm: 6 } }}>
                <CoreSection>
                    <CoreBox
                        styleClasses={[CoreClasses?.LAYOUT?.FULL_WIDTH, CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER, CoreClasses?.MARGIN?.MB5]}
                    >
                        <CoreImage
                            src={require("../../images/logo.png")}
                            alt=""
                            height={40}
                            width={120}
                        />
                    </CoreBox>

                    {props.children}
                </CoreSection>
            </CoreBox>
        </CoreGrid>
    );
};
