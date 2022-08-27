import React from 'react';
import styled from 'styled-components/native';
import {SubColor, _WIDTH, TextColor} from '../../common/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  margin: 10px 0px;
  background-color: ${SubColor};
  align-items: center;
`;

const Name = styled.Text`
  font-size: ${_WIDTH * 0.045}px;
  color: ${TextColor};
  margin-right: 8px;
`;

export default ({data, myName}) => (
  <Container>
    <Name>{data}</Name>
    {myName === data && (
      <Icon name="user" size={_WIDTH * 0.055} color={TextColor} />
    )}
  </Container>
);
