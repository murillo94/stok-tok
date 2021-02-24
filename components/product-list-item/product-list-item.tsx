import React from 'react';
import { View, Text } from 'react-native';

import { Image, Button } from 'components';

import { getResponsiveWidth } from 'utils';

import colors from 'constants/colors';

import { Product } from 'typings/product';

import styles from './styles';

type ProductProps = Product & {
  isInCart: boolean;
  numColumns: number;
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
  const backgroundColorButton: string = isInCart
    ? colors.light.negative
    : colors.light.tint;

  return (
    <>
      {numColumns === 1 ? (
        <View style={styles.containerSingleItem}>
          <Image
            accessibilityRole="imagebutton"
            accessibilityLabel={`${name} image`}
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
              onPress={onPressBuy}
              backgroundColor={backgroundColorButton}
            >
              {isInCart ? 'REMOVER' : 'COMPRAR'}
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.containerParentItem}>
          <Image
            accessibilityRole="imagebutton"
            accessibilityLabel={`${name} image`}
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
          <Button onPress={onPressBuy} backgroundColor={backgroundColorButton}>
            {isInCart ? 'REMOVER' : 'COMPRAR'}
          </Button>
        </View>
      )}
    </>
  );
}
