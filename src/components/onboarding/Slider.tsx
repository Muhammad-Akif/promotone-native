import React, {forwardRef, useImperativeHandle} from "react"
import { StyleSheet, Dimensions } from "react-native"
import Animated, { useAnimatedRef, useDerivedValue, useSharedValue, scrollTo, useAnimatedScrollHandler} from "react-native-reanimated";
import Dot from './Dot'

const { width } = Dimensions.get("window");

export interface ISlideInterface {
    onNext?: ()=>void
    onBack?: ()=>void
}

interface Props {
    children: JSX.Element[]
    showDots?: boolean
    onFinished: ()=>void
    onExited:()=>void
}

const Slider = forwardRef<ISlideInterface, Props>(({ children, showDots, onExited, onFinished }: Props, ref) => {
    const sRef = useAnimatedRef<Animated.ScrollView>();
    const index = useSharedValue(0);
    const currentIndex = useSharedValue(0);

    useDerivedValue(() => { scrollTo(sRef, index.value * width, 0, true) })
    const onNext = () => {
        if (index.value == React.Children.count(children)-1) return onFinished();
        index.value = (index.value + 1);
    }
    const onBack = () => {
        if (index.value == 0) return onExited();
        index.value = index.value - 1
    };
    const scrollHandler = useAnimatedScrollHandler((event) => {
        currentIndex.value = event.contentOffset.x / width;
    })
    children = React.Children.map(children, (child: React.ReactElement<ISlideInterface>) => (
        React.cloneElement(child, { ...child.props, onBack, onNext })
    ))

    useImperativeHandle(ref, () => ({
        onBack,
        onNext,
    }))

    return (
        <>
            {showDots &&
                <Animated.View style={styles.progress}>
                    {children.map((_, index) => (
                        <Dot key={index} index={index} currentIndex={currentIndex} />
                    ))}
                </Animated.View>
            }
            <Animated.ScrollView
                style={styles.animatedView}
                horizontal
                decelerationRate={'fast'}
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={scrollHandler}
                scrollEventThrottle={1}
                scrollEnabled={false}
                ref={sRef}
            >
                {children}
            </Animated.ScrollView>
        </>
    )
});

const styles = StyleSheet.create({
    animatedView: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    progress: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 17,
        alignSelf: 'stretch',
    },
})

export default Slider;
