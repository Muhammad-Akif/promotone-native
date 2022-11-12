import { View, Text, Image } from 'react-native';
import { StyleSheet } from "react-native"

const Cards
    = () => {
        return (
            <View style={styles.Container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwMmhYVWs0DXTql_YO1a7VqfYaUYrlNkg4fibqVeXyQ&s',
                    }}
                />
                <View style={styles.text}>
                    <View style={styles.Row}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 }}>Frodo</Text>
                        <Text >23:22</Text>
                    </View>
                    <Text style={{ fontSize: 14,paddingTop: 5, fontWeight: '400', paddingHorizontal: 10 }}>A red sun rises, blood has been spilled this night.</Text>
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    Container: {
        margin: 10,
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
    },
    Row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    logo: {
        width: 55,
        height: 55,
        borderRadius: 50
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
export default Cards
