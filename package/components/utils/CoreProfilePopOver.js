// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/native";
import { useSelector } from "react-redux";

import CoreApiVersion from "./CoreApiVersion";
import CoreAppVersion from "./CoreAppVersion";
import CoreClasses from "../../styles/CoreClasses";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreEmailLink from "../dataDisplay/CoreEmailLink";
import { __IconTypes } from "../dataDisplay/CoreIcon";
import CorePhoneLink from "../dataDisplay/CorePhoneLink";
import CoreButton from "../inputs/CoreButton";
import CoreBox from "../layouts/CoreBox";
import CoreStack from "../layouts/CoreStack";
import CoreMenu from "../navigation/CoreMenu";
import CoreDivider from "../POC/CoreDivider.tsx";
import CoreCard from "../surfaces/CoreCard";
import CoreCardHeader from "../surfaces/CoreCardHeader";

export default function CoreProfilePopOver(props) {
  // eslint-disable-next-line no-console
  // console.log(props);
  const navigate = nativeUseNavigate();
  const {
    user: {
      name = null,
      photo = null,
      email = null,
      emailVerified = false,
      phone = null,
      phoneVerified = false,
    } 
  } = useSelector((state) => state?.auth || {});

  const {
    basic: {
      firstName = null,
      middleName = null,
      lastName = null,
      photo: basicPhoto = null
    } 
  } = useSelector((state) => state?.profile || {});
  const basicName = [firstName, middleName, lastName].filter((item) => item).join(" ");
  
  const { onClose } = props;
  const profileCardMenu = [
    {
      icon: {
        icon: "account_circle",
        type: __IconTypes.MATERIAL_OUTLINED_ICON,
      },
      id   : "viewProfile",
      label: "View Profile",
      link : "/profile",
    },
    {
      icon : { icon: "settings", type: __IconTypes.MATERIAL_OUTLINED_ICON },
      id   : "settings",
      label: "Settings",
      link : "/settings",
    } /* -- ,
    { type: MENU_SEPERATOR },
    {
      icon : "logout",
      id   : "logout",
      label: "Logout",
      link : urls.LOGOUT,
    }, */,
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose;
  };

  return (
    <CoreBox styleClasses={[CoreClasses.LAYOUT.POPOVER]}>
      <CoreCard>
        <CoreCardHeader
          avatar={
            photo ? (
              <CoreAvatar
                gridProps={{ gridSize: { md: 4, sm: 3, xs: 3 } }}
                styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
                src={basicPhoto || photo}
              />
            ) : (
              <CoreAvatar
                gridProps={{ gridSize: { md: 4, sm: 3, xs: 3 } }}
                styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
              >{(basicName || name || "Unknown User").at(0)}</CoreAvatar>
            ) 
          }
          title={basicName || name || "Unknown User"}
          subheader={
            <>              
              <CoreEmailLink email={email} verified={emailVerified} limitChars={15} />

              <CorePhoneLink phone={phone} verified={phoneVerified} limitChars={15} />
            </>
          }
        />
      </CoreCard>

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <CoreGrid
        styleClasses={[
          CoreClasses.PADDING.P1,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          CoreClasses.LAYOUT.PROFILE_BAR_WIDTH,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: { md: 4, sm: 3, xs: 3 } }}
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
          src={photo}
        />

        <CoreBox
          gridProps={{ gridSize: 8 }}
          // styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
        >
          <CoreTypographyBody2>
            {name}
          </CoreTypographyBody2>

          <CoreTypographyCaption>
            {profileRegistration?.degree}
          </CoreTypographyCaption>

          <CoreBox>
            <CoreEmailLink email={email} verified={emailVerified} limitChars={15} />
          </CoreBox>

          <CoreBox>
            <CorePhoneLink phone={phone} verified={phoneVerified} limitChars={15} />
          </CoreBox>
        </CoreBox>
      </CoreGrid> */}

      <CoreDivider /* styleClasses={[CoreClasses.MARGIN.MB4]} */ />

      <CoreMenu
        menu={profileCardMenu}
        miniDrawer={false}
        multiLevel={false}
        open={true}
        OnMenuClick={OnMenuClick}
        displayIcon={true}
      />

      <CoreDivider />

      <CoreBox styleClasses={[CoreClasses.PADDING.P1]}>
        <CoreStack styleClasses={[CoreClasses.MARGIN.MB3]}>
          <CoreApiVersion />

          <CoreAppVersion />
        </CoreStack>

        <CoreButton
          styleClasses={[CoreClasses.MARGIN.ML0]}
          label="Logout"
          variant="contained"
          fullWidth={true}
          onClick={() => {
            /**
             * @todo have to make a route for logout
             */
            return navigate("/logout");
          }}
        />

        {/* -- <CoreLoginDetails /> */}
      </CoreBox>
    </CoreBox>
  );
}
