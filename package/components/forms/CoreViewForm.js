import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import CoreViewField from "./CoreViewField";
import CoreContainer from "../layouts/CoreContainer";
import { createAllForms } from "../../../store/action/formAction";
import CoreGrid from "../layouts/CoreGrid";

class CoreViewForm extends Component {
  state = {};

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    const { forms, initData, formId } = this.props;

    console.log("-------------VIEW PROPS", this.props);
    return forms[formId]?.formElements?.map((element, i) => (
      <CoreViewField element={element} data={initData} />
    ));
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    forms: state.forms,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CreateAllForms: (formIds, initData, mode) => {
      dispatch(createAllForms(formIds, initData, mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreViewForm);
