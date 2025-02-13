import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { OnboardingPaginationParams } from '../../typescheck/onboardingTypesCheck';
import OnBoardingDots from './onBoardingDots';

interface OnBoardingPagination { }

const OnBoardingPagination = ({ item, x }: OnboardingPaginationParams) => {
    return (
        <View style={styles.container}>
            {item.map((_, index) => {
                return <OnBoardingDots index={index} x={x} key={index} />
            })}
        </View>
    );
};

export default OnBoardingPagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    }
});
