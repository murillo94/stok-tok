import React, { ReactChild, ReactChildren, ReactFragment } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type TouchableOpacityCustomProps = TouchableOpacityProps & {
  accessibilityLabel: string;
  children:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[]
    | ReactFragment;
};

function TouchableOpacityCustom({
  children,
  accessibilityLabel,
  onPress,
  style,
}: TouchableOpacityCustomProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );
}

export { TouchableOpacityCustom as TouchableOpacity };
