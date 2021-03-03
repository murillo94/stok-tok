import React from 'react';
import { Image, ImageProps } from 'react-native';

function ImageCustom({
  accessibilityRole = 'image',
  accessibilityLabel = '',
  resizeMode = 'cover',
  source,
  width = 0,
  height = 0,
  style = {},
}: ImageProps) {
  return (
    <Image
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      resizeMode={resizeMode}
      source={source}
      style={[style, { width, height }]}
    />
  );
}

export { ImageCustom as Image };
