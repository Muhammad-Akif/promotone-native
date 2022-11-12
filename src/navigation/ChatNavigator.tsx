import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/chat/MessagesScreen';
import ChatListScreen from '../screens/Messages';

const Stack = createStackNavigator();

function ChatNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ChatList" component={ChatListScreen} />
            <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
    );
}

export default ChatNavigator;
