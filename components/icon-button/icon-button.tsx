import React from 'react';
import { View } from 'react-native';

import { Icon } from 'components/icon';
import { TouchableOpacity } from 'components/touchable-opacity';

import { colors } from 'constant';

import { IconName } from 'types/icon';

import styles from './styles';

type IconButtonProps = {
  name: IconName;
  accessibilityLabel: string;
  color?: string;
  hasBadge?: boolean;
  onPress: () => void;
};

export function IconButton({
  name,
  accessibilityLabel,
  color = colors.black,
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
