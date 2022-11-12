import { View, Text } from 'react-native';
import { StyleSheet } from "react-native"

const Tabs = () => {
  return (
    <View style = {styles.Container}>
        <Text style = {styles.Inbox}>Inbox</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10}}>Requests</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingBottom: 10
    },
    Inbox: {
        fontSize: 16, 
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderBottomColor: '#A020F0',
        borderBottomWidth: 2
    }
})
export default Tabs