import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './src/routes/StackRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, Platform } from 'react-native';
import { Navigator } from './src/routes/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';

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
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
