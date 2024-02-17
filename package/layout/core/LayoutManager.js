/* eslint-disable no-console */
import React from "react";

import CoreDialog from "../../components/feedback/CoreDialog";
import CoreModal from "../../components/utils/CoreModal";
import { ComponentRegistryContext, CoreDialogContext } from "../../config/contextHandler";
import BlankLayout from "../BlankLayout";
import BlankLayoutPage from "../page/BlankLayoutPage";

export default function LayoutManager(props) {
  const { pageName, layoutName, children } = props;
  
  const [dialog, setDialog] = React.useState({});
  const dialogStates = { dialog, setDialog };
  
  const mergedComponentRegistry = React.useContext(ComponentRegistryContext);

  const [componentsRegistry, setComponentsRegistry] = React.useState({});
  const [layoutsRegistry, setLayoutsRegistry] = React.useState({});
  const [page, setPage] = React.useState(BlankLayoutPage);
  const [layout, setLayout] = React.useState(BlankLayout);

  React.useEffect(() => {
    const [layoutObject, nonLayoutObject] = Object.entries(
      mergedComponentRegistry
    ).reduce(
      ([layoutAcc, nonLayoutAcc], [key, value]) => {
        return value.layout
          ? [[...layoutAcc, { [key]: value }], nonLayoutAcc]
          : [layoutAcc, [...nonLayoutAcc, { [key]: value }]];
      },
      [[], []]
    );

    setComponentsRegistry(nonLayoutObject);
    setLayoutsRegistry(layoutObject);
  }, [mergedComponentRegistry]);

  React.useEffect(() => { setPage(componentsRegistry[pageName].comp); }, [pageName]);
  React.useEffect(() => { setLayout(layoutsRegistry[pageName].comp); }, [layoutName]);

  const replacePlaceholder = (LayoutComponent, PageComponent) => {
    let layoutChildrens = LayoutComponent;

    console.log("layoutChildrens-------------------------------");
    console.log(layoutChildrens.props.children);
    console.log("layoutChildrens-------------------------------");

    let pageChildrens = PageComponent;

    console.log("pageChildrens-------------------------------");
    console.log(pageChildrens.props.children);
    console.log("pageChildrens-------------------------------");
  };

  return (
    <>
      { /**
         * @todo
         * 1. get the children by id
         * 2. check if the id of the layout placeholder 
              are available in page as layout items
         * Sol
         * 1. children each child name store in child.type.name
         */}

      <CoreModal open={true} />
        
      <CoreDialogContext.Provider value={dialogStates}>
        <CoreDialog />

        {/* LAYOUT CONTENT */}
        <>
          {replacePlaceholder(layout, page)}
        </>

      </CoreDialogContext.Provider>
    </>
  );
}
