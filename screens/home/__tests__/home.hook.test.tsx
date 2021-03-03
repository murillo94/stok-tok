import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import * as useCartHook from 'hooks/use-cart';

import useHomeScreen from '../home.hook';

const mockRouteParams = {
  params: {
    url: 'test-url',
  },
};
const mockRemoveItem = jest.fn();
const mockAddItem = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: (callback: () => void) => callback(),
  useRoute: () => mockRouteParams,
}));

const id = 1;

describe('explore hook', () => {
  beforeEach(() =>
    // @ts-ignore
    jest.spyOn(useCartHook, 'useCart').mockImplementation(() => ({
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
      inCart: jest.fn(),
    }))
  );

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should return default values', () => {
    const { result } = renderHook(() => useHomeScreen());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.numColumns).toBe(2);
    expect(result.current.keyGrid).toBe(1);
    expect(result.current.data).toStrictEqual([]);
  });

  it('should change columns numbers and key grid', () => {
    const { result } = renderHook(() => useHomeScreen());

    act(() => {
      result.current.handleColumn();
    });

    expect(result.current.numColumns).toBe(1);
    expect(result.current.keyGrid).toBe(2);
  });

  it('should add item', () => {
    const wrapper = ({ children }: any) => (
      <useCartHook.CartProvider
        defaultItems={[
          {
            id,
            price: 10,
          },
        ]}
      >
        {children}
      </useCartHook.CartProvider>
    );
    const { result } = renderHook(() => useHomeScreen(), { wrapper });

    act(() => {
      result.current.handleBuy({ id: 2, price: 20 });
    });

    expect(mockAddItem).toBeCalledWith({ id: 2, price: 20 });
  });
});
