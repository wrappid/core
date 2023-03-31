// import { CoreOutlinedButton } from "app-magic-core";
import { Provider } from "react-redux/es";
import { CoreContainer } from "./package";

import CoreForm from "./package/components/forms/CoreForm";
import { FORM_IDS } from "./package/components/forms/coreFormConstants";
import CoreContainedButton from "./package/components/inputs/CoreContainedButton";
import CoreOutlinedButton from "./package/components/inputs/CoreOutlinedButton";
import CoreProvider from "./package/store/CoreProvider";
import CoreThemeProvider from "./package/theme/CoreThemeProvider";
import rootReducer from "./store/reducers/rootReducer";

function App() {
  const clickFun = async () => {
    alert("Hello");
    // let a = await axios.get("https://google.com");
    // console.log("A", a);
  };

  return (
    <CoreProvider appReducer={rootReducer}>
      <CoreContainer>
        {/* <CoreOutlinedButton label="Home" onClick={clickFun} />
      <CoreContainedButton label="Home" onClick={clickFun} /> */}
        <CoreForm formId={"testLogin"} mode={"edit"} authenticated={false} />
        <CoreForm formId={FORM_IDS.__PROFILE_EDUCATION} authenticated={true} />;
      </CoreContainer>
    </CoreProvider>
  );
}

export default App;
