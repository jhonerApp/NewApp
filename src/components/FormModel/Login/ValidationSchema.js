import * as Yup from 'yup';
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

export default [
    Yup.object().shape({
        [loginUsername.name]: Yup.string().required(`${loginUsername.requiredMsg}`),
        [loginPassword.name]: Yup.string().required(`${loginPassword.requiredMsg}`),
    }),
    Yup.object().shape({
        [regUsername.name]: Yup.string().required(`${regUsername.requiredMsg}`),
        [regPassword.name]: Yup.string().required(`${regPassword.requiredMsg}`),
        [regConfirmPassword.name]: Yup.string().required(`${regConfirmPassword.requiredMsg}`),
        [regEmail.name]: Yup.string().required(`${regEmail.requiredMsg}`),
        [regMobileNumber.name]: Yup.string().required(`${regMobileNumber.requiredMsg}`),
    }),

]