import React, { useRef, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import Home from './Home'
import Auth from './Auth'
import History from '../screens/Driver/HistoryScreen'
import Profile from '../screens/ProfileScreen'

//User
import MyParcel from './User/MyParcel';
import PackageHistoryScreen from '../screens/User/PackageHistoryScreen';
import PackageHistory from './User/PackageHistory'
//Driver
import MyHome from './Driver/MyHome';


//Header
import HeaderParcel from '../components/Header/User/HeaderParcel';
import ProfileScreen from '../screens/ProfileScreen';

import { Fragment } from 'react';
import { width } from 'styled-system';
const Tab = createBottomTabNavigator();




const TabButton = (props) => {
    // const { route } = route.props;


    const { id, item, onPress, accessibilityState } = props
    const focused = accessibilityState.selected
    const viewRef = useRef(null)



    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <item.type name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#1A5276' : '#D4E6F1'} size={24} />
            <Text style={{ color: focused ? '#1A5276' : '#D4E6F1', fontSize: 9, paddingTop: 5 }}>{item.label}</Text>
        </TouchableOpacity>
    )

}




function TabMenu(props) {

    // //User
    // console.log('TabMenu', props.route.params)
     let TabArr = [];
    // if (props.route.params.role === "User") {
    //     TabArr = [
    //         { id: 1, route: 'MyParcel', label: 'My Parcel', type: Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: MyParcel },
    //         { id: 4, route: 'ProfileScreen', label: 'PROFILE', type: FontAwesome, activeIcon: 'user-circle-o', inActiveIcon: 'user-circle', component: ProfileScreen },
    //         { id: 3, route: 'PackageHistory', label: 'Package History', type: Ionicons, activeIcon: 'newspaper', inActiveIcon: 'newspaper-outline', component: PackageHistory },

    //     ];
    // } else {
    //     //Driver
    //     TabArr = [
    //         { id: 4, route: 'Account', label: 'Account', type: FontAwesome, activeIcon: 'user-circle-o', inActiveIcon: 'user-circle', component: ProfileScreen },
    //         { id: 1, route: 'Home', label: 'Home', type: Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: MyHome },

    //         { id: 3, route: 'PackageHistory', label: 'Package History', type: Ionicons, activeIcon: 'newspaper', inActiveIcon: 'newspaper-outline', component: PackageHistory },
    //     ];
    // }


    TabArr = [
        { id: 1, route: 'MyParcel', label: 'My Parcel', type: Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: MyParcel },
        { id: 4, route: 'ProfileScreen', label: 'PROFILE', type: FontAwesome, activeIcon: 'user-circle-o', inActiveIcon: 'user-circle', component: ProfileScreen },
        { id: 3, route: 'PackageHistory', label: 'Package History', type: Ionicons, activeIcon: 'newspaper', inActiveIcon: 'newspaper-outline', component: PackageHistory },

    ];





    console.log('TabMenu', props)

    return (


        <Tab.Navigator

            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 10,
                    right: 5,
                    left: 5,
                    borderRadius: 20,
                    backgroundColor: '#F4F6F6',

                }


            }}

        >

            {TabArr.map((item, index) => {
                return (

                    <Tab.Screen name={item.route} component={item.component} key={item.id}
                        options={{
                            headerShown: false,
                            // header: (props) => {
                            //     return (
                            //         item.header ? <item.header {...props}/> : <View></View>
                            //     )
                            // },
                            // tabBarIcon: ({ color, focused }) => (
                            //     <Fragment>
                            //         <item.type key={item.id} name={focused ? item.activeIcon : item.inActiveIcon} color={item.color} size={24} />

                            //     </Fragment>
                            // ),
                            tabBarButton: (props) => <TabButton {...props} item={item} />


                        }}
                    ></Tab.Screen>
                )
            })}

        </Tab.Navigator>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabMenu
