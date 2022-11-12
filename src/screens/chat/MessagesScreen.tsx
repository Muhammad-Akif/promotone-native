// Using Reavt Native Dialog just in order to take offer
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
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
  Platform
} from 'react-native';
import Constants from 'expo-constants';
import DialogInput from 'react-native-dialog-input';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default function ChatScreen1({ navigation }) {

  const name = 'Chief So';
  const [showModal, setShowModal] = useState(false);
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

  function sendMessage(offerMessage, isItOffer) {
    if (!inputMessage && !offerMessage) {
      return setInputMessage('');
    }

    setMessages([
      ...messages,
      {
        isItMineMessage: true,
        message: isItOffer ? offerMessage : inputMessage,
        isItOffer: isItOffer ?? false
      },
    ]);

    setInputMessage('');
  }

  return (
    <>
      <DialogInput isDialogVisible={showModal}
        title={"Your Offer"}
        message={"What you are offering?"}
        hintInput={"Offer"}
        submitInput={(inputText) => { sendMessage(inputText, true); setShowModal(false) }}
        closeDialog={() => { setShowModal(false) }}>
      </DialogInput>
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
            <TouchableOpacity style={{ paddingRight: 6 }} onPress={() => {
              setShowModal(true)
            }}>
              <AntDesign name="plus" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 4 }}>
              <AntDesign name="search1" size={16} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={21} color="black" />
            </TouchableOpacity>
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
              return (
                <>
                  {
                    item.isItOffer && (
                      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 20, marginRight: 30 }}>
                        <TouchableOpacity style={{ width: 84, height: 22, marginRight: 9, backgroundColor: '#BA94F9', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                          <Text style={{ color: 'white' }}>accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 84, height: 22, backgroundColor: '#883FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                          <Text style={{ color: 'white' }}>modify</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
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

                          paddingHorizontal: item.isItOffer ? 5 : 10,
                          paddingVertical: item.isItOffer ? 5 : 10,

                          borderRadius: 8,
                          borderBottomLeftRadius:
                            item.isItMineMessage ? 8 : 0,
                          borderBottomRightRadius:
                            item.isItMineMessage ? 0 : 8,
                        }}
                      >
                        {
                          item.isItOffer ? (
                            <>
                              <View style={{ backgroundColor: 'rgba(186, 148, 249, 0.68)', padding: 10, borderRadius: 10 }}>
                                <Text
                                  style={{
                                    color: '#fff',
                                    fontSize: 16,
                                  }}
                                >
                                  {item.message}
                                </Text>
                              </View>
                            </>
                          ) : (
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 16,
                              }}
                            >
                              {item.message}
                            </Text>
                          )
                        }
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </>
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
                <Feather name="send" size={24} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
          {
            Platform.OS === 'ios' && (
              <KeyboardSpacer />
            )
          }
        </View>
      </TouchableWithoutFeedback >
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