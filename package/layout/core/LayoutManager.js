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
  const [layout, setLayout] = React.useState(/* BlankLayout */);

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
       * @todo
       * this below commented code is for rendering placeholder inside item
       * need to review
       */
      // eslint-disable-next-line etc/no-commented-out-code
      /* let pageChildrenPlaceholders = pageChildrens?.filter(eachItem => eachItem?.type?.name === CoreLayoutPlaceholder.name)[0];
        if (pageChildrenPlaceholders > 1) {
          console.log("item has placeholders");
        } else {
        } */
      /**
       * New Layout Compatibility 
       */
      // eslint-disable-next-line etc/no-commented-out-code
      layoutChildrens = layoutChildrens.map((layoutChild) => {
        if (layoutChild?.type?.name === CoreLayoutPlaceholder.name) {
          if (layoutChild?.props?.id) {

            let pagePlaceholderItem = pageChildrens?.filter(eachItem => eachItem?.type?.name === CoreLayoutItem.name && eachItem?.props?.id === layoutChild?.props?.id)[0];

            console.log("pagePlaceholderItem=", pagePlaceholderItem);
            /**
             * @todo
             * commenting the below code for further enhancement required by @techoneel
             */
            // let renderableChildrens = [];
            // if (pagePlaceholderItem?.props?.parent) {
            //   renderableChildrens = [layoutChild?.props?.children, pagePlaceholderItem?.props?.children];
            // } else {
            //   renderableChildrens = [pagePlaceholderItem?.props?.children];
            // }
            // return React.createElement(layoutChild, {}, ...(renderableChildrens || []));
            // let { ...mergedProps } = { ...layoutChild.props, ...pagePlaceholderItem.props };
            // return (
            //   <CoreComponent key={`placeholder-${layoutChild.props.id}`} componentName="CoreLayoutPlaceholder" {...mergedProps}>
            //     {renderableChildrens}
            //   </CoreComponent>
            // );
            // return React.createElement(CoreBox, mergedProps, renderableChildrens);
            // return (
            //   <CoreBox key={`${layoutName}-${pageName}-${id}`} {...mergedProps}>
            //     {renderableChildrens}
            //   </CoreBox>
            // );
            // return React.createElement(pagePlaceholderItem, { ...mergedProps }, React.createElement(renderableChildrens));
            return pagePlaceholderItem;
          } else {
            console.log(`placeholder content not available in page component ${pageName}`);
          }
        } else {
          return layoutChild;
        }
      });

      // eslint-disable-next-line etc/no-commented-out-code
      // layoutChildrens = replacePlaceholder(layoutChildrens, pageChildrens);
      return <CoreComponent componentName={pageName}>{layoutChildrens}</CoreComponent>;
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

  return (
    <>
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* {layout && React.cloneElement(layout, { children: undefined })} */}
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* {page && React.cloneElement(page, { children: undefined })} */}

      {/* LAYOUT CONTENT REPLACED BY PAGE ITEM */}
      {renderLayoutEmbeddedPage(layout, page)}
    </>
  );
}
