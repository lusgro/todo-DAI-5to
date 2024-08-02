import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Slot />
        <StatusBar style="dark" />
      </NativeBaseProvider> 
    </SafeAreaProvider>
  );
}