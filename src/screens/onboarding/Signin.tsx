import React, { useState } from "react"
import { OnboardingStackParamList } from "../../navigation";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Button, TextInput, DismissKeyboardBox } from '../../components'
import { auth } from "../../api/firebase";
import { useForm, FormValues } from '../../hooks'
import { Image } from 'react-native'
import { Header } from '../../components/onboarding';
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProps = StackNavigationProp<OnboardingStackParamList>


export default function Signin() {
  const { handleSubmit, clear, register } = useForm();
  const [error, setError] = useState(false);

  const onSubmit = async (values: FormValues) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password).then(() => console.log('logged in', auth.currentUser?.email))
    } catch (e) {
      clear()
      setError(true);
      console.log('login failed');
    }
  }

  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <DismissKeyboardBox height='100%'>
        <Header onBack={() => navigation.navigate('Start')} />
        <Box flex={0.75} justifyContent={'center'} paddingTop='xl' paddingHorizontal='l'>
          {error &&
            <Box  alignItems={'center'} borderColor='danger' borderWidth={1} borderRadius='s' 
                  backgroundColor={'dangerBG'} paddingVertical='xs' marginHorizontal={'m'} marginBottom='m'>
              <Text variant='subheader' color={'danger'}>Incorrect Email or Password</Text>
            </Box>
          }
          <Box>
            <Text variant='header'>Sign In</Text>
            <Text variant='subheader'>Welcome back to Promotone</Text>
          </Box>
          <Box paddingTop='m' paddingBottom='l'>
            <Box marginBottom='m' borderColor='black'>
              <Box marginBottom='s'>
                {/* <Text variant={'body'}>Email</Text> */}
                <TextInput
                  textStyle={{ variant: 'textInput' }}
                  placeholder={'Email Address'}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  autoComplete={'email'}
                  icon='mail'
                  {...register('email')}
                />
              </Box>
              <Box marginBottom='s'>
              {/* <Text variant={'body'}>Password</Text> */}
                <TextInput
                  textStyle={{ variant: 'textInput' }}
                  placeholder={'Password'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  autoComplete={'password'}
                  icon='lock'
                  secureTextEntry
                  {...register('password')}
                />
              </Box>
              <Box marginBottom={'s'}>
                <Text variant={'body'} color={'logo'}>Forgot Password?</Text>
              </Box>
              <Button variant='primary'
                // disabled={!(email.valid && password.valid)}
                onPress={handleSubmit(onSubmit)}
                label='Continue with Email'
              />
            </Box>
            {/* <Box marginBottom='m' flexDirection='row' alignItems='center'>
              <Box borderWidth={1} borderColor='black' flex={1} height={1} />
              <Text variant='subheader' marginHorizontal={'m'}>OR</Text>
              <Box borderWidth={1} borderColor='black' flex={1} height={1} />
            </Box>
            <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} borderWidth={2} borderRadius={'m'} height={50}>
              <Image source={require('../../../assets/google-logo.png')} style={{ width: 30, height: 30 }} />
              <Text variant={'button_outline'} marginLeft={'m'}>Sign in with Google</Text>
            </Box> */}
          </Box>
        </Box>
        <>{/* <Box style={styles.Signup}>
        <Text>Dont have an account? Sign Up </Text>
        </Box> */}</>
      </DismissKeyboardBox>
    </SafeAreaView>

  )
}