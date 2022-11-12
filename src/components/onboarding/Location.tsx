import React from "react"
import { Dimensions } from "react-native"
import { auth, createUserDocument } from "../../api/firebase";
import { Box, Text, Button, TextInput } from '../../components'
import { useForm, FormValues} from "../../hooks";
import { ISlideInterface } from "./Slider";

const { width } = Dimensions.get("window");

export default function Location({onNext} : ISlideInterface) {
  const {handleSubmit, register} = useForm();

  const onSubmit = async (values: FormValues) => {
    try{
      await createUserDocument(auth.currentUser, {location: {city: values.city, state: values.state}}).then(onNext);
    }catch(e){
        console.log('failed to update location', e);
    }
  }

  return (
    <Box backgroundColor={'white'} height='100%' width={width}>
      <Box flex={1} paddingTop='xl' paddingHorizontal='l'>
        <Box>
          <Text variant='header' textAlign='left'>Your Location</Text>
          <Text variant='subheader' textAlign='left'>This helps PromoTone reccomend you local brands and relevant content</Text>
        </Box>
        <Box paddingTop='m' paddingBottom='l'>
          <Box marginBottom='m' borderColor='black'>
            <TextInput
              placeholder={'City'}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'email'}
              icon='map-pin'
              {...register('city')}
            />
          </Box>
          <Box marginBottom='m' borderColor='black'>
            <TextInput
              placeholder={'State/Provence'}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'email'}
              icon='map-pin'
              {...register('state')}
            />
          </Box>
        </Box>
      </Box>
      <Box flex={1} justifyContent='flex-end' alignItems='flex-start' paddingHorizontal='l' paddingBottom='l'>
        <Button
          //disabled={!(city.valid, state.valid)}
          variant='primary'
          onPress={handleSubmit(onSubmit)}
          label='Next'
        />
      </Box>
    </Box>
  )
}