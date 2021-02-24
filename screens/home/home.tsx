import React from 'react';
import { View, FlatList } from 'react-native';

import { ProductListItem, ProductListHeader, Loading } from 'components';

import useHomeScreen from './home.hook';

import styles from './styles';

export default function HomeScreen() {
  const {
    handleColumn,
    handleBuy,
    inCart,
    loading,
    numColumns,
    keyGrid,
    data,
  } = useHomeScreen();

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          key={keyGrid}
          numColumns={numColumns}
          removeClippedSubviews
          keyExtractor={(item, index) => `${item.id} - ${index}`}
          ListHeaderComponent={() => (
            <ProductListHeader
              length={data.length}
              numColumns={numColumns}
              onPress={handleColumn}
            />
          )}
          renderItem={({ item }) => (
            <ProductListItem
              {...item}
              isInCart={inCart(item.id)}
              numColumns={numColumns}
              onPressBuy={() => handleBuy(item)}
            />
          )}
        />
      )}
    </View>
  );
}
