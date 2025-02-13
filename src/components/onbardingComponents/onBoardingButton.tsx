import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import { OnboardingButtonParams } from '../../typescheck/onboardingTypesCheck';
import Animated, { interpolateColor, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../nav/rootNav';

interface OnBoardingButton { }

const OnBoardingButton = ({ flatlistIndex, flatlistRef, itemLength, x }: OnboardingButtonParams) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions()
    const buttonAni = useAnimatedStyle(() => {
        return {
            width: flatlistIndex.value === itemLength - 1 ?
                withSpring(140) : withSpring(60),
            height: 60
        }
    })

    const arrowAni = useAnimatedStyle(() => {
        return {
            opacity: flatlistIndex.value === itemLength - 1 ?
                withTiming(0) : withTiming(1),
            width: 30,
            height: 30,
            transform: [
                {
                    translateX: flatlistIndex.value === itemLength - 1 ?
                        withTiming(100) : withTiming(0)
                }
            ]
        }
    })

    const textAni = useAnimatedStyle(() => {
        return {
            opacity: flatlistIndex.value === itemLength - 1 ?
                withTiming(1) : withTiming(0),
            transform: [
                {
                    translateX: flatlistIndex.value === itemLength - 1 ?
                        withTiming(0) : withTiming(100)
                }
            ]
        }
    })

    const colorAni = useAnimatedStyle(() => {
        const bg = interpolateColor(x.value,
            [
                0,
                SCREEN_WIDTH,
                2 * SCREEN_WIDTH
            ],
            [
                '#c80dfc',
                '#250dfc',
                '#251357'
            ]
        )

        return {
            backgroundColor: bg
        }
    })

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (flatlistIndex.value < itemLength - 1) {
                    flatlistRef.current?.scrollToIndex({ index: flatlistIndex.value + 1 })
                } else {
                    navigation.replace("TabsStack", { 'screen': 'Home' })
                }
            }}
        >

            <Animated.View
                style={[styles.container, buttonAni, colorAni]}
            >
                <Animated.Text
                    style={[styles.button, textAni]}
                >
                    Get started
                </Animated.Text>
                <Animated.Image
                    source={require('../../../assets/right-arrow.png')}
                    style={[styles.arrow, arrowAni]}
                >

                </Animated.Image>
            </Animated.View>

        </TouchableWithoutFeedback>
    );
};

export default OnBoardingButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c822fc',
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    button: {
        color: '#f2f2f2',
        fontSize: 20,
        position: 'absolute'
    },
    arrow: {
        position: 'absolute'
    }
});
