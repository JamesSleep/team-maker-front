import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ButtonView from './components/ButtonView';
import FindView from './components/FindView';
import InputView from './components/InputView';
import TitleView from './components/TitleView';
import { ILoginPage } from './LoginContainer';
import { LoginStyles } from './styles/login.styles';

const {
  Container,
  ImageView,
  Image,
  Cover,
  Button,
  ButtonContainer,
  ButtonText,
} = LoginStyles;

export const LoginPresenter = (props: ILoginPage) => (
  <Container>
    <ImageView>
      <Image source={require('../../assets/images/loginback.png')} />
    </ImageView>
    <KeyboardAvoidingView
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      behavior={Platform.OS === 'ios' ? 'position' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Cover>
          <TitleView />
          <InputView {...props} />
          <ButtonView {...props} />
          <FindView {...props} />
        </Cover>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </Container>
);
