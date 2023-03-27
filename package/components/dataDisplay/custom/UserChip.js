import React from "react";
import config from "../../../config/config";
import { HTTP_GET } from "../../../config/constants";
import axiosInterceptor from "../../../middleware/axiosInterceptor";
import authHeader from "../../../service/DataService";
import { getFullName } from "../../../utils/helper";
import CoreAvatar from "../CoreAvatar";
import CoreChip from "../CoreChip";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreClasses from "../../../styles/CoreClasses";

export default function UserChip(props) {
  const {
    userid,
    _firstName = "",
    _middleName = "",
    _lastName = "",
    _email = "",
    _photoUrl = "",
  } = props;
  const [firstName, setFirstName] = React.useState(_firstName);
  const [middleName, setMiddleName] = React.useState(_middleName);
  const [lastName, setLastName] = React.useState(_lastName);
  const [email, setEmail] = React.useState(_email);
  const [photoUrl, setPhotoUrl] = React.useState(_photoUrl);

  React.useEffect(() => {
    async function apiCall() {
      await axiosInterceptor({
        method: HTTP_GET,
        url:
          config.backendUrl +
          "/business/individual/UserBasicInfo?_defaultFilter=" +
          encodeURIComponent(JSON.stringify({ "Users.id": userid })),
        headers: await authHeader(true),
      })
        .then((response) => {
          setFirstName(response?.data?.data?.data["Person.firstName"]);
          setMiddleName(response?.data?.data?.data["Person.middleName"]);
          setLastName(response?.data?.data?.data["Person.lastName"]);
          setEmail(response?.data?.data?.data["email"]);
          setPhotoUrl(response?.data?.data?.data["Person.photoUrl"]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (
      _firstName === "" &&
      _middleName === "" &&
      _lastName === "" &&
      _photoUrl === ""
    ) {
      apiCall();
    }
  }, [userid]);

  let displayName = "";
  if (firstName === "" && middleName === "" && lastName === "") {
    displayName = email;
  } else {
    displayName = getFullName({ firstName, middleName, lastName });
  }

  return (
    <CoreChip
      size="small"
      avatar={
        <CoreAvatar
          styleClasses={[CoreClasses.BORDER.BORDER_0]}
          src={photoUrl || "photo.jpg"}
        />
      }
      label={
        <CoreTypographyCaption limitChars={12} hideSeeMore={true}>
          {displayName}
        </CoreTypographyCaption>
      }
    />
  );
}
