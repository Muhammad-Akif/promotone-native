import React, { useState } from 'react'
import { Keyboard, Dimensions, Image } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import {AntDesign as Icon} from '@expo/vector-icons'
import { OnboardingStackParamList } from "../../navigation";
import { StyleSheet } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"

import { Button, Box, Text, TextInput } from '../../components'

const {width} = Dimensions.get('window');

type NavigationProps = StackNavigationProp<OnboardingStackParamList>

export default function NewOfferDetails() {
    const navigation = useNavigation<NavigationProps>();
    const [platformSelected, setPlatformSelected] = useState("")
    const [numberOfPostsSelected, setNumberOfPostsSelected] = useState(0)
    const [isSendingProduct, setIsSendingProduct] = useState(false)

    return (
        <ScrollView onScrollBeginDrag={() => Keyboard.dismiss()} onScrollEndDrag={() => Keyboard.dismiss()} keyboardShouldPersistTaps='handled' style = {{backgroundColor: 'white'}}>
            <Box paddingTop='l' height='100%' backgroundColor='white'>
                <Box paddingLeft={'l'} paddingTop='xl' width={50}>
                    <TouchableOpacity
                    onPress={() => { navigation.navigate("Start") }}
                    >
                    <Icon
                        size={21}
                        name="left"
                        color='black'
                    />
                    </TouchableOpacity>
                </Box>

                <Box paddingTop='xl'>
                    <Text color='headerGrey' fontSize={18} fontWeight='600' paddingLeft='m'>Platform</Text>
                    <Box paddingTop='m' paddingHorizontal='m' paddingBottom='l' style={styles.platformPicker}>
                        <TouchableOpacity style={platformSelected == "instagram" ? [styles.Button, styles.ButtonSelected] : [styles.Button, styles.ButtonUnselected] } onPress={()=>setPlatformSelected("instagram")}>
                            {/* <Image style = {styles.buttonImageIG} source={require('../../../assets/Instagram.png')}/> */}
                            <Text color='headerGrey' variant='title' style={{paddingTop: 10}}>Instagram</Text>
                            <Text color='headerGrey' variant='body' style={{paddingBottom: 10}}>
                                Great for photos and videos
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={platformSelected == "tiktok" ? [styles.Button, styles.ButtonSelected] : [styles.Button, styles.ButtonUnselected] } onPress={()=>setPlatformSelected("tiktok")}>
                            {/* <Image style = {styles.buttonImageTikTok} source={require('../../../assets/Instagram.png')}/> */}
                            <Text color='headerGrey' variant='title' style={{paddingTop: 7}}>TikTok</Text>
                            <Text color='headerGrey' variant='body' style={{paddingBottom: 10}}>
                                Great for video content
                            </Text>
                        </TouchableOpacity>
                    </Box>

                    <Text color='headerGrey' fontSize={18} fontWeight='600' paddingTop='m' paddingLeft='m'>Number of Posts</Text>
                    <Box paddingTop='m' paddingHorizontal='m' paddingBottom='l' style={styles.numberOfPostsContainer}>
                        <TouchableOpacity style={numberOfPostsSelected == 1 ? [styles.numberOfPostsButton, styles.ButtonSelected]: styles.numberOfPostsButton} onPress={()=>setNumberOfPostsSelected(1)}>
                            <Text color='headerGrey' variant='title'>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={numberOfPostsSelected == 2 ? [styles.numberOfPostsButton, styles.ButtonSelected]: styles.numberOfPostsButton} onPress={()=>setNumberOfPostsSelected(2)}>
                            <Text color='headerGrey' variant='title'>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={numberOfPostsSelected == 3 ? [styles.numberOfPostsButton, styles.ButtonSelected]: styles.numberOfPostsButton} onPress={()=>setNumberOfPostsSelected(3)}>
                            <Text color='headerGrey' variant='title'>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={numberOfPostsSelected == 4 ? [styles.numberOfPostsButton, styles.ButtonSelected]: styles.numberOfPostsButton} onPress={()=>setNumberOfPostsSelected(4)}>
                            <Text color='headerGrey' variant='title'>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={numberOfPostsSelected == 5 ? [styles.numberOfPostsButton, styles.ButtonSelected]: styles.numberOfPostsButton} onPress={()=>setNumberOfPostsSelected(5)}>
                            <Text color='headerGrey' variant='title'>5</Text>
                        </TouchableOpacity>
                    </Box>

                    <Text color='headerGrey' fontSize={18} fontWeight='600' paddingTop='m' paddingLeft='m'>Overall Budget</Text>
                    <Box paddingTop='m' paddingHorizontal='m' paddingBottom='l'>
                        <Box style = {styles.textInputContainer}>
                            {/* <Text style={styles.prefix}>$</Text> */}
                            <TextInput
                                noBorder={true}
                                placeholder={'$100'}
                                placeholderTextColor='#848484'
                                autoCapitalize={'none'}
                                keyboardType = 'number-pad'
                                autoCorrect={false}
                                style={styles.budgetInput}
                                maxLength={5}
                            />
                        </Box>
                    </Box>

                    <Text color='headerGrey' fontSize={18} fontWeight='600' paddingTop='m' paddingLeft='m'>Sending Product</Text>
                    <Box paddingTop='m' paddingHorizontal='m' paddingBottom='l' style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.sendingProductButton, isSendingProduct ? styles.ButtonSelected : styles.ButtonUnselected]} onPress={()=>setIsSendingProduct(true)}>
                            <Text color='headerGrey' variant='title' style={{alignSelf: 'center'}}>Yes</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.sendingProductButton, !isSendingProduct ? styles.ButtonSelected : styles.ButtonUnselected]} onPress={()=>setIsSendingProduct(false)}>
                        <Text color='headerGrey' variant='title' style={{alignSelf: 'center'}}>No</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
                <TouchableOpacity style={styles.doneButton}>
                    <Text style={{color:'white', alignSelf: 'center'}} variant='title'>Done</Text>
                </TouchableOpacity>
            </Box>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 20,
    borderRadius: 10,
    height: 140,
    width: 170
  },
  ButtonSelected: {
    backgroundColor: "#E3D2FF",
  },
  ButtonUnselected: {
    backgroundColor: "#F7F6F7",
  },
  platformPicker: {
    flexDirection: 'row',
    display: 'flex',
    width: width - 48
  },
  buttonImageIG: {
    height: 40,
    width: 40,
    marginBottom: 0
  },
  buttonImageTikTok: {
    height: 25.88,
    width: 22,
    marginBottom: 8
  },
  numberOfPostsContainer: {
    flexDirection: 'row',
    width: width - 48,
  },
  numberOfPostsButton: {
    backgroundColor: "#F7F6F7",
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    display: 'flex',
    // flexDirection: 'row', 
    width: '25%', 
    borderRadius: 10, 
    backgroundColor:'#F7F6F7', 
    alignItems: 'center', 
    overflow: 'visible'
  },
  budgetInput: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: '700',
    color: '#515151',
    fontSize: 16,
    borderRadius: 0
  },
  prefix: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: '700',
    fontSize: 16,
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  sendingProductButton: {
    backgroundColor: '#F7F6F7',
    borderRadius: 10,
    height: 40,
    width: 80,
    marginRight: 15,
    justifyContent: 'center',
  },
  doneButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 35,
    width: 350,
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 10,
  }

})