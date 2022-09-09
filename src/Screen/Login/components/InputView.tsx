import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WIDTH } from '../../../common/theme';
import { ILoginPage } from '../LoginContainer';
import { LoginStyles } from '../styles/login.styles';

const { InputContainer, InputView, TextInput } = LoginStyles;

export default ({ data, setProperty }: ILoginPage) => (
  <InputContainer>
    <InputView>
      <Icon name="mail-outline" color="#E5E9F2" size={10} />
      <TextInput
        value={data.email}
        placeholder="Email"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        onChangeText={text => setProperty('email', text)}
      />
    </InputView>
    <InputView>
      <Icon name="lock-outline" color="#e5e9f2" size={10} />
      <TextInput
        value={data.password}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        //color="#e5e9f2"
        onChangeText={text => setProperty('email', text)}
      />
    </InputView>
  </InputContainer>
);
