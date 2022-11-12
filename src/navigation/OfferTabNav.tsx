import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import {
  OfferRequestScreen,
  OfferPendingScreen,
  OfferCompleteScreen,
  OfferInProgress,
  OfferRequestDetailScreen,
  OfferIncomingDetailScreen,
  OfferProgressDetailScreen,
} from "../screens/offerInbox";
import { createStackNavigator } from "@react-navigation/stack";
import OfferTitle from "../screens/offerInbox/components/OfferTitle";

const Tab = createMaterialTopTabNavigator();
const StackNav = createStackNavigator();
function TabWithHeader() {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: true,
        header: ({ navigation, route, options }) => (
          <OfferTitle navigation={navigation} route={route} options={options} />
        ),
      }}
      initialRouteName={"offerTab"}
    >
      <StackNav.Screen
        component={OfferTabNav}
        name={"offerTab"}
        options={{ title: "Offer Inbox" }}
      />
      <StackNav.Screen
        component={OfferCompleteScreen}
        name={"complete"}
        options={{ title: "Completed Offers" }}
      />
      <StackNav.Screen
        component={OfferRequestDetailScreen}
        name={"offerDetail"}
        options={{ title: "Offer" }}
      />
      <StackNav.Screen
        component={OfferIncomingDetailScreen}
        name={"offerIncoming"}
        options={{ title: "Offer" }}
      />
      <StackNav.Screen
        component={OfferProgressDetailScreen}
        name={"offerProgress"}
        options={{ title: "Offer" }}
      />
    </StackNav.Navigator>
  );
}
function OfferTabNav() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: "#fff" }}
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: styles.tabStyle,
        tabBarLabelStyle: styles.tabLabelStyle,
        tabBarIndicatorStyle: styles.indicatorStyle,
      }}
    >
      <Tab.Screen
        name="request"
        component={OfferRequestScreen}
        options={{ tabBarLabel: "Outgoing" }}
      />
      <Tab.Screen
        name="pending"
        component={OfferPendingScreen}
        options={{ tabBarLabel: "Incoming" }}
      />
      <Tab.Screen
        name="complete"
        component={OfferInProgress}
        options={{ tabBarLabel: "In Progress" }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabStyle: {
    fontWeight: "bold",
    height: 40,
    marginTop: 20,
  },
  tabLabelStyle: {
    fontSize: 15,
    fontFamily: "Poppins-Bold",
    textTransform: "none",
  },
  indicatorStyle: {
    backgroundColor: "#000",
    width: 100,
    marginHorizontal: 20,
  },
});
export default TabWithHeader;
