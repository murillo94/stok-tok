import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCachedResources, CartProvider } from './hooks';

import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CartProvider>
          <Navigation />
          <StatusBar />
        </CartProvider>
      </SafeAreaProvider>
    );
  }
}
