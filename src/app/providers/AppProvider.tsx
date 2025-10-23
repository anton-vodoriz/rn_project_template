import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import { AppNavigation } from '@app/navigation/index';
import i18n from '@shared/i18n';

export const AppProvider = () => (
  <SafeAreaProvider>
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </I18nextProvider>
  </SafeAreaProvider>
);
