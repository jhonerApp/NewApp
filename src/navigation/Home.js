import React, { Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Driver/HomeScreen'
import DeliveryScreen from '../screens/Driver/DeliveryScreen'

import { Feather, Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();



function ButtonM(props) {
    return (
        <Fragment>
            <View style={styles.buttonDesign}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryScreen', props.navigate)}
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
    );
}


function Home(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerRight: () => <ButtonM {...props} />,
                headerTitle: '',
                headerTransparent: true,
            }} />
            <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
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
            />
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
export default Home
