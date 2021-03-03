import { renderHook, act } from '@testing-library/react-hooks';

import useExploreScreen from '../explore.hook';

import { Navigation } from 'types/navigation';

const mockNavigation = {
  navigate: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

describe('explore hook', () => {
  it('should navigate to categorie', () => {
    const { result } = renderHook(() => useExploreScreen());

    act(() => {
      result.current.handleGoToCategorie({
        name: 'Sofá',
        url: 'test.com',
        imageUrl: 'test.com.br',
      });
    });

    expect(mockNavigation.navigate).toBeCalledWith(
      Navigation.ExploreRoutes.DETAILS,
      { name: 'Sofá', url: 'test.com' }
    );
  });
});
