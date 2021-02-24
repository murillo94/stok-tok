import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { request, endpoints } from '../../services';

import { useCart, useGrid } from '../../hooks';

import { formatProducts } from '../../utils';

import { Product } from '../../typings/product';

interface useHomeScreen {
  handleColumn: () => void;
  handleBuy: (item: Product) => void;
  numColumns: number;
  keyGrid: number;
  data: Product[];
}

export default function useHomeScreen(): useHomeScreen {
  const [data, setData] = useState<Product[]>([]);
  const { handleColumn, numColumns, keyGrid } = useGrid();
  const { addItem } = useCart();

  function handleBuy(item: Product) {
    addItem(item);
  }

  async function getData(): Promise<void> {
    const response = await request(endpoints.GET.sofa.sofas.request.url);
    const products = formatProducts(response);
    setData(products);
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

  return { handleColumn, handleBuy, numColumns, keyGrid, data };
}
