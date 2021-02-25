import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon, IconButton } from 'components';

import HomeScreen from 'screens/home';
import ExploreScreen from 'screens/explore';

import { useCart } from 'hooks';

import colors from 'constants/colors';
import header from 'constants/header';

import { Navigation } from 'types/navigation';

type CartProps = { onPress: () => void };

const BottomTab = createBottomTabNavigator<Navigation.MainRouterStackParamList>();

export default function MainNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={Navigation.HomeRoutes.ROOT}
      tabBarOptions={{
        activeTintColor: colors.tint,
        inactiveTintColor: colors.tabIconDefault,
      }}
    >
      <BottomTab.Screen
        name={Navigation.HomeRoutes.ROOT}
        component={HomeNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.HOME,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Navigation.ExploreRoutes.ROOT}
        component={ExploreNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.EXPLORE,
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function Cart({ onPress }: CartProps) {
  const { totalItems } = useCart();

  return (
    <IconButton
      name="shopping-bag"
      color={colors.black}
      accessibilityLabel="Sacola de compras"
      hasBadge={totalItems > 0}
      onPress={onPress}
    />
  );
}

const HomeStack = createStackNavigator<Navigation.MainRouterStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={Navigation.HomeRoutes.ROOT}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: Navigation.Tabs.HOME,
          headerRight: () => (
            <Cart
              onPress={() => navigation.navigate(Navigation.CartRoutes.ROOT)}
            />
          ),
          ...header.style,
        })}
      />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createStackNavigator<Navigation.MainRouterStackParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name={Navigation.ExploreRoutes.ROOT}
        component={ExploreScreen}
        options={({ navigation }) => ({
          headerTitle: Navigation.Tabs.EXPLORE,
          headerRight: () => (
            <Cart
              onPress={() => navigation.navigate(Navigation.CartRoutes.ROOT)}
            />
          ),
          ...header.style,
        })}
      />
      <ExploreStack.Screen
        name={Navigation.ExploreRoutes.DETAILS}
        component={HomeScreen}
        options={({ navigation, route }) => ({
          // @ts-ignore
          headerTitle: route.params?.name,
          headerRight: () => (
            <Cart
              onPress={() => navigation.navigate(Navigation.CartRoutes.ROOT)}
            />
          ),
          ...header.style,
        })}
      />
    </ExploreStack.Navigator>
  );
}
