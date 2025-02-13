import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'
import HeaderComponent from '../components/HeaderComponents/header'

type Props = {}

const Cart = ({ navigation, route }: TabsStackScreenProps<"Cart">) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent />
        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        flex: 1,
        backgroundColor: "#3e3e3e"
    }
})
