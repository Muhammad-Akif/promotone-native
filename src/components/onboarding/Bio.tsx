import React from "react"
import { Dimensions, KeyboardAvoidingView } from "react-native"
import { auth, createUserDocument } from "../../api/firebase";
import { Button, Box, Text, TextInput } from '../../components'
import { useForm, FormValues } from "../../hooks";
import { ISlideInterface } from "./Slider";

const { width } = Dimensions.get("window");


export default function Bio({onNext} : ISlideInterface) {
  const {handleSubmit, register} = useForm();

  const onSubmit = async (values: FormValues) => {
    try{
      await createUserDocument(auth.currentUser, {bio: values.bio}).then(onNext)
    }catch(e){
      console.log('failed to update bio', e);
    }
  }
  console.log('bio rendering', onNext);
  
  

  return (
    <Box backgroundColor={'white'} height='100%' width={width}>
      <Box flex={1} paddingTop='xl' paddingHorizontal='l'>
        <Box>
          <Text variant='header' textAlign='left'>Your TikTok</Text>
          <Text variant='subheader' textAlign='left'>Connect your TikTok account</Text>
        </Box>
        <KeyboardAvoidingView style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 17,
          paddingBottom: 23,
          alignSelf: 'stretch'
        }}>
          <TextInput
            placeholder={'Your bio'}
            multiline={true}
            numberOfLines={10}
            style={{ height:200, textAlignVertical: 'top',}}
            height={200}
            icon={null}
            {...register('bio', {validator: (bio: string) => (bio.length < 100 && bio.length >=1)})}
          />
        </KeyboardAvoidingView>
      </Box>
      <Box flex={1} justifyContent='flex-end' alignItems='flex-start' paddingHorizontal='l' paddingBottom='l'>
        <Button
          // disabled={!bio.valid}
          variant='primary'
          onPress={handleSubmit(onSubmit)}
          label='Next'
        />
      </Box>
    </Box>
  )
}
