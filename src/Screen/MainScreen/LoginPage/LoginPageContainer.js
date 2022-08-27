import React, { useEffect, useState } from 'react';
import LoginPagePresenter from './LoginPagePresenter';
import { userAPI } from '../../../common/api';
import { postMessage } from '../../../util/postMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    autoLogin();
  }, []);

  const postData = async () => {
    if (!validation()) return;

    const data = JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    });

    const result = await userAPI.login(data);

    console.log(result);
    if (!result[0]) postMessage(result[1]);
    else {
      console.log(result[1]);
      const user = result[1];
      await AsyncStorage.setItem(
        'loginInfo',
        JSON.stringify({ token: user.auth_token }),
      );
      await AsyncStorage.setItem(
        'userInfo',
        JSON.stringify({
          email: loginData.email,
          password: loginData.password,
          guild: user.guild,
          nickname: user.nickname,
        }),
      );
      if (user.guild) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Option' }],
        });
      }
    }
  };

  const validation = () => {
    if (loginData.email === '') {
      postMessage('이메일을 확인해주세요');
      return false;
    }
    if (loginData.password === '') {
      postMessage('비밀번호를 확인해주세요');
      return false;
    }
    return true;
  };

  const autoLogin = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
    if (!user) return;
    const login = JSON.stringify({
      email: user.email,
      password: user.password,
    });

    const result = await userAPI.login(login);
    console.log(result);
    if (result[0]) {
      const _user = result[1];
      if (_user.guild) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Option' }],
        });
      }
    } else {
      await AsyncStorage.removeItem('userInfo');
    }
  };

  return (
    <LoginPagePresenter
      navigation={navigation}
      postLoginData={postData}
      data={loginData}
      setData={setLoginData}
    />
  );
};
