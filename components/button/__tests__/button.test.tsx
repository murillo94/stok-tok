import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from 'components';

import colors from 'constants/colors';

describe('touchable-opacity', () => {
  test('should call function on press', () => {
    const onPress = jest.fn();
    const { getByA11yRole } = render(
      <Button accessibilityLabel="Sofá" onPress={onPress}>
        Sofá
      </Button>
    );

    fireEvent.press(getByA11yRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should return button with label', () => {
    const onPress = jest.fn();
    const { getByA11yLabel, getByText } = render(
      <Button accessibilityLabel="Sofá" onPress={onPress}>
        Sofá
      </Button>
    );

    expect(getByA11yLabel('Sofá')).toBeTruthy();
    expect(getByText('Sofá')).toBeTruthy();
  });

  test('should return button with default background color', () => {
    const onPress = jest.fn();
    const { getByA11yRole } = render(
      <Button accessibilityLabel="Sofá" onPress={onPress}>
        Sofá
      </Button>
    );

    expect(getByA11yRole('button').props.style).toStrictEqual({
      backgroundColor: colors.tint,
      borderRadius: 8,
      opacity: 1,
      padding: 15,
      width: '100%',
    });
  });

  test('should return button with custom background color', () => {
    const onPress = jest.fn();
    const { getByA11yRole } = render(
      <Button
        accessibilityLabel="Sofá"
        onPress={onPress}
        backgroundColor={colors.black}
      >
        Sofá
      </Button>
    );

    expect(getByA11yRole('button').props.style).toStrictEqual({
      backgroundColor: colors.black,
      borderRadius: 8,
      opacity: 1,
      padding: 15,
      width: '100%',
    });
  });
});
