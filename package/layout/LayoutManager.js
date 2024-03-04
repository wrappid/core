/* eslint-disable import/order */
/* eslint-disable no-console */
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UPDATE_DEVELOPMENT_DATA, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";

import BlankLayout from "../components/layouts/_system/BlankLayout";
import { ComponentRegistryContext } from "../config/contextHandler";
import ComponentNotFound from "../error/ComponentNotFound";
import LayoutMismatch from "../error/LayoutMismatch";
import CoreLayoutItem from "./CoreLayoutItem";
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";

export default function LayoutManager(props) {
  const { pageName, layoutName } = props;
  const { development } = React.useContext(WrappidDataContext);
  const componentRegistry = React.useContext(ComponentRegistryContext);
  const dispatch = React.useContext(WrappidDispatchContext);

  // eslint-disable-next-line no-unused-vars
  const [devData, setDevData] = React.useState(development);

  React.useEffect(() => {
    dispatch({ payload: devData, type: UPDATE_DEVELOPMENT_DATA });
  }, [devData]);

  const renderData = () => {
    /* basic checks for layout and page */
    if (layoutName && Object.keys(componentRegistry).includes(layoutName)) {
      devData.layoutFound = true;
      devData.layout = layoutName;
      devData.renderedLayout = layoutName;
    } else {
      devData.layoutFound = false;
      devData.layout = layoutName || "Not Provided";
      devData.renderedLayout = BlankLayout.name;
    }

    if (pageName && Object.keys(componentRegistry).includes(pageName)) {
      devData.pageFound = true;
      devData.page = pageName;
      devData.renderedPage = pageName;
    } else {
      devData.pageFound = false;
      devData.page = pageName || "Not Provided";
      devData.renderedpage = ComponentNotFound.name;
    }

    if (!devData.layoutFound) {
      return React.createElement(BlankLayout, {}, ComponentNotFound({ componentName: devData.layout, layout: true }));
    }

    if (!devData.pageFound) {
      return React.createElement(BlankLayout, {}, ComponentNotFound({ componentName: devData.page, layout: true }));
    }

    /* mount layout and page */
    let LayoutComponent = componentRegistry[devData?.renderedLayout]?.comp();
    let PageComponent = componentRegistry[devData?.renderedPage]?.comp();

    /* get layout childrens */
    let layoutChildrens = LayoutComponent?.props?.children;
    
    if (layoutChildrens && !Array.isArray(layoutChildrens)) {
      layoutChildrens = [layoutChildrens];
    }
    
    /* get page childrens */
    let pageChildrens = PageComponent?.props?.children;

    if (pageChildrens && !Array.isArray(pageChildrens)) {
      pageChildrens = [pageChildrens];
    }

    layoutChildrens?.forEach((layoutChild, index) => {
      console.log(`layoutChild ${index}`);
      console.log(layoutChild);
    });

    pageChildrens?.forEach((pageChild, index) => {
      console.log(`pageChild ${index}`);
      console.log(pageChild);
    });

    /**
     * Layout Mismatch
     */
    let layoutPlaceholders = layoutChildrens?.map((layoutPlaceholder) => {
      return layoutPlaceholder?.type?.name === CoreLayoutPlaceholder.name;
    });
    let layoutItems = pageChildrens?.map((layoutItem) => {
      return layoutItem?.type?.name === CoreLayoutItem.name;
    });

    let layoutMismatch = false;

    if (layoutPlaceholders.length === layoutItems.length) {
      let layoutItemKeys = layoutItems.map(layoutItem => layoutItem?.props?.id);

      layoutPlaceholders.forEach(layoutPlaceholder => {
        if (!layoutPlaceholder?.props?.id || !layoutItemKeys.includes(layoutPlaceholder?.props?.id)) {
          layoutMismatch = true;
        }
      });
    }

    if (layoutMismatch) {
      return React.createElement(BlankLayout, {}, LayoutMismatch);
    }

    let combinedChildrens = [];

    if (layoutChildrens && pageChildrens) {
      combinedChildrens = layoutChildrens?.map((layoutPlaceholder) => {
        if (layoutPlaceholder?.type?.name === CoreLayoutPlaceholder.name) {
          let layoutItem = pageChildrens?.find(elem => elem?.type?.name === CoreLayoutItem.name
            && elem?.props?.id === layoutPlaceholder?.props?.id);

          if (layoutItem) {
            return React.cloneElement(layoutItem, {
              key         : `${layoutName}-${pageName}-${layoutItem?.props?.id}`,
              ...{ ...layoutPlaceholder?.props, ...layoutItem?.props },
              children    : layoutItem?.props?.children,
              styleClasses: [...(layoutPlaceholder?.props?.styleClasses || []), ...(layoutItem?.props?.styleClasses || [])]
            });
          }
        } else {
          return layoutPlaceholder;
        }
      });
    }
    return combinedChildrens;
  }; 

  return (
    <>
      {/* LAYOUT CONTENT REPLACED BY PAGE ITEM */}
      {renderData()}
    </>
  );
}
