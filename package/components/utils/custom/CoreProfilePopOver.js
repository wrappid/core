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
import CoreApiVersion from "./CoreApiVersion";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreAppVersion from "./CoreAppVersion";
import CoreEmailLink from "../../dataDisplay/custom/CoreEmailLink";
import CorePhoneLink from "../../dataDisplay/custom/CorePhoneLink";
import CoreButton from "../../inputs/CoreButton";
import { __IconTypes } from "../../dataDisplay/CoreIcon";
import CoreTypographyBody2 from "../../dataDisplay/paragraph/CoreTypographyBody2";

export default function CoreProfilePopOver(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { profileRegistration } = useSelector((state) => state.api);
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
      icon: {
        type: __IconTypes.MATERIAL_OUTLINED_ICON,
        icon: "account_circle",
      },
      id: "viewProfile",
      label: "View Profile",
      link: urls.PROFILE,
    },
    {
      icon: { type: __IconTypes.MATERIAL_OUTLINED_ICON, icon: "settings" },
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
    <CoreBox styleClasses={[CoreClasses.WIDTH.MIN_VW_25, CoreClasses.HEIGHT.MIN_VH_25]}>
      <CoreGrid
        styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          CoreClasses.LAYOUT.PROFILE_BAR_WIDTH,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.DATA_DISPLAY.AVATAR_XLARGE,
            CoreClasses.MARGIN.ML1,
          ]}
          src={auth?.photo ? auth?.photo : "photo.jpg"}
        />

        <CoreBox
          gridProps={{ gridSize: 8 }}
          // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
        >
          {/* <CoreGrid> */}
          <CoreTypographyBody2 /* hideSeeMore={true} limitChars={30} */>
            {auth?.name}
          </CoreTypographyBody2>

          <CoreTypographyCaption /* hideSeeMore={true} limitChars={30} */>
            {profileRegistration?.degree}
          </CoreTypographyCaption>

          <CoreBox>
            <CoreEmailLink
              email={email}
              verified={emailVerified}
              limitChars={15}
            />
          </CoreBox>

          <CoreBox>
            <CorePhoneLink
              phone={phone}
              verified={phoneVerified}
              limitChars={15}
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

      <CoreDivider /* styleClasses={[CoreClasses.MARGIN.MB4]} */ />

      <CoreBox styleClasses={[CoreClasses.MARGIN.MX1]}>
        {/* ApiVersion && LoginDetails */}
        <CoreApiVersion />
        <CoreAppVersion />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.MARGIN.MX1, CoreClasses.JUSTIFY_CONTENT_FLEX_END, CoreClasses.MARGIN.MB1]}>
        <CoreButton
          label="Logout"
          variant="contained"
          fullWidth={true}
          OnClick={() => {
            return navigate(urls.LOGOUT);
          }}
        />
      </CoreBox>

      {/* <CoreLoginDetails /> */}
    </CoreBox>
  );
}
