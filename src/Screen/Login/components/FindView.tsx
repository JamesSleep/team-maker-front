import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ILoginPage } from '../LoginContainer';
import { LoginStyles } from '../styles/login.styles';

const { FindContainer, FindText } = LoginStyles;

export default ({ navigation }: ILoginPage) => (
  <FindContainer>
    <TouchableOpacity>
      <FindText>비밀번호를 잊어버리셨나요?</FindText>
    </TouchableOpacity>
  </FindContainer>
);
