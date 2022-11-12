import React, { useRef } from "react"
import { OnboardingStackParamList } from "../../navigation";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import {Box} from '../../components'

import {Header, Slider, TikTok, TikTokConfirm, Bio, Location, Interests} from '../../components/onboarding'
import { ISlideInterface } from "../../components/onboarding/Slider";


type NavigationProps = StackNavigationProp<OnboardingStackParamList>


export default function Onboarding() {
    const navigation = useNavigation<NavigationProps>();
    const sliderRef = useRef<ISlideInterface>(null);
    const onBack = () => {
        if (sliderRef.current?.onBack)
        sliderRef.current.onBack()
    }
    const  onFinished= () =>{
        navigation.navigate("Profile")
    }

    const onExited = () =>{
        navigation.navigate('Register');
    }

    return (
        <Box paddingTop='l' backgroundColor={'white'} height='100%'>
            <Header onBack={onBack}/>
            <Slider ref={sliderRef} showDots onFinished={onFinished} onExited={onExited} >
                <TikTok/>
                <TikTokConfirm/>
                <Bio/>
                <Location/>
                <Interests/>
            </Slider>
        </Box >
    )
}
