import { useCart } from '../../hooks';

import { formatCurrency } from '../../utils';

import { Product } from '../../typings/product';

interface useCartScreen {
  handleRemove: (id: number) => void;
  items: Product[];
  totalItems: number;
  totalPrice: string;
}

export default function useCartScreen(): useCartScreen {
  const { removeItem, items, totalItems, cartTotal } = useCart();
  const totalPrice = formatCurrency(cartTotal);

  function handleRemove(id: number) {
    removeItem(id);
  }

  return { handleRemove, items, totalItems, totalPrice };
}
