// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/native";
import { useSelector } from "react-redux";

import { urls } from "../../config/constants";
import { MENU_SEPERATOR } from "../../config/menuConstants";
import CoreClasses from "../../styles/CoreClasses";
import { getFullName } from "../../utils/helper";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreMenu from "../navigation/CoreMenu";

export default function CoreProfilePopOver(props) {
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state?.auth || {});
  const profile = useSelector((state) => state?.profile);
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { firstName = "", middleName = "", lastName = "" } = profile?.basic;
  const { onClose } = props;
  const profileCardMenu = [
    {
      icon : "person_outline",
      id   : "viewProfile",
      label: "View Profile",
      link : urls.PROFILE,
    },
    {
      icon : "settings",
      id   : "settings",
      label: "Settings",
      link : urls.SETTINGS,
    },
    { type: MENU_SEPERATOR },
    {
      icon : "logout",
      id   : "logout",
      label: "Logout",
      link : urls.LOGOUT,
    },
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreBox sx={{ width: "400px" }}>
      <CoreGrid
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.LAYOUT.FULL_WIDTH, CoreClasses.PADDING.P1]}
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
            <CoreTypographyBody1>{profile?.contact?.email}</CoreTypographyBody1>
          )}

          {profile?.contact?.phone && profile?.contact?.phone !== "" && (
            <CoreTypographyBody1>{profile?.contact?.phone}</CoreTypographyBody1>
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
    </CoreBox>
  );
}

