import React from 'react';
import { View, Text } from 'react-native';

import { IconButton } from '../../components';

import colors from '../../constants/colors';

import styles from './styles';

type ProductProps = {
  length: number;
  numColumns: number;
  onPress: () => void;
};

export function ProductListHeader({
  length,
  numColumns,
  onPress,
}: ProductProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{length} produtos</Text>
      <IconButton
        name={numColumns === 1 ? 'server' : 'columns'}
        onPress={onPress}
      />
    </View>
  );
}
