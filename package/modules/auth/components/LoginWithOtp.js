import React, {Component} from 'react';

import {connect} from 'react-redux';
import {NativeDomNavigate} from '@wrappid/styled-components';

import {
  CoreH1,
  CoreForm,
  CoreTextButton,
  CoreBox,
  apiRequestAction,
  maskEmailOrPhone,
  CoreTypographyBody1,
  CoreClasses,
} from '@wrappid/core';

import {AuthContainer} from './AuthContainer';
import {NAVIGATE_TO_OTP_LOGIN_API} from '../../../config/api';
import {
  NAVIGATE_TO_OTP_LOGIN_ERROR,
  NAVIGATE_TO_OTP_LOGIN_LOADING,
  NAVIGATE_TO_OTP_LOGIN_SUCCESS,
} from '../types/authTypes';
import {HTTP} from '../../../config/constants';
import {urls} from '../../../config/constants';
import { saveAuthData } from '../actions/authActions';

class LoginWithOtp extends Component {
  state = {otp: false};

  componentDidMount = () => {
    /**
     * @todo:
     * otp flag checking is given because react call
     * componentDidMount 2 times in development mode
     * https://github.com/erikras/react-redux-universal-hot-example/issues/429#issuecomment-151990676
     */
    if (
      !this.props.navigateToOtpLoading &&
      !this.props.navigateToOtpSuccess &&
      !this.state.otp
    ) {
      console.log('OTP CALLING');
      this.setState({otp: true}, () => {
        this.props.SendOtp({emailOrPhone: this.props?.navData?.emailOrPhone});
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
      checkLoginOrRegisterSuccess: false,
      navigateToOtpLoading: false,
      navigateToOtpSuccess: false,
      navigateToResetPasswordSuccess: false,
    });
  };

  render() {
    // console.log("props : ", this.props);
    // console.log("state : ", this.state);

    if (
      !this.props.checkLoginOrRegisterSuccess &&
      this.props.authNextPage !== urls.LOGIN_OTP_ROUTE
    ) {
      console.log('REDIRECT');
      return <NativeDomNavigate to={'/' + this.props.authNextPage} />;
    }
    return (
      <AuthContainer>
        <CoreH1
          styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}
          variant="h5">
          Enter OTP
        </CoreH1>

        <CoreTypographyBody1>
          {'We have sent you a verification code on your'}

          {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}

          {maskEmailOrPhone(
            this.props?.navData?.emailOrPhone
              ? this.props?.navData?.emailOrPhone
              : '',
          )}

          {' Please enter the One Time Password (OTP) to verify your'}

          {isNaN(this.props.navData.emailOrPhone) ? ' email ' : ' phone '}
        </CoreTypographyBody1>

        <CoreBox styleClasses={[CoreClasses.LAYOUT.HORIZONTAL_CENTER]}>
          <CoreTextButton OnClick={this.GoBack} label="Not you" />
        </CoreBox>

        <CoreForm
          styleClasses={CoreClasses.LAYOUT.AUTH_FORM_CONTAINER}
          formId={'loginWithOtp'}
          mode={'edit'}
          authenticated={false}
        />
      </AuthContainer>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    auth: state.auth,
    authNextPage: state.auth.authNextPage,

    checkLoginOrRegisterError: state.auth.checkLoginOrRegisterError,
    checkLoginOrRegisterLoading: state.auth.checkLoginOrRegisterLoading,
    checkLoginOrRegisterSuccess: state.auth.checkLoginOrRegisterSuccess,
    navData: state.auth.navData,
    navigateToOtpLoading: state.auth.navigateToOtpLoading,
    navigateToOtpSuccess: state.auth.navigateToOtpSuccess,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SaveAuthData: data => {
      dispatch(saveAuthData(data));
    },
    SendOtp: data => {
      dispatch(
        apiRequestAction(
          HTTP.POST,
          NAVIGATE_TO_OTP_LOGIN_API,
          true,
          data,
          NAVIGATE_TO_OTP_LOGIN_SUCCESS,
          NAVIGATE_TO_OTP_LOGIN_ERROR,
          null, //localAction,
          null, //includeFile,
          null, //file,
          null, //formId,
          null, //reload,
          null, //reduxData,
          null, //pushSnack,
          NAVIGATE_TO_OTP_LOGIN_LOADING, //loadingType,
          null, //resetLoadingType,
        ),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithOtp);
