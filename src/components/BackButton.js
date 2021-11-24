import React, { Fragment } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import {
    Ionicons,
} from '@expo/vector-icons';

function BackButton(props) {

    return (
        <Fragment>
            <View {...props}>
                <TouchableOpacity onPress={(props.isBack) ? () => props.navigate.navigation.goBack() : props.navigatePage}>
                    <Ionicons
                        name="caret-back-outline"
                        size={24}
                        color={props.color}
                    />
                </TouchableOpacity>
               
            </View>
        </Fragment>
    )
}

export default BackButton
