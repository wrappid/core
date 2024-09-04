/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreAvatar from "./CoreAvatar";
import CoreChip from "./CoreChip";
import CoreTooltip from "./CoreTooltip";
import CoreTypographyCaption from "./CoreTypographyCaption";
import { HTTP } from "../../config/constants";
import axiosInterceptor from "../../middleware/axiosInterceptor";
import authHeader from "../../service/DataService";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { getFullName } from "../../utils/helper";

export default function UserChip(props) {
  props = sanitizeComponentProps(UserChip, props);
  const {
    titleVisible = true,
    userid,
    _firstName = "",
    _middleName = "",
    _lastName = "",
    _email = "",
    _photoUrl = "",
  } = props;

  console.log("id", userid);

  // eslint-disable-next-line no-console
  console.log("userchip", props);

  const [firstName, setFirstName] = React.useState(_firstName);
  const [middleName, setMiddleName] = React.useState(_middleName);
  const [lastName, setLastName] = React.useState(_lastName);
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = React.useState(_email);
  const [photoUrl, setPhotoUrl] = React.useState(_photoUrl);

  let { config: appConfig } = React.useContext(WrappidDataContext);

  React.useEffect(() => {
    async function apiCall() {
      let backendUrl = appConfig?.wrappid?.backendUrl;

      await axiosInterceptor({
        headers: await authHeader(true),
        method : HTTP.GET,
        url:
          backendUrl +
          "/business/individual/UserBasicInfo?_defaultFilter=" +
          encodeURIComponent(JSON.stringify({ id: userid })),
      })
        .then((response) => {
          setFirstName(response?.data?.data?.data["Person.firstName"]);
          setMiddleName(response?.data?.data?.data["Person.middleName"]);
          setLastName(response?.data?.data?.data["Person.lastName"]);
          setEmail(response?.data?.data?.data["email"]);
          setPhotoUrl(response?.data?.data?.data["Person.photoUrl"]);
        })
        .catch((error) => {
          throw error;
        });
    }
    if (
      _firstName === "" &&
      _middleName === "" &&
      _lastName === "" &&
      _photoUrl === "" &&
      userid
    ) {
      apiCall();
    }
  }, [userid]);

  let displayName = "";

  if (firstName === "" && middleName === "" && lastName === "") {
    displayName = "Unknown";
  } else {
    displayName = getFullName({ firstName, lastName, middleName });
  }

  console.log("userchip name", firstName);

  return titleVisible ? (
    <CoreChip
      title={displayName}
      size="medium"
      avatar={
        <CoreAvatar
          styleClasses={[CoreClasses.BORDER.BORDER_0, CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
          src={photoUrl || "photo.jpg"}
        />
      }
      label={
        <CoreTypographyCaption hideSeeMore={true}>
          {firstName}
        </CoreTypographyCaption>
      }
    />
  ) : (
    <CoreTooltip title={displayName}>
      <CoreAvatar
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
        src={photoUrl || "photo.jpg"}
      />
    </CoreTooltip>
  );
}

UserChip.validProps = [
  {
    name : "titleVisible",
    types: [{ default: true, type: "boolean", validValue: [true, false] }],
  },
  { name: "userid", types: [{ type: "string" }] },
  { name: "firstName", types: [{ type: "string" }] },
  { name: "middleName", types: [{ type: "string" }] },
  { name: "lastName", types: [{ type: "string" }] },
  { name: "email", types: [{ type: "string" }] },
  { name: "photoUrl", types: [{ type: "string" }] },
];
