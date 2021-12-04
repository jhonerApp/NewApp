import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HeaderSuccess(props) {


    return (
        <View style={{
            height: 150,
            width: props.layout.width,
            backgroundColor: "#17A589",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            flexDirection: 'column',
        }}>
            <View style={{ paddingBottom: 30, justifyContent: 'flex-start', flexDirection: 'column', paddingTop: 25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                    <View style={{ paddingLeft: 30 }}>
                        <TouchableOpacity>
                            <Ionicons
                                name="ios-close"
                                size={30}
                                color={props.color}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingRight: 40 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 25 }}>{props.title}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HeaderSuccess
