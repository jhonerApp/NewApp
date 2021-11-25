import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
import DeliveryStatusScreen from './src/screens/DeliveryStatusScreen'
import HistoryDetailsScreen from './src/screens/HistoryDetailsScreen'


//User
import PackageHistoryScreen from './src/screens/User/PackageHistoryScreen';
import HeaderHistory from './src/components/Header/User/HeaderHistory';

import BaseProvider from './src/components/BaseProvider';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
const Stacks = createStackNavigator();





//initialRouteName='DeliveryScreen' 
export default function App() {

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
    //initialRouteName='DeliveryScreen'
    <BaseProvider>
      <NavigationContainer>
        <Stacks.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} >
          <Stacks.Screen name="TabMenu" component={TabMenu} options={{ headerShown: false }} />
          <Stacks.Group screenOptions={{ presentation: 'modal' }}>
            {/* <Stacks.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
              headerMode: 'float',
              header: (props) => {
                return (
                  <View style={{
                    height: 240,
                    width: props.layout.width,
                    backgroundColor: "#212F3D",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    flexDirection: 'column',

                  }} >
                    <View style={{ paddingBottom: 5, flexDirection: 'column' }}>
                      <View style={{ paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, paddingTop: 40 }}>
                        <TouchableOpacity
                          style={{ backgroundColor: '#1A5276', borderRadius: 10, width: 35, height: 35, paddingHorizontal: 7, paddingTop: 7 }}>
                          <Ionicons
                            name="caret-back-circle"
                            size={20}
                            color="#FDFEFE"
                            style={{ width: 50 }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
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
              },
            }}
            /> */}
            <Stacks.Screen name="DeliveryStatusScreen" component={DeliveryStatusScreen} options={{
              headerShown: false,
            }}
            />
            <Stacks.Screen name="HistoryDetailsScreen" component={HistoryDetailsScreen} options={{
              headerShown: false,
            }}
            />
            {/* <Stacks.Screen name="PackageHistoryScreen" component={PackageHistoryScreen} options={{
              headerShown: true,
              // header: (props) => <HeaderHistory {...props} title="Create Delivery" isBack={true} color="#FBFCFC" />
            }}
            /> */}
            {/* <Stacks.Screen name="CreateDeliveryScreen" component={CreateDelivery} options={{
              header: (props) => <Header {...props} title="Create Delivery" isBack={true} color="#FBFCFC" />
            }}
            /> */}
          </Stacks.Group>
        </Stacks.Navigator>
      </NavigationContainer >
    </BaseProvider>
  );
}

