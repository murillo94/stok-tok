import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { ProductCartItem, Button, Icon } from 'components';

import useCartScreen from './cart.hook';

import styles from './styles';

export default function CartScreen() {
  const {
    navigateGoBack,
    handleRemove,
    handleCompleteOrder,
    isCompletedOrder,
    items,
    totalItems,
    totalPrice,
  } = useCartScreen();

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
                <Icon name="package" size={50} />
                <Text style={styles.title}>
                  Parabéns! Seu pedido foi finalizado
                </Text>
                <Button
                  accessibilityLabel="Voltar para a página anterior"
                  onPress={navigateGoBack}
                >
                  VOLTAR PARA A LISTA
                </Button>
              </>
            ) : (
              <>
                <Icon name="shopping-bag" size={50} />
                <Text style={styles.title}>Seu carrinho está vazio</Text>
                <Button
                  accessibilityLabel="Começar a comprar agora"
                  onPress={navigateGoBack}
                >
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
          <Button
            accessibilityLabel="Finalizar pedido"
            onPress={handleCompleteOrder}
          >
            FECHAR PEDIDO
          </Button>
        </View>
      )}
    </View>
  );
}
