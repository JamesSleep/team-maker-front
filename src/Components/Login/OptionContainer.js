import React from 'react';
import styled from 'styled-components/native';
import { _WIDTH, TextColor } from '../../common/theme';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.Text`
  color: ${TextColor};
  font-size: ${_WIDTH * 0.04}px;
`;

export default ({ navigation }) => (
  <Container>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({ name: 'Find', params: { parent: 'Login' } })
      }
    >
      <Text>비밀번호를 잊어버리셨나요?</Text>
    </TouchableOpacity>
  </Container>
);
