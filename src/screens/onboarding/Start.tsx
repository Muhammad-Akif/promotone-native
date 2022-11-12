import React from "react"
import { OnboardingStackParamList } from "../../navigation";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import { Button, Text, Box } from '../../components'

type NavigationProps = StackNavigationProp<OnboardingStackParamList>

export default function Start() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Box backgroundColor='white' >
      <Box paddingTop='xxl' height='75%' alignItems={'center'}>
        <Text variant="logo">Promotone.</Text>
        <Box justifyContent={'center'} flex={1}>
        <Image source={require('../../../assets/start.png')} style={{width: 425, height:215}}/>
        </Box>
      </Box>
      <Box justifyContent="flex-end" height='25%'>
        <Box paddingHorizontal='l' height={247}>
          <Button variant="primary"
            onPress={() => { navigation.navigate("ClassSelect") }}
            label="Get Started"
          />
          <Button variant="outline"
            onPress={() => { navigation.navigate("Signin") }}
            label="Sign In"
          />
        </Box>
      </Box>
    </Box>
  )
}
