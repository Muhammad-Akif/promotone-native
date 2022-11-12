import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Box, BottomModal } from "../../components";
import OfferDetailCard, {
  InProgressLogoSymbols,
} from "./components/OfferDetailCard";
import OfferButton from "./components/OfferButton";
import { updatePostState } from "../../api/firebase";

const OfferRequestScreen = ({ ...props }) => {
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(props.route.params?.data);
  }, []);
  const handleOnComplete = async () => {
    setLoading(true);
    try {
      await updatePostState(data, 4);
      Alert.alert("Offer Completed !");
      props.navigation.goBack();
    } catch (err) {
      Alert.alert("Error on complete! Please try again later");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box backgroundColor={"white"} flex={1} style={styles.rootContainer}>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <OfferDetailCard
          {...data}
          subHeader={
            data.state == 3
              ? `${data.name} is waiting for you to complete the offer !`
              : `${data.name} needs to confirm the offer !`
          }
          type={"INPROGRESS"}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <InProgressLogoSymbols {...data} />
        <OfferButton
          title={
            data.state == 3 ? `Mark as complete` : `Waiting for ${data.name}`
          }
          onPress={handleOnComplete}
          colorFill={data.state == 3 && true}
          outline={data.state == 4 && true}
        />
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
    bottom: 60,
    width: "100%",
  },
});
