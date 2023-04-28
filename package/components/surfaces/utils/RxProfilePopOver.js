import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { nativeUseNavigate } from "@wrappid/styled-components";

import config from "./../../config/config";
import RxEmailLink from "./RxEmailLink";
import RxPhoneLink from "./RxPhoneLink";
import { ENV_STAGE_MODE, urls, ENV_DEV_MODE } from "../../config/constants";
import { MENU_SEPERATOR } from "../../config/menuConstants";
import CoreAvatar from "../../core/components/dataDisplay/CoreAvatar";
import CoreDivider from "../../core/components/dataDisplay/CoreDivider";
import CoreTypographyBody1 from "../../core/components/dataDisplay/paragraph/CoreTypographyBody1";
import { CoreMenu } from "../../core/components/inputs/CoreMenu";
import CoreBox from "../../core/components/layouts/CoreBox";
import CoreGrid from "../../core/components/layouts/CoreGrid";
import CoreClasses from "../../core../../core/styles/CoreClasses";
import ApiVersion from "../../module/app/ApiVersion";
import { getFullName } from "../../utils/helper";

export default function RxProfilePopOver(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { firstName = "", middleName = "", lastName = "" } = profile?.basic;
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
    <CoreBox sx={{ width: "400px" }}>
      <CoreGrid
        styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          CoreClasses.PADDING.P1,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: 2 }}
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
          src={auth?.photo ? auth?.photo : "photo.jpg"}
        />

        <CoreBox gridProps={{ gridSize: 10 }}>
          <CoreTypographyBody1 hideSeeMore={true} limitChars={30}>
            {getFullName({ firstName, lastName, middleName })}
          </CoreTypographyBody1>

          {profile?.contact?.email && profile?.contact?.email !== "" && (
            <RxEmailLink
              email={profile?.contact?.email}
              verified={profile?.basic?.emailVerified}
            />
          )}

          {profile?.contact?.phone && profile?.contact?.phone !== "" && (
            <RxPhoneLink
              phone={profile?.contact?.phone}
              verified={profile?.basic?.phoneVerified}
            />
          )}
        </CoreBox>
      </CoreGrid>

      <CoreDivider />

      <CoreMenu
        menu={profileCardMenu}
        miniDrawer={false}
        multiLevel={false}
        open={true}
        OnMenuClick={OnMenuClick}
      />

      {process.env.REACT_APP_ENV === ENV_DEV_MODE ||
        (process.env.REACT_APP_ENV === ENV_STAGE_MODE && (
          <>
            <CoreDivider />

            <CoreBox
              styleClasses={[
                CoreClasses.PADDING.P2,
                CoreClasses.BG.BG_BLACK,
                CoreClasses.COLOR.TEXT_WHITE,
              ]}
            >
              <ApiVersion />
            </CoreBox>
          </>
        ))}
    </CoreBox>
  );
}
