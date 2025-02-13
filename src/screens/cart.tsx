import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'

type Props = {}

const Cart = ({ navigation, route }: TabsStackScreenProps<"Cart">) => {
    return (
        <View style={{
            paddingTop: 60
        }}>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart