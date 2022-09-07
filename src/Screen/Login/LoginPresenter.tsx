import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
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
  <KeyboardAvoidingView>
    <Container>
      <ImageView>
        <Image source={require('../../assets/images/loginback.png')} />
      </ImageView>
      <Cover>
        <TitleView />
      </Cover>
    </Container>
  </KeyboardAvoidingView>
);
