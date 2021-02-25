import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import CartScreen from '../cart';
import * as useCartScreen from '../cart.hook';

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

  it('should return default text when cart is empty', () => {
    const { getByText, getByA11yLabel } = render(<CartScreen />);

    expect(getByText('Seu carrinho está vazio')).toBeDefined();
    expect(getByText('COMEÇAR A COMPRAR')).toBeDefined();
    expect(getByA11yLabel('Começar a comprar agora')).toBeDefined();
  });

  it('should return default text when cart is completed', () => {
    jest.spyOn(useCartScreen, 'default').mockImplementation(() => ({
      navigateGoBack: jest.fn(),
      handleRemove: jest.fn(),
      handleCompleteOrder: jest.fn(),
      isCompletedOrder: true,
      items: [],
      totalItems: 0,
      totalPrice: '',
    }));

    const { getByText, getByA11yLabel } = render(<CartScreen />);

    expect(getByText('Parabéns! Seu pedido foi finalizado')).toBeDefined();
    expect(getByText('VOLTAR PARA A LISTA')).toBeDefined();
    expect(getByA11yLabel('Voltar para a página anterior')).toBeDefined();
  });

  it('should return item when cart is with items', () => {
    jest.spyOn(useCartScreen, 'default').mockImplementation(() => ({
      navigateGoBack: jest.fn(),
      handleRemove: jest.fn(),
      handleCompleteOrder: jest.fn(),
      isCompletedOrder: false,
      items: [
        {
          id: 1,
          name: 'Sofá',
          price: 100,
          priceBRL: 'R$ 100,00',
          quantity: 1,
          imageUrl: 'test.com',
        },
      ],
      totalItems: 1,
      totalPrice: 'R$ 100,00',
    }));

    const { getByText, getByA11yLabel, getByA11yRole } = render(<CartScreen />);

    const image = getByA11yRole('image');

    expect(image.props.source).toStrictEqual({ uri: 'test.com' });
    expect(getByA11yLabel('Sofá')).toBeDefined();
    expect(getByText('Sofá')).toBeDefined();
    expect(getByText('Qtd. 1')).toBeDefined();
    expect(getByText('Total de produtos (1)')).toBeDefined();
    expect(getByText('Total: R$ 100,00')).toBeDefined();
    expect(getByA11yLabel('Finalizar pedido')).toBeDefined();
  });

  it('should clean item when click remove button', async () => {
    jest.spyOn(useCartScreen, 'default').mockImplementation(() => ({
      navigateGoBack: jest.fn(),
      handleRemove: jest.fn(),
      handleCompleteOrder: jest.fn(),
      isCompletedOrder: false,
      items: [
        {
          id: 1,
          name: 'Sofá',
          price: 100,
          priceBRL: 'R$ 100,00',
          quantity: 1,
          imageUrl: 'test.com',
        },
      ],
      totalItems: 1,
      totalPrice: 'R$ 100,00',
    }));

    const { queryByText, getByA11yLabel } = render(<CartScreen />);

    expect(queryByText('Sofá')).toBeDefined();
    expect(queryByText('Seu carrinho está vazio')).toBeNull();

    const button = getByA11yLabel('Remover item Sofá');
    fireEvent.press(button);

    await waitFor(() => queryByText('Seu carrinho está vazio'));

    expect(queryByText('Seu carrinho está vazio')).toBeDefined();
  });
});
