import {
  Alert,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Text, Button, Box, BottomModal } from "../../components";
import OfferDetailCard from "./components/OfferDetailCard";
import OfferButton from "./components/OfferButton";
import { getPosts, updatePostState } from "../../api/firebase";

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
    setLoading(true);
    try {
      await updatePostState(data, 7);
      Alert.alert("Offer Declined !");
      setModalVisible(false);
      props.navigation.goBack();
    } catch (err) {
      Alert.alert("Error on decline! Please try again later");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box backgroundColor={"white"} flex={1} style={styles.rootContainer}>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <OfferDetailCard
          {...data}
          subHeader={`${data.name} has received your offer proposal !`}
        />
        <BottomModal
          visible={modalVisible}
          handleOnNo={handleOnNO}
          handleOnYes={handleOnDecline} title={""}        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <OfferButton title="Cancel Offer" onPress={handleOnCancel} outline={undefined} />
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
