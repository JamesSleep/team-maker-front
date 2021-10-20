
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import StackRouter from './src/router/StackRouter';
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  /* const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }; */

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
