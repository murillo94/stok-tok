import { formatProducts } from '../index';

const WRONG_LIST = [
  {
    id: 1,
    name: 'sofa',
    items: 100,
  },
];

const CORRECT_LIST = [
  {
    productId: 1,
    productTitle: 'sofa',
    items: [
      {
        images: [
          {
            imageUrl: 'test.com',
          },
        ],
        sellers: [
          {
            commertialOffer: {
              Installments: [
                {
                  Value: 100,
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

describe('utils', () => {
  describe('formatProducts', () => {
    it('will format product list with empty values', () => {
      expect(formatProducts(WRONG_LIST)).toStrictEqual([
        { id: '', name: '', price: 0, priceBRL: 'R$ 0,00', imageUrl: '' },
      ]);
    });

    it('will format product list with values', () => {
      expect(formatProducts(CORRECT_LIST)).toStrictEqual([
        {
          id: 1,
          name: 'Sofa',
          price: 100,
          priceBRL: 'R$ 100,00',
          imageUrl: 'test.com',
        },
      ]);
    });
  });
});
