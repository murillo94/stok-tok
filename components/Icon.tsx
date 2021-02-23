import React from 'react';
import { Feather } from '@expo/vector-icons';

export type IconName = React.ComponentProps<typeof Feather>['name'];

export default function Icon(props: { name: IconName; color: string }) {
  return <Feather size={24} {...props} />;
}
