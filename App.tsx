import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCachedResources, CartProvider } from 'hooks';

import RootNavigator from './navigation/root-navigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CartProvider>
          <RootNavigator />
          <StatusBar style="dark" />
        </CartProvider>
      </SafeAreaProvider>
    );
  }
}
