import { Flex, Stack, View, Image, Text, Divider } from 'native-base'
import React, { Fragment } from 'react'

import IconLogo from '../../assets/iconTracker/imageedit_1_5153507078.jpg'

import { useFormik } from 'formik'
import ValidationSchema from '../components/FormModel/Login/ValidationSchema'
import FormInitialValues from '../components/FormModel/Login/FormInitialValues'
import LoginModel from '../components/FormModel/Login/LoginModel'
import FormikInput from '../utils/FormikInput';
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { BTN_COLORS , TEXT_COLORS } from '../contants/index'

import RegisterScreen from './RegisterScreen'

function LoginScreen(props) {

    const {
        formField: {
            loginUsername,
            loginPassword,
        }
    } = LoginModel

    const formik = useFormik({
        validationSchema: ValidationSchema[0],
        initialValues: FormInitialValues,
        onSubmit: (values, action) => {
            if (values.loginUsername == "User" && values.loginPassword == "Password") {
                props.navigation.navigate('TabMenu', {
                    role: 'User',
                })

            }
            if (values.loginUsername == "Driver" && values.loginPassword == "Password") {
                props.navigation.navigate('TabMenu', {
                    role: 'Driver',
                })
            }

        }
    })

    return (
        //, backgroundColor: '#FDFEFE ', alignItems: 'center', justifyContent: 'center' 
        <View style={{ flex: 1, backgroundColor: '#FDFEFE ', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center', paddingBottom: 20 }}>
                <Image source={IconLogo} size='sm' alt='image' />
                <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 25, paddingLeft: 15, padding: 5, paddingTop: 17 }}>Shulesoft App</Text>
            </View>



            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '90%',

                }}
            >

                <Stack
                    bg="#FBFCFC"
                    shadow={6}
                    rounded='lg'
                    w="100%"
                    style={{
                        flex: 1,

                    }}
                >

                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 15 }}>
                        <View style={{ margin: 5, paddingLeft: 10 }}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{loginUsername.label}</Text>
                        </View>
                        <View style={{ margin: 2 }}>
                            <FormikInput
                                onChangeText={formik.handleChange(`${loginUsername.name}`)}
                                onBlur={formik.handleBlur(`${loginUsername.name}`)}
                                error={formik.errors.loginUsername}
                                val={formik.values.loginUsername}
                                touched={formik.touched.loginUsername}
                                size='lg'
                            />
                        </View>
                        <View style={{ margin: 5, paddingLeft: 10 }}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{loginPassword.label}</Text>
                        </View>
                        <View style={{ margin: 2 }}>
                            <FormikInput
                                onChangeText={formik.handleChange(`${loginPassword.name}`)}
                                onBlur={formik.handleBlur(`${loginPassword.name}`)}
                                error={formik.errors.loginPassword}
                                val={formik.values.loginPassword}
                                touched={formik.touched.loginPassword}
                                size='lg'
                                type='password'
                            />
                        </View>

                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    backgroundColor: BTN_COLORS.primary,
                                    padding: 9,
                                    width: '100%',
                                    borderRadius: 20,
                                }}
                                onPress={formik.handleSubmit}
                            >
                                <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 15, paddingTop: 3 }}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', paddingTop: 15, alignItems: 'center', paddingHorizontal: 40 }}>
                                <Text style={{ fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 15 }}>
                                    Don't have an account!</Text><TouchableOpacity onPress={() => props.navigation.navigate('RegisterScreen')}>
                                    <Text style={{ paddingLeft: 5, color: TEXT_COLORS.primary, fontFamily: 'Montserrat-Bold' }}>Register</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Flex>
                </Stack>
            </View>


        </View >
    )
}

export default LoginScreen
