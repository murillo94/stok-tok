import { useState, useCallback } from 'react';
import { useFocusEffect, useRoute } from '@react-navigation/native';

import { request, endpoints } from 'services';

import { useCart, useGrid } from 'hooks';

import { formatProducts } from 'utils';

import { Product } from 'types/product';

interface useHomeScreen {
  handleColumn: () => void;
  handleBuy: (item: Product) => void;
  inCart: (id: number) => boolean;
  isLoading: boolean;
  numColumns: number;
  keyGrid: number;
  data: Product[];
}

export default function useHomeScreen(): useHomeScreen {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { handleColumn, numColumns, keyGrid } = useGrid();
  const { addItem, removeItem, inCart } = useCart();
  const { params } = useRoute();

  // @ts-ignore
  const url = params?.url ?? endpoints.GET.furniture.sofas.request.url;

  function handleBuy(item: Product): void {
    if (inCart(item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  }

  async function getData(): Promise<void> {
    await setIsLoading(true);
    const response = await request(url);
    const products = formatProducts(response);
    await setData(products);
    await setIsLoading(false);
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
    isLoading,
    numColumns,
    keyGrid,
    data,
  };
}
