import React from "react"
import { StyleSheet } from "react-native"
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackParamList } from "../../navigation";
import { Header } from "../../components/onboarding";

import { Text, Box } from '../../components'


type NavigationProps = StackNavigationProp<OnboardingStackParamList>
const { width } = Dimensions.get('window');


export default function ClassSelect() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Box paddingTop='l' height='100%' backgroundColor='white'>
      <Header onBack={()=>navigation.navigate('Start')}/>

      <Box flex={1} paddingTop='xxl' paddingHorizontal='l'>
        <Box marginBottom={'m'}>
          <Text variant='header'>Welcome</Text>
          <Text variant='subheader'>What best describes you?</Text>
        </Box>
        <Box paddingTop='m' paddingBottom='l'>
          <TouchableOpacity style={[styles.Button, { backgroundColor: "rgba(136,63,255,1)" }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text variant='title' marginBottom={'xs'} color={'white'}>Creator</Text>
            <Text variant='body' color={'white'}>
              Work with brands you care about – and make money doing it!
            </Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text variant='title' marginBottom={'xs'}>Brand</Text>
            <Text variant='body'>
              Reach your core audience with the help of passionate creators
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      {/* <Box style={styles.Signin}>
        <Text >Already have an account? Sign In </Text>
      </Box> */}
    </Box>
  )
}

const styles = StyleSheet.create({
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 22,
    paddingRight: 22,
    marginBottom: 18,
    borderRadius: 12,
    backgroundColor: "rgba(249,245,255,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(136,63,255,1)",
    // alignSelf: 'stretch',
    width: width - 48,

  },
})
