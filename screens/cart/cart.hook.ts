import { MutableRefObject, useState } from 'react';

import { useCart } from '../../hooks';

import { formatCurrency } from '../../utils';

import { Product } from '../../typings/product';

type ConfettiRef = MutableRefObject<{
  start: () => void;
}>;
interface useCartScreen {
  handleRemove: (id: number) => void;
  handleCompleteOrder: (ref: ConfettiRef) => void;
  handleShowCompletedOrder: () => void;
  isCompletedOrder: boolean;
  items: Product[];
  totalItems: number;
  totalPrice: string;
}

export default function useCartScreen(): useCartScreen {
  const { removeItem, emptyCart, items, totalItems, cartTotal } = useCart();
  const [isCompletedOrder, setIsCompletedOrder] = useState(false);
  const totalPrice = formatCurrency(cartTotal);

  function handleRemove(id: number) {
    removeItem(id);
  }

  function handleCompleteOrder(ref: ConfettiRef) {
    ref?.current?.start();
  }

  function handleShowCompletedOrder() {
    setIsCompletedOrder(true);
    emptyCart();
  }

  return {
    handleRemove,
    handleCompleteOrder,
    handleShowCompletedOrder,
    isCompletedOrder,
    items,
    totalItems,
    totalPrice,
  };
}
