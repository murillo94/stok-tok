import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ProductListItem, ProductListHeader } from '../../components';

import useHomeScreen from './home.hook';

export default function HomeScreen() {
  const {
    handleColumn,
    handleBuy,
    numColumns,
    keyGrid,
    data,
  } = useHomeScreen();

  return (
    <View style={styles.container}>
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
            numColumns={numColumns}
            onPressBuy={() => handleBuy(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
