import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList, string>();

const DummyComponent = () => {
  return <></>;
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator id="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={DummyComponent} />
    </Stack.Navigator>
  );
};
