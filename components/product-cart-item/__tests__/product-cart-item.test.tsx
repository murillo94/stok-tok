import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ProductCartItem } from 'components/product-cart-item';

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

  it('should return default item text', () => {
    const onPress = jest.fn();
    const { getByText, getByA11yLabel, getByA11yRole } = render(
      <ProductCartItem
        id={1}
        name="Sofá"
        price={100}
        priceBRL="R$ 100,00"
        quantity={1}
        imageUrl="test.com"
        onPressRemove={onPress}
      />
    );

    const image = getByA11yRole('image');

    expect(image.props.source).toStrictEqual({ uri: 'test.com' });
    expect(getByA11yLabel('Sofá')).toBeDefined();
    expect(getByText('Sofá')).toBeDefined();
    expect(getByText('Qtd. 1')).toBeDefined();
    expect(getByText('R$ 100,00')).toBeDefined();
  });

  it('should call remove button', () => {
    const onPress = jest.fn();
    const { getByA11yLabel } = render(
      <ProductCartItem
        id={1}
        name="Sofá"
        price={100}
        priceBRL="R$ 100,00"
        quantity={1}
        imageUrl="test.com"
        onPressRemove={onPress}
      />
    );

    const button = getByA11yLabel('Remover item Sofá');
    fireEvent.press(button);

    expect(onPress).toBeCalled();
  });
});
