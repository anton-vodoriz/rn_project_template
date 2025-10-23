import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import { useAuthStore } from '@app/store/auth.store';

const Stack = createNativeStackNavigator<RootStackParamList, string>();

export const RootNavigator = () => {
  const { isAuthenticated } = useAuthStore(); // boolean

  return (
    <Stack.Navigator id="Root" screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
