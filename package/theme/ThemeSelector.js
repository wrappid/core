import React from "react";

import { UPDATE_DEFAULT_THEME, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";

import CoreTypographyCaption from "../components/dataDisplay/CoreTypographyCaption";
import CoreSelect from "../components/inputs/CoreSelect";
import CoreTextButton from "../components/inputs/CoreTextButton";

function ThemeSelector() {
  const { themes, defaultTheme } = React.useContext(WrappidDataContext);
  const dispatch = React.useContext(WrappidDispatchContext);
  const [themeChangeFormEnable, setThemeChangeFormEnable] = React.useState(false);
    
  const handleChangeTheme = (event) => {
    // eslint-disable-next-line no-console
    console.log(`Changing theme ${event?.target?.value}`);
    setThemeChangeFormEnable(false);
    dispatch({ payload: event?.target?.value, type: UPDATE_DEFAULT_THEME });
  };
    
  return (
    <>
      {themeChangeFormEnable ? (
        <>
          <CoreSelect
            selectID={defaultTheme}
            value={defaultTheme}
            label="Theme Selector"
            handleChange={handleChangeTheme}
            options={[
              ...Object.keys(themes).map((themeName) => {
                return { id: themeName, label: themes[themeName]?.name, value: themeName };
              })
            ]} />
        </>
      ) : (
        <>
          <CoreTypographyCaption>
            Current Theme: {themes[defaultTheme]?.name || "Unknown"}
          </CoreTypographyCaption>

          <CoreTextButton OnClick={() => {
            setThemeChangeFormEnable(true);
          }}>Change</CoreTextButton>
        </>
      )}
    </>
  );
}

export default ThemeSelector;