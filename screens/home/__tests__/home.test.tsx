import React from 'react';
import { render } from '@testing-library/react-native';

import HomeScreen from '../home';
import * as useHomeScreen from '../home.hook';

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({ params: {} }),
  useFocusEffect: (callback: () => void) => callback(),
}));

describe('home screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return default text when list is empty', () => {
    jest.spyOn(useHomeScreen, 'default').mockImplementation(() => ({
      handleColumn: jest.fn(),
      handleBuy: jest.fn(),
      inCart: jest.fn(),
      isLoading: false,
      numColumns: 1,
      keyGrid: 1,
      data: [],
    }));

    const { getByText } = render(<HomeScreen />);

    expect(getByText('0 produtos')).toBeDefined();
  });

  it('should return item when cart is with items', () => {
    jest.spyOn(useHomeScreen, 'default').mockImplementation(() => ({
      handleColumn: jest.fn(),
      handleBuy: jest.fn(),
      inCart: jest.fn(),
      isLoading: false,
      numColumns: 1,
      keyGrid: 1,
      data: [
        {
          id: 1,
          name: 'Sofá',
          price: 100,
          priceBRL: 'R$ 100,00',
          quantity: 1,
          imageUrl: 'test.com',
        },
      ],
    }));

    const { getByText, getByA11yLabel, getByA11yRole } = render(<HomeScreen />);

    const image = getByA11yRole('image');

    expect(getByText('1 produtos')).toBeDefined();
    expect(getByA11yLabel('Alterar visualização da lista')).toBeDefined();
    expect(image.props.source).toStrictEqual({ uri: 'test.com' });
    expect(getByA11yLabel('Sofá')).toBeDefined();
    expect(getByText('Sofá')).toBeDefined();
    expect(getByText('R$ 100,00')).toBeDefined();
    expect(getByA11yLabel('Comprar item Sofá')).toBeDefined();
    expect(getByText('COMPRAR')).toBeDefined();
  });
});
