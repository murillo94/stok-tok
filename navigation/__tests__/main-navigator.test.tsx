import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import MainNavigator from '../main-navigator';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('main-navigator', () => {
  test('should return root header', async () => {
    const component = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const { getAllByText, getAllByA11yLabel } = render(component);

    const header = await getAllByText('Início')[0];
    const buy = await getAllByA11yLabel('Sacola de compras')[0];

    expect(header).toBeTruthy();
    expect(buy).toBeTruthy();
  });

  test('should go to explore screen', async () => {
    const component = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const { getByText, getAllByText, getAllByA11yLabel } = render(component);
    const toClick = await getByText('Explorar');
    fireEvent.press(toClick);

    const newHeader = await getAllByText('Explorar')[0];
    const tab = await getAllByText('Explorar')[1];
    const buy = await getAllByA11yLabel('Sacola de compras')[0];

    expect(newHeader).toBeTruthy();
    expect(tab).toBeTruthy();
    expect(buy).toBeTruthy();
  });
});
