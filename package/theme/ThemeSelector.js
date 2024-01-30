import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UPDATE_DEFAULT_THEME, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreTypographyCaption from "../components/dataDisplay/CoreTypographyCaption";
import CoreSelect from "../components/inputs/CoreSelect";
import CoreTextButton from "../components/inputs/CoreTextButton";
import { coreUseNavigate } from "../helper/routerHelper";
import { setUserTheme } from "../store/action/appActions";

function ThemeSelector() {
  const userTheme = useSelector((state) => state.app.userTheme);
  const userThemeId = useSelector((state) => state.app.userThemeId);

  const { themes, defaultTheme } = React.useContext(WrappidDataContext);
  const dispatch = React.useContext(WrappidDispatchContext);
  const storeDispatch = useDispatch();
  const [themeChangeFormEnable, setThemeChangeFormEnable] = React.useState(false);
  
  const navigate = coreUseNavigate();

  const handleChangeTheme = (event) => {
    let themeName = event?.target?.value;

    // eslint-disable-next-line no-console
    console.log(`Changing theme ${event?.target?.value}`);
    setThemeChangeFormEnable(false);
    storeDispatch(setUserTheme(themeName, themes[themeName].theme));
    navigate("/");
  };

  React.useEffect(() => { 
    dispatch({ payload: userThemeId, type: UPDATE_DEFAULT_THEME });
  }, [userTheme, userThemeId]);
    
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