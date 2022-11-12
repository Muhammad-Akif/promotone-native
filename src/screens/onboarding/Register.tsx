import React from "react"
import { Image} from "react-native"
import { OnboardingStackParamList } from "../../navigation";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/onboarding";

import {Text, Button, Box} from '../../components'

type NavigationProps = StackNavigationProp<OnboardingStackParamList>


export default function Register() {
    const navigation = useNavigation<NavigationProps>();
  return (
    <Box paddingTop='l' height='100%' backgroundColor='white'>
      <Header onBack={()=>navigation.navigate('ClassSelect')}/>
      <Box flex={1} paddingTop='xl' paddingHorizontal='l'>
        <Box>
          <Text variant='header'>Let's get started</Text>
          <Text variant='subheader'>Welcome to Promotone</Text>
        </Box>
        <Box paddingTop='m' paddingBottom='l'>
        <Box marginBottom='m' borderColor='black'>
            <Button variant='primary'
                onPress={()=>{navigation.navigate("RegisterForm")}}
                label='Sign up with Email'
            />
          </Box>
          <Box marginBottom='m' flexDirection='row' alignItems='center'>
            <Box borderWidth={1} borderColor='black' flex={1} height={1} />
            <Text variant='subheader' marginHorizontal={'m'}>OR</Text>
            <Box borderWidth={1} borderColor='black' flex={1} height={1} />
          </Box>
          <Box>
            <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} borderWidth={2} borderRadius={'m'} height={50}>
              <Image source={require('../../../assets/google-logo.png')} style={{width: 30, height: 30}}/>
              <Text variant={'button_outline'} marginLeft={'m'}>Sign up with Google</Text>
            </Box>
            {/* <Button variant='secondary' label='Some OAuth option'/>
            <Button variant='secondary' label='Some OAuth option'/> */}
          </Box>
        </Box>
      </Box>
      {/* <Box style={styles.Signup}>
        <Text>Dont have an account? Sign Up </Text>
      </Box> */}
    </Box>
  )
}
