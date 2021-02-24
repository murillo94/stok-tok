import currency from 'currency.js';

import { capitalize } from './string';

import { Product } from '../typings/product';

export function formatCurrency(value: number): string {
  return currency(value, {
    symbol: 'R$ ',
    separator: '.',
    decimal: ',',
  }).format();
}

export function formatProducts(products: any): Product[] {
  return products.map((item: any) => {
    const price =
      item?.items[0]?.sellers[0]?.commertialOffer?.Installments[0]?.Value ?? 0;

    return {
      id: item?.productId ?? '',
      name: item.productTitle ? capitalize(item.productTitle) : '',
      price,
      priceBRL: formatCurrency(price),
      imageUrl: item?.items[0]?.images[0].imageUrl ?? '',
    };
  });
}
