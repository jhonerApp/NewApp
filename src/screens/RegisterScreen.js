import { Flex, Stack, View, Text } from 'native-base'
import { useFormik } from 'formik'
import { TouchableOpacity, ScrollView } from 'react-native'

import React from 'react'
import FormikInput from '../utils/FormikInput';
import LoginModel from '../components/FormModel/Login/LoginModel'
import ValidationSchema from '../components/FormModel/Login/ValidationSchema'
import FormInitialValues from '../components/FormModel/Login/FormInitialValues'
import { BTN_COLORS, TEXT_COLORS } from '../contants/index'

function RegisterScreen(props) {


    const {
        formField: {
            regUsername,
            regPassword,
            regConfirmPassword,
            regEmail,
            regMobileNumber
        }
    } = LoginModel

    const formik = useFormik({
        validationSchema: ValidationSchema[1],
        initialValues: FormInitialValues,
        onSubmit: (values, action) => {

        }
    })



    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FDFEFE ', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
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
                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{regUsername.label}</Text>
                            </View>
                            <View style={{ margin: 2 }}>
                                <FormikInput
                                    onChangeText={formik.handleChange(`${regUsername.name}`)}
                                    onBlur={formik.handleBlur(`${regUsername.name}`)}
                                    error={formik.errors.regUsername}
                                    val={formik.values.regUsername}
                                    touched={formik.touched.regUsername}
                                    size='lg'
                                />
                            </View>
                            <View style={{ margin: 5, paddingLeft: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{regPassword.label}</Text>
                            </View>
                            <View style={{ margin: 2 }}>
                                <FormikInput
                                    onChangeText={formik.handleChange(`${regPassword.name}`)}
                                    onBlur={formik.handleBlur(`${regPassword.name}`)}
                                    error={formik.errors.regPassword}
                                    val={formik.values.regPassword}
                                    touched={formik.touched.regPassword}
                                    size='lg'
                                    type='password'
                                />
                            </View>

                            <View style={{ margin: 5, paddingLeft: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{regConfirmPassword.label}</Text>
                            </View>
                            <View style={{ margin: 2 }}>
                                <FormikInput
                                    onChangeText={formik.handleChange(`${regConfirmPassword.name}`)}
                                    onBlur={formik.handleBlur(`${regConfirmPassword.name}`)}
                                    error={formik.errors.regConfirmPassword}
                                    val={formik.values.regConfirmPassword}
                                    touched={formik.touched.regConfirmPassword}
                                    size='lg'
                                    type='password'
                                />
                            </View>

                            <View style={{ margin: 5, paddingLeft: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{regEmail.label}</Text>
                            </View>
                            <View style={{ margin: 2 }}>
                                <FormikInput
                                    onChangeText={formik.handleChange(`${regEmail.name}`)}
                                    onBlur={formik.handleBlur(`${regEmail.name}`)}
                                    error={formik.errors.regEmail}
                                    val={formik.values.regEmail}
                                    touched={formik.touched.regEmail}
                                    size='lg'
                                />
                            </View>

                            <View style={{ margin: 5, paddingLeft: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{regMobileNumber.label}</Text>
                            </View>
                            <View style={{ margin: 2 }}>
                                <FormikInput
                                    onChangeText={formik.handleChange(`${regMobileNumber.name}`)}
                                    onBlur={formik.handleBlur(`${regMobileNumber.name}`)}
                                    error={formik.errors.regMobileNumber}
                                    val={formik.values.regMobileNumber}
                                    touched={formik.touched.regMobileNumber}
                                    size='lg'
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
                                        Already have an account?</Text><TouchableOpacity onPress={() => props.navigation.goBack()}>
                                        <Text style={{ paddingLeft: 5, color: TEXT_COLORS.primary, fontFamily: 'Montserrat-Bold' }}>Register</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Flex>
                    </Stack>
                </View>

            </View>
        </ScrollView>
    )
}

export default RegisterScreen
