import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon, IconButton } from '../components';

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import FavoritesScreen from '../screens/favorites';

import colors from '../constants/colors';
import header from '../constants/header';

import { Navigation } from '../typings/navigation';

const BottomTab = createBottomTabNavigator<Navigation.MainRouterStackParamList>();

export default function MainNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={Navigation.HomeRoutes.ROOT}
      tabBarOptions={{
        activeTintColor: colors.light.tint,
        inactiveTintColor: colors.light.tabIconDefault,
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
        name={Navigation.SearchRoutes.ROOT}
        component={SearchNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.SEARCH,
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Navigation.FavoritesRoutes.ROOT}
        component={FavoritesNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.FAVORITES,
          tabBarIcon: ({ color }) => <Icon name="heart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// @ts-ignore
function Cart({ onPress }) {
  return (
    <IconButton
      name="shopping-bag"
      color={colors.light.text}
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

const SearchStack = createStackNavigator<Navigation.MainRouterStackParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={Navigation.SearchRoutes.ROOT}
        component={SearchScreen}
        options={({ navigation }) => ({
          headerTitle: Navigation.Tabs.SEARCH,
          headerRight: () => (
            <Cart
              onPress={() => navigation.navigate(Navigation.CartRoutes.ROOT)}
            />
          ),
          ...header.style,
        })}
      />
    </SearchStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator<Navigation.MainRouterStackParamList>();

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={Navigation.FavoritesRoutes.ROOT}
        component={FavoritesScreen}
        options={({ navigation }) => ({
          headerTitle: Navigation.Tabs.FAVORITES,
          headerRight: () => (
            <Cart
              onPress={() => navigation.navigate(Navigation.CartRoutes.ROOT)}
            />
          ),
          ...header.style,
        })}
      />
    </FavoritesStack.Navigator>
  );
}
