import React from 'react'
import { Fragment } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import BackButton from '../BackButton'

function Index(props) {

    const { parentStyle, mainStyle } = props
    console.log('Index', props)
    return (
        <View style={{
            height: 150,
            width: props.layout.width,
            backgroundColor: "#212F3D",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            flexDirection: 'column',
        }} {...mainStyle}>
            <View style={{ paddingBottom: 30, justifyContent: 'flex-start', flexDirection: 'column' }} {...parentStyle}>
                {props.isBack ?
                    <Fragment>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                            <View>
                                <BackButton style={{ paddingLeft: 30 }} navigate={props} isBack={true} color={props.color} />
                            </View>
                            <View style={{ paddingRight: 40 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 25 }}>{props.title}</Text>
                            </View>
                        </View>
                    </Fragment>
                    :
                    <Fragment>
                        <View style={{ alignItems: 'center', paddingTop: 20 }}>
                            <View style={{ margin: 20, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 25 }}>{props.title}</Text>
                            </View>
                        </View>
                    </Fragment>
                }

            </View>
        </View>
    )
}

export default Index
