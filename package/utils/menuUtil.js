import React from "react";
import CoreDivider from "../components/dataDisplay/CoreDivider";
import CoreIcon from "../components/dataDisplay/CoreIcon";
import CoreListItemIcon from "../components/dataDisplay/CoreListItemIcon";
import CoreListItemText from "../components/dataDisplay/CoreListItemText";
import CoreIconButton from "../components/inputs/CoreIconButton";
import CoreLink from "../components/navigation/CoreLink";
import CoreMenuItem from "../components/navigation/CoreMenuItem";
import { CoreClasses } from "@wrappid/styles";
import {
  MENU_HEADER_ITEM,
  MENU_ITEM,
  MENU_ITEM_BUTTON,
  MENU_ITEM_ICON,
  MENU_ITEM_TEXT,
  MENU_ITEM_WRAPPER,
  MENU_PARENT_ITEM,
  MENU_SEPERATOR,
} from "../config/menuConstants";
import { isJson } from "./stringUtils";
import { getCoreTheme } from "./themeUtil";

export function createMultiLevelMenu(
  menu,
  level,
  OnMenuClick,
  miniDrawer,
  multiLevel,
  open,
  openCollapse,
  selectedID,
  setSelectedID,
  locationPathname
) {
  return menu?.map((itemData) => {
    return (
      <>
        {getMenuItem(
          itemData,
          level,
          OnMenuClick,
          miniDrawer,
          open,
          selectedID,
          setSelectedID,
          locationPathname
        )}
        {multiLevel &&
          itemData?.Children &&
          itemData?.Children.length > 0 &&
          openCollapse[itemData.id] &&
          createMultiLevelMenu(
            itemData?.Children,
            level + 1,
            OnMenuClick,
            miniDrawer,
            multiLevel,
            open,
            openCollapse,
            selectedID,
            setSelectedID,
            locationPathname
          )}
      </>
    );
  });
}

function getTypeWiseStyle(item, elemType) {
  var styles = [];
  switch (item.type) {
    case MENU_PARENT_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.PARENT_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.PARENT_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.PARENT_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.PARENT_TEXT_ITEM);
      }
      break;
    case MENU_HEADER_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.HEADER_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.HEADER_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.HEADER_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.HEADER_TEXT_ITEM);
      }
      break;
    case MENU_SEPERATOR:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.SEPERATOR_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.SEPERATOR_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.SEPERATOR_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.SEPERATOR_TEXT_ITEM);
      }
      break;
    case MENU_ITEM:
    default:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;
  }
  return styles;
}

function getMenuItem(
  menuItem,
  level,
  OnMenuClick,
  miniDrawer,
  open,
  selectedID,
  setSelectedID,
  locationPathname
) {
  // console.log("OPEN", open);
  /**
   * @todo review required for using core menu item instead of core List Item
   */
  const theme = getCoreTheme();
  return menuItem.type === MENU_SEPERATOR ? (
    <CoreDivider />
  ) : open ? (
    <CoreLink
      href={
        menuItem?.type === MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : "javascript:void(0)"
      }
    >
      <CoreMenuItem
        sx={{
          height: "34px",
          paddingLeft: `calc(13px + ${level * 8}px)`,
          backgroundColor:
            menuItem?.type === MENU_ITEM &&
            locationPathname === menuItem?.link &&
            theme.palette.secondary.light,
        }}
        key={menuItem.id}
        disablePadding
        title={menuItem.label}
        onClick={(e) => {
          // setSelectedID(menuItem?.name);
          OnMenuClick(menuItem);
        }}
      >
        <CoreListItemIcon
          styleClasses={
            miniDrawer
              ? [
                  CoreClasses.MENU.MINI_DRAWER_LIST_ITEM_ICON,
                  ...getTypeWiseStyle(menuItem, MENU_ITEM_ICON),
                ]
              : [
                  CoreClasses.MENU.LIST_ITEM_ICON,
                  ...getTypeWiseStyle(menuItem, MENU_ITEM_ICON),
                ]
          }
        >
          <CoreIcon
            options={
              typeof menuItem?.icon === "object"
                ? menuItem?.icon
                : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                ? JSON.parse(menuItem?.icon)
                : { icon: menuItem?.icon }
            }
            sx={{
              color: `${
                menuItem?.type === MENU_ITEM &&
                locationPathname === menuItem?.link
                  ? theme.palette.primary.light
                  : theme.palette.secondary.dark
              }!important`,
            }}
          />
        </CoreListItemIcon>
        <CoreListItemText
          disableTypography
          styleClasses={[
            CoreClasses.NAVIGATION.APP_DRAWER_TEXT,
            ...getTypeWiseStyle(menuItem, MENU_ITEM_TEXT),
          ]}
          primary={menuItem.label}
          sx={{
            color: `${
              menuItem?.type === MENU_ITEM &&
              locationPathname === menuItem?.link
                ? theme.palette.primary.light
                : theme.palette.secondary.dark
            }!important`,
          }}
        />
      </CoreMenuItem>
    </CoreLink>
  ) : (
    <CoreLink
      href={
        menuItem?.type === MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : "javascript:void(0)"
      }
    >
      <CoreIconButton
        title={menuItem?.label}
        titlePlacement={"right"}
        onClick={(e) => {
          setSelectedID(menuItem?.name);
          OnMenuClick(menuItem);
        }}
      >
        <CoreIcon
          options={
            isJson(menuItem?.icon)
              ? JSON.parse(menuItem?.icon)
              : { icon: menuItem?.icon }
          }
          sx={{
            color: `${
              menuItem?.type === MENU_ITEM &&
              locationPathname === menuItem?.link
                ? theme.palette.primary.light
                : theme.palette.secondary.dark
            }!important`,
          }}
        ></CoreIcon>
      </CoreIconButton>
    </CoreLink>
  );
}
