import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ProductListHeader } from 'components/product-list-header';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

describe('cart screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return default values', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ProductListHeader length={10} numColumns={1} onPress={onPress} />
    );

    expect(getByText('10 produtos')).toBeDefined();
  });

  it('should call change visualization button', () => {
    const onPress = jest.fn();
    const { getByA11yLabel } = render(
      <ProductListHeader length={10} numColumns={1} onPress={onPress} />
    );

    const button = getByA11yLabel('Alterar visualização da lista');
    fireEvent.press(button);

    expect(onPress).toBeCalled();
  });
});
