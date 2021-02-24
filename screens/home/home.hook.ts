import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { request, endpoints } from 'services';

import { useCart, useGrid } from 'hooks';

import { formatProducts } from 'utils';

import { Product } from 'typings/product';

interface useHomeScreen {
  handleColumn: () => void;
  handleBuy: (item: Product) => void;
  inCart: (id: number) => boolean;
  loading: boolean;
  numColumns: number;
  keyGrid: number;
  data: Product[];
}

export default function useHomeScreen(): useHomeScreen {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { handleColumn, numColumns, keyGrid } = useGrid();
  const { addItem, removeItem, inCart } = useCart();

  function handleBuy(item: Product): void {
    if (inCart(item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  }

  async function getData(): Promise<void> {
    await setLoading(true);
    const response = await request(endpoints.GET.sofa.sofas.request.url);
    const products = formatProducts(response);
    await setData(products);
    await setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      getData();

      return () => {
        mounted = false;
      };
    }, [])
  );

  return {
    handleColumn,
    handleBuy,
    inCart,
    loading,
    numColumns,
    keyGrid,
    data,
  };
}
