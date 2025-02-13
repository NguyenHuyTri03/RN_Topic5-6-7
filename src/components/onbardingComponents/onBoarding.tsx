import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { OnboardingItemsObj } from '../../typescheck/onboardingTypesCheck';
import LottieView from 'lottie-react-native';

type Props = {}

const OnboardingItems = ({ item, index, x }: OnboardingItemsObj) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions()
    const circleAni = useAnimatedStyle(() => {
        const scale = interpolate(x.value, [
            (index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH
        ],
            [1, 4, 4],
            Extrapolation.CLAMP)
        return {
            transform: [{ scale: scale }]
        }
    })

    const lottieAni = useAnimatedStyle(() => {
        const translatey = interpolate(
            x.value, [
            (index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH
        ],
            [1, 1, 1],
            Extrapolation.CLAMP
        )
        return {
            transform: [{ translateY: translatey }]
        }
    })

    return (
        <View style={{
            flex: 1,
            width: SCREEN_WIDTH,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 60,
            marginBottom: 120,
            backgroundColor: '#f2f2f2'
        }} >
            <View style={styles.circularContainer}>
                <Animated.View
                    style={[{
                        flex: 1,
                        width: SCREEN_WIDTH * .95,
                        height: SCREEN_WIDTH * .7,
                        backgroundColor: item.bgColor,
                        borderRadius: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}
                >
                    <Animated.View style={[lottieAni]}>
                        <LottieView
                            source={item.imgUrl}
                            style={{
                                width: SCREEN_WIDTH * 0.8,
                                height: SCREEN_WIDTH * 0.8
                            }}
                            autoPlay
                        />
                    </Animated.View>
                </Animated.View>

                <Text
                    style={{
                        color: item.textColor,
                        fontSize: 40,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginHorizontal: 'auto',
                    }}
                >
                    {item.text}
                </Text>
            </View>
        </View>
    );
};

export default OnboardingItems;

const styles = StyleSheet.create({
    circularContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
