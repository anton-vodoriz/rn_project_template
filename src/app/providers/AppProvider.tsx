import React, {useState, useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import { AppNavigation } from '@app/navigation/index';
import i18n, { initI18n } from '@shared/i18n';

export const AppProvider = () => {
   const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return null; // or splash screen
  }

  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <AppNavigation />
      </I18nextProvider>
    </SafeAreaProvider>
  );
};
