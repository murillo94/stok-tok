import React from 'react';
import { Feather } from '@expo/vector-icons';

import { IconName } from '../../typings/icon';

export function Icon(props: { name: IconName; color: string }) {
  return <Feather size={24} {...props} />;
}
