import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Image, Button } from '../index';

import { getResponsiveWidth } from '../../utils';

import { Product } from '../../typings/product';

import styles from './styles';

type ProductProps = Product & {
  numColumns: number;
};

const WIDTH = getResponsiveWidth(30);
const HEIGHT = getResponsiveWidth(40);

export function ProductListItem({
  id,
  name,
  priceBRL,
  imageUrl,
  numColumns = 2,
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
              <Button onPress={() => null}>COMPRAR</Button>
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
          <Button onPress={() => null}>COMPRAR</Button>
        </Pressable>
      )}
    </>
  );
}
