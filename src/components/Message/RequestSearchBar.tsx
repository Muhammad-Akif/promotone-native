import React from 'react'
import {
  StyleSheet,
  TextInput,
} from 'react-native';
interface Props{
  search: any;
  searchFilterFunction: any;
}
const RequestSearchBar = (props: Props) => {
  const {search, searchFilterFunction} = props

  return (
    <>
     <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
        />
    </>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 30,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: -10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderColor: '#808080',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
});

export default RequestSearchBar