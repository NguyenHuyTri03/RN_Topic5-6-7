import * as React from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import GoBack from "./backBtn";

interface IHeaderParams {
    gotoPrev?: () => void,
    search?: () => void,
    cartLen?: number,
    gotoCart?: () => void
}

const HeaderComponent = ({ gotoPrev, search, cartLen, gotoCart }: IHeaderParams) => {
    const [searchInput, setSearchInput] = React.useState('')

    return (
        <View style={styles.container}>
            <GoBack onPress={gotoPrev} />

            <Pressable style={styles.btnView}>
                <Pressable style={{ padding: 10 }} onPress={search}>
                    <FontAwesome name="search" size={24} color="#E73C37" />
                </Pressable>
                <TextInput value={searchInput} onChangeText={setSearchInput} placeholder="search for sth" />
            </Pressable>

            <Pressable onPress={gotoCart}>
                <View>
                    <Text style={{ color: '#E73C37' }}>
                        {cartLen}
                    </Text>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#f2f2f2'
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        gap: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        height: 60,
    }
})


export default HeaderComponent