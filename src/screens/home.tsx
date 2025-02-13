import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'

type Props = {}

const Home = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
    return (
        <View style={{
            paddingTop: 60
        }}>
            <Text>Home</Text>
        </View>
    )
}

export default Home