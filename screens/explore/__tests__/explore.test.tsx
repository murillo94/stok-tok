import React from 'react';
import { render } from '@testing-library/react-native';

import ExploreScreen from '../explore';

import { CATEGORIES_ACCESSORIES, CATEGORIES_FURNITURE } from '../utils';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

describe('explore screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return default text', () => {
    const { getByText } = render(<ExploreScreen />);

    expect(getByText('Móveis')).toBeDefined();
    expect(getByText('Acessórios')).toBeDefined();
  });

  it('should return furniture categories', () => {
    const { getByText, getAllByA11yRole, getByA11yLabel } = render(
      <ExploreScreen />
    );

    const sofaImage = getAllByA11yRole('imagebutton')[0];

    expect(getByText('Sofás')).toBeDefined();
    expect(getByA11yLabel('Sofás')).toBeDefined();
    expect(sofaImage.props.source).toStrictEqual({
      uri: CATEGORIES_FURNITURE[0].imageUrl,
    });

    const chairImage = getAllByA11yRole('imagebutton')[1];

    expect(getByText('Cadeiras')).toBeDefined();
    expect(getByA11yLabel('Cadeiras')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Cadeiras')).toBeDefined();
    expect(chairImage.props.source).toStrictEqual({
      uri: CATEGORIES_FURNITURE[1].imageUrl,
    });

    const cabinetsImage = getAllByA11yRole('imagebutton')[2];

    expect(getByText('Armários')).toBeDefined();
    expect(getByA11yLabel('Armários')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Armários')).toBeDefined();
    expect(cabinetsImage.props.source).toStrictEqual({
      uri: CATEGORIES_FURNITURE[2].imageUrl,
    });

    const shelvesImage = getAllByA11yRole('imagebutton')[3];

    expect(getByText('Estantes')).toBeDefined();
    expect(getByA11yLabel('Estantes')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Estantes')).toBeDefined();
    expect(shelvesImage.props.source).toStrictEqual({
      uri: CATEGORIES_FURNITURE[3].imageUrl,
    });

    const tablesImage = getAllByA11yRole('imagebutton')[4];

    expect(getByText('Mesas')).toBeDefined();
    expect(getByA11yLabel('Mesas')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Mesas')).toBeDefined();
    expect(tablesImage.props.source).toStrictEqual({
      uri: CATEGORIES_FURNITURE[4].imageUrl,
    });
  });

  it('should return accessories categories', () => {
    const { getByText, getAllByA11yRole, getByA11yLabel } = render(
      <ExploreScreen />
    );

    const bedImage = getAllByA11yRole('imagebutton')[5];

    expect(getByText('Cama')).toBeDefined();
    expect(getByA11yLabel('Cama')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Cama')).toBeDefined();
    expect(bedImage.props.source).toStrictEqual({
      uri: CATEGORIES_ACCESSORIES[0].imageUrl,
    });

    const tableImage = getAllByA11yRole('imagebutton')[6];

    expect(getByText('Mesa')).toBeDefined();
    expect(getByA11yLabel('Mesa')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Mesa')).toBeDefined();
    expect(tableImage.props.source).toStrictEqual({
      uri: CATEGORIES_ACCESSORIES[1].imageUrl,
    });

    const kitchenImage = getAllByA11yRole('imagebutton')[7];

    expect(getByText('Cozinha')).toBeDefined();
    expect(getByA11yLabel('Cozinha')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Cozinha')).toBeDefined();
    expect(kitchenImage.props.source).toStrictEqual({
      uri: CATEGORIES_ACCESSORIES[2].imageUrl,
    });

    const decorationImage = getAllByA11yRole('imagebutton')[8];

    expect(getByText('Decoração')).toBeDefined();
    expect(getByA11yLabel('Decoração')).toBeDefined();
    expect(getByA11yLabel('Navegar para a página de Decoração')).toBeDefined();
    expect(decorationImage.props.source).toStrictEqual({
      uri: CATEGORIES_ACCESSORIES[3].imageUrl,
    });
  });
});
