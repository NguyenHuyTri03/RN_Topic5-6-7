import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { RootStackScreenProps } from './rootNav'

import AntDesign from '@expo/vector-icons/AntDesign';

import Home from '../screens/home'
import Cart from '../screens/cart'
import Payment from '../screens/paymet'
import Profile from '../screens/profile'

export type TabsStackParams = {
    Home: undefined,
    Cart: undefined,
    Profile: undefined
    Payment: undefined
}

const TabsStack = createBottomTabNavigator<TabsStackParams>()

export type TabsStackScreenProps<T extends keyof TabsStackParams> =
    CompositeScreenProps<BottomTabScreenProps<TabsStackParams, T>, RootStackScreenProps<'TabsStack'>>

const TabNavigation = () => {
    return (
        <TabsStack.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >

            <TabsStack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <AntDesign name="home" size={24} color="#4f4f4f" />
                    ) : (
                        <AntDesign name="home" size={24} color="#f2f2f2" />
                    )
                }}
            />

            <TabsStack.Screen
                name='Cart'
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <AntDesign name="home" size={24} color="#4f4f4f" />
                    ) : (
                        <AntDesign name="home" size={24} color="#f2f2f2" />
                    )
                }}
            />

            <TabsStack.Screen
                name='Payment'
                component={Payment}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <AntDesign name="home" size={24} color="#4f4f4f" />
                    ) : (
                        <AntDesign name="home" size={24} color="#f2f2f2" />
                    )
                }}
            />

            <TabsStack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <AntDesign name="home" size={24} color="#4f4f4f" />
                    ) : (
                        <AntDesign name="home" size={24} color="#f2f2f2" />
                    )
                }}
            />

        </TabsStack.Navigator>
    )
}

export default TabNavigation