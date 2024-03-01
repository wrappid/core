/* eslint-disable no-console */
import React from "react";

import CoreLayoutItem from "./CoreLayoutItem";
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";
import BlankLayout from "../components/layouts/_system/BlankLayout";
import { ComponentRegistryContext } from "../config/contextHandler";
import ComponentNotFound from "../error/ComponentNotFound";
import LayoutMismatch from "../error/LayoutMismatch";

/**
 * @todo
 * 
 * Layout Manager should have the following functionality
 * - Render Page with NEW Layout
 *    - NEW Layouts have one or many place holder
 * - Default Fallback Layout is Blank Layout
 * - Default Fallback Page is WrappidComponent
 * 
 * - IF layout given and not present
 *    - 
 * 
 * 1. Old Layout Backward Compatibility
 * 2. New Layout n-siblings
 * 3. New Layout each-sibling n-child
 * 4. LayoutPlaceholder parent flag support in the LayoutItem
 */
export default function LayoutManager(props) {
  const { pageName = "WrappidComponent", layoutName = "BlankLayout" } = props;
  const componentRegistry = React.useContext(ComponentRegistryContext);

  /**
   * Rendering merged component of layout and page
   * 
   * @description
   * This function will create a rendereable children of merged component(s)
   * 
   * @param {*} LayoutComponent 
   * @param {*} PageComponent 
   * @returns 
   */
  const renderLayoutEmbeddedPage = (layoutName, pageName) => {
    let LayoutComponent = undefined;
    let PageComponent = undefined;

    /**
     * @todo
     * 1. check layout not found and page not found
     */
    if (layoutName && componentRegistry && Object.keys(componentRegistry).includes(layoutName) && componentRegistry[layoutName]?.comp) {
      LayoutComponent = componentRegistry[layoutName]?.comp();
    } else {
      LayoutComponent = BlankLayout();
      PageComponent = ComponentNotFound({ componentName: layoutName, layout: true });
    }
    /**
     * @todo
     * 2. check component not found and page not 1found
     */
    if (pageName && componentRegistry && Object.keys(componentRegistry).includes(pageName) && componentRegistry[pageName]?.comp) {
      PageComponent = componentRegistry[pageName]?.comp();
    } else {
      LayoutComponent = BlankLayout();
      PageComponent = ComponentNotFound({ componentName: pageName, layout: false });
    }
    
    /**
     * @todo
     * 
     
     */

    /**
     * @todo
     * get childrens from layout and page component
     */
    let layoutChildrens = LayoutComponent?.props?.children;

    if (layoutChildrens && !Array.isArray(layoutChildrens)) {
      layoutChildrens = [layoutChildrens];
    }

    let pageChildrens = PageComponent?.props?.children;

    if (pageChildrens && !Array.isArray(pageChildrens)) {
      pageChildrens = [pageChildrens];
    }

    /**
     * @todo
     * if layout's LayoutPlaceholder and page's LayoutItem not matched
     */
    let layoutPlaceholders = layoutChildrens?.filter(layoutPlaceholder => layoutPlaceholder?.type?.name === CoreLayoutPlaceholder.name);
    let layoutItems = pageChildrens?.filter(layoutItem => layoutItem?.type?.name === CoreLayoutItem.name);

    if (layoutItems?.length > 0 && layoutPlaceholders?.length !== layoutItems?.length) {
      return React.cloneElement(LayoutComponent, {}, LayoutMismatch({ layoutName, pageName }));
    }

    /**
     * @todo
     * if page's LayoutItem is 0
     */
    if (layoutItems?.length === 0) {
      return React.cloneElement(LayoutComponent, {}, PageComponent);
    }

    /**
     * @todo
     * One layer siblings is done as of now
     * n-level siblings and childrens - discussion required @sumanta-m and @samhere17
     */
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
      {renderLayoutEmbeddedPage(layoutName, pageName)}
    </>
  );
}
