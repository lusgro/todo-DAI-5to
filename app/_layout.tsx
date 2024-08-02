import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { TasksProvider } from "@/context/tasks";

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <TasksProvider>
          <Slot />
          <StatusBar style="dark" />
        </TasksProvider>
      </NativeBaseProvider> 
    </SafeAreaProvider>
  );
}