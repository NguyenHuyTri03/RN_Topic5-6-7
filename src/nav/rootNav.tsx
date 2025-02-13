import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboardingScreen';



export type RootStackParams = {
    OnboardingScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>()
export type RootStackScreenProps<T extends keyof RootStackParams> = NativeStackScreenProps<RootStackParams, T>

interface RootNav { }

const RootNav = (props: RootNav) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name='OnboardingScreen'
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};

export default RootNav;

const styles = StyleSheet.create({
    container: {}
});
