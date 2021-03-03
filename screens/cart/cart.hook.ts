import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCart } from 'hooks';

import { formatCurrency } from 'utils';

import { Product } from 'types/product';

interface useCartScreen {
  isCompletedOrder: boolean;
  items: Product[];
  totalItems: number;
  totalPrice: string;
  navigateGoBack: () => void;
  handleRemove: (id: number) => void;
  handleCompleteOrder: () => void;
}

export default function useCartScreen(): useCartScreen {
  const navigation = useNavigation();
  const { removeItem, emptyCart, items, totalItems, cartTotal } = useCart();
  const [isCompletedOrder, setIsCompletedOrder] = useState<boolean>(false);
  const totalPrice: string = formatCurrency(cartTotal);

  function navigateGoBack() {
    navigation.goBack();
  }

  function handleRemove(id: number): void {
    removeItem(id);
  }

  function handleCompleteOrder(): void {
    setIsCompletedOrder(true);
    emptyCart();
  }

  return {
    isCompletedOrder,
    items,
    totalItems,
    totalPrice,
    navigateGoBack,
    handleRemove,
    handleCompleteOrder,
  };
}
