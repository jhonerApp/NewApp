import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome
} from '@expo/vector-icons';


import {
  Icon,
  Input,
} from 'native-base';

import TabMenu from './src/navigation/Tabmenu'
import DeliveryScreen from './src/screens/Driver/DeliveryScreen'
// import DeliveryStatusScreen from './src/screens/Driver/DeliveryStatusScreen'
import HistoryDetailsScreen from './src/screens/HistoryDetailsScreen'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Header from './src/components/Header'
import HeaderSuccess from './src/components/Header/User/HeaderSuccess';

import Onboarding from './src/screens/Main/Onboarding';
import DeliveryReceiptScreen from './src/screens/User/DeliveryReceiptScreen';
//User
import PackageHistoryScreen from './src/screens/User/PackageHistoryScreen';
import HeaderHistory from './src/components/Header/User/HeaderHistory';

import BaseProvider from './src/components/BaseProvider';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { Fragment } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stacks = createStackNavigator();






//initialRouteName='DeliveryScreen' 
export default function App() {

  const [screenPage, setScreenPage] = useState('Onboarding');


  const checkOnboard = async () => {
    try {
      const value = await AsyncStorage.getItem('@onBoardingStatus')

      if (value) {
        setScreenPage('LoginScreen')
      }

    } catch (e) {
      console.log('Error', e)
    }
  }

  useEffect(() => {
    checkOnboard()
  }, [])


  let [loadFonts] = useFonts({
    'Montserrat-Black': require('./assets/Montserrat/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-ExtraLight': require('./assets/Montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-Italic': require('./assets/Montserrat/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/Montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/Montserrat/Montserrat-Thin.ttf'),
  });

  if (!loadFonts) {
    return null
  }

  return (
    //initialRouteName='CreateDeliveryScreen'
    //initialRouteName={screenPage}

    //DeliveryReceiptScreen
    <Fragment>
      <BaseProvider>
        <NavigationContainer>
          <Stacks.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} initialRouteName='DeliveryReceiptScreen'>
            <Stacks.Screen name="TabMenu" component={TabMenu} options={{ headerShown: false }} />
            <Stacks.Group screenOptions={{ presentation: 'modal' }}>
              <Stacks.Screen name="Onboarding" component={Onboarding} options={{
                headerShown: false,
              }}
              />
              <Stacks.Screen name="HistoryDetailsScreen" component={HistoryDetailsScreen} options={{
                headerShown: false,
              }}
              />
              <Stacks.Screen name="DeliveryReceiptScreen" component={DeliveryReceiptScreen} options={{
                header: (props) => <HeaderSuccess {...props} title="PARCEL CREATED"  color="#FBFCFC" />
              }}
              />
              <Stacks.Screen name="LoginScreen" component={LoginScreen} options={{
                headerShown: false,
              }}
              />
              <Stacks.Screen name="RegisterScreen" component={RegisterScreen} options={{
                header: (props) => <Header {...props} title="Create Account" isBack={true} color="#FBFCFC" parentStyle={{ style: styles.headerParentRgister }} mainStyle={{ style: styles.headerMainRgister }} />
              }}
              />
            </Stacks.Group>
          </Stacks.Navigator>
        </NavigationContainer >
      </BaseProvider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  headerParentRgister: {
    paddingTop: 10
  },
  headerMainRgister: {
    backgroundColor: '#273746',
    height: 120,
  },
 
})
