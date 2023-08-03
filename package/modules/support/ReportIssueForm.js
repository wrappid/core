import React from "react";
import {
  browserName,
  deviceType,
  fullBrowserVersion,
  isMobile,
  mobileModel,
  mobileVendor,
  osName,
  osVersion,
} from "react-device-detect";
import { useSelector } from "react-redux";

/**
 * @todo this package json is core's
 * should be the package json of user application
 */

import packageJSON from "../../package.json";
import CoreForm from "../../components/forms/CoreForm";
import {
  FORM_IDS,
  FORM_EDIT_MODE,
} from "../../components/forms/coreFormConstants";
import CoreCard from "../../components/surfaces/CoreCard";
import CoreCardContent from "../../components/surfaces/CoreCardContent";
import { getFullName } from "../../utils/helper";
import { getLabel } from "../../utils/stringUtils";

export default function ReportIssueForm(props) {
  const { title, isStacktrace = true, stackTrace, labels } = props;
  const { apiVersion } = useSelector((state) => state.app);
  const { role } = useSelector((state) => state.auth?.role || {});
  const profile = useSelector((state) => state.profile);
  const basic = profile?.basic;
  const contact = profile?.contact;

  return (
    <CoreCard>
      <CoreCardContent>
        <CoreForm
          formId={FORM_IDS.__CREATE_ISSUE}
          authenticated={false}
          mode={FORM_EDIT_MODE}
          initData={{
            devInfo: JSON.stringify({
              backend: {
                // url: config.backendUrl,
                version: apiVersion?.version || "unknown",
              },
              client: {
                browser: `${browserName} Ver: ${fullBrowserVersion}`,
                device: `${getLabel(deviceType)}${
                  isMobile ? " " + mobileVendor + " " + mobileModel : ""
                }`,
                os: `${osName} Ver: ${osVersion}`,
                userAgent: navigator?.userAgent,
              },
              frontend: {
                url: window?.location?.href,
                version: packageJSON?.version,
              },
            }),
            isStacktrace: isStacktrace,
            labels: labels,
            reporterInfo: JSON.stringify({
              creationTime: new Date().toLocaleString(),
              email: contact?.email,
              name: getFullName(basic),
              phone: contact?.phone,
              role: role || "unknown",
            }),
            stackTrace: stackTrace,
            title: title,
          }}
        />
      </CoreCardContent>
    </CoreCard>
  );
}
