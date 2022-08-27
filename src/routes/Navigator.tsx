import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginRouter from './LoginRouter';
import MainRouter from './MainRouter';
import { RootState } from '../store/reducer';

export const Navigator = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return !isLoggedIn ? (
    <NavigationContainer>
      <LoginRouter />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};
