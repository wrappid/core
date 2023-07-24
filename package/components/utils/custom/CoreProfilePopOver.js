import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { nativeUseNavigate } from "@wrappid/styled-components";

import { ENV_STAGE_MODE, urls, ENV_DEV_MODE } from "../../../config/constants";
import { MENU_SEPERATOR } from "../../../config/menuConstants";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";
import CoreAvatar from "../../dataDisplay/CoreAvatar";
import CoreDivider from "../../dataDisplay/CoreDivider";
import CoreMenu from "../../inputs/CoreMenu";
import CoreClasses from "../../../styles/CoreClasses";
import { getFullName } from "../../../utils/helper";
import CoreApiVersion from "./CoreApiVersion";
import CoreLoginDetails from "./CoreLoginDetails";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreAppVersion from "./CoreAppVersion";
import CoreEmailOrPhoneLink from "../../dataDisplay/custom/CoreEmailOrPhoneLink";
import CoreEmailLink from "../../dataDisplay/custom/CoreEmailLink";
import CorePhoneLink from "../../dataDisplay/custom/CorePhoneLink";

export default function CoreProfilePopOver(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const {
    firstName = "",
    middleName = "",
    lastName = "",
  } = profile?.basic || {};
  const {
    email = "",
    emailVerified = false,
    phone = "",
    phoneVerified = false,
  } = profile?.contact || {};
  const { onClose } = props;
  const profileCardMenu = [
    {
      icon: "person_outline",
      id: "viewProfile",
      label: "View Profile",
      link: urls.PROFILE,
    },
    {
      icon: "settings",
      id: "settings",
      label: "Settings",
      link: urls.SETTINGS,
    },
    { type: MENU_SEPERATOR },
    {
      icon: "logout",
      id: "logout",
      label: "Logout",
      link: urls.LOGOUT,
    },
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid
        styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM,
            CoreClasses.MARGIN.ML1,
          ]}
          src={auth?.photo ? auth?.photo : "photo.jpg"}
        />

        <CoreBox
          gridProps={{ gridSize: 8 }}
          // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
        >
          {/* <CoreGrid> */}
            <CoreTypographyCaption  hideSeeMore={true} limitChars={30}>
              {auth?.name}
            </CoreTypographyCaption>

            <CoreBox >
              <CoreEmailLink
                email={email}
                verified={emailVerified}
                limitChars={15}
                mask={true}
              />
            </CoreBox>

            <CoreBox >
              <CorePhoneLink
                phone={phone}
                verified={phoneVerified}
                limitChars={15}
                mask={true}
              />
            </CoreBox>
          {/* </CoreGrid> */}
          {/* @todo need to get it from authReducer */}
          {/* {profile?.contact?.email && profile?.contact?.email !== "" && (
            <CoreTypographyCaption>{profile?.contact?.email}</CoreTypographyCaption>
          )}

          {profile?.contact?.phone && profile?.contact?.phone !== "" && (
            <CoreTypographyCaption>{profile?.contact?.phone}</CoreTypographyCaption>
          )} */}
        </CoreBox>
      </CoreGrid>

      <CoreDivider /* styleClasses={[CoreClasses.MARGIN.MB4]} */ />

      <CoreMenu
        menu={profileCardMenu}
        miniDrawer={false}
        multiLevel={false}
        open={true}
        OnMenuClick={OnMenuClick}
      />

      {/* ApiVersion && LoginDetails */}
      {/* <CoreApiVersion /> */}
      <CoreAppVersion />
      {/* <CoreLoginDetails /> */}
    </CoreBox>
  );
}
