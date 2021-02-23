import React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import IconButton from '../components/IconButton';

import NotFoundScreen from '../screens/NotFoundScreen';
import CartScreen from '../screens/CartScreen';

import MainNavigator from './MainNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import useColorScheme from '../hooks/useColorScheme';

import Colors from '../constants/Colors';
import Header from '../constants/Header';

import { Navigation } from '../typings/navigation';

export default function NavigationWrapper({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const ModalStack = createStackNavigator<Navigation.ModalRouterStackParamList>();

function ModalNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ModalStack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage: () => null,
        headerBackTitleVisible: false,
        headerRight: () => (
          <IconButton
            name="x"
            color={Colors[colorScheme].tint}
            onPress={() => navigation.goBack()}
          />
        ),
        ...Header.style,
      })}
    >
      <ModalStack.Screen
        name={Navigation.CartRoutes.ROOT}
        component={CartScreen}
        options={{ title: Navigation.Modals.CART }}
      />
      <RootStack.Screen
        name={Navigation.NotFoundRoutes.ROOT}
        component={NotFoundScreen}
        options={{ title: Navigation.Modals.NOT_FOUND }}
      />
    </ModalStack.Navigator>
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
