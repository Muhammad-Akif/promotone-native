import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/chat/MessagesScreen';

const Stack = createStackNavigator();

function ChatNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
    );
}

export default ChatNavigator;
