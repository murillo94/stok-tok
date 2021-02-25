import React from 'react';
import { View, Text } from 'react-native';

import { Image, IconButton } from 'components';

import { getResponsiveWidth } from 'utils';

import { colors } from 'constant';

import { Product } from 'types/product';

import styles from './styles';

type ProductProps = Product & {
  onPressRemove: () => void;
};

const WIDTH: number = getResponsiveWidth(20);
const HEIGHT: number = getResponsiveWidth(20);

export function ProductCartItem({
  name,
  priceBRL,
  quantity,
  imageUrl,
  onPressRemove,
}: ProductProps) {
  return (
    <View style={styles.container}>
      <Image
        accessibilityRole="image"
        accessibilityLabel={name}
        source={{ uri: imageUrl }}
        width={WIDTH}
        height={HEIGHT}
      />
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.price}>
          {priceBRL}
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          Qtd. {quantity}
        </Text>
      </View>
      <View style={styles.close}>
        <IconButton
          name="x"
          color={colors.tabIconDefault}
          accessibilityLabel={`Remover item ${name}`}
          onPress={onPressRemove}
        />
      </View>
    </View>
  );
}
