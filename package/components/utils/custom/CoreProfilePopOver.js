import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { nativeUseNavigate } from "@wrappid/styled-components";

import { ENV_STAGE_MODE, urls, ENV_DEV_MODE } from "../../../config/constants";
import { MENU_SEPERATOR } from "../../../config/menuConstants";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";
import CoreAvatar from "../../dataDisplay/CoreAvatar";
import CoreTypographyBody1 from "../../dataDisplay/paragraph/CoreTypographyBody1";
import CoreDivider from "../../dataDisplay/CoreDivider";
import CoreMenu from "../../inputs/CoreMenu";
import CoreClasses from "../../../styles/CoreClasses";
import { getFullName } from "../../../utils/helper";

export default function CoreProfilePopOver(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { firstName = "", middleName = "", lastName = "" } = profile?.basic||{};
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
    <CoreBox>
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
