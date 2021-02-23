import { makeUrl } from 'expo-linking';

import { Navigation } from '../typings/navigation';

export default {
  prefixes: [makeUrl('/')],
  config: {
    screens: {
      [Navigation.RootRoutes.ROOT]: {
        screens: {
          [Navigation.HomeRoutes.ROOT]: {
            screens: {
              HomeScreen: 'home',
            },
          },
          [Navigation.SearchRoutes.ROOT]: {
            screens: {
              SearchScreen: 'search',
            },
          },
          [Navigation.FavoritesRoutes.ROOT]: {
            screens: {
              FavoritesScreen: 'favorite',
            },
          },
          [Navigation.CartRoutes.ROOT]: {
            screens: {
              CartScreen: 'cart',
            },
          },
        },
      },
      [Navigation.NotFoundRoutes.ROOT]: '*',
    },
  },
};
