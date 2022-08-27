import React from 'react';
import styled from 'styled-components/native';
import {
  _WIDTH,
  MainColor,
  InputColor,
  TextColor,
  ButtonColor,
} from '../../../common/theme';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-left: ${_WIDTH * 0.05}px;
  padding-right: ${_WIDTH * 0.05}px;
  background-color: ${MainColor};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${TextColor};
  font-size: ${_WIDTH * 0.05}px;
  font-weight: bold;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  margin-top: 20px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${InputColor};
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  font-size: ${_WIDTH * 0.05}px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.9}px;
  height: ${_WIDTH * 0.13}px;
  background-color: ${props => props.buttonColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${props => props.textColor};
  font-size: ${_WIDTH * 0.05}px;
  font-weight: bold;
`;

export default ({ postData, data, setData }) => (
  <Container>
    <Text>입장하실 팀명의 이름을 입력해주세요</Text>
    <InputView>
      <TextInput
        placeholder="팀명"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color={TextColor}
        textAlign={'center'}
        value={data}
        onChangeText={text => setData(text)}
      />
    </InputView>
    <ButtonContainer>
      <TouchableOpacity onPress={() => postData()}>
        <Button buttonColor={ButtonColor}>
          <ButtonText textColor={TextColor}>입장하기</ButtonText>
        </Button>
      </TouchableOpacity>
    </ButtonContainer>
  </Container>
);
