import CheckUserExist from "./components/CheckUserExist";

export default {
    checkUserExist   : { comp: <CheckUserExist /> },
    loginWithOtp     : { comp: <LoginWithOtp /> },
    loginWithPassword: { comp: <LoginWithPassword /> },
    register         : { comp: <RegisterOrResetPassword /> },
    resetPassword    : { comp: <RegisterOrResetPassword /> }
}