import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../nav/tabNav'
import HeaderComponent from '../components/HeaderComponents/header'
import ImageSlider from '../components/HomeScreen/imgSlider'

type Props = {}

const Home = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
    const gotoCart = () => {
        navigation.navigate('Cart')
    }

    const sliderImages = [
        'https://files.worldwildlife.org/wwfcmsprod/images/Brown_Bear_/story_full_width/3box0qwlkk_brownbear_hero.jpg',
        'https://i.natgeofe.com/k/e444dfeb-d4cd-4bc5-8f8d-003883039447/Fur_Polar-Bear_KIDS_0223-crop_3x2.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG'
    ]

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent gotoCart={gotoCart} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#efg' }}>
                <ImageSlider images={sliderImages} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        flex: 1,
        backgroundColor: "#3e3e3e"
    }
})