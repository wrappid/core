import React, {Component} from 'react';

import {connect} from 'react-redux';
import {NativeDomNavigate} from '@wrappid/styled-components';

import {
  CoreH1,
  CoreH2,
  CoreLabel,
  CoreTypographyBody1,
  CoreForm,
  CoreTextButton,
  CoreBox,
  CoreLink,
  apiRequestAction,
  maskEmailOrPhone,
  CoreClasses,
} from '@wrappid/core';

import {HTTP_POST, urls} from '../../../config/constants';
import {NAVIGATE_TO_RESET_PASSWORD_API} from '../../../config/api';
import {
  CHECK_LOGIN_ERROR,
  NAVIGATE_TO_RESET_PASSWORD_SUCCESS,
} from '../types/authTypes';
import {AuthContainer} from './AuthContainer';
import { saveAuthData } from '../actions/authActions';

class RegisterOrResetPassword extends Component {
  state = {};

  componentDidMount = () => {
    if (
      this.props.authNextPage !== urls.REGISTER_ROUTE &&
      !this.props.navigateToResetPasswordLoading &&
      !this.props.navigateToResetPasswordSuccess
    ) {
      this.props.SendResetPasswordOtp({
        emailOrPhone: this.props?.navData?.emailOrPhone,
      });
    }
  };

  componentDidUpdate = () => {
    if (this.state.submitFlag && this.props.auth.authError) {
      //   swal("Oops!", this.props.auth.authError, "error");
      this.props.SaveAuthData({authError: null});
      this.setState({submitFlag: false});
    }
  };

  GoBack = () => {
    this.props.SaveAuthData({
      authNextPage: urls.LOGIN_ROUTE,
      checkLoginOrRegisterError: false,
      checkLoginOrRegisterLoading: false,
      checkLoginOrRegisterMsg: false,
      checkLoginOrRegisterSuccess: false,
      navigateToOtpSuccess: false,
      navigateToResetPasswordSuccess: false,
    });
  };

  render() {
    // console.log("props : ", this.props);
    // console.log("state : ", this.state);

    if (
      !this.props.checkLoginOrRegisterSuccess &&
      (this.props.authNextPage !== urls.REGISTER_ROUTE ||
        this.props.authNextPage !== urls.RESET_PASSWORD_ROUTE)
    ) {
      console.log('REDIRECT');
      return <NativeDomNavigate to={'/' + this.props.authNextPage} />;
    }

    return (
      <AuthContainer>
        <CoreH1
          variant="h5"
          styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}>
          Verify your{' '}
          {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}
        </CoreH1>

        {this.props.authNextPage === urls.REGISTER_ROUTE ? (
          <CoreTypographyBody1>
            We have sent you a verification code on{' '}
            {maskEmailOrPhone(this.props.navData.emailOrPhone)}
            <br />
            Please enter the One Time Password (OTP) to verify your{' '}
            {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}
          </CoreTypographyBody1>
        ) : (
          <>
            <CoreH2
              variant="h6"
              styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}>
              Reset Password through OTP
            </CoreH2>

            <CoreTypographyBody1>
              {'We have sent you a verification code on your'}

              {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}

              {maskEmailOrPhone(this.props.navData?.emailOrPhone)}

              {' Please enter the One Time Password (OTP) to verify your'}

              {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}
            </CoreTypographyBody1>
          </>
        )}

        <CoreBox styleClasses={[CoreClasses.LAYOUT.HORIZONTAL_CENTER]}>
          <CoreTextButton OnClick={this.GoBack} label="Not You" />
        </CoreBox>

        <CoreForm
          styleClasses={CoreClasses.LAYOUT.AUTH_FORM_CONTAINER}
          formId="loginWithResetPassword"
          mode="eidt"
          authenticated={false}
        />

        {this.props.authNextPage === urls.REGISTER_ROUTE && (
          <CoreBox>
            <CoreLabel>
              <CoreTypographyBody1>
                By signing up you agree to our
                <CoreLink>Privacy Policy</CoreLink>&
                <CoreLink>Terms of use</CoreLink>
              </CoreTypographyBody1>
            </CoreLabel>
          </CoreBox>
        )}
      </AuthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    authNextPage: state.auth.authNextPage,

    checkLoginOrRegisterError: state.auth.checkLoginOrRegisterError,
    checkLoginOrRegisterLoading: state.auth.checkLoginOrRegisterLoading,
    checkLoginOrRegisterMsg: state.auth.checkLoginOrRegisterMsg,
    checkLoginOrRegisterSuccess: state.auth.checkLoginOrRegisterSuccess,
    navData: state.auth.navData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SaveAuthData: data => {
      dispatch(saveAuthData(data));
    },
    SendResetPasswordOtp: data => {
      dispatch(
        apiRequestAction(
          HTTP_POST,
          NAVIGATE_TO_RESET_PASSWORD_API,
          true,
          data,
          NAVIGATE_TO_RESET_PASSWORD_SUCCESS,
          CHECK_LOGIN_ERROR,
        ),
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterOrResetPassword);
