import React from 'react';
import { render } from '@testing-library/react-native';

import { Image } from 'components';

describe('image', () => {
  test('should return default values', () => {
    const { getByA11yRole } = render(<Image source={{ uri: 'test.com' }} />);

    const image = getByA11yRole('image');

    expect(image.props.accessibilityLabel).toBe('');
    expect(image.props.resizeMode).toBe('cover');
    expect(image.props.source).toStrictEqual({ uri: 'test.com' });
    expect(image.props.style).toStrictEqual([{}, { height: 0, width: 0 }]);
  });

  test('should return image with label', () => {
    const { getByA11yLabel } = render(
      <Image source={{ uri: 'test.com' }} accessibilityLabel="Sofá" />
    );

    expect(getByA11yLabel('Sofá')).toBeTruthy();
  });
});
