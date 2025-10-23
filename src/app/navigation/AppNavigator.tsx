// src/app/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackParamList } from './types';

const Tab = createBottomTabNavigator<AppStackParamList, string>();

const DummyComponent = () => {
  return <></>;
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator id="App" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={DummyComponent} />
    </Tab.Navigator>
  );
};
