// @ts-nocheck
import React, { useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import { ProductCartItem, Button } from '../../components';

import useCartScreen from './cart.hook';

import styles from './styles';

export default function CartScreen({ navigation }) {
  const {
    handleRemove,
    handleCompleteOrder,
    handleShowCompletedOrder,
    isCompletedOrder,
    items,
    totalItems,
    totalPrice,
  } = useCartScreen();
  const confettiRef = useRef(null);

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
            {isCompletedOrder ? (
              <>
                <Text style={styles.title}>Parabéns!!</Text>
                <Text style={styles.title}>Seu pedido foi finalizado!</Text>
              </>
            ) : (
              <>
                <Text style={styles.title}>Seu carrinho está vazio</Text>
                <Button onPress={() => navigation.goBack()}>
                  COMEÇAR A COMPRAR
                </Button>
              </>
            )}
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
          <Button onPress={() => handleCompleteOrder(confettiRef)}>
            FECHAR PEDIDO
          </Button>
        </View>
      )}
      <ConfettiCannon
        ref={confettiRef}
        autoStart={false}
        fadeOut={true}
        count={200}
        fallSpeed={1500}
        explosionSpeed={300}
        origin={{ x: -10, y: 0 }}
        onAnimationEnd={handleShowCompletedOrder}
      />
    </View>
  );
}
