import React from 'react';
import { View, Text } from 'react-native';

import { Image } from 'components/image';
import { Button } from 'components/button';

import { getResponsiveWidth } from 'utils';

import { colors } from 'constant';

import { Product } from 'types/product';

import styles from './styles';

type ProductProps = Product & {
  isInCart: boolean;
  numColumns?: number;
  onPressBuy: () => void;
};

const WIDTH: number = getResponsiveWidth(32);
const HEIGHT: number = getResponsiveWidth(32);

export function ProductListItem({
  isInCart,
  numColumns = 2,
  name,
  priceBRL,
  imageUrl,
  onPressBuy,
}: ProductProps) {
  const backgroundColorButton: string = isInCart ? colors.red : colors.tint;

  return (
    <>
      {numColumns === 1 ? (
        <View style={styles.containerSingleItem}>
          <Image
            accessibilityLabel={name}
            source={{ uri: imageUrl }}
            width={WIDTH}
            height={HEIGHT}
          />
          <Text numberOfLines={2} style={styles.title}>
            {name}
          </Text>
          <Text numberOfLines={2} style={styles.price}>
            {priceBRL}
          </Text>
          <View style={styles.containerButton}>
            <Button
              accessibilityLabel={
                isInCart ? `Remover item ${name}` : `Comprar item ${name}`
              }
              backgroundColor={backgroundColorButton}
              onPress={onPressBuy}
            >
              {isInCart ? 'REMOVER' : 'COMPRAR'}
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.containerParentItem}>
          <Image
            accessibilityLabel={name}
            source={{ uri: imageUrl }}
            width={WIDTH}
            height={HEIGHT}
          />
          <Text numberOfLines={2} style={styles.title}>
            {name}
          </Text>
          <Text numberOfLines={2} style={styles.price}>
            {priceBRL}
          </Text>
          <Button
            accessibilityLabel={
              isInCart ? `Remover item ${name}` : `Comprar item ${name}`
            }
            backgroundColor={backgroundColorButton}
            onPress={onPressBuy}
          >
            {isInCart ? 'REMOVER' : 'COMPRAR'}
          </Button>
        </View>
      )}
    </>
  );
}
