import React, { useState } from "react"
import { Dimensions } from "react-native"
import { auth, createUserDocument} from "../../api/firebase";
import { Box, Text, Button, TextInput } from '../../components'
import {useForm, FormValues} from '../../hooks'
import { ISlideInterface } from "./Slider";

const { width } = Dimensions.get("window");

export default function TikTok({onNext}: ISlideInterface) {
  const {handleSubmit, register} = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormValues) => {
    setLoading(false);
    try{
      await createUserDocument(auth.currentUser, {tikTokUsername: values.tikTok}).then(onNext);
    }catch(e){
      console.log('failed to update tiktok', e);
    }
  }

  return (
    <Box backgroundColor={'white'} height='100%' width={width}>
      <Box flex={1} paddingTop='xl' paddingHorizontal='l'>
        <Box>
          <Text variant='header' textAlign='left'>Your TikTok</Text>
          <Text variant='subheader' textAlign='left'>Connect your TikTok account</Text>
        </Box>
        <Box paddingTop='m' paddingBottom='l'>
          <Box marginBottom='m' borderColor='black'>
            <TextInput
              placeholder={'Username'}
              autoCapitalize={'none'}
              autoCorrect={false}
              icon='at-sign'
              {...register('tikTok', {validator: (name) => (name.length >= 4)})}
            />
          </Box>
        </Box>
      </Box>
      <Box flex={1} justifyContent='flex-end' alignItems='flex-start' paddingHorizontal='l' paddingBottom='l'>
        <Button
          // disabled={!username.valid}
          variant='primary'
          onPress={()=>{setLoading(true);setTimeout(handleSubmit(onSubmit),1500)}}
          label='Next'
          loading={loading}
        />
      </Box>
    </Box>
  )
}