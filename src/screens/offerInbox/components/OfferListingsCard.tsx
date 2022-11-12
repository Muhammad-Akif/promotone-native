import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { formatDistance } from "date-fns";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

interface OfferListingCardInterface {
  logo: string;
  title: string;
  price: number;
  productProvided: boolean;
  desc: string;
  createdAt: any;
  type: string;
  creatorConfirmed: boolean;
  brandVerified: boolean;
  onPress: any;
  numPosts: number;
  posts: any;
  profilePhoto: string;
  name: string;
  state: number;
}
const OfferListingsCard = ({
  logo = require("../../../../assets/icon.png"),
  title,
  price = 150,
  productProvided = true,
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laboriosam natus doloribus laudantium, illo dignissimos asperiores optio quasi libero placeat maiores praesentium totam quas dicta quae error consectetur, distinctio magni.",
  createdAt = { seconds: 10 },
  type,
  creatorConfirmed = true,
  onPress,
  posts,
  profilePhoto,
  name,
  //userPhoto,
  state,
}: OfferListingCardInterface) => {
  let timeCalc = () => {
    let time = formatDistance(new Date(createdAt.seconds), new Date(), {
      addSuffix: true,
      includeSeconds: true,
    });
    return time;
  };
  return (
    <Pressable style={styles.rootContainer} onPress={onPress}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: profilePhoto }}
            style={styles.logoStyle}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.ContentContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.descTags}>
            {price && (
              <Tags
                iconName={require("../../../../assets/money-bag.png")}
                label={`$${price}`}
              />
            )}
            {productProvided && (
              <Tags
                iconName={require("../../../../assets/box.png")}
                label={`Product Provided`}
              />
            )}
            {posts?.length > 0 &&
              posts.map((item: any) => (
                <Tags
                  iconName={{ uri: item.image }}
                  label={`${item.quantity} ${item.contentType}`}
                />
              ))}
          </View>
          <View style={styles.contentDesc}>
            <Text style={styles.descText}>{desc}</Text>
          </View>
          {type == "INPROGRESS" && (
            <View style={styles.brandVerifiedContainer}>
              <ImageBackground
                source={{ uri: profilePhoto }}
                style={[styles.indivBrand, state == 4 && { opacity: 1 }]}
                resizeMode={"cover"}
              >
                {state == 4 && (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "purple",
                        opacity: 0.5,
                        position: "absolute",
                      }}
                    />
                    <AntDesign name={"check"} size={25} color={"white"} />
                  </View>
                )}
              </ImageBackground>
              
              <ImageBackground
                source={{ uri: profilePhoto }}
                style={[styles.indivBrand, state == 4.5 && { opacity: 1 }]}
                resizeMode={"cover"}
              >
                {state == 4.5 && (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "purple",
                        opacity: 0.5,
                        position: "absolute",
                      }}
                    />
                    <AntDesign name={"check"} size={25} color={"white"} />
                  </View>
                )}
              </ImageBackground>
            </View>
          )}
        </View>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>{timeCalc()}</Text>
      </View>
    </Pressable>
  );
};

export default OfferListingsCard;

interface TagProps {
  iconName: any,
  label: string
}

const Tags = ({ iconName, label } : TagProps) => {
  return (
    <View
      style={{
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderColor: "#b5b5b5",
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
        marginTop: 8,
      }}
    >
      <Image
        source={iconName}
        defaultSource={require("../../../../assets/icon.png")}
        style={{ height: 15, width: 15 }}
        resizeMode={"cover"}
      />
      <Text
        style={{ marginLeft: 10, fontSize: 11, fontFamily: "Poppins-Regular" }}
      >
        {label}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
    padding: 20,
    borderBottomColor: "#c5c5c5",
    borderBottomWidth: 0.5,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
  },
  logoContainer: {
    flex: 1,
    overflow: "hidden",
    paddingRight: 20,
  },
  logoStyle: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
  },
  ContentContainer: {
    flex: 7,
    marginRight: 10,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    paddingRight: 50,
  },
  contentDesc: {},
  descText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#3e3e3e",
    maxHeight: 180,
    overflow: "hidden",
  },
  descTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  time: {
    position: "absolute",
    right: 20,
    top: 25,
  },
  timeText: {
    color: "#3e3e3e",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
  brandVerifiedContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  indivBrand: {
    marginRight: 10,
    opacity: 0.5,
    height: 35,
    width: 35,
    borderRadius: 17.5,
    overflow: "hidden",
  },

});
