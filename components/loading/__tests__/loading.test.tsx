import React from 'react';
import { Platform } from 'react-native';
import { render } from '@testing-library/react-native';

import { Loading } from 'components';

import colors from 'constants/colors';

describe('loading', () => {
  test('should return default values to iOS', () => {
    const { getByTestId } = render(<Loading />);
    const spin = getByTestId('activity-indicator');

    expect(spin.props.size).toBe('large');
    expect(spin.props.color).toBe(colors.tint);
  });

  test('should return default values to Android', () => {
    Platform.OS = 'android';
    const { getByTestId } = render(<Loading />);
    const spin = getByTestId('activity-indicator');

    expect(spin.props.size).toBe(50);
    expect(spin.props.color).toBe(colors.tint);
  });

  test('should return custom values', () => {
    Platform.OS = 'android';
    const { getByTestId } = render(<Loading size={60} color={colors.white} />);
    const spin = getByTestId('activity-indicator');

    expect(spin.props.size).toBe(60);
    expect(spin.props.color).toBe(colors.white);
  });
});
