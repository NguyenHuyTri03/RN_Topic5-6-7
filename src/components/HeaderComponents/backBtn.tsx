import { View, Text, Pressable } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';

export interface iGoBack {
    onPress?: () => void
}

const GoBack = ({ onPress }: iGoBack) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name="return-up-back" size={24} color="black" />
        </Pressable>
    )
}

export default GoBack