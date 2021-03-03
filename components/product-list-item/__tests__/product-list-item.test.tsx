import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ProductListItem } from 'components/product-list-item';

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

  describe('with one column', () => {
    it('should return default item in cart text', () => {
      const onPress = jest.fn();
      const { getByText, getByA11yLabel, getByA11yRole } = render(
        <ProductListItem
          numColumns={1}
          id={1}
          isInCart={false}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const image = getByA11yRole('image');

      expect(image.props.source).toStrictEqual({ uri: 'test.com' });
      expect(getByA11yLabel('Sofá')).toBeDefined();
      expect(getByText('Sofá')).toBeDefined();
      expect(getByText('R$ 100,00')).toBeDefined();
      expect(getByA11yLabel('Comprar item Sofá')).toBeDefined();
      expect(getByText('COMPRAR')).toBeDefined();
    });

    it('should call buy button', () => {
      const onPress = jest.fn();
      const { getByA11yLabel } = render(
        <ProductListItem
          numColumns={1}
          id={1}
          isInCart={false}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const button = getByA11yLabel('Comprar item Sofá');
      fireEvent.press(button);

      expect(onPress).toBeCalled();
    });

    it('should return default item not in cart text', () => {
      const onPress = jest.fn();
      const { getByText, getByA11yLabel, getByA11yRole } = render(
        <ProductListItem
          numColumns={1}
          id={1}
          isInCart={true}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const image = getByA11yRole('image');

      expect(image.props.source).toStrictEqual({ uri: 'test.com' });
      expect(getByA11yLabel('Sofá')).toBeDefined();
      expect(getByText('Sofá')).toBeDefined();
      expect(getByText('R$ 100,00')).toBeDefined();
      expect(getByA11yLabel('Remover item Sofá')).toBeDefined();
      expect(getByText('REMOVER')).toBeDefined();
    });

    it('should call remove button', () => {
      const onPress = jest.fn();
      const { getByA11yLabel } = render(
        <ProductListItem
          numColumns={1}
          id={1}
          isInCart={true}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const button = getByA11yLabel('Remover item Sofá');
      fireEvent.press(button);

      expect(onPress).toBeCalled();
    });
  });

  describe('with two columns', () => {
    it('should return default item in cart text', () => {
      const onPress = jest.fn();
      const { getByText, getByA11yLabel, getByA11yRole } = render(
        <ProductListItem
          id={1}
          isInCart={false}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const image = getByA11yRole('image');

      expect(image.props.source).toStrictEqual({ uri: 'test.com' });
      expect(getByA11yLabel('Sofá')).toBeDefined();
      expect(getByText('Sofá')).toBeDefined();
      expect(getByText('R$ 100,00')).toBeDefined();
      expect(getByA11yLabel('Comprar item Sofá')).toBeDefined();
      expect(getByText('COMPRAR')).toBeDefined();
    });

    it('should call buy button', () => {
      const onPress = jest.fn();
      const { getByA11yLabel } = render(
        <ProductListItem
          id={1}
          isInCart={false}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const button = getByA11yLabel('Comprar item Sofá');
      fireEvent.press(button);

      expect(onPress).toBeCalled();
    });

    it('should return default item not in cart text', () => {
      const onPress = jest.fn();
      const { getByText, getByA11yLabel, getByA11yRole } = render(
        <ProductListItem
          id={1}
          isInCart={true}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const image = getByA11yRole('image');

      expect(image.props.source).toStrictEqual({ uri: 'test.com' });
      expect(getByA11yLabel('Sofá')).toBeDefined();
      expect(getByText('Sofá')).toBeDefined();
      expect(getByText('R$ 100,00')).toBeDefined();
      expect(getByA11yLabel('Remover item Sofá')).toBeDefined();
      expect(getByText('REMOVER')).toBeDefined();
    });

    it('should call remove button', () => {
      const onPress = jest.fn();
      const { getByA11yLabel } = render(
        <ProductListItem
          id={1}
          isInCart={true}
          name="Sofá"
          price={100}
          priceBRL="R$ 100,00"
          imageUrl="test.com"
          onPressBuy={onPress}
        />
      );

      const button = getByA11yLabel('Remover item Sofá');
      fireEvent.press(button);

      expect(onPress).toBeCalled();
    });
  });
});
