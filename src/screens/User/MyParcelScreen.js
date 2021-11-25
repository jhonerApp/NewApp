import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup";
import {
    FontAwesome,
    MaterialIcons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5
} from '@expo/vector-icons';


import { TouchableOpacity, Button, Platform } from 'react-native';
import {
    FormControl,
    WarningOutlineIcon,
    Stack,
    Icon,
    Text,
    Input,
    Flex,
    ScrollView,
    Divider,
    Image,
    Radio,
    TextArea



} from 'native-base';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




// import CreatePickUp from '../components/FormDelivery/CreatePickUp';
// import CreateDropOff from '../components/FormDelivery/CreateDropOff';
// import CreateParcel from '../components/FormDelivery/CreateParcel';


import CarIcon from '../../../assets/iconTracker/icons8-car-64.png'
import TruckIcon from '../../../assets/iconTracker/icons8-delivery-truck-64.png'
import VanIcon from '../../../assets/iconTracker/icons8-van-64.png'
import BikeIcon from '../../../assets/iconTracker/icons8-bicycle-64.png'



function MyParcelScreen(props) {

    console.log('MyParcel', props)
    const pressButton = (e) => {
        const currentOffset = e.nativeEvent.contentOffset.y
        if (currentOffset <= 0) {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarShow })
        } else {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarHide })
        }
    }


    return (


        <View style={{
            flex: 1,
            position: 'relative',
            height: '100%',
            width: '100%',
            top: 10

        }}>

            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',

                    }}
                >
                    <View
                        bg="info.50"
                        style={{
                            width: '95%',
                            height: '100%',
                            paddingBottom: 160,
                            borderRadius: 10,

                        }}
                    >
                        {/* ITEMS */}
                        <Stack
                            bg="#FBFCFC"
                            shadow={6}
                            rounded='md'
                            w="100%"
                            style={{

                                paddingTop: 10,
                                flex: 1,

                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Montserrat-Black' }}>
                                        #123456
                                    </Text>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}>
                                        June 21,2021
                                    </Text>
                                </View>
                                <Divider />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View style={{ backgroundColor: '#ECF0F1', borderRadius: 10, width: 50, paddingLeft: 5 }}>
                                        <Image source={CarIcon} height={10} width={10} alt='image' />
                                    </View>
                                    <View style={{ paddingRight: 100 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            #123456
                                        </Text>
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: 'green' }}>
                                            Pending
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                            <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider />
                            </View>
                        </Stack>
                        <View style={{
                            paddingBottom: 10,
                            flexDirection: 'row'
                        }}></View>
                        {/* ITEMS */}
                        <Stack
                            bg="#FBFCFC"
                            shadow={6}
                            rounded='md'
                            w="100%"
                            style={{

                                paddingTop: 10,
                                flex: 1,

                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Montserrat-Black' }}>
                                        #123456
                                    </Text>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}>
                                        June 21,2021
                                    </Text>
                                </View>
                                <Divider />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View style={{ backgroundColor: '#ECF0F1', borderRadius: 10, width: 50, paddingLeft: 5 }}>
                                        <Image source={TruckIcon} height={10} width={10} alt='image' />
                                    </View>
                                    <View style={{ paddingRight: 100 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            #123456
                                        </Text>
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: 'green' }}>
                                            Pending
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                            <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider />
                            </View>
                        </Stack>
                        <View style={{
                            paddingBottom: 10,
                            flexDirection: 'row'
                        }}></View>
                        {/* ITEMS */}
                        <Stack
                            bg="#FBFCFC"
                            shadow={6}
                            rounded='md'
                            w="100%"
                            style={{

                                paddingTop: 10,
                                flex: 1,

                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Montserrat-Black' }}>
                                        #123456
                                    </Text>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}>
                                        June 21,2021
                                    </Text>
                                </View>
                                <Divider />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View style={{ backgroundColor: '#ECF0F1', borderRadius: 10, width: 50, paddingLeft: 5 }}>
                                        <Image source={VanIcon} height={10} width={10} alt='image' />
                                    </View>
                                    <View style={{ paddingRight: 100 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            #123456
                                        </Text>
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: 'green' }}>
                                            Pending
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                            <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider />
                            </View>
                        </Stack>
                        <View style={{
                            paddingBottom: 10,
                            flexDirection: 'row'
                        }}></View>

                        {/* ITEMS */}
                        <Stack
                            bg="#FBFCFC"
                            shadow={6}
                            rounded='md'
                            w="100%"
                            style={{

                                paddingTop: 10,
                                flex: 1,

                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Montserrat-Black' }}>
                                        #123456
                                    </Text>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}>
                                        June 21,2021
                                    </Text>
                                </View>
                                <Divider />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 10,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View style={{ backgroundColor: '#ECF0F1', borderRadius: 10, width: 50, paddingLeft: 5 }}>
                                        <Image source={BikeIcon} height={10} width={10} alt='image' />
                                    </View>
                                    <View style={{ paddingRight: 100 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            #123456
                                        </Text>
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: 'green' }}>
                                            Pending
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                            <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider />
                            </View>
                        </Stack>
                        <View style={{
                            paddingBottom: 10,
                            flexDirection: 'row'
                        }}></View>

                    </View >
                </View >
            </ScrollView >
        </View >

    )
}

export default MyParcelScreen
