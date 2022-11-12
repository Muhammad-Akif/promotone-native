import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Box } from "../../components";
import OfferListingsCard from "./components/OfferListingsCard";
import { getPosts } from "../../api/firebase";
import { EvilIcons } from "@expo/vector-icons";

const OfferCompleteScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPosts = async () => {
    let allPosts: any = await getPosts();
    let allOutgoingPosts = allPosts.filter((item: any) => item.state == 5);
    setPosts(allOutgoingPosts);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getAllPosts();
  }, []);

  return (
    <Box backgroundColor={"white"} flex={1} style={styles.rootContainer}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={getAllPosts} refreshing={loading} />
        }
        data={posts?.length > 0 ? posts : []}
        renderItem={({ item }: any) => {
          return <OfferListingsCard {...item} />;
        }}
      />
      {posts?.length == 0 && (
        <View
          style={{
            height: "30%",
            width: "100%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.5,
          }}
        >
          <EvilIcons name="exclamation" size={40} color={"gray"} />
          <Text style={styles.noPost}>No posts </Text>
        </View>
      )}
    </Box>
  );
};

export default OfferCompleteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 10,
  },
  noPost: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "gray",
  },
});
