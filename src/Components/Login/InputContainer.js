import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../Common/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

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
  height: ${_WIDTH * 0.125}px;
  padding-left: 7px;
  font-size: 17px;
`;

export default () => (
  <Container>
    <InputView>
      <Icon name="mail-outline" color="#e5e9f2" size={_WIDTH * 0.06} />
      <TextInput 
        placeholder="Email"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
    <InputView>
      <Icon name="lock-outline" color="#e5e9f2" size={_WIDTH * 0.06} />
      <TextInput 
        placeholder="Password"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
      />
    </InputView>
  </Container>
)