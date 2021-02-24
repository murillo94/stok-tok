import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Image, Button } from '../index';

import { getResponsiveWidth } from '../../utils';

import { Product } from '../../typings/product';

import styles from './styles';

type ProductProps = Product & {
  numColumns: number;
  onPressBuy: () => void;
};

const WIDTH = getResponsiveWidth(32);
const HEIGHT = getResponsiveWidth(32);

export function ProductListItem({
  name,
  priceBRL,
  imageUrl,
  numColumns = 2,
  onPressBuy,
}: ProductProps) {
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
              <Button onPress={onPressBuy}>COMPRAR</Button>
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
          <Button onPress={onPressBuy}>COMPRAR</Button>
        </Pressable>
      )}
    </>
  );
}
