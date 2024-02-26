/* eslint-disable no-console */
import React from "react";

// eslint-disable-next-line import/order
// eslint-disable-next-line import/order
import CoreLayoutItem from "./CoreLayoutItem";
// eslint-disable-next-line import/order
import { ComponentRegistryContext } from "../../config/contextHandler";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";

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
  const renderLayoutEmbeddedPage = () => {
    let LayoutComponent = mergedComponentRegistry[layoutName].comp();
    let PageComponent = mergedComponentRegistry[pageName].comp();
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

    if (layoutChildrens?.filter(layoutItem => layoutItem?.type?.name === CoreLayoutPlaceholder.name)?.length === 0) {
      // return <CoreComponent componentName={layoutName}>{pageChildrens}</CoreComponent>;
      // return (<LayoutComponent><PageComponent /></LayoutComponent>);
      return React.createElement(mergedComponentRegistry[layoutName].comp, {}, React.createElement(mergedComponentRegistry[pageName].comp));
    }
    
    /**
     * @todo
     * One layer siblings is done as of now
     * n-level siblings and childrens - discussion required @sumanta-m and @samhere17
     */
    let combinedChildrens = [];

    if (layoutChildrens && pageChildrens) {
      combinedChildrens = layoutChildrens?.map((layoutItem) => {
        console.log("LAYOUT ITEM", layoutItem?.type?.name, layoutItem?.props?.id);
        if (layoutItem?.type?.name === CoreLayoutPlaceholder.name) {
          let pageElement = pageChildrens?.find(elem => elem?.type?.name === CoreLayoutItem.name && elem?.props?.id === layoutItem?.props?.id);

          console.log("PAGE ITEM", pageElement);
          
          if(pageElement){
            return React.cloneElement(layoutItem, { ...layoutItem?.props, children: pageElement?.props?.children });
          }
        } else {
          return layoutItem;
        }
      });
    }
    
    console.log("COMBAINED", combinedChildrens);
    return combinedChildrens;
  };

  return (
    <>
      {/* LAYOUT CONTENT REPLACED BY PAGE ITEM */}
      {renderLayoutEmbeddedPage()}
    </>
  );
}
