import React from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';

export function Loading({ size = 50, color = colors.light.tint }) {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <ActivityIndicator
          testID="activity-indicator"
          size="large"
          color={color}
        />
      ) : (
        <ActivityIndicator
          testID="activity-indicator"
          size={size}
          color={color}
        />
      )}
    </>
  );
}
