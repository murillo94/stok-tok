import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { CartProvider } from 'hooks';

import useCartScreen from '../cart.hook';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

const id = 1;

describe('explore hook', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useCartScreen());

    expect(result.current.isCompletedOrder).toBe(false);
    expect(result.current.items).toStrictEqual([]);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe('R$ 0,00');
  });

  it('should navigate back', () => {
    const { result } = renderHook(() => useCartScreen());

    act(() => {
      result.current.navigateGoBack();
    });

    expect(mockNavigation.goBack).toBeCalled();
  });

  it('should remove item', () => {
    const wrapper = ({ children }: any) => (
      <CartProvider
        id={1}
        defaultItems={[
          {
            id,
            price: 10,
          },
        ]}
      >
        {children}
      </CartProvider>
    );
    const { result } = renderHook(() => useCartScreen(), { wrapper });

    expect(result.current.items).toStrictEqual([
      {
        id,
        price: 10,
      },
    ]);

    act(() => {
      result.current.handleRemove(id);
    });

    expect(result.current.items).toStrictEqual([]);

    expect(mockNavigation.goBack).toBeCalled();
  });

  it('should complete order', () => {
    const wrapper = ({ children }: any) => (
      <CartProvider
        id={1}
        defaultItems={[
          {
            id,
            price: 10,
          },
        ]}
      >
        {children}
      </CartProvider>
    );
    const { result } = renderHook(() => useCartScreen(), { wrapper });

    expect(result.current.items).toStrictEqual([
      {
        id,
        price: 10,
      },
    ]);

    act(() => {
      result.current.handleCompleteOrder();
    });

    expect(result.current.isCompletedOrder).toBe(true);
    expect(result.current.items).toStrictEqual([]);
  });
});
