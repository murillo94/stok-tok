import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

import styles from './styles';

export function Button({ children, onPress }: PressableProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </Pressable>
  );
}
