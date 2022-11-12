import React from "react"
import { Image, Dimensions } from "react-native"
const {width} = Dimensions.get("window");
import {Box, Button, Text} from '..';
import {ISlideInterface} from './Slider'

export default function TikTokConfirm({onNext, onBack}: ISlideInterface) {
  
  return (
    <Box backgroundColor={'white'} height='100%' width={width}>
      <Box flex={1} paddingTop='xl'>
        <Box paddingHorizontal='l' marginBottom={'l'}>
          <Text variant='header' textAlign='left'>Confirm Profile</Text>
          <Text variant='subheader' textAlign='left'>Is this you?</Text>
        </Box>
        <Box paddingHorizontal='l' paddingTop='m' paddingBottom='l' flexDirection='row' justifyContent={'center'}>
          {/* <Image
            style={{
              width: 94.16,
              height: 90,
              marginRight: 18,
              borderRadius: 94.16/2,
          }}
            source={require('../../../assets/profile.jpeg')}
          /> */}
          <Box justifyContent={'center'}>
            <Text variant='title' textAlign='left'>Noodly Boy</Text>
            <Text variant='body'  textAlign='left'>@noodly.boi</Text>
          </Box>
        </Box>
        <Box flexDirection='row' justifyContent='space-between' paddingVertical='s' paddingHorizontal='l' alignItems='center' 
            borderBottomWidth={0.5} borderColor='black'>
          <Text variant='title'>Followers</Text>
          <Text variant='subheader'>42</Text>
        </Box>
        <Box flexDirection='row' justifyContent='space-between' paddingVertical='s' paddingHorizontal='l' alignItems='center' 
            borderBottomWidth={0.5} borderColor='black'>
          <Text variant='title'>Engagement</Text>
          <Text variant='subheader'>0%</Text>
        </Box>
        <Box flexDirection='row' justifyContent='space-between' paddingVertical='s' paddingHorizontal='l' alignItems='center' 
            borderBottomWidth={0.5} borderColor='black'>
          <Text variant='title'>Likes</Text>
          <Text variant='subheader'>0</Text>
        </Box>
      </Box>
      <Box justifyContent='flex-end' alignItems='flex-start' flex={1} paddingBottom='l' paddingHorizontal='l'>
            <Button variant='primary'
              onPress={onNext}
              label="That's me!"
            />

            <Button variant='outline'
              onPress={onBack}
              label='No, try again'
            />
      </Box>
    </Box>
  )
}
