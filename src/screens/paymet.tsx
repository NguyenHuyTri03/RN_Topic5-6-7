import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'

type Props = {}

const Payment = ({ navigation, route }: TabsStackScreenProps<"Payment">) => {
    return (
        <View style={{
            paddingTop: 60
        }}>
            <Text>Payment</Text>
        </View>
    )
}

export default Payment