import React from 'react';
import styled from 'styled-components/native';
import { _WIDTH } from '../../common/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 20px;
  margin-bottom: 30px;
  border-color: #e42346;
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
      <Icon name="mail-outline" color="#e5e9f2" size={_WIDTH * 0.06} />
      <TextInput
        value={data.email}
        placeholder="Email"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        onChangeText={text => setData({ ...data, email: text })}
      />
    </InputView>
    <InputView>
      <Icon name="lock-outline" color="#e5e9f2" size={_WIDTH * 0.06} />
      <TextInput
        value={data.password}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="rgba(245,246,250, 0.5)"
        color="#e5e9f2"
        onChangeText={text => setData({ ...data, password: text })}
      />
    </InputView>
  </Container>
);
