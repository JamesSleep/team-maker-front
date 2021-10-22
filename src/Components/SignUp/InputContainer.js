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

export default () => (
  <Container>
    <InputView>
      <TextInput 
        placeholder="캐릭터 닉네임"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="이메일"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
    <InputView>
      <TextInput 
        placeholder="비밀번호 확인"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
  </Container>
)