import React from 'react';
import MyInfoPresenter from './MyInfoPresenter';
import {userAPI} from '../../../../common/api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postMessage} from '../../../../util/postMessage';

export default ({navigation, route}) => {
  const {userInfo} = route.params;
  const UserItem = [
    {title: '닉네임', content: userInfo.nickname, tint: true},
    {title: '이메일', content: userInfo.email, tint: true},
    {title: '소속팀', content: userInfo.guild, tint: true},
    {
      title: '팀 나가기',
      button: true,
      tint: true,
      func: () => alertHandler('guild'),
    },
    {
      title: '회원탈퇴',
      button: true,
      tint: false,
      func: () => alertHandler('member'),
    },
  ];

  const alertHandler = style => {
    if (style === 'guild') {
      Alert.alert('', '정말로 팀을 나가시겠습니까?', [
        {text: '예', onPress: () => deleteGuild()},
        {text: '아니오', style: 'cancel'},
      ]);
    } else {
      Alert.alert('', '탈퇴를 진행하시겠습니까?', [
        {text: '예', onPress: () => deleteUser()},
        {text: '아니오', style: 'cancel'},
      ]);
    }
  };

  const deleteGuild = async () => {
    const postData = JSON.stringify({
      email: userInfo.email,
      password: userInfo.password,
      guild: null,
      nickname: userInfo.nickname,
    });
    await AsyncStorage.setItem('userInfo', postData);
    const result = await userAPI.modify(postData);
    console.log(result);
    navigation.reset({
      index: 0,
      routes: [{name: 'Option'}],
    });
  };

  const deleteUser = async () => {
    const postData = userInfo.email;
    await AsyncStorage.multiRemove(['userInfo', 'loginInfo']);
    const result = await userAPI.delete(postData);
    postMessage('탈퇴처리가 완료되었습니다.\n이용해주셔서감사합니다.');
    console.log(result);
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return <MyInfoPresenter UserItem={UserItem} />;
};
