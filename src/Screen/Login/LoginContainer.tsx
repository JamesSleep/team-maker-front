import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  LoginScreenProps,
  LoginStackParamsList,
} from '../../routes/LoginRouter';
import { LoginPresenter } from './LoginPresenter';

interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginPage {
  data: ILoginData;
  setProperty: <K extends keyof ILoginData>(
    key: K,
    value: ILoginData[K],
  ) => void;
  navigation: NativeStackNavigationProp<
    LoginStackParamsList,
    keyof LoginStackParamsList,
    undefined
  >;
}

export const LoginContainer = ({ navigation }: LoginScreenProps) => {
  const [data, setData] = useState<ILoginData>({
    email: '',
    password: '',
  });

  const setProperty = <K extends keyof ILoginData>(
    key: K,
    value: ILoginData[K],
  ) => {
    setData({ ...data, [key]: value });
  };

  return (
    <LoginPresenter
      data={data}
      setProperty={setProperty}
      navigation={navigation}
    />
  );
};
