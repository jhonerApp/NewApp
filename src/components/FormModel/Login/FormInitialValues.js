import LoginModel from './LoginModel'

const {
    formField: {
        //Login
        loginUsername,
        loginPassword,

        //Register
        regUsername,
        regPassword,
        regConfirmPassword,
        regEmail,
        regMobileNumber
    }

} = LoginModel

export default {
    //Login
    [loginUsername.name]: '',
    [loginPassword.name]: '',
    //Register
    [regUsername.name]: '',
    [regPassword.name]: '',
    [regConfirmPassword.name]: '',
    [regEmail.name]: '',
    [regMobileNumber.name]: '',

}