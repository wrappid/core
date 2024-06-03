import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreTypographyCaption from "../components/dataDisplay/CoreTypographyCaption";
import CoreSelect from "../components/inputs/CoreSelect";
import CoreTextButton from "../components/inputs/CoreTextButton";
import CoreBox from "../components/layouts/CoreBox";
import { coreUseNavigate } from "../helper/routerHelper";
import { setUserTheme } from "../store/action/appActions";
import CoreClasses from "../styles/CoreClasses";

function ThemeSelector() {
  const { userThemeID } = useSelector((state) => state?.app);
  const { themes: storedThemes } =  useSelector(state => state?.theme);
  const { combined: themes } = storedThemes;
  const { config } = React.useContext(WrappidDataContext);
  const storeDispatch = useDispatch();
  const [themeChangeFormEnable, setThemeChangeFormEnable] = React.useState(false);
  
  const navigate = coreUseNavigate();

  const handleChangeTheme = (event) => {
    let themeName = event?.target?.value;

    // eslint-disable-next-line no-console
    console.log(`Changing theme ${event?.target?.value}`);
    setThemeChangeFormEnable(false);
    storeDispatch(setUserTheme(themeName));
    navigate("/");
  };

  return (
    <CoreBox styleClasses={[CoreClasses.BG.BG_WHITE]}>
      {themeChangeFormEnable ? (
        <CoreSelect
          selectID={userThemeID || config?.defaultTheme}
          value={userThemeID || config?.defaultTheme}
          label="Theme Selector"
          handleChange={handleChangeTheme}
          options={[
            ...(themes).map((theme) => {
              return { id: theme?.id, label: theme?.id, value: theme?.id };
            })
          ]} />
      ) : (
        <>
          <CoreTypographyCaption styleClasses={[CoreClasses.BG.BG_PRIMARY]}>
            Current Theme: {themes.find((theme) => theme.id === userThemeID || theme.id === config?.defaultTheme )?.id || "Unknown"}
          </CoreTypographyCaption>

          <CoreTextButton onClick={() => {
            setThemeChangeFormEnable(true);
          }}>Change</CoreTextButton>
        </>
      )}
    </CoreBox>
  );
}

export default ThemeSelector;