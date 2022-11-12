import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  title?: string,
  colorFill?: boolean,
  onPress: ()=>void,
  outline?: boolean
}

// const defaultProps = {
//   title: "Button",
//   colorFill: false,
//   onPress: ()=>{},
//   outline: false
// }


const OfferButton = ({
  title = "Button",
  colorFill = false,
  onPress,
  outline,
} : Props) => {
  
  return (
    <TouchableOpacity
      style={[
        styles.rootContainer,
        colorFill && { backgroundColor: "#CEAFFF" },
        outline && {
          borderWidth: 2,
          borderColor: "#4F1AA6",
          backgroundColor: "transparent",
        },
      ]}
      onPress={onPress}
      disabled={outline}
    >
      <Text
        style={[
          styles.title,
          colorFill && { color: "#4F1AA6" },
          outline && { color: "#4F1AA6" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OfferButton;

const styles = StyleSheet.create({
  rootContainer: {
    width: "85%",
    height: 35,
    borderRadius: 10,
    backgroundColor: "#dfdfdf",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    alignSelf: "center",
    color: "#4a4a4a",
  },
});
