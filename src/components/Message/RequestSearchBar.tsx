import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import Cards from './Cards';
// import Cards from './Cards';

let data = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwMmhYVWs0DXTql_YO1a7VqfYaUYrlNkg4fibqVeXyQ&s',
    name: 'Frodo',
    desc: 'A red sun rises, blood has been spilled this night.',
    count: 1,
    time: '23:22'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwMmhYVWs0DXTql_YO1a7VqfYaUYrlNkg4fibqVeXyQ&s',
    name: 'Rafeh',
    desc: '>A red sun rises, blood has been spilled this night.',
    count: 2,
    time: '23:22'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwMmhYVWs0DXTql_YO1a7VqfYaUYrlNkg4fibqVeXyQ&s',
    name: 'Akif',
    desc: '>A red sun rises, blood has been spilled this night.',
    count: 3,
    time: '23:22'
  }
]

const RequestSearchBar = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data);

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item: any) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }: { item: any }) => {
    return (
      // Flat List Item 
      <Cards {...item} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          // placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 30,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    marginHorizontal: 20,
    borderColor: '#808080',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
});

export default RequestSearchBar;
