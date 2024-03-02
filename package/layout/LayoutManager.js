/* eslint-disable no-console */
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UPDATE_DEVELOPMENT_DATA, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";

import CoreLayoutItem from "./CoreLayoutItem";
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";
import BlankLayout from "../components/layouts/_system/BlankLayout";
import WrappidComponent from "../components/WrappidComponent";
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
 *    - Layout Not Found - ComponentNotFound Page will render
 * 
 * - IF page given and not present
 *    - Page Not Found - ComponentNotFound Page will render
 * 
 * 
 * 
 * 1. Old Layout Backward Compatibility
 * 2. New Layout n-siblings
 * 3. New Layout each-sibling n-child
 * 4. LayoutPlaceholder parent flag support in the LayoutItem
 */
export default function LayoutManager(props) {
  const { pageName, layoutName } = props;
  const { development } = React.useContext(WrappidDataContext);
  const {
    layout, page, renderedLayout, renderedPage, layoutNotFound, pageNotFound, layoutMismatch 
  } = development;
  const dispatch = React.useContext(WrappidDispatchContext);
  const componentRegistry = React.useContext(ComponentRegistryContext);

  React.useEffect(() => {
    let development = { layout: layoutName, page: pageName, renderedLayout: layoutName, renderedPage: pageName };

    if (layoutName && componentRegistry && Object.keys(componentRegistry).includes(layoutName) && componentRegistry[layoutName]?.comp) {
      // do nothing
    } else {
      development = { ...development, layout: layoutName, layoutNotFound: true, renderedLayout: BlankLayout.name };
    }
    
    if (pageName && componentRegistry && Object.keys(componentRegistry).includes(pageName) && componentRegistry[pageName]?.comp) {
      // do nothing
    } else {
      development = { ...development, pageNotFound: true, renderedPage: ComponentNotFound.name };
    }

    dispatch({ payload: development, type: UPDATE_DEVELOPMENT_DATA });
  }, [layoutName, pageName, componentRegistry]);

  React.useEffect(() => {
    if (checkIfLayoutMismatch(getLayoutComponent(renderedLayout), getPageComponent(renderedPage))) {
      dispatch({ payload: { layoutMismatch: true, renderedLayout: LayoutMismatch.name }, type: UPDATE_DEVELOPMENT_DATA });
    }
  }, [renderedLayout, renderedPage]);

  const getLayoutComponent = (layout) => {
    return layout && Object.keys(componentRegistry).includes(layout) ? componentRegistry[layout]?.comp : BlankLayout;
  };

  const getPageComponent = (page) => {
    return page && Object.keys(componentRegistry).includes(page) ? componentRegistry[page]?.comp : WrappidComponent;
  };

  /**
   * @todo
   * n-level child missing
   * 
   * @param {*} LayoutComponent 
   * @returns 
   */
  const getLayoutPlaceholders = (LayoutComponent) => {
    let layoutChildrens = getComponentChildrensArray(LayoutComponent);

    return layoutChildrens?.map(eachChild => {
      return eachChild?.type === CoreLayoutPlaceholder.name;
    })?.length || 0;
  };

  /**
   * @todo
   * n-level child missing
   * 
   * @param {*} PageComponent 
   * @returns 
   */
  const getLayoutItems = (PageComponent) => {
    let pageChildrens = getComponentChildrensArray(PageComponent);

    return pageChildrens?.map(eachChild => {
      return eachChild?.type === CoreLayoutItem.name;
    })?.length || 0;
  };

  /**
   * 
   * @param {*} component 
   * @returns 
   */
  const getComponentChildrensArray = (component) => {
    let componentChildrens = component?.props?.children;

    if (componentChildrens && !Array.isArray(componentChildrens)) {
      componentChildrens = [componentChildrens];
    }
    
    return componentChildrens;
  };

  /**
   * @todo
   * n-level child matching missing
   * 
   * @param {*} LayoutComponent 
   * @param {*} PageComponent 
   * @returns 
   */
  const checkIfLayoutMismatch = (LayoutComponent, PageComponent) => {
    let layoutPlaceholders = getLayoutPlaceholders(LayoutComponent);
    let layoutItems = getLayoutItems(PageComponent);

    if (layoutItems?.length > 0 && layoutPlaceholders?.length !== layoutItems?.length) {
      return true;
    }
    return false;
  };

  const renderLayoutEmbeddedPage = () => {
    let LayoutComponent = getLayoutComponent(renderedLayout)();
    let PageComponent = getPageComponent(renderedPage)();

    /**
     * @todo
     * check layout not found and page not found
     */
    if (layoutNotFound) {
      PageComponent = ComponentNotFound({ componentName: layout, layout: true });
      return React.cloneElement(BlankLayout, {}, PageComponent);
    }
    
    /**
     * @todo
     * check component not found and page not 1found
     */
    if (pageNotFound) {
      PageComponent = ComponentNotFound({ componentName: page, layout: false });
      return React.cloneElement(BlankLayout, {}, PageComponent);
    }

    /**
     * @todo
     * check if layout mismatch
     */
    if (layoutMismatch) {
      return React.cloneElement(BlankLayout, {}, LayoutMismatch({ renderedLayout, renderedPage }));
    }

    /**
     * @todo
     * One layer siblings is done as of now
     * n-level siblings and childrens - discussion required @sumanta-m and @samhere17
     */
    let layoutChildrens = getComponentChildrensArray(LayoutComponent);
    let pageChildrens = getComponentChildrensArray(PageComponent);

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
