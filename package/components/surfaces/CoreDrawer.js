import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDrawer, nativeUseNavigate } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "../../config/contextHandler";
import { toggleMenuItemState } from "../../store/action/menuAction";
import {
  APP_PLATFORM,
  WEB_PLATFORM,
  detectPlatform
} from "../../utils/themeUtil";
import CoreMenu from "../inputs/CoreMenu";

export default function CoreDrawer(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state?.auth);
  const menu = useSelector((state) => state?.menu?.menu);
  const collapse = useSelector((state) => state?.menu?.collapse);
  const theme = useContext(ThemeContext);

  const { open, toggleDrawer } = props;

  const [platform, setPlatform] = React.useState(WEB_PLATFORM);

  React.useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const OnMenuClick = (item, appFlag) => {
    /**
     * appFlag only passed from native mobile drawer
     */
    if (appFlag && !item.Children) {
      toggleDrawer();
    }
    if (item.Children && item.Children.length > 0) {
      dispatch(toggleMenuItemState(item));
    } else {
      if (platform === APP_PLATFORM) {
        navigate(item.link);
      }
    }
  };

  return (
    <>
      {auth && auth.uid && (
        <NativeDrawer
          anchor={props.anchor ? props.anchor : "left"}
          variant="permanent"
          open={open}
          theme={theme}
        >
          <CoreMenu
            menu={menu}
            miniDrawer={true}
            multiLevel={true}
            open={open}
            openCollapse={collapse || {}}
            OnMenuClick={OnMenuClick}
          />
        </NativeDrawer>
      )}
    </>
  );
}

CoreDrawer.validProps = [
  {
    description: "Side from which the drawer will appear.",
    name       : "anchor",
    types      : [
      {
        default    : "left'",
        type       : "string",
        validValues: ["bottom", "left", "right", "top"],
      },
    ],
  },
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ default: "", type: "node" }],
  },
  
  {
    description: "The elevation of the drawer.",
    name       : "elevation",
    types      : [{ default: "16", type: "integer" }],
  },
  {
    description: "If true, the backdrop is not rendered.",
    name       : "hideBackdrop",
    types      : [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Props applied to the Modal element.",
    name       : "ModalProps",
    types      : [{ default: "{}", type: "object" }],
  },
  {
    description: "Callback fired when the component requests to be closed. The reason parameter can optionally be used to control the response to onClose.Signature:function(event: object, reason: string) => voidevent The event source of the callback.reason Can be: \"escapeKeyDown\", \"backdropClick\".",
    name       : "onClose",
    types      : [{ default: "", type: "func" }],
  },
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Props applied to the Paper element.",
    name       : "PaperProps",
    types      : [{ default: "{}", type: "object" }],
  },
  {
    description: "Props applied to the Slide element.",
    name       : "SlideProps",
    types      : [{ default: "", type: "object" }],
  },
  
  {
    description:
      "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name : "transitionDuration",
    types: [
      {
        default:
          "{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen, }",
        type       : "string",
        validValues: ["PaperPropsnumber| { appear?: number, enter?: number, exit?: number }"],
      },
    ],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "temporary'",
        type       : "string",
        validValues: ["permanent", "persistent", "temporary"],
      },
    ],
  },
];
CoreDrawer.invalidProps = ["sx", "classes"];
