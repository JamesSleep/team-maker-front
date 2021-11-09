import React from "react";
import styled from "styled-components/native";
import { _WIDTH, ButtonColor } from "../../Common/theme";
import { Keyboard } from "react-native";

const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 20px;
  margin-bottom: 35px;
  border-color: #E42346;
  border-width: 1px;
  border-radius: 30px;
  flex-direction: column;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  padding-left: 7px;
  font-size: 17px;
`;

const ValidText = styled.Text`
  color: #e67e22;
  margin-top: 3px;
`;

export default ({ data, setData, valid }) => (
  <Container>
    <InputView>
      <TextInput 
        placeholder="이메일"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        value={data.email}
        onChangeText={text => setData("email", text)}
        keyboardType={'email-address'}
      />
      { !valid.email && (<ValidText>올바른 이메일 주소를 입력하세요.</ValidText>) }
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        value={data.password}
        onChangeText={text => setData("password", text)}
        selectTextOnFocus={true}
        secureTextEntry={true}
        textContentType="oneTimeCode"
      />
      { !valid.password && (<ValidText>비밀번호는 6~20자 사이여야 합니다.</ValidText>) }
      
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호 확인"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        value={data.passwordCheck}
        onChangeText={text => setData("passwordCheck", text)}
        selectTextOnFocus={true}
        secureTextEntry={true}
        textContentType="oneTimeCode"
      />
      { !valid.passwordCheck && (<ValidText>비밀번호가 일치하지 않습니다.</ValidText>) }
    </InputView>
  </Container>
)