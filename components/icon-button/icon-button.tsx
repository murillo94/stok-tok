import React from 'react';
import { View } from 'react-native';

import { Icon, TouchableOpacity } from 'components';

import colors from 'constants/colors';

import { IconName } from 'types/icon';

import styles from './styles';

type IconButtonProps = {
  name: IconName;
  color?: string;
  accessibilityLabel: string;
  hasBadge?: boolean;
  onPress: () => void;
};

export function IconButton({
  name,
  color = colors.black,
  accessibilityLabel = '',
  hasBadge,
  onPress,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      hitSlop={{ top: 12, left: 12, right: 12, bottom: 12 }}
      onPress={onPress}
      style={styles.container}
    >
      <Icon name={name} color={color} />
      {hasBadge && <View testID="badge" style={styles.badge} />}
    </TouchableOpacity>
  );
}
