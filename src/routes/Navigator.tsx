import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginRouter from './LoginRouter';

export const Navigator = () =>
  true ? (
    <NavigationContainer>
      <LoginRouter />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <LoginRouter />
    </NavigationContainer>
  );
