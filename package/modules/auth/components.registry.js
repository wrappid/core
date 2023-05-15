import React from "react";
import CheckUserExist from "./components/CheckUserExist";
import LoginWithOtp from "./components/LoginWithOtp";
import LoginWithPassword from "./components/LoginWithPassword";
import RegisterOrResetPassword from "./components/RegisterOrResetPassword";

export default {
    checkUserExist   : { comp: <CheckUserExist /> },
    loginWithOtp     : { comp: <LoginWithOtp /> },
    loginWithPassword: { comp: <LoginWithPassword /> },
    register         : { comp: <RegisterOrResetPassword /> },
    resetPassword    : { comp: <RegisterOrResetPassword /> }
}