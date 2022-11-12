import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import OfferButton from "../screens/offerInbox/components/OfferButton";

interface BottomModalInterface {
  title: string;
  handleOnYes: () => void;
  handleOnNo: any;
  visible: boolean;
}
const BottomModal = ({
  title = "Cancel offer ?",
  handleOnYes,
  handleOnNo,
  visible = true,
}: BottomModalInterface) => {
  let onDeleteOffer = () => {
    // handleOnYes();
  };
  const onCancel = () => {
    handleOnNo();
  };
  return (
    <View style={styles.rootContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          handleOnNo();
        }}
      >
        <View style={styles.rootContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <OfferButton
              colorFill
              title="Yes,decline the offer"
              onPress={handleOnYes}
            />
            <OfferButton title="No" onPress={onCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 60,
  },
});

export default BottomModal;
