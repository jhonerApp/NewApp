import React from 'react'

import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import {
    MaterialIcons,
    FontAwesome
} from '@expo/vector-icons';

import {
    Icon,
    Input,
} from 'native-base';


function HeaderParcel(props) {
    console.log('HeaderParcel', props)

    return (
        <View style={{
            height: 230,
            width: props.layout.width,
            backgroundColor: "#212F3D",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            flexDirection: 'column',
        }} >
            <View style={{ paddingBottom: 5, flexDirection: 'column' }}>
                <View style={{ paddingLeft: 20, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20, paddingTop: 30 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('CreateDeliveryScreen', props.navigate)}
                        style={{ backgroundColor: '#1A5276', borderRadius: 10, width: 35, height: 35, paddingHorizontal: 7, paddingTop: 7 }}>
                        <MaterialIcons
                            name="add-box"
                            size={20}
                            color="#FDFEFE"
                            style={{ width: 50 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', }}>

                    <View style={{ margin: 20, alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white' }}>Track your delivery</Text>
                        <Text style={{ fontFamily: 'Montserrat-Light', color: 'white' }}>Enter your track number</Text>
                        <Text style={{ fontFamily: 'Montserrat-Light', color: 'white' }}> to search your parcel</Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingRight: 30,
                    paddingLeft: 30,
                    paddingBottom: 10
                }}
            >
                <Input
                    placeholder="Search for delivery"
                    fontSize="14"
                    width="100%"
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name="search" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                />

            </View>
        </View>
    )
}

export default HeaderParcel
