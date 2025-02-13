import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import { OnboardingDotParams } from '../../typescheck/onboardingTypesCheck'

type Props = {}

const OnBoardingDots = ({ index, x }: OnboardingDotParams) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions()
    const animatedDotStyles = useAnimatedStyle(() => {
        const widthAni = interpolate(x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH
            ],
            [10, 30, 10],
            Extrapolation.CLAMP
        )
        const opacityAni = interpolate(x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH
            ],
            [1, 2, 1],
            Extrapolation.CLAMP
        )
        return {
            width: widthAni,
            opacity: opacityAni
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
                '#8a14d4',
                '#39d4da',
                '#f14546'
            ]
        )
        return {
            backgroundColor: bg
        }
    })

    return (
        <View>
            <Animated.View style={[styles.dotStyle, animatedDotStyles, colorAni]} />
        </View>
    )
}

export default OnBoardingDots

const styles = StyleSheet.create({
    dotStyle: {
        height: 10,
        marginHorizontal: 10,
        borderRadius: 5
    }
})