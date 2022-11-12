import { View, Text } from 'react-native';
import { StyleSheet, TouchableOpacity } from "react-native"

interface Props {
  isInbox: any;
  setInbox: any;
}

const Tabs = (props: Props) => {
  let { isInbox, setInbox } = props
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={isInbox ? styles.Active : styles.NotActive}
        onPress={() => setInbox(true)}
      >
        <Text>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={!isInbox ? styles.Active : styles.NotActive}
        onPress={() => setInbox(false)}
      >
        <Text>Requests</Text>
      </TouchableOpacity>
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
  NotActive: {
    fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10
  },
  Active: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderBottomColor: '#A020F0',
    borderBottomWidth: 2
  }
})
export default Tabs