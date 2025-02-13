import * as React from 'react';
import { Text, View, StyleSheet, ViewToken } from 'react-native';
import { RootStackScreenProps } from '../nav/rootNav';
import { OnboardingData } from '../data/data';
import { OnboardingPrograms } from '../typescheck/onboardingTypesCheck';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import OnboardingItems from '../components/onbardingComponents/onboarding';
import OnBoardingPagination from '../components/onbardingComponents/onBoardingPagination';
import OnBoardingButton from '../components/onbardingComponents/onBoardingButton';

interface OnboardingScreen { }

const OnboardingScreen = ({ navigation, route }: RootStackScreenProps<'OnboardingScreen'>) => {
    const [onboardItems, setOnboardingItems] = React.useState<OnboardingPrograms[]>(OnboardingData)
    const x = useSharedValue(0)
    const flatlistRef = useAnimatedRef<FlatList<OnboardingPrograms>>()
    const flatlistIndex = useSharedValue(0)
    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x
        }
    })
    const onViewableItemsChanged = ({
        viewableItems
    }: {
        viewableItems: ViewToken[]
    }) => {
        if (viewableItems[0].index !== null) {
            flatlistIndex.value = viewableItems[0].index
        }
    }

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatlistRef}
                onScroll={onScrollHandler}
                data={onboardItems}
                renderItem={({ item, index }) => (
                    <OnboardingItems item={item} index={index} x={x} />
                )}
                keyExtractor={item => item._id}
                scrollEventThrottle={17}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                // onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    minimumViewTime: 300,
                    viewAreaCoveragePercentThreshold: 10
                }}
            />

            <View style={styles.dotPagination} >
                <OnBoardingPagination item={onboardItems} x={x} />

                <OnBoardingButton
                    x={x}
                    itemLength={onboardItems.length}
                    flatlistRef={flatlistRef}
                    flatlistIndex={flatlistIndex}
                />
            </View>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },

    dotPagination: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 30
    }
});