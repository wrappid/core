import React, { useContext } from "react";
import CoreTabs from "../CoreTabs";
import CoreTab from "../CoreTab";
import CoreTabPanel from "../CoreTabPanel";
import { ComponentRegistryContext } from "../../../config/contextHandler";
import CoreFlatList from "../../dataTable/CoreFlatList";
import CoreClasses from "../../../styles/CoreClasses";
import { nativeUseLocation } from "@wrappid/styled-components";

export default function CoreCustomTabs(props) {
  const location = nativeUseLocation();
  const { tabsContent, preHandleChangeHook, postHandleChangeHook } = props;
  const [tabValue, setTabValue] = React.useState(
    tabsContent && tabsContent.length > 0 ? tabsContent[0]?.id : 0
  );
  const mergedComponentRegistry = useContext(ComponentRegistryContext);

  React.useEffect(() => {
    if (
      location?.hash &&
      tabsContent?.filter((tabContent) => {
        return tabContent?.id === location?.hash?.replace("#", "");
      })?.length > 0
    ) {
      setTabValue(location.hash?.replace("#", ""));
    } else {
      setTabValue(tabsContent[0]?.id);
    }
  }, [tabsContent, location]);

  const handleChange = (e, value) => {
    preHandleChangeHook && preHandleChangeHook(e, value);
    setTabValue(value);
    postHandleChangeHook && postHandleChangeHook(e, value);
  };

  const renderItem = (tabContent, tabIndex) => {
    return (
      <CoreTab
        onPress={handleChange}
        value={tabContent?.id}
        label={tabContent?.label}
        currentTab={tabValue}
      />
    );
  };

  const keyExtractor = (rowData) => {
    return rowData.id;
  };

  return (
    <>
      <CoreTabs
        styleClasses={[
          CoreClasses.MARGIN.MB1,
          // CoreClasses.POSITION.STICKY_TOP,
          CoreClasses.BG.BG_WHITE,
          // CoreClasses.OVERFLOW.OVERFLOW_X_SCROLL,
          CoreClasses.WIDTH.W_100,
        ]}
        value={tabValue}
        onChange={handleChange}
      >
        <CoreFlatList
          horizontal={true}
          tableData={tabsContent}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </CoreTabs>
      {tabsContent?.map((tabContent, tabIndex) => {
        return (
          <CoreTabPanel
            styleClasses={props.tabPanelClasses}
            value={tabValue}
            index={tabContent?.id || tabIndex}
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
