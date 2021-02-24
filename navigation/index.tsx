import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import MainNavigator from './main-navigator';
import ModalNavigator from './modal-navigator';

import { Navigation } from 'typings/navigation';

export default function NavigationWrapper() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

type MainNavigatorStack = Navigation.RootRouterStackParamList &
  Navigation.ModalRouterStackParamList;

const RootStack = createStackNavigator<MainNavigatorStack>();

function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      mode="modal"
    >
      <RootStack.Screen
        name={Navigation.RootRoutes.ROOT}
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={Navigation.CartRoutes.ROOT}
        component={ModalNavigator}
      />
    </RootStack.Navigator>
  );
}
