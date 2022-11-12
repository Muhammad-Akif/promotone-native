// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'
// import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// const MessagesScreen = props => {
//   const name = 'Chief So';
//   return (

//   )
// }

// export default MessagesScreen

// const styles = StyleSheet.create({

// })

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

export default function ChatScreen1({ navigation }) {
  const name = 'Chief So';
  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {
      isItMineMessage: true,
      message: 'Hey there!',
    },
    {
      isItMineMessage: false,
      message: 'Hello, how are you doing?',
    },
    {
      isItMineMessage: true,
      message: 'I am good, how about you?',
    },
    {
      isItMineMessage: false,
      message: `😊😇`,
    },
    {
      isItMineMessage: true,
      message: `Can't wait to meet you.`,
    },
    {
      isItMineMessage: false,
      message: `That's great, when are you coming?`,
    },
    {
      isItMineMessage: true,
      message: `This weekend.`,
    },
    {
      isItMineMessage: false,
      message: `Around 4 to 6 PM.`,
    },
    {
      isItMineMessage: true,
      message: `Great, don't forget to bring me some mangoes.`,
    },
    {
      isItMineMessage: false,
      message: `Sure!`,
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    setMessages([
      ...messages,
      {
        isItMineMessage: true,
        message: inputMessage,
      },
    ]);
    setInputMessage('');
  }

  return (
    <>
      <View style={styles.screen}>
        {/* Header Starts */}
        <View style={{ height: 24, flexDirection: 'row', marginLeft: 17, marginRight: 14, marginTop: 12, marginBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Left Side */}
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View>
              <AntDesign name="arrowleft" size={24} color="black" />
            </View>
            <View style={{ marginLeft: '13%', flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: '700', letterSpacing: 0.8 }} numberOfLines={1}>{name}</Text>
            </View>
          </View>

          {/* Right Side */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ paddingRight: 6 }}>
              <AntDesign name="plus" size={19} color="black" />
            </View>
            <View style={{ paddingRight: 4 }}>
              <AntDesign name="search1" size={16} color="black" />
            </View>
            <View>
              <MaterialCommunityIcons name="dots-vertical" size={21} color="black" />
            </View>
          </View>
        </View>
        {/* Header Ends */}
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <FlatList
            style={{ backgroundColor: '#ffffff' }}
            inverted={true}
            data={JSON.parse(JSON.stringify(messages)).reverse()}
            renderItem={({ item }) => {
              console.log(item.isItMineMessage ? '#883FFF' : '#883FFF', 'asd')
              return (
                <TouchableWithoutFeedback>
                  <View style={{ marginTop: 20 }}>
                    <View
                      style={{
                        maxWidth: Dimensions.get('screen').width * 0.8,
                        backgroundColor: item.isItMineMessage ? '#883FFF' : '#BA94F9',
                        alignSelf:
                          item.isItMineMessage
                            ? 'flex-end'
                            : 'flex-start',
                        marginHorizontal: 10,
                        padding: 10,
                        borderRadius: 8,
                        borderBottomLeftRadius:
                          item.isItMineMessage ? 8 : 0,
                        borderBottomRightRadius:
                          item.isItMineMessage ? 0 : 8,
                      }}
                    >
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      >
                        {item.message}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )
            }}
          />

          <View style={{ paddingVertical: 10 }}>
            <View style={styles.messageInputView}>
              <TextInput
                defaultValue={inputMessage}
                style={styles.messageInput}
                placeholder='Message'
                onChangeText={(text) => setInputMessage(text)}
                onSubmitEditing={() => {
                  sendMessage();
                }}
              />
              <TouchableOpacity
                style={styles.messageSendView}
                onPress={() => {
                  sendMessage();
                }}
              >
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>

  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(241, 245, 249, 0.5)',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '400',
    color: '#64748B'
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  screen: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF'
  }
});