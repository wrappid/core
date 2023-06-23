import React, { useContext, useRef } from "react";
import CoreTabPanel from "../CoreTabPanel";
import { ComponentRegistryContext } from "../../../config/contextHandler";
import CoreTabHead from "./CoreTabHead";

export default function CoreCustomTabs(props) {
  const { tabsContent, preHandleChangeHook, postHandleChangeHook } = props;
  const [tabValue, setTabValue] = React.useState(
    tabsContent && tabsContent.length > 0 ? tabsContent[0]?.id : 0
  );
  const mergedComponentRegistry = useContext(ComponentRegistryContext);
  const tabRef = useRef(null);

  // React.useEffect(() => {
  //   setTabValue(tabsContent[0]?.id);
  // }, [tabsContent]);

  React.useEffect(() => {
    const initialIndex = 0; //random number
    if (tabRef.current) {
      tabRef.current.scrollToIndex({ index: initialIndex });
    }
  }, [tabRef, tabRef?.current]);

  const handleChange = (e, value) => {
    preHandleChangeHook && preHandleChangeHook(e, value);
    setTabValue(value);
    postHandleChangeHook && postHandleChangeHook(e, value);
  };

  console.log("TAB REF T", tabRef);
  return (
    <>
      <CoreTabHead
        tabsContent={tabsContent}
        handleChange={handleChange}
        tabRef={tabRef}
        tabValue={tabValue}
      />
      {tabsContent?.map((tabContent, tabIndex) => {
        return (
          <CoreTabPanel
            styleClasses={props.tabPanelClasses}
            value={tabValue}
            index={tabContent?.id || tabIndex}
            key={tabContent?.id ? "tabContent-" + tabContent?.id : tabIndex}
          >
            {React.createElement(
              mergedComponentRegistry[tabContent.comp]?.comp
            )}
          </CoreTabPanel>
        );
      })}
    </>
  );
}
