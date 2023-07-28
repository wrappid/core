import React from "react";
import config from "../../../config/config";
import { HTTP } from "../../../config/constants";
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
      let backendUrl = process.env.REACT_APP_WRAPPID_backendUrl || config.wrappid.backendUrl;
      await axiosInterceptor({
        method: HTTP.GET,
        url:
          backendUrl +
          "/business/individual/UserBasicInfo?_defaultFilter=" +
          encodeURIComponent(JSON.stringify({ id: userid })),
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
      _photoUrl === "" && userid
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
    <CoreAvatar
      styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
      src={photoUrl || "photo.jpg"}
    />
  );
}
