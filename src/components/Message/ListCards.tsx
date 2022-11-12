import { FlatList } from 'react-native';
import Cards from './Cards';

const ListCards = ({ data, navigation }: { data: any }) => {

  const ItemView = ({ item }: { item: any }) => {
    return (
      // Flat List Item 
      <Cards {...item} navigation={navigation} />
    );
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </>
  );
};

export default ListCards;