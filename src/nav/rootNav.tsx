import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboardingScreen';
import TabNavigation, { TabsStackParams } from './tabNav';
import { NavigatorScreenParams } from '@react-navigation/native';



export type RootStackParams = {
    OnboardingScreen: undefined,
    TabsStack: NavigatorScreenParams<TabsStackParams>
}

const RootStack = createNativeStackNavigator<RootStackParams>()
export type RootStackScreenProps<T extends keyof RootStackParams> = NativeStackScreenProps<RootStackParams, T>

interface RootNav { }

const RootNav = (props: RootNav) => {
    return (
        <RootStack.Navigator>
            {/* <RootStack.Screen
                name='OnboardingScreen'
                component={OnboardingScreen}
                options={{ headerShown: false }}
            /> */}

            <RootStack.Screen
                name="TabsStack"
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />
        </RootStack.Navigator>
    );
};

export default RootNav;

const styles = StyleSheet.create({
    container: {}
});
