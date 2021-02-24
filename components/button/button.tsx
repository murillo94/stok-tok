import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
  children: string;
};

export function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
