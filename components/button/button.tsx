import React from 'react';
import { Text } from 'react-native';

import { TouchableOpacity } from 'components/touchable-opacity';

import { colors } from 'constant';

import styles from './styles';

type ButtonProps = {
  children: string;
  accessibilityLabel: string;
  backgroundColor?: string;
  onPress: () => void;
};

export function Button({
  children,
  accessibilityLabel = '',
  backgroundColor = colors.tint,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[{ backgroundColor }, styles.container]}
    >
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
