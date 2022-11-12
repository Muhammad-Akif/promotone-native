import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { StyleSheet } from "react-native"

const Header = () => {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.Container}>
                <Octicons name="three-bars" size={24} color="black" />
                <FontAwesome name="user-o" size={24} color="black" />
                <Feather name="message-square" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
        width: "60%",
        height: 100,
    },
})
export default Header