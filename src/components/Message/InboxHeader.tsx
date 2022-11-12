import { AntDesign } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native"
import Constants from 'expo-constants';

const Header = () => {
  return (
    <View style={styles.Container}>
      <AntDesign name="search1" size={24} color="black" style={{ transform: [{ rotateY: '180deg' }] }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Message</Text>
      <AntDesign name="setting" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    borderRadius: 10,
    height: 50,
    marginTop: Constants.statusBarHeight,
  },
})
export default Header