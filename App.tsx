import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { OnboardingNavigator } from './src/navigation';
import { StatusBar } from 'expo-status-bar';

import { theme } from './src/components'
import { ThemeProvider } from '@shopify/restyle'

import { UserAuthContextProvider } from './src/contexts'
// import { Interests, Slider, TikTok } from './src/components/onboarding';
import Onboarding from './src/screens/onboarding/Onboarding';
import Register from './src/screens/onboarding/Register';
import ClassSelect from './src/screens/onboarding/ClassSelect';
import Start from './src/screens/onboarding/Start';
import Messages from './src/screens/Messages';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"
]);

export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Text>loading...</Text>
    )
  }

  return (
    <>
      <Messages />
      {/* <StatusBar style='dark' />
      <ThemeProvider theme={theme}>
        <UserAuthContextProvider>
          <NavigationContainer>
            <OnboardingNavigator />
          </NavigationContainer>
        </UserAuthContextProvider> */}
      {/* <Onboarding /> */}
      {/* </ThemeProvider> */}
    </>
  );
}
