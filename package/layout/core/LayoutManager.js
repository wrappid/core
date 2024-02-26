/* eslint-disable no-console */
import React from "react";

import CoreLayoutItem from "./CoreLayoutItem";
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";
import WrappidComponent from "../../components/WrappidComponent";
import { ComponentRegistryContext } from "../../config/contextHandler";
import Error404 from "../../error/Error404";
import BlankLayout from "../BlankLayout";

export default function LayoutManager(props) {
  const { pageName = "WrappidComponent", layoutName = "BlankLayout" } = props;
  const mergedComponentRegistry = React.useContext(ComponentRegistryContext);

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
    let LayoutComponent = mergedComponentRegistry[layoutName]?.comp() || BlankLayout();
    let PageComponent = mergedComponentRegistry[pageName]?.comp() || WrappidComponent();
    /**
     * @todo
     * 
     * 1. Old Layout Backward Compatibility
     * 2. New Layout n-siblings
     * 3. New Layout each-sibling n-child
     * 4. LayoutPlaceholder parent flag support in the LayoutItem
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
     * Backward Compatibility
     */
    // layout has children but no placeholder
    if (layoutChildrens?.length !== 0 && layoutChildrens?.filter(layoutItem => layoutItem?.type?.name === CoreLayoutPlaceholder.name)?.length === 0) {
      return React.createElement(mergedComponentRegistry[layoutName]?.comp || BlankLayout, {}, React.createElement(mergedComponentRegistry[pageName].comp || Error404));
    }
    // layout present and has content placeholder and have page childrens
    if (layoutChildrens?.filter(layoutPlaceholder => layoutPlaceholder?.type?.name === CoreLayoutPlaceholder.name
      && layoutPlaceholder?.props?.id === BlankLayout.PLACEHOLDER.CONTENT)?.length > 0
      && pageChildrens?.length > 0 && pageChildrens?.filter(pageLayoutItem => pageLayoutItem?.type?.name === CoreLayoutItem.name)?.length === 0) {
      layoutChildrens = layoutChildrens?.map((layoutPlaceholder) => {
        if (layoutPlaceholder?.type?.name === CoreLayoutPlaceholder.name && layoutPlaceholder?.props?.id === BlankLayout.PLACEHOLDER.CONTENT) {
          return mergedComponentRegistry[pageName]?.comp || Error404;
        } else {
          return layoutPlaceholder;
        }
      });
      return React.createElement(mergedComponentRegistry[layoutName]?.comp || BlankLayout, {}, layoutChildrens);
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
          
          /**
           * @todo
           * will write something like this later on to support specific like styleClasses
           */
          // eslint-disable-next-line etc/no-commented-out-code
          // let mergedProps = mergeJSON(CoreBox.validProps, [layoutPlaceholder?.props, layoutItem?.props]);

          if(layoutItem){
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
