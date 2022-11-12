import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const OfferTitle = ({ navigation, route, options }: any) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back-ios" size={18} color={"#000"} />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleStyle}>{options.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("complete")}
      >
        {route.name == "offerTab" && (
          <Icon name="inbox" size={18} color={"#000"} />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OfferTitle;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  titleStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  iconContainer: {
    padding: 10,
  },
});
