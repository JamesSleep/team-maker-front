import React, {useState} from 'react';
import FindPagePresenter from './FindPagePresenter';
import {userAPI} from '../../../common/api';
import {postMessage} from '../../../util/postMessage';

export default ({navigation, route}) => {
  const parent = route.params.parent;

  const [data, setData] = useState({
    email: '',
    verify: '',
    number: 0,
    password: '',
    passwordCheck: '',
  });

  const [visible, setVisible] = useState([
    {name: 'email', value: true},
    {name: 'verify', value: false},
    {name: 'password', value: false},
  ]);

  const visibleController = async property => {
    switch (property) {
      case 'verify': {
        if (data.email === '') {
          postMessage('이메일주소를 입력해주세요');
          return;
        }
        const result = await userAPI.getOneUser(data.email);
        if (!result[0]) {
          postMessage(result[1]);
          return;
        } else {
          const result = await userAPI.findPassword(data.email);
          console.log(result);
          setData({...data, number: result[1]});
          postMessage('인증번호를 전송하였습니다');
        }
        break;
      }
      case 'password': {
        console.log(data);
        if (data.verify === '') {
          postMessage('인증번호를 입력해주세요');
          return;
        }
        if (Number(data.verify) !== data.number) {
          postMessage('인증번호가 일치하지않습니다');
          return;
        }
        postMessage('인증이 완료되었습니다');
        break;
      }
      case 'submit': {
        if (data.password !== data.passwordCheck) {
          postMessage('비밀번호가 일치하지 않습니다');
          return;
        }
        if (data.password < 6 || data.password > 20) {
          postMessage('비밀번호는 6자 이상 20자 이하로 설정해주세요');
          return;
        }
        const userReuslt = await userAPI.getOneUser('test');
        const user = userReuslt[1];
        const postData = JSON.stringify({
          email: user.email,
          password: data.password,
        });
        const result = await userAPI.modify(postData);

        if (result) {
          if (parent === 'Login') {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{name: 'Menu'}],
            });
          }
        } else {
          return;
        }
      }
    }
    setVisible(list =>
      list.map(item => {
        return item.name === property
          ? {name: item.name, value: true}
          : {name: item.name, value: false};
      }),
    );
  };

  return (
    <FindPagePresenter
      navigation={navigation}
      data={data}
      setData={setData}
      visible={visible}
      visibleController={visibleController}
      parent={parent}
    />
  );
};
