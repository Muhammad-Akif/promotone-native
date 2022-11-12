import { Alert, FlatList, RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Button, Box, BottomModal } from "../../components";
import OfferDetailCard from "./components/OfferDetailCard";
import OfferButton from "./components/OfferButton";
import { updatePostState } from "../../api/firebase";

const OfferRequestScreen = ({ ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);

  const handleOnCancel = () => {
    setModalVisible(true);
  };
  const handleOnNO = () => {
    // handleOnNo();
    setModalVisible(false);
  };
  useEffect(() => {
    setData(props.route.params?.data);
  }, []);
  const handleOnDecline = async () => {
    await updatePostState(data, 6);
    setModalVisible(false);
    props.navigation.goBack();
  };
  const handleOnAccept = async () => {
   setLoading(true)
    try {
      await updatePostState(data, 3);
      Alert.alert("Offer Accepted !");
      setModalVisible(false);
      props.navigation.goBack();
    } catch (err) {
      Alert.alert("Error on accepting the offer! Please try again later");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box backgroundColor={"white"} flex={1} style={styles.rootContainer}>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <OfferDetailCard
          {...data}
          subHeader={`${data.name} is waiting for you to accept their offfer !`}
        />
        <BottomModal
          visible={modalVisible}
          handleOnNo={handleOnNO}
          handleOnYes={handleOnDecline}
          title={`Decline ${data.name}'s offer ?`}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <OfferButton title="Accept" onPress={handleOnAccept} colorFill />
        <OfferButton title={`Decline`} onPress={handleOnCancel} />
      </View>
    </Box>
  );
};

export default OfferRequestScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
  },
});
