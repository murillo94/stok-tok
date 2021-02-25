import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { IconButton } from 'components';

import CartScreen from 'screens/cart';

import colors from 'constants/colors';
import header from 'constants/header';

import { Navigation } from 'types/navigation';
const ModalStack = createStackNavigator<Navigation.ModalRouterStackParamList>();

export default function ModalNavigator() {
  return (
    <ModalStack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage: () => null,
        headerBackTitleVisible: false,
        headerRight: () => (
          <IconButton
            name="x"
            color={colors.black}
            accessibilityLabel="Fechar"
            onPress={() => navigation.goBack()}
          />
        ),
        ...header.style,
      })}
    >
      <ModalStack.Screen
        name={Navigation.CartRoutes.ROOT}
        component={CartScreen}
        options={{ title: Navigation.Modals.CART }}
      />
    </ModalStack.Navigator>
  );
}
