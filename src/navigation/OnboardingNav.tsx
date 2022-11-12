import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/onboarding/Signin";
import ClassSelect from "../screens/onboarding/ClassSelect";
import Start from "../screens/onboarding/Start";
import Register from "../screens/onboarding/Register";
import RegisterForm from "../screens/onboarding/RegisterForm";
import Onboarding from "../screens/onboarding/Onboarding";
import OfferTabNav from "./OfferTabNav";
import NewOfferDetails from "../screens/Offer Creation/OCNewOfferDetails";

export type OnboardingStackParamList = {
    Start: undefined,
    ClassSelect: undefined,
    Signin: undefined,
    Register: undefined,
    RegisterForm: undefined,
    // Onboarding: SubNavigator<OnboardingStackParamList>,
    Onboarding: undefined,
    Profile: undefined,
};

const AuthStack = createStackNavigator();
export const OnboardingNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={"offerTab"}
  >
    <AuthStack.Screen name="Start" component={Start} />
    <AuthStack.Screen name="Onboarding" component={Onboarding} />
    <AuthStack.Screen name="Signin" component={Signin} />
    <AuthStack.Screen name="ClassSelect" component={ClassSelect} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="RegisterForm" component={RegisterForm} />
    <AuthStack.Screen name="offerTab" component={OfferTabNav} />
    <AuthStack.Screen name="NewOfferDetails" component={NewOfferDetails} />
  </AuthStack.Navigator>
);
