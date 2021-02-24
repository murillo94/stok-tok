import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../icon';

import colors from '../../constants/colors';

import { IconName } from '../../typings/icon';

import styles from './styles';

type IconButtonProps = {
  name: IconName;
  color?: string;
  hasBadge?: boolean;
  onPress: () => void;
};

export function IconButton({
  name,
  color = colors.light.text,
  hasBadge,
  onPress,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      hitSlop={{ top: 12, left: 12, right: 12, bottom: 12 }}
      onPress={onPress}
      style={styles.container}
    >
      <Icon name={name} color={color} />
      {hasBadge && <View style={styles.badge} />}
    </TouchableOpacity>
  );
}
