import React, { Fragment } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Input, Icon, Text } from 'native-base'


//Utils
import BackButton from '../../components/BackButton';

import HomeScreen from '../../screens/Driver/HomeScreen';
import DeliveryScreen from '../../screens/Driver/DeliveryScreen';
<<<<<<< HEAD
import DeliveryStatusScreen from '../../screens/Driver/DeliveryStatusScreen'
import Header from '../../components/Header'
=======
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc


const Stack = createStackNavigator();

const ForDelivery = (props) => {
    console.log('ForDelivery props', props)
    return (
        <Fragment>
            <View style={styles.buttonDesign}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryScreen')}
                    style={{ backgroundColor: '#2C3E50', borderRadius: 40, width: 45, height: 45, paddingHorizontal: 10, paddingTop: 10 }}>
                    <Feather
                        name="bell"
                        size={24}
                        color="#FDFEFE"
                        style={{ width: 50 }}

                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

function MyHome(props) {
    return (
<<<<<<< HEAD
        <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
=======
        <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} initialRouteName='DeliveryScreen'>
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerRight: () => <ForDelivery {...props} />,
                    headerTitle: '',
                    headerTransparent: true,
                }} />

                <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
<<<<<<< HEAD
                    header: (props) => {
                        return (
                            <View style={{
                                height: 230,
=======
                    headerMode: 'float',
                    header: (props) => {
                        return (
                            <View style={{
                                height: 240,
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
                                width: props.layout.width,
                                backgroundColor: "#212F3D",
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                flexDirection: 'column',

                            }} >

<<<<<<< HEAD
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                                    <View>
                                        <BackButton style={{ paddingLeft: 20 }} navigate={props} isBack={true} color="#FBFCFC" />
                                    </View>

                                </View>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        paddingRight: 30,
                                        paddingLeft: 30,
                                        paddingBottom: 10,
                                        top: 10
                                    }}
                                >
                                    <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 25, padding: 15 }}>Delivery List</Text>
                                    </View>
=======
                                <View style={{ flexDirection: 'column', paddingTop: 50 }}>
                                    <View>
                                        <BackButton style={{ paddingLeft: 20 }} navigate={props} isBack={true} color="#FBFCFC" />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'center', paddingTop: 20,
                                        paddingBottom: 50

                                    }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 30, padding: 15 }}>Delivery List</Text>
                                    </View>
                                </View>


                                {/* <View style={{ paddingBottom: 5, flexDirection: 'column' }}>
                                    <View style={{ paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                                        <BackButton style={{ paddingLeft: 20 }} navigate={props} isBack={true} color="#FBFCFC" />
                                    </View>
                                    <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 40 }}>Delivery List</Text>
                                        </View>
                                    </View>
                                </View> */}

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        paddingRight: 30,
                                        paddingLeft: 30,
                                        paddingBottom: 10
                                    }}
                                >
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
                                    <Input
                                        placeholder="Search for location"
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
                />
<<<<<<< HEAD

                <Stack.Screen name="DeliveryStatusScreen" component={DeliveryStatusScreen} options={{
                    header: (props) => <Header {...props} title="For Delivery" isBack={true} color="#FBFCFC" />
                }} 
                />
=======
>>>>>>> 5d93500a93d6b2c84daf426ab2fbdaf342cee5dc
            </Stack.Group>
        </Stack.Navigator>
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

export default MyHome