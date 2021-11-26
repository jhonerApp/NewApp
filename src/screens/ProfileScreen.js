import React, { Fragment, useRef, useEffect, useState } from 'react';
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
<<<<<<< HEAD
    Feather
} from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
=======
    MaterialIcons,
    FontAwesome,
    Feather
} from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
import {
    Stack,
    Container,
    Button,
    HStack,
    IconButton,
    NativeBaseProvider,
    Text,
<<<<<<< HEAD
    Flex,
    View,
    ScrollView,
=======
    Input,
    Flex,
    Center,
    View,
    Icon,
    ScrollView,
    Divider,
    Image,
    VStack,
    ZStack,
    Box,
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
    Avatar,
    Circle



} from 'native-base';
import BaseProvider from '../components/BaseProvider'
import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
<<<<<<< HEAD
import { height } from 'styled-system';
=======
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc


function ProfileScreen(props) {

<<<<<<< HEAD
    const DeviceHeight = Dimensions.get('screen').height
    const DeviceWitdh = Dimensions.get('screen').width

    console.log('DeviceHeight', DeviceHeight)
    console.log('DeviceWitdh', DeviceWitdh)

=======
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc

    const pressButton = (e) => {
        const currentOffset = e.nativeEvent.contentOffset.y
        if (currentOffset <= 0) {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarShow })
        } else {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarHide })
        }
    }


    return (
        <BaseProvider>

            <View>
                <Stack
                    style={{
                        paddingTop: 10,
                        backgroundColor: '#ECF0F1'
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 20 }}>
                        <AntDesign
                            name="logout"
                            size={25}
                            color="#922B21"
                            style={{
                                paddingRight: 20
                            }}
                        />
                    </View>
                </Stack>
            </View>

<<<<<<< HEAD
            <View style={{
                flex: 1, backgroundColor: '#ECF0F1',

            }}>
=======
            <View style={{ flex: 1, backgroundColor: '#ECF0F1' }}>
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
                <Stack style={{ alignItems: 'center', paddingTop: 5, backgroundColor: '#ECF0F1' }}>

                    <Avatar
                        size='100'
                        bg="amber.500"
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                        }}
                        style={{
                            shadowRadius: 40,
                            borderRadius: 20,

                        }}
                    />

                    <Circle
                        size='8'
                        mt="-5"
                        ml="20"
                        style={{
                            backgroundColor: '#FDFEFE',

                        }}
                    >
                        <Feather
                            name="edit"
                            size={18}
                            color="#1F618D"
                            style={{ paddingLeft: 2 }}
                        />
                    </Circle>
                </Stack>


<<<<<<< HEAD
                <View onLayout={(event) => console.log('event', event)} style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                }}>
=======
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc



                    <Stack
                        bg="blueGray.50"
                        h='100%'
                        shadow={4}
                        style={{
                            paddingBottom: 5,
                            borderTopStartRadius: 30,
                            borderTopEndRadius: 30,
                            alignContent: 'center'

                        }}

                    >


                        <ScrollView onScroll={(e) => pressButton(e)} scrollEventThrottle={16}>
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingTop: 20, width: '100%',
                                justifyContent: 'flex-start', alignItems: 'center'
                            }}>
                                <View
                                    style={{
                                        width: '90%',
                                        borderRadius: 10,

                                    }} >

                                    <TouchableOpacity>
                                        <Stack
                                            bg="#FBFCFC"
                                            shadow={6}
                                            rounded='md'
                                            style={{
                                                paddingTop: 10,
                                                flex: 1,
                                            }}
                                        >

                                            <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <MaterialCommunityIcons
                                                            name="account-box-outline"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Account</Text>
                                                    </View>
                                                    <View style={{ paddingRight: 20 }}>
                                                        <AntDesign
                                                            name="caretright"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                    </View>
                                                </View>
                                            </Flex>
                                        </Stack>
                                    </TouchableOpacity>
                                    <View style={{ paddingBottom: 10 }}></View>
                                    <TouchableOpacity>
                                        <Stack
                                            bg="#FBFCFC"
                                            shadow={6}
                                            rounded='md'
                                            style={{

                                                paddingTop: 10,
                                                flex: 1,
<<<<<<< HEAD
=======

>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
                                            }}
                                        >

                                            <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <Feather
                                                            name="help-circle"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Help Cetre</Text>
                                                    </View>
                                                    <View style={{ paddingRight: 20 }}>
                                                        <AntDesign
                                                            name="caretright"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                    </View>
                                                </View>
                                            </Flex>
                                        </Stack>
                                    </TouchableOpacity>
                                    <View style={{ paddingBottom: 10 }}></View>
                                    <TouchableOpacity>
                                        <Stack
                                            bg="#FBFCFC"
                                            shadow={6}
                                            rounded='md'
                                            style={{

                                                paddingTop: 10,
                                                flex: 1,
<<<<<<< HEAD
                                            }}
                                        >

                                            <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
=======

                                            }}
                                        >

                                            <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin:4 }}>
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <Ionicons
                                                            name="ios-settings-outline"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Settings</Text>
                                                    </View>
                                                    <View style={{ paddingRight: 20 }}>
                                                        <AntDesign
                                                            name="caretright"
                                                            size={24}
                                                            color="#212F3D"
                                                        />
                                                    </View>
                                                </View>
                                            </Flex>
                                        </Stack>
                                    </TouchableOpacity>
                                    <View style={{ paddingBottom: 10 }}></View>
                                </View>
                            </View>
                        </ScrollView>


                    </Stack>
                </View>
<<<<<<< HEAD

=======
                
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
            </View>

        </BaseProvider>

    )
}

const styles = StyleSheet.create({
    tabBarShow: {
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 10,
        left: 10,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        display: 'flex'
    },
    tabBarHide: {
        display: 'none'
    }
})

export default ProfileScreen
