import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { IconButton } from 'components';

import { colors } from 'constant';

describe('touchable-opacity', () => {
  test('should call function on press', () => {
    const onPress = jest.fn();
    const { getByA11yRole } = render(
      <IconButton accessibilityLabel="Sofá" name="info" onPress={onPress} />
    );

    fireEvent.press(getByA11yRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should return button with label', () => {
    const onPress = jest.fn();
    const { getByA11yLabel } = render(
      <IconButton accessibilityLabel="Sofá" name="info" onPress={onPress} />
    );

    expect(getByA11yLabel('Sofá')).toBeTruthy();
  });

  test('should not return badge', () => {
    const onPress = jest.fn();
    const { queryByTestId } = render(
      <IconButton accessibilityLabel="Sofá" name="info" onPress={onPress} />
    );

    expect(queryByTestId('badge')).toBeNull();
  });

  test('should return badge', () => {
    const onPress = jest.fn();
    const { queryByTestId } = render(
      <IconButton accessibilityLabel="Sofá" name="info" onPress={onPress} />
    );

    expect(queryByTestId('badge')).toBeDefined();
  });
});
