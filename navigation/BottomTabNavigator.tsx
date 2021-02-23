import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import useColorScheme from '../hooks/useColorScheme';

import Colors from '../constants/Colors';

import { Navigation } from '../typings/navigation';

const BottomTab = createBottomTabNavigator<Navigation.MainRouterStackParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={Navigation.HomeRoutes.ROOT}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name={Navigation.HomeRoutes.ROOT}
        component={HomeNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.HOME,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Navigation.SearchRoutes.ROOT}
        component={SearchNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.SEARCH,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Navigation.FavoritesRoutes.ROOT}
        component={FavoritesNavigator}
        options={{
          tabBarLabel: Navigation.Tabs.FAVORITES,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={24} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<Navigation.MainRouterStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={Navigation.HomeRoutes.ROOT}
        component={HomeScreen}
        options={{ headerTitle: Navigation.Tabs.HOME }}
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
        options={{ headerTitle: Navigation.Tabs.SEARCH }}
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
        options={{ headerTitle: Navigation.Tabs.FAVORITES }}
      />
    </FavoritesStack.Navigator>
  );
}
