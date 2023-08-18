// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { useSelector } from "react-redux";

import config from "../../../config/config";
import CoreClasses from "../../../styles/CoreClasses";
import CoreBox from "../../layouts/CoreBox";
import CoreLink from "../../navigation/CoreLink";

export default function CoreTermsPrivacyLink() {
  const uid = useSelector(state=>state?.auth?.uid);

  return (
    <CoreBox
      gridProps={{ gridSize: 6 }}
      styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}
    >
      {/* -- <CoreLink
              styleClasses={[CoreClasses?.MARGIN?.MR1]}
              href={
                process.env?.REACT_APP_WRAPPID_helpLink ||
                config?.wrappid?.helpLink
              }
            >
              Help
            </CoreLink> */}
      <CoreLink
        styleClasses={uid ? [] : [CoreClasses?.COLOR?.TEXT_WHITE]}
        href={
          // eslint-disable-next-line no-undef
          process.env?.REACT_APP_WRAPPID_privacyLink ||
                    config?.wrappid?.privacyLink
        }
      >
                Privacy
      </CoreLink>

      <CoreLink
        styleClasses={uid
          ? [CoreClasses?.MARGIN?.ML1]
          : [CoreClasses?.MARGIN?.ML1, CoreClasses?.COLOR?.TEXT_WHITE]
        }
        href={
          // eslint-disable-next-line no-undef
          process.env?.REACT_APP_WRAPPID_termsLink ||
                    config?.wrappid?.termsLink
        }
      >
                Terms
      </CoreLink>
    </CoreBox>
  );
}
