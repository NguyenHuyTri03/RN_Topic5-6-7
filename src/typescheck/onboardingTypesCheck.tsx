import { AnimatedRef, SharedValue } from 'react-native-reanimated'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export interface OnboardingPrograms {
    _id: string,
    text: string,
    textColor: string,
    bgColor: string,
    imgUrl: string
}

export interface OnboardingItemsObj {
    item: OnboardingPrograms,
    index: number,
    x: SharedValue<number>
}

export interface OnboardingPaginationParams {
    item: OnboardingPrograms[],
    x: SharedValue<number>
}

export interface OnboardingDotParams {
    index: number,
    x: SharedValue<number>
}

export interface OnboardingButtonParams {
    flatlistIndex: SharedValue<number>,
    flatlistRef: AnimatedRef<FlatList<OnboardingPrograms>>,
    itemLength: number,
    x: SharedValue<number>
}
