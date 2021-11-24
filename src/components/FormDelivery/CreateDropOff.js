import React, { Fragment } from 'react'

import {
    Divider, View, Text, Input, Image, TextArea

} from 'native-base'
import dropIcon from '../../../assets/iconTracker/icons8-pickup-point-128.png'
import FormikInput from '../../utils/FormikInput';
import BackButton from '../BackButton';

function CreateDropOff(props) {
    console.log("CreateDropOff props", props)

    const onBackPage = () => {
        props.setPage(props.currentPage - 1)
    }
    const {
        formField: {
            dropCompanyName,
            dropFName,
            dropLName,
            dropCPnumber,
            dropAddress,
        },
        formik
    } = props
    return (
        <Fragment>
            <Divider />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <BackButton style={{ paddingLeft: 20, flexDirection: 'row' }} isBack={false} navigatePage={onBackPage} color="#273746" />
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 3 }}>Back</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={dropIcon} height={7} width={7} alt='image' />
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 5 }}>DROP OFF DETAILS</Text>
                </View>
            </View>
            <Divider />
            <View style={{ flexDirection: 'column', margin: 2 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{dropCompanyName.label} </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${dropCompanyName.name}`)}
                        onBlur={formik.handleBlur(`${dropCompanyName.name}`)}
                        error={formik.errors.dropCompanyName}
                        val={formik.values.dropCompanyName}
                        touched={formik.touched.dropCompanyName} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 2 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{dropFName.label}</Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <FormikInput
                            onChangeText={formik.handleChange(`${dropFName.name}`)}
                            onBlur={formik.handleBlur(`${dropFName.name}`)}
                            error={formik.errors.dropFName}
                            val={formik.values.dropFName}
                            touched={formik.touched.dropFName} />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{dropLName.label}</Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <FormikInput
                            onChangeText={formik.handleChange(`${dropLName.name}`)}
                            onBlur={formik.handleBlur(`${dropLName.name}`)}
                            error={formik.errors.dropLName}
                            val={formik.values.dropLName}
                            touched={formik.touched.dropLName} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{dropCPnumber.label}</Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${dropCPnumber.name}`)}
                        onBlur={formik.handleBlur(`${dropCPnumber.name}`)}
                        error={formik.errors.dropCPnumber}
                        val={formik.values.dropCPnumber}
                        touched={formik.touched.dropCPnumber} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{dropAddress.label} </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${dropAddress.name}`)}
                        onBlur={formik.handleBlur(`${dropAddress.name}`)}
                        error={formik.errors.dropAddress}
                        val={formik.values.dropAddress}
                        touched={formik.touched.dropAddress} />
                </View>
            </View>
        </Fragment>
    )
}

export default CreateDropOff
