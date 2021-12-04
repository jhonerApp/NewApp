import React, { Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MyParcelScreen from '../../screens/User/MyParcelScreen'
import CreateDeliveryScreen from '../../screens/User/CreateDeliveryScreen'
import PackageHistoryScreen from '../../screens/User/PackageHistoryScreen';


import Header from '../../components/Header'
import HeaderParcel from '../../components/Header/User/HeaderParcel';
import HeaderHistory from '../../components/Header/User/HeaderHistory';

import BaseProvider from '../../components/BaseProvider';
import { NavigationContainer } from '@react-navigation/native'

import { Feather, Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();


function MyParcel(props) {
    return (
        <Fragment>
            <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="MyParcelScreen" component={MyParcelScreen} options={{
                        headerShown: true,
                        header: (props) => <HeaderParcel {...props} />
                    }} />
                    <Stack.Screen name="CreateDeliveryScreen" component={CreateDeliveryScreen} options={{
                        headerShown: true,
                        header: (props) => <Header {...props} title="Create Delivery" isBack={true} color="#FBFCFC" />
                    }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    buttonDesign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingTop: 7
    },
})
export default MyParcel
