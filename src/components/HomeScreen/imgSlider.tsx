import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import { useInterval } from '../../Hooks/useIntervals';

interface ImageProps {
    images: string[]
}

const MaxWidth = Dimensions.get('screen').width
const ImageSlider = ({ images }: ImageProps) => {
    const animation = React.useRef(new Animated.Value(0))
    const [currentImage, setCurrentImage] = React.useState(0)
    const handleAni = () => {
        let newCurrImg = currentImage + 1
        if (newCurrImg >= images.length) {
            newCurrImg = currentImage * 0
        }
        Animated.spring(animation.current, {
            toValue: -(Dimensions.get('screen').width * newCurrImg),
            useNativeDriver: true
        }).start()
        setCurrentImage(newCurrImg)
    }

    useInterval(() => handleAni(), 3000)


    return (
        <>
            <View style={styles.container}>
                <Animated.View style={[styles.container, { transform: [{ translateX: animation.current }] }]}>
                    {
                        images.map(image => (
                            <Image key={image} source={{ uri: image }} style={styles.image} />
                        ))
                    }
                </Animated.View>

                <View style={styles.indicatorContainer}>
                    {
                        images.map((image, index) => (
                            <View key={`${image}_${index}`}
                                style={[styles.indicator, index === currentImage ? styles.activeIndicator : undefined]}
                            />
                        ))
                    }
                </View>
            </View>
        </>
    );
};

export default ImageSlider;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3e3e3e'
    },
    image: {
        height: 200,
        width: Dimensions.get('screen').width,
        resizeMode: 'contain',
        borderWidth: 7,
        borderColor: 'white'
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: MaxWidth,
        bottom: 0,
        zIndex: 2
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: '#E73C37',
        borderWidth: 1,
        marginHorizontal: 3,
        marginBottom: 0,
        backgroundColor: '#eee'
    },
    activeIndicator: {
        backgroundColor: '#B73C37'
    }
});
