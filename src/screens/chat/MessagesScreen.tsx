import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import Constants from 'expo-constants';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const MessagesScreen = props => {
  const name = 'Chief So';
  return (
    <View style={styles.screen}>
      <View style={{ height: 24, flexDirection: 'row', marginLeft: 17, marginRight: 14, marginTop: 22, justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Left Side */}
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <View style={{ marginLeft: '16%', flex: 1 }}>
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
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})