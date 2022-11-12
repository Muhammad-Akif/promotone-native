import React from "react"
import { OnboardingStackParamList } from "../../navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Button, TextInput } from '../../components'
import { auth, createUserDocument } from '../../api/firebase'
import {useForm, FormValues} from '../../hooks'
import { Header } from '../../components/onboarding'

type NavigationProps = StackNavigationProp<OnboardingStackParamList>


export default function RegisterForm() {
  const navigation = useNavigation<NavigationProps>();
  const {handleSubmit, register} = useForm();

  const onSubmit = (values: FormValues) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user?.email);
        createUserDocument(user, {
          displayName: values.name
        })
          .then(() => {
            console.log('updated name: ', auth.currentUser?.displayName);
            navigation.navigate("Onboarding")
          })
      })
      .catch(error => {
        if (error.code == 'auth/email-already-in-use') {
          console.log('email in use');
        } else {
          alert(error.code);
        }
      })
    console.log(values);
  }

  return (
    <Box paddingTop='l' backgroundColor={'white'} height='100%'>
      <Header onBack={()=>navigation.navigate('Register')}/>
      <Box flex={1} paddingTop='xl' paddingHorizontal='l'>
        <Box>
          <Text variant='header'>Create an Account</Text>
          <Text variant='subheader'>Welcome to Promotone</Text>
        </Box>
        <Box paddingTop='m' paddingBottom='l'>
          <Box marginBottom='s'>
            <TextInput
              icon='user'
              autoCapitalize={'none'}
              autoCorrect={false}
              autoComplete={'name'}
              placeholder={'Name'}
              {...register('name', {validator: (name)=>(name.length >= 4)})}
            />
          </Box>
          <Box marginBottom='s'>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              autoComplete={'email'}
              icon='mail'
              placeholder={'Email'}
              {...register('email', { validator:
                  (email)=>((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email))
                }
              )}
            />
          </Box>
          <Box marginBottom='s'>
            <TextInput
              placeholder={'Password'}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoComplete={'password'}
              icon='lock'
              secureTextEntry
              {...register('password', {validator: (password)=>(password.length >= 6)})}
            />
          </Box>
          <Button variant='primary'
            onPress={handleSubmit(onSubmit)}
            label='Sign Up'
          />
        </Box>
      </Box>
      {/* <Box paddingTop='m' paddingBottom='l' flexDirection='row' justifyContent='center' alignItems='center'>
        <Text>Dont have an account? Sign Up </Text>
      </Box> */}
    </Box>
  )
}
