import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'

type Props = {}

const Profile = ({ navigation, route }: TabsStackScreenProps<"Profile">) => {
    return (
        <View style={{
            paddingTop: 60
        }}>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile