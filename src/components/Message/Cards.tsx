import { View, Text, Image } from 'react-native';
import { StyleSheet } from "react-native"

interface Props {
    url: any;
    name: String;
    desc: String;
    count: any;
    time: String;
}

const Cards = (props: Props) => {
        let { url, time, name, desc, count } = props
        return (
            <View style={styles.Container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: url,
                    }}
                />
                <View style={{ position: 'absolute', left: 55, bottom: 8, width: 10, height: 10, backgroundColor: "#74D866", borderRadius: 50 }} />
                <View style={styles.text}>
                    <View style={styles.Row}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 }}>{name}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{ time }</Text>
                    </View>
                    <View style={styles.Desc}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', lineHeight: 18, color: "#5E5958" }}>{ desc }</Text>
                        <Text style={styles.count}>{count}</Text>
                    </View>
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    Container: {
        margin: 10,
        paddingHorizontal: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative"
    },
    text: {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        marginTop: 10
    },
    count: {
        textAlign: "center",
        width: 18,
        height: 18,
        borderRadius: 50,
        backgroundColor: '#A020F0',
        color: '#eeee',
        fontSize: 12,
        marginLeft: 4,
        marginTop: -5
    },
    Row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    Desc: {
        flexDirection: "row",
        marginHorizontal: 10,
        justifyContent: "space-between",
        paddingTop: 6,
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
