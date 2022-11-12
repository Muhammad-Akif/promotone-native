import React from "react"
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";


interface dotProps {
    index: number,
    currentIndex: Animated.SharedValue<number>
}

const Dot = ({ index, currentIndex }: dotProps) => {

    const style = useAnimatedStyle(() => {

        const opacity = interpolate(currentIndex.value,
            [index - 1, index, index + 1],
            [0.3, 1.0, 0.3],
            Extrapolate.CLAMP
        )
        const scale = interpolate(currentIndex.value,
            [index - 1, index, index + 1],
            [9, 17, 9],
            Extrapolate.CLAMP
        )
        return {
            width: scale,
            height: scale,
            backgroundColor: '#883FFF',
            borderRadius: scale / 2,
            marginRight: 10,
            opacity: opacity,
        }

    })

    return (
        <Animated.View style={style}>
        </Animated.View>
    )
}

export default Dot