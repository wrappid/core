import React, { Component } from "react";

import { connect } from "react-redux";
import CoreForm from "../../../components/forms/CoreForm";
import CoreClasses from "../../../styles/CoreClasses";
import { NativeDomNavigate } from "@wrappid/styled-components";
import { AuthContainer } from "./AuthContainer";

class CheckUserExist extends Component {
  state = {};

  componentDidMount = () => {};
  componentDidUpdate = () => {};
  render() {
    const { checkLoginOrRegisterSuccess, authNextPage } = this.props;

    // const queryParams = new URLSearchParams(window.location.search);
    // const email = queryParams.get("email");

    if (checkLoginOrRegisterSuccess && authNextPage !== "checkUserExist") {
      return <NativeDomNavigate to={"/" + authNextPage} />;
    }

    return (
      <AuthContainer>
          <CoreForm
            styleClasses={[CoreClasses.LAYOUT.AUTH_FORM_CONTAINER]}
            // initData={{ emailOrPhone: email }}
            formId="checkUserExist"
            mode="edit" // commented since default mode : edit
            authenticated={false}
          />
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    authNextPage: state.auth.authNextPage,
    checkLoginOrRegisterSuccess: state.auth.checkLoginOrRegisterSuccess,

    requestUrl: state?.manageAssistant?.requestUrl,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckUserExist);
