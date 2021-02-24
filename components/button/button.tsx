import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import colors from 'constants/colors';

import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
  children: string;
  backgroundColor?: string;
};

export function Button({
  children,
  onPress,
  backgroundColor = colors.light.tint,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor }, styles.container]}
    >
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
