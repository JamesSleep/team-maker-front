import React, { useState } from 'react';
import { LoginScreenProps } from '../../routes/LoginRouter';
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

  return <LoginPresenter data={data} setProperty={setProperty} />;
};
