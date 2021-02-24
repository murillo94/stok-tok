import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { ProductCartItem, Button } from '../../components';

import useCartScreen from './cart.hook';

import styles from './styles';

export default function CartScreen() {
  const { handleRemove, items, totalItems, totalPrice } = useCartScreen();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        removeClippedSubviews
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Total de produtos ({totalItems})</Text>
        )}
        renderItem={({ item }) => (
          <ProductCartItem
            {...item}
            onPressRemove={() => handleRemove(item.id)}
          />
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: {totalPrice}</Text>
        <Button onPress={() => null}>Fechar pedido</Button>
      </View>
    </View>
  );
}
