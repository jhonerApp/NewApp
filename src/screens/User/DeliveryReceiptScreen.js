import { Divider, Flex, Stack } from 'native-base'
import React, { useRef, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, Text, Platform } from 'react-native'
import { BTN_COLORS, TEXT_COLORS } from '../../contants/index'

import { Image } from 'native-base'

import pickupIcon from '../../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../../assets/iconTracker/icons8-pickup-point-128.png'

import Barcode from "react-native-barcode-builder";

//import Barcode from 'react-native-barcode-expo';
//react-native-barcode-expo


function DeliveryReceiptScreen() {
    console.log(Platform.OS);

    // const [Barcode , setBarcode]  = useState(null)
    // if(Platform.OS === 'android')
    // {
    //     import('react-native-barcode-builder').then(({ Barcode : Barcode}) =>{
    //         setBarcode(() => Barcode);
    //     })
    // }


    // const Barcode = Platform.select({
    //     android: () => require('react-native-barcode-builder')
    // })();

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
                            borderTopLeftRadius: 30,
                            borderBottomRightRadius: 30,


                        }}
                    >

                        <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 15 }}>

                            <View style={{ flexDirection: 'column', paddingLeft: 15, paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={pickupIcon} height={7} width={7} alt='image' />
                                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 2 }}>Pickup Point: </Text>
                                </View>
                                <View style={{ paddingHorizontal: 10, margin: 5 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}> 23 F E jacinto St west
                                        rembo makati city,philippine 1215 District 2 zdfdfsfs
                                        sdfsdfsdf sfdsfsdfsdf</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Pickup To:</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green', paddingLeft: 10 }}>Jhonnel Remolin</Text>
                                </View>
                            </View>


                            <Divider />
                            <View style={{ flexDirection: 'column', paddingTop: 10, paddingLeft: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={dropIcon} height={7} width={7} alt='image' />
                                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 2 }}>Drop Point: </Text>
                                </View>
                                <View style={{ paddingHorizontal: 30, margin: 10 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Light' }}> 23 F E jacinto St west
                                        rembo makati city,philippine 1215 District 2 zdfdfsfs
                                        sdfsdfsdf sfdsfsdfsdf</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Drop To:</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green', paddingLeft: 10 }}>Jhonnel Remolin</Text>
                                </View>
                            </View>
                            <Divider />
                            <View style={{ alignItems: 'center', margin: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 17 }}> Parcel Details</Text>
                            </View>
                            <Divider />
                            <View style={{ margin: 15 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12 }}> Parcel Witdh(cm)</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12 }}> 1233 cm</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12 }}> Parcel Height(cm)</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12 }}> 1 cm</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12 }}> Parcel Length(cm)</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12 }}> 1 cm</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12 }}> Parcel Weight(cm)</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12 }}> 1 cm</Text>
                                </View>
                            </View>
                            <Divider />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Total:</Text>
                                <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green', paddingLeft: 10 }}>$100</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Delivery By:</Text>
                                <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green', paddingLeft: 10 }}>Car</Text>
                            </View>
                            <Barcode value="Hello World" format="CODE128" style={{ width: '100%' }} />


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
                                >
                                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 15, paddingTop: 3 }}>
                                        SAVE BARCODE
                                    </Text>
                                </TouchableOpacity>


                            </View>
                        </Flex>
                    </Stack>
                </View>

            </View>
        </ScrollView>
    )
}

export default DeliveryReceiptScreen
