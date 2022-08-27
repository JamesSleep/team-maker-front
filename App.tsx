import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './src/routes/StackRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, Platform } from 'react-native';
import { Navigator } from './src/routes/Navigator';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });

  return (
    <SafeAreaProvider>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="transparent" translucent={true} />
      ) : (
        <StatusBar barStyle="light-content" />
      )}
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
