import { FlatList } from 'react-native';
import Cards from './Cards';

const ListCards = ({ data }: { data: any }) => {

  const ItemView = ({ item }: { item: any }) => {
    return (
      // Flat List Item 
      <Cards {...item} />
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