import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonColor, TextColor } from '../../../common/theme';
import { ILoginPage } from '../LoginContainer';
import { LoginStyles } from '../styles/login.styles';

const { ButtonContainer, Button, ButtonText } = LoginStyles;

export default ({ navigation }: ILoginPage) => (
  <Fragment>
    <ButtonContainer>
      <TouchableOpacity>
        <Button color={ButtonColor}>
          <ButtonText color={TextColor}>로그인</ButtonText>
        </Button>
      </TouchableOpacity>
    </ButtonContainer>
    <ButtonContainer>
      <TouchableOpacity>
        <Button color={ButtonColor}>
          <ButtonText color={TextColor}>회원가입</ButtonText>
        </Button>
      </TouchableOpacity>
    </ButtonContainer>
  </Fragment>
);
