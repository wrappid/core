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
import CoreApiVersion from './CoreApiVersion';
import CoreLoginDetails from './CoreLoginDetails';
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";

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
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid
        styleClasses={[
          // CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          // CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          // CoreClasses.PADDING.PB1,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: 4 }}
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM, CoreClasses.MARGIN.MR2]}
          src={auth?.photo ? auth?.photo : "photo.jpg"}
        />

        <CoreBox gridProps={{ gridSize: 8 }}>
          <CoreTypographyCaption hideSeeMore={true} limitChars={30}>
            {getFullName({ firstName, lastName, middleName })}
          </CoreTypographyCaption>

          {profile?.contact?.email && profile?.contact?.email !== "" && (
            <CoreTypographyCaption>{profile?.contact?.email}</CoreTypographyCaption>
          )}

          {profile?.contact?.phone && profile?.contact?.phone !== "" && (
            <CoreTypographyCaption>{profile?.contact?.phone}</CoreTypographyCaption>
          )}
        </CoreBox>
      </CoreGrid>

      <CoreDivider styleClasses={[CoreClasses.MARGIN.MB4]} />

      <CoreMenu
        menu={profileCardMenu}
        miniDrawer={false}
        multiLevel={false}
        open={true}
        OnMenuClick={OnMenuClick}
        
      />
      {/* ApiVersion && LoginDetails */}
      <CoreApiVersion />
      <CoreLoginDetails />
    </CoreBox>
  );
}
