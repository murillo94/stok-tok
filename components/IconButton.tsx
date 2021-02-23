import React from 'react';
import { Pressable } from 'react-native';
import Icon, { IconName } from './Icon';

export default function IconButton({
  name,
  color,
  onPress,
}: {
  name: IconName;
  color: string;
  onPress: () => any;
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
    >
      <Icon name={name} color={color} />
    </Pressable>
  );
}
