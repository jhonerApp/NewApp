import React from 'react'

import { View, Text, } from 'react-native';
import {

    FontAwesome
} from '@expo/vector-icons';

import {
    Icon,
    Input,
} from 'native-base';


function HeaderHistory(props) {
    console.log('HeaderParcel', props)

    return (
        <View style={{
            height: 230,
            width: props.layout.width,
            backgroundColor: "#212F3D",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            flexDirection: 'column',
            paddingTop: 40
        }} >
            <View style={{ paddingBottom: 20 }}>
                <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', textAlign: 'center', fontSize: 27, paddingTop: 40, paddingBottom: 12 }}>Package History</Text>
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

export default HeaderHistory
