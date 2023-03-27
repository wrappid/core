// import { CoreOutlinedButton } from "app-magic-core";
import { Provider } from "react-redux/es";

import CoreForm from "./core/components/forms/CoreForm";
import { FORM_IDS } from "./core/components/forms/coreFormConstants";

function App() {
  const clickFun = () => {
    alert("Hello");
  };

  return (
    <>
      {/* <CoreOutlinedButton label="Home" onClick={clickFun}/> */}
      <CoreForm formId={"testLogin"} mode={"edit"} authenticated={false} />;
      <CoreForm formId={FORM_IDS.__PROFILE_EDUCATION} authenticated={true} />;
    </>
  );
}

export default App;
