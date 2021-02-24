import React from 'react';
import { Feather } from '@expo/vector-icons';

import colors from 'constants/colors';

import { IconName } from 'typings/icon';

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({
  name,
  size = 24,
  color = colors.black,
  ...props
}: IconProps) {
  return <Feather name={name} size={size} color={color} {...props} />;
}
