import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 as Icon } from "@expo/vector-icons";
import { formatDistance } from "date-fns";
interface OfferListingCardInterface {
  title: string;
  price: number;
  productProvided: boolean;
  desc: string;
  time: number;
  type: string;
  creatorConfirmed: boolean;
  brandConfirmed: boolean;
  posts: any;
  createdAt: any;
  profilePhoto: any;
  name: string;
  subHeader: string;
  state: number;
  userPhoto: string;
}
const OfferDetailCard = ({
  profilePhoto,
  title = "Title",
  price,
  productProvided,
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laboriosam natus doloribus laudantium, illo dignissimos asperiores optio quasi libero placeat maiores praesentium totam quas dicta quae error consectetur, distinctio magni.",
  createdAt = { seconds: 10 },
  type = "null",
  creatorConfirmed,
  brandConfirmed = false,
  posts,
  name,
  subHeader,
  state,
  userPhoto,
}: OfferListingCardInterface) => {
  let timeCalc = () => {
    let time = formatDistance(createdAt.seconds, new Date(), {
      includeSeconds: true,
    });
    return time;
  };
  return (
    <View style={styles.rootContainer}>
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
          {/* <View style={styles.time}> */}
          <Text style={styles.timeText}>{timeCalc()}</Text>
          {/* </View> */}
        </View>
        <TouchableOpacity style={styles.messageContainer}>
          <Text style={styles.messageText}>Message</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.contentDesc}>
          <Text style={styles.descText}>{desc}</Text>
        </View>
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
      </View>

      <Text style={[styles.title, { alignSelf: "center", paddingTop: 20 }]}>
        {subHeader}
      </Text>
    </View>
  );
};

export default OfferDetailCard;

export const InProgressLogoSymbols = ({
  state,
  userPhoto,
  profilePhoto,
}: any) => {
  return (
    <View style={styles.brandVerifiedContainer}>
      <ImageBackground
        source={{ uri: userPhoto }}
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
      <Image
        source={
          state == 4.5
            ? require("../../../../assets/completeDot.png")
            : state == 4
            ? require("../../../../assets/semiCompleteDot.png")
            : require("../../../../assets/singleDot.png")
        }
        style={[styles.dotStyle, state == 4 && { opacity: 1 }]}
        resizeMode={"contain"}
      />
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
  );
};

interface TagsProps {
  iconName: any,
  label: string
}

const Tags = ({ iconName, label }: TagsProps) => {
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
        style={{ height: 15, width: 15 }}
        resizeMode={"contain"}
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
    padding: 20,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoContainer: {
    flex: 1.6,
    overflow: "hidden",
    justifyContent: "center",
  },
  logoStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  ContentContainer: {
    flex: 5,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  contentDesc: {},
  descText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#3e3e3e",
    maxHeight: 180,
    overflow: "hidden",
    lineHeight: 15,
    marginVertical: 10,
  },
  descTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  time: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  timeText: {
    color: "#3e3e3e",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    marginLeft: 10,
  },
  brandVerifiedContainer: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  indivBrand: {
    opacity: 0.8,
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  messageContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c6c6c6c6",
    flex: 3,
    borderRadius: 5,
  },
  messageText: {
    color: "#3e3e3e",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
  dotStyle: {
    height: 50,
    width: 160,
    marginHorizontal: 10,
  },
});
