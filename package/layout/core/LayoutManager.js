/* eslint-disable no-console */
import React from "react";

import CoreComponent from "../../components/CoreComponent";
import { ComponentRegistryContext } from "../../config/contextHandler";
import BlankLayout from "../BlankLayout";
// eslint-disable-next-line import/order
import CoreLayoutItem from "./CoreLayoutItem";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";

export default function LayoutManager(props) {
  const { pageName, layoutName } = props;
  const mergedComponentRegistry = React.useContext(ComponentRegistryContext);

  const [componentsRegistry, setComponentsRegistry] = React.useState({});
  const [layoutsRegistry, setLayoutsRegistry] = React.useState({});
  const [page, setPage] = React.useState(/* BlankLayoutPage */);
  const [layout, setLayout] = React.useState(BlankLayout);

  React.useEffect(() => {
    const [layoutObject, nonLayoutObject] = Object.entries(
      mergedComponentRegistry
    ).reduce(
      ([layoutAcc, nonLayoutAcc], [key, value]) => {
        return value.layout
          ? [{ ...layoutAcc, [key]: value }, nonLayoutAcc]
          : [layoutAcc, { ...nonLayoutAcc, [key]: value }];
      },
      [[], []]
    );

    setComponentsRegistry(nonLayoutObject);
    setLayoutsRegistry(layoutObject);
  }, [mergedComponentRegistry]);

  React.useEffect(() => {
    if(pageName && componentsRegistry && componentsRegistry[pageName]?.comp){
      setPage(componentsRegistry[pageName].comp); 
    } 
  }, [pageName, componentsRegistry]);
  
  React.useEffect(() => { 
    if(layoutName && layoutsRegistry && layoutsRegistry[layoutName]?.comp){
      setLayout(layoutsRegistry[layoutName].comp); 
    }
  }, [layoutName, layoutsRegistry]);

  /**
   * 
   * @param {*} LayoutComponent 
   * @param {*} PageComponent 
   * @returns 
   */
  const renderLayoutEmbeddedPage = (LayoutComponent, PageComponent) => {
    /**
     * @todo
     * 
     * 1. Old Layout Backward Compatibility
     * 2. New Layout n-siblings
     * 3. New Layout each-sibling n-child
     * 4. LayoutPlaceholder parent flag support in the LayoutItem
     */
    if (layoutName && LayoutComponent) {
      let layoutChildrens = LayoutComponent?.props?.children;
  
      if (layoutChildrens && !Array.isArray(layoutChildrens)) {
        layoutChildrens = [layoutChildrens];
      }
      console.log("layoutChildrens-------------------------------");
      console.log(layoutChildrens);
      console.log("layoutChildrens-------------------------------");
  
      let pageChildrens = PageComponent?.props?.children;
  
      if (pageChildrens && !Array.isArray(pageChildrens)) {
        pageChildrens = [pageChildrens];
      }
      console.log("pageChildrens-------------------------------");
      console.log(pageChildrens);
      console.log("pageChildrens-------------------------------");
      
      /**
       * Supporting old format(s)
       * - without layout
       * - with layout
       */
      if (LayoutComponent.type.name === BlankLayout.name) {
        return PageComponent;
      }
      
      /**
       * Backward Compatibility
       */
      let layoutPlaceholders = layoutChildrens.filter(layoutChild => layoutChild?.type?.name === CoreLayoutPlaceholder.name);

      if (!layoutPlaceholders || (layoutPlaceholders && layoutPlaceholders.length === 0)) {
        return <CoreComponent componentName={layoutName}>{PageComponent}</CoreComponent>;
      }

      /**
       * New Layout Compatibility 
       */
      // eslint-disable-next-line etc/no-commented-out-code
      /* layoutChildrens = layoutChildrens.map((layoutChildren) => {
        if (layoutChildren?.type?.name === CoreLayoutPlaceholder.name) {
          if (layoutChildren?.props?.id) {
            let pageChildrenPlaceholders = pageChildrens?.filter(eachItem => eachItem?.type?.name === CoreLayoutPlaceholder.name)[0];
         
            if (pageChildrenPlaceholders > 1) {
              console.log("item has placeholders");
            } else {
              let pageChildren = pageChildrens?.filter(eachItem => eachItem?.type?.name === CoreLayoutItem.name && eachItem?.props?.id === layoutChildren?.props?.id)[0];
  
              console.log("pageChildren=", pageChildren);
              if (pageChildren?.props?.parent) {
                return [...layoutChildren.children, pageChildren.children];
              } else {
                return pageChildren;
              }
            }
          } else {
            console.log(`placeholder content not available in page component ${pageName}`);
          }
        } else {
          return layoutChildren;
        }
      }); */

      layoutChildrens = replacePlaceholder(layoutChildrens, pageChildrens);
      return layoutChildrens;
    }
    /**
     * @todo
     * review required because the below case couldn't happened
     * remove below commented condition
     */
    /*  else {

      let blankLayoutChildrens = BlankLayout?.props?.children?.map(layoutChild => {
        if (layoutChild?.type?.name === CoreLayoutPlaceholder.name && layoutChild?.props?.id === "content") {
          return PageComponent;
        }
      });

      return blankLayoutChildrens;
    } */
  };

  const replacePlaceholder = (layoutChildrens, pageChildrens) => {
    return layoutChildrens?.map(layoutChild => {
      /**
       * @todo
       * placeholders = get each layout placeholder(s) from children(s)
       * if placeholders > 0
       *    run loop 
       *      for each placeholder
       *        check each placeholder
       * 
       * else if placeholders === 0
       *    return layout item from page children
       */
      let layoutChildPlaceholders = layoutChild?.children?.filter(layoutChild => layoutChild?.type?.name === CoreLayoutPlaceholder.name);

      if (layoutChildPlaceholders && layoutChildPlaceholders.length > 0) {
        let pageChild = pageChildrens?.filter(eachItem => eachItem?.type?.name === CoreLayoutItem.name && eachItem?.props?.id === layoutChild?.props?.id)[0];

        return replacePlaceholder(layoutChild?.children, pageChild);
      } else {
        return [...(layoutChild?.children || []), ...(pageChildrens || [])];
      }
    });
  };

  return (
    <>
      {/* LAYOUT CONTENT REPLACED BY PAGE ITEM */}
      {renderLayoutEmbeddedPage(layout, page)}
    </>
  );
}
