/**
 * ResumeRoute - React Native App
 * Your pathway to career success
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/navigation';
import { ToastProvider } from './src/context/ToastContext';
import { setToastFunctions } from './src/utils/toast';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ToastProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </ToastProvider>
  );
}

export default App;
