import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Image, Button } from '../index';

import { getResponsiveWidth } from '../../utils';

import { Product } from '../../typings/product';

import styles from './styles';
import colors from '../../constants/colors';

type ProductProps = Product & {
  isInCart: boolean;
  numColumns: number;
  onPressBuy: () => void;
};

const WIDTH = getResponsiveWidth(32);
const HEIGHT = getResponsiveWidth(32);

export function ProductListItem({
  isInCart,
  numColumns = 2,
  name,
  priceBRL,
  imageUrl,
  onPressBuy,
}: ProductProps) {
  const backgroundColorButton = isInCart
    ? colors.light.negative
    : colors.light.tint;

  return (
    <>
      {numColumns === 1 ? (
        <Pressable onPress={() => null}>
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
        </Pressable>
      ) : (
        <Pressable style={styles.containerParentItem} onPress={() => null}>
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
        </Pressable>
      )}
    </>
  );
}
