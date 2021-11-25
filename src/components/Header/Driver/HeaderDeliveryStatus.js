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


function HeaderDeliveryStatus(props) {
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
            </View>
        </View>
    )
}

export default HeaderDeliveryStatus
