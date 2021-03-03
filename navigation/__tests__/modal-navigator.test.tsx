import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import Modal from '../modal-navigator';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('modal-navigator', () => {
  test('should return root header', async () => {
    const component = (
      <NavigationContainer>
        <Modal />
      </NavigationContainer>
    );

    const { getAllByText, getAllByA11yLabel } = render(component);

    const header = await getAllByText('Sacola de compras')[0];
    const close = await getAllByA11yLabel('Fechar')[0];

    expect(header).toBeTruthy();
    expect(close).toBeTruthy();
  });
});
