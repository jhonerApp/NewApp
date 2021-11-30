import React, { Fragment, useRef, useEffect, useState } from 'react';
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    Feather
} from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import {
    Stack,
    Text,
    View,
    ScrollView,
    Avatar,
    Circle,
    Flex,
    Image




} from 'native-base';

import StarRating from 'react-native-star-rating-widget';
import { height } from 'styled-system';

import AccountIcon from '../../assets/iconTracker/icons8-test-account-100.png'
import SettingIcon from '../../assets/iconTracker/icons8-services-100.png'
import HelpIcon from '../../assets/iconTracker/icons8-about-100.png'

import TruckIcon from '../../assets/iconTracker/icons8-delivery-truck-64.png'

function ProfileScreen(props) {

    const DeviceHeight = Dimensions.get('screen').height
    const DeviceWitdh = Dimensions.get('screen').width

    console.log('DeviceHeight', DeviceHeight)
    console.log('DeviceWitdh', DeviceWitdh)

    const [rating, setRating] = useState(3.5);



    const pressButton = (e) => {
        const currentOffset = e.nativeEvent.contentOffset.y
        if (currentOffset <= 0) {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarShow })
        } else {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarHide })
        }
    }


    return (
        <Fragment>

            <View style={{ flex: 1, backgroundColor: '#EAEDED' }}>
                <View style={{
                    height: 280,
                    width: '100%',
                    backgroundColor: "#212F3D",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <View style={{ paddingBottom: 30, flexDirection: 'column' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                            <Stack style={{ alignItems: 'center', paddingTop: 5 }}>
                                <Avatar
                                    size={120}
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
                                    size='10'
                                    mt="-9"
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
                                <View style={{ margin: 20, alignItems: 'center' }} pointerEvents='none'>
                                    <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white' }}>Jhonnel Remolin</Text>
                                    <Text style={{ fontFamily: 'Montserrat-Light', color: 'white' }}>(Driver)</Text>
                                    <StarRating
                                        rating={rating}
                                        max={5}
                                        iconWidth={24}
                                        iconHeight={24}
                                        onChange={setRating} />
                                </View>
                            </Stack>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', margin: 14, }}>
                    <ScrollView onScroll={(e) => pressButton(e)} scrollEventThrottle={16}>
                        <View style={{ paddingBottom: 40 }}>
                            <TouchableOpacity>
                                <Stack
                                    bg="#FBFCFC"
                                    shadow={4}
                                    rounded='md'

                                >
                                    <Flex style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                        <View style={{ paddingLeft: 5 }}>
                                            <Image source={AccountIcon} size='sm' alt='image' />
                                        </View>
                                        <View style={{ paddingTop: 20, flexDirection: 'row', paddingRight: 120 }}>
                                            <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 10, fontSize: 15, }}>Account</Text>
                                        </View>
                                        <View style={{ paddingTop: 20, paddingRight: 10 }}>
                                            <AntDesign
                                                name="caretright"
                                                size={24}
                                                color="#212F3D"
                                            />
                                        </View>
                                    </Flex>
                                </Stack>
                            </TouchableOpacity>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>

                            <TouchableOpacity>
                                <Stack
                                    bg="#FBFCFC"
                                    shadow={4}
                                    rounded='md'

                                >
                                    <Flex style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                        <View style={{ paddingLeft: 5 }}>
                                            <Image source={SettingIcon} size='sm' alt='image' />
                                        </View>
                                        <View style={{ paddingTop: 20, flexDirection: 'row', paddingRight: 120 }}>
                                            <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 10, fontSize: 15, }}>Settings</Text>
                                        </View>
                                        <View style={{ paddingTop: 20, paddingRight: 10 }}>
                                            <AntDesign
                                                name="caretright"
                                                size={24}
                                                color="#212F3D"
                                            />
                                        </View>
                                    </Flex>
                                </Stack>
                            </TouchableOpacity>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>


                            <TouchableOpacity>
                                <Stack
                                    bg="#FBFCFC"
                                    shadow={4}
                                    rounded='md'

                                >
                                    <Flex style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                        <View style={{ paddingLeft: 5 }}>
                                            <Image source={HelpIcon} size='sm' alt='image' />
                                        </View>
                                        <View style={{ paddingTop: 20, flexDirection: 'row', paddingRight: 120 }}>
                                            <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 10, fontSize: 15, }}>Help</Text>
                                        </View>
                                        <View style={{ paddingTop: 20, paddingRight: 10 }}>
                                            <AntDesign
                                                name="caretright"
                                                size={24}
                                                color="#212F3D"
                                            />
                                        </View>
                                    </Flex>
                                </Stack>
                            </TouchableOpacity>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </Fragment>
        // <BaseProvider>

        //     <View>
        //         <Stack
        //             style={{
        //                 paddingTop: 10,
        //                 backgroundColor: '#ECF0F1'
        //             }}
        //         >
        //             <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 20 }}>
        //                 <AntDesign
        //                     name="logout"
        //                     size={25}
        //                     color="#922B21"
        //                     style={{
        //                         paddingRight: 20
        //                     }}
        //                 />
        //             </View>
        //         </Stack>
        //     </View>

        //     <View style={{
        //         flex: 1, backgroundColor: '#ECF0F1',

        //     }}>
        //         <Stack style={{ alignItems: 'center', paddingTop: 5, backgroundColor: '#ECF0F1' }}>

        //             <Avatar
        //                 size='100'
        //                 bg="amber.500"
        //                 source={{
        //                     uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        //                 }}
        //                 style={{
        //                     shadowRadius: 40,
        //                     borderRadius: 20,

        //                 }}
        //             />

        //             <Circle
        //                 size='8'
        //                 mt="-5"
        //                 ml="20"
        //                 style={{
        //                     backgroundColor: '#FDFEFE',

        //                 }}
        //             >
        //                 <Feather
        //                     name="edit"
        //                     size={18}
        //                     color="#1F618D"
        //                     style={{ paddingLeft: 2 }}
        //                 />
        //             </Circle>
        //         </Stack>


        //         <View onLayout={(event) => console.log('event', event)} style={{
        //             flex: 1, flexDirection: 'column', justifyContent: 'center',
        //         }}>



        //             <Stack
        //                 bg="blueGray.50"
        //                 h='100%'
        //                 shadow={4}
        //                 style={{
        //                     paddingBottom: 5,
        //                     borderTopStartRadius: 30,
        //                     borderTopEndRadius: 30,
        //                     alignContent: 'center'

        //                 }}

        //             >


        //                 <ScrollView onScroll={(e) => pressButton(e)} scrollEventThrottle={16}>
        //                     <View style={{
        //                         flex: 1, flexDirection: 'column', paddingTop: 20, width: '100%',
        //                         justifyContent: 'flex-start', alignItems: 'center'
        //                     }}>
        //                         <View
        //                             style={{
        //                                 width: '90%',
        //                                 borderRadius: 10,

        //                             }} >

        //                             <TouchableOpacity>
        //                                 <Stack
        //                                     bg="#FBFCFC"
        //                                     shadow={6}
        //                                     rounded='md'
        //                                     style={{
        //                                         paddingTop: 10,
        //                                         flex: 1,
        //                                     }}
        //                                 >

        //                                     <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
        //                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
        //                                             <View style={{ flexDirection: 'row', }}>
        //                                                 <MaterialCommunityIcons
        //                                                     name="account-box-outline"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                                 <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Account</Text>
        //                                             </View>
        //                                             <View style={{ paddingRight: 20 }}>
        //                                                 <AntDesign
        //                                                     name="caretright"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                             </View>
        //                                         </View>
        //                                     </Flex>
        //                                 </Stack>
        //                             </TouchableOpacity>
        //                             <View style={{ paddingBottom: 10 }}></View>
        //                             <TouchableOpacity>
        //                                 <Stack
        //                                     bg="#FBFCFC"
        //                                     shadow={6}
        //                                     rounded='md'
        //                                     style={{

        //                                         paddingTop: 10,
        //                                         flex: 1,
        //                                     }}
        //                                 >

        //                                     <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
        //                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
        //                                             <View style={{ flexDirection: 'row', }}>
        //                                                 <Feather
        //                                                     name="help-circle"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                                 <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Help Cetre</Text>
        //                                             </View>
        //                                             <View style={{ paddingRight: 20 }}>
        //                                                 <AntDesign
        //                                                     name="caretright"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                             </View>
        //                                         </View>
        //                                     </Flex>
        //                                 </Stack>
        //                             </TouchableOpacity>
        //                             <View style={{ paddingBottom: 10 }}></View>
        //                             <TouchableOpacity>
        //                                 <Stack
        //                                     bg="#FBFCFC"
        //                                     shadow={6}
        //                                     rounded='md'
        //                                     style={{

        //                                         paddingTop: 10,
        //                                         flex: 1,
        //                                     }}
        //                                 >

        //                                     <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 4 }}>
        //                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}>
        //                                             <View style={{ flexDirection: 'row', }}>
        //                                                 <Ionicons
        //                                                     name="ios-settings-outline"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                                 <Text style={{ fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>Settings</Text>
        //                                             </View>
        //                                             <View style={{ paddingRight: 20 }}>
        //                                                 <AntDesign
        //                                                     name="caretright"
        //                                                     size={24}
        //                                                     color="#212F3D"
        //                                                 />
        //                                             </View>
        //                                         </View>
        //                                     </Flex>
        //                                 </Stack>
        //                             </TouchableOpacity>
        //                             <View style={{ paddingBottom: 10 }}></View>
        //                         </View>
        //                     </View>
        //                 </ScrollView>


        //             </Stack>
        //         </View>

        //     </View>

        // </BaseProvider>

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
