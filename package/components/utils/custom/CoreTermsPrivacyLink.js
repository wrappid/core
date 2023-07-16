import React from 'react'
import CoreBox from '../../layouts/CoreBox'
import CoreClasses from '../../../styles/CoreClasses'
import CoreLink from '../../navigation/CoreLink'
import config from '../../../config/config'

export default function CoreTermsPrivacyLink() {
    return (
        <CoreBox
            gridProps={{ gridSize: 6 }}
            styleClasses={[
                CoreClasses.LAYOUT.FULL_WIDTH,
                CoreClasses.FLEX.DIRECTION_ROW,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
                // CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            ]}
        >
            {/* <CoreLink
              styleClasses={[CoreClasses?.MARGIN?.MR1]}
              href={
                process.env?.REACT_APP_WRAPPID_helpLink ||
                config?.wrappid?.helpLink
              }
            >
              Help
            </CoreLink> */}
            <CoreLink
                styleClasses={[CoreClasses?.MARGIN?.MR1]}
                href={
                    process.env?.REACT_APP_WRAPPID_privacyLink ||
                    config?.wrappid?.privacyLink
                }
            >
                Privacy
            </CoreLink>
            <CoreLink
                href={
                    process.env?.REACT_APP_WRAPPID_termsLink ||
                    config?.wrappid?.termsLink
                }
            >
                Terms
            </CoreLink>
        </CoreBox>
    )
}
