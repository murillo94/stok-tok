import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  CartProvider,
  useCart,
  initialState,
  createCartIdentifier,
} from 'hooks';

describe('use-cart', () => {
  afterEach(() => AsyncStorage.clear());

  describe('createCartIdentifier', () => {
    it('returns a 12 character string by default', () => {
      const id = createCartIdentifier();

      expect(id).toHaveLength(12);
    });

    it('returns a custom length string', () => {
      const id = createCartIdentifier(20);

      expect(id).toHaveLength(20);
    });

    it('created id is unique', () => {
      const id = createCartIdentifier();
      const id2 = createCartIdentifier();

      expect(id).not.toEqual(id2);
    });
  });

  describe('CartProvider', () => {
    it('uses ID for cart if provided', () => {
      const wrapper = ({ children }: any) => (
        <CartProvider id={1}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      // @ts-ignore
      expect(result.current.id).toBeDefined();
      // @ts-ignore
      expect(result.current.id).toEqual(1);
    });

    it('creates an ID for cart if non provided', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      // @ts-ignore
      expect(result.current.id).toBeDefined();
      // @ts-ignore
      expect(result.current.id).toHaveLength(12);
    });

    it('initial cart meta state is set', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      expect(result.current.items).toEqual(initialState.items);
      expect(result.current.totalItems).toEqual(initialState.totalItems);
      expect(result.current.totalUniqueItems).toEqual(
        initialState.totalUniqueItems
      );
      expect(result.current.isEmpty).toBe(true);
    });

    it('sets cart metadata', () => {
      const metadata = {
        coupon: 'abc123',
        notes: 'Leave on door step',
      };

      const wrapper = ({ children }: any) => (
        <CartProvider metadata={metadata}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      expect(result.current.metadata).toEqual(metadata);
    });
  });

  describe('addItem', () => {
    it('adds item to the cart', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      const item = { id: 1, price: 1000 };

      act(() => result.current.addItem(item));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(1);
      expect(result.current.totalUniqueItems).toBe(1);
    });

    it('increments existing item quantity in the cart', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      const item = { id: 1, price: 1000 };
      const item2 = { id: 1, price: 1000 };

      act(() => result.current.addItem(item));
      act(() => result.current.addItem(item2));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(2);
      expect(result.current.totalUniqueItems).toBe(1);
    });

    it('updates cart meta state', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      const item = { id: 1, price: 1000 };

      act(() => result.current.addItem(item));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(1);
      expect(result.current.totalUniqueItems).toBe(1);
      expect(result.current.cartTotal).toBe(1000);
      expect(result.current.isEmpty).toBe(false);
    });

    it('allows free item', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      const item = { id: 1, price: 0 };

      act(() => result.current.addItem(item));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(1);
      expect(result.current.totalUniqueItems).toBe(1);
      expect(result.current.cartTotal).toBe(0);
      expect(result.current.isEmpty).toBe(false);
    });

    it('triggers onItemAdd when cart empty', () => {
      let called = false;

      const wrapper = ({ children }: any) => (
        <CartProvider onItemAdd={() => (called = true)}>
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      const item = { id: 1, price: 1000 };

      act(() => result.current.addItem(item));

      expect(called).toBe(true);
    });

    it('triggers onItemUpdate when cart has existing item', () => {
      let called = false;

      const item = { id: 1, price: 1000 };

      const wrapper = ({ children }: any) => (
        <CartProvider
          defaultItems={[item]}
          onItemUpdate={() => (called = true)}
        >
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.updateItem(item.id, { price: item.price }));

      expect(called).toBe(true);
    });
  });

  describe('updateItem', () => {
    it('updates cart meta state', () => {
      const items = [{ id: 1, price: 1000 }];
      const [item] = items;

      const wrapper = ({ children }: any) => (
        <CartProvider defaultItems={items}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() =>
        result.current.updateItem(item.id, {
          quantity: 2,
        })
      );

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(2);
      expect(result.current.totalUniqueItems).toBe(1);
      expect(result.current.isEmpty).toBe(false);
    });

    it('triggers onItemUpdate when updating existing item', () => {
      let called = false;

      const item = { id: 1, price: 1000 };

      const wrapper = ({ children }: any) => (
        <CartProvider
          defaultItems={[item]}
          onItemUpdate={() => (called = true)}
        >
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.addItem(item));

      expect(called).toBe(true);
    });
  });

  describe('updateItemQuantity', () => {
    it('updates cart meta state', () => {
      const items = [{ id: 1, price: 1000 }];
      const [item] = items;

      const wrapper = ({ children }: any) => (
        <CartProvider defaultItems={items}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.updateItemQuantity(item.id, 3));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.totalItems).toBe(3);
      expect(result.current.totalUniqueItems).toBe(1);
      expect(result.current.isEmpty).toBe(false);
    });

    it('triggers onItemUpdate when setting quantity above 0', () => {
      let called = false;

      const item = { id: 1, price: 1000 };

      const wrapper = ({ children }: any) => (
        <CartProvider
          defaultItems={[item]}
          onItemUpdate={() => (called = true)}
        >
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.updateItemQuantity(item.id, 2));

      expect(result.current.items).toHaveLength(1);
      expect(called).toBe(true);
    });

    it('triggers onItemRemove when setting quantity to 0', () => {
      let called = false;

      const item = { id: 1, price: 1000 };

      const wrapper = ({ children }: any) => (
        <CartProvider
          defaultItems={[item]}
          onItemRemove={() => (called = true)}
        >
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.updateItemQuantity(item.id, 0));

      expect(result.current.items).toHaveLength(0);
      expect(called).toBe(true);
    });

    it('recalculates itemTotal when incrementing item quantity', () => {
      const item = { id: 1, price: 1000 };

      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      act(() => result.current.addItem(item));
      act(() => result.current.updateItemQuantity(item.id, 2));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items).toContainEqual(
        expect.objectContaining({ itemTotal: 2000, quantity: 2 })
      );
    });

    it('recalculates itemTotal when decrementing item quantity', () => {
      const item = { id: 1, price: 1000, quantity: 2 };

      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      act(() => result.current.addItem(item));
      act(() => result.current.updateItemQuantity(item.id, 1));

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items).toContainEqual(
        expect.objectContaining({ itemTotal: 1000, quantity: 1 })
      );
    });
  });

  describe('removeItem', () => {
    it('updates cart meta state', () => {
      const items = [{ id: 1, price: 1000 }];
      const [item] = items;

      const wrapper = ({ children }: any) => (
        <CartProvider defaultItems={items}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.removeItem(item.id));

      expect(result.current.items).toEqual([]);
      expect(result.current.totalItems).toBe(0);
      expect(result.current.totalUniqueItems).toBe(0);
      expect(result.current.isEmpty).toBe(true);
    });

    it('triggers onItemRemove when removing item', () => {
      let called = false;

      const item = { id: 1, price: 1000 };

      const wrapper = ({ children }: any) => (
        <CartProvider
          defaultItems={[item]}
          onItemRemove={() => (called = true)}
        >
          {children}
        </CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.updateItemQuantity(item.id, 0));

      expect(called).toBe(true);
    });
  });

  describe('emptyCart', () => {
    it('updates cart meta state', () => {
      const items = [{ id: 1, price: 1000 }];

      const wrapper = ({ children }: any) => (
        <CartProvider defaultItems={items}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      act(() => result.current.emptyCart());

      expect(result.current.items).toEqual([]);
      expect(result.current.totalItems).toBe(0);
      expect(result.current.totalUniqueItems).toBe(0);
      expect(result.current.isEmpty).toBe(true);
    });
  });

  describe('updateCartMetadata', () => {
    it('updates cart metadata', () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartProvider,
      });

      const metadata = {
        coupon: 'abc123',
        notes: 'Leave on door step',
      };

      // @ts-ignore
      act(() => result.current.updateCartMetadata(metadata));

      expect(result.current.metadata).toEqual(metadata);
    });

    it('merge new metadata with existing', () => {
      const initialMetadata = {
        coupon: 'abc123',
      };

      const wrapper = ({ children }: any) => (
        <CartProvider metadata={initialMetadata}>{children}</CartProvider>
      );

      const { result } = renderHook(() => useCart(), {
        wrapper,
      });

      const metadata = {
        notes: 'Leave on door step',
      };

      // @ts-ignore
      act(() => result.current.updateCartMetadata(metadata));

      expect(result.current.metadata).toEqual({
        ...initialMetadata,
        ...metadata,
      });
    });
  });
});
