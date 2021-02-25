import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { TouchableOpacity } from 'components';

describe('touchable-opacity', () => {
  test('should call function on press', () => {
    const onPress = jest.fn();
    const { getByA11yRole } = render(
      <TouchableOpacity accessibilityLabel="Sofá" onPress={onPress}>
        <></>
      </TouchableOpacity>
    );

    fireEvent.press(getByA11yRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should verify button with label', () => {
    const onPress = jest.fn();
    const { getByA11yLabel } = render(
      <TouchableOpacity accessibilityLabel="Sofá" onPress={onPress}>
        <></>
      </TouchableOpacity>
    );

    expect(getByA11yLabel('Sofá')).toBeTruthy();
  });

  test('should verify button with style', () => {
    const onPress = jest.fn();
    const { getByA11yLabel } = render(
      <TouchableOpacity
        accessibilityLabel="Sofá"
        onPress={onPress}
        style={{ margin: 20 }}
      >
        <></>
      </TouchableOpacity>
    );

    expect(getByA11yLabel('Sofá').props.style).toStrictEqual({
      margin: 20,
      opacity: 1,
    });
  });
});
