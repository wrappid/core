// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/native";
import { useSelector } from "react-redux";

import CoreApiVersion from "./CoreApiVersion";
import CoreAppVersion from "./CoreAppVersion";
import { CoreRouteRegistryContext } from "../../../config/contextHandler";
import CoreClasses from "../../../styles/CoreClasses";
import CoreAvatar from "../../dataDisplay/CoreAvatar";
import CoreDivider from "../../dataDisplay/CoreDivider";
import { __IconTypes } from "../../dataDisplay/CoreIcon";
import CoreEmailLink from "../../dataDisplay/custom/CoreEmailLink";
import CorePhoneLink from "../../dataDisplay/custom/CorePhoneLink";
import CoreTypographyBody2 from "../../dataDisplay/paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreButton from "../../inputs/CoreButton";
import CoreMenu from "../../inputs/CoreMenu";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";
import CoreStack from "../../layouts/CoreStack";

export default function CoreProfilePopOver(props) {
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const routeRegistry = useContext(CoreRouteRegistryContext);

  const { profileRegistration } = useSelector((state) => state.api);

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
        icon: "account_circle",
        type: __IconTypes.MATERIAL_OUTLINED_ICON,
      },
      id: "viewProfile",
      label: "View Profile",
      link: routeRegistry?.profile,
    },
    {
      icon: { icon: "settings", type: __IconTypes.MATERIAL_OUTLINED_ICON },
      id: "settings",
      label: "Settings",
      link: routeRegistry?.settings,
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
    onClose();
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.MIN_VW_25, CoreClasses.HEIGHT.MIN_VH_25]}>
      <CoreGrid
        styleClasses={[
          CoreClasses.PADDING.P1,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          CoreClasses.LAYOUT.PROFILE_BAR_WIDTH,
        ]}
      >
        <CoreAvatar
          gridProps={{ gridSize: 4 }}
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE, CoreClasses.MARGIN.ML1]}
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
            <CoreEmailLink email={email} verified={emailVerified} limitChars={15} />
          </CoreBox>

          <CoreBox>
            <CorePhoneLink phone={phone} verified={phoneVerified} limitChars={15} />
          </CoreBox>
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
          OnClick={() => {
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
