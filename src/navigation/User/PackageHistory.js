import React, { Fragment } from 'react'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import PackageHistoryScreen from '../../screens/User/PackageHistoryScreen';
import HeaderHistory from '../../components/Header/User/HeaderHistory';

const Stack = createStackNavigator();

function PackageHistory(props) {
    return (
        <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="PackageHistoryScreen" component={PackageHistoryScreen} options={{
                    headerShown: true,
                    header: (props) => <HeaderHistory {...props} title="Create Delivery" isBack={true} color="#FBFCFC" />
                }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}


export default PackageHistory
