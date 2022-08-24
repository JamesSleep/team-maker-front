import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import StackRouter from './src/router/StackRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, Platform} from 'react-native';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3200);
  });

  return (
    <SafeAreaProvider>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="transparent" translucent={true} />
      ) : (
        <StatusBar barStyle="light-content" />
      )}
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
