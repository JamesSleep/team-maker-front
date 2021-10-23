import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../Common/theme";

const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 20px;
  margin-bottom: 30px;
  border-color: #E42346;
  border-width: 1px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  padding-left: 7px;
  font-size: 17px;
`;

export default ({ data, setData }) => (
  <Container>
    <InputView>
      <TextInput 
        placeholder="모임 이름"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        value={data.guild}
        onChangeText={text => setData("guild", text)}
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="이메일"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        value={data.email}
        onChangeText={text => setData("email", text)}
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        secureTextEntry
        value={data.password}
        onChangeText={text => setData("password", text)}
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호 확인"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        secureTextEntry
        value={data.passwordCheck}
        onChangeText={text => setData("passwordCheck", text)}
      />
    </InputView>
  </Container>
)