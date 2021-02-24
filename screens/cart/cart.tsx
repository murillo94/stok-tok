import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { ProductCartItem, Button } from '../../components';

import useCartScreen from './cart.hook';

import styles from './styles';

// @ts-ignore
export default function CartScreen({ navigation }) {
  const { handleRemove, items, totalItems, totalPrice } = useCartScreen();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        removeClippedSubviews
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        ListHeaderComponent={() => (
          <>
            {items.length > 0 && (
              <Text style={styles.title}>Total de produtos ({totalItems})</Text>
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <View style={styles.containerEmpty}>
            <Text style={styles.title}>Seu carrinho está vazio</Text>
            <Button onPress={() => navigation.goBack()}>
              COMEÇAR A COMPRAR
            </Button>
          </View>
        )}
        renderItem={({ item }) => (
          <ProductCartItem
            {...item}
            onPressRemove={() => handleRemove(item.id)}
          />
        )}
      />
      {items.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total: {totalPrice}</Text>
          <Button onPress={() => null}>FECHAR PEDIDO</Button>
        </View>
      )}
    </View>
  );
}
