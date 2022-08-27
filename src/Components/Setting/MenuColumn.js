import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {_WIDTH, ButtonColor, TextColor, TintColor} from '../../common/theme';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${prop => (prop.tint ? 0.2 : 0)}px;
  border-bottom-color: ${TintColor};
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

const Text = styled.Text`
  margin-left: 15px;
  color: ${TextColor};
  font-size: ${_WIDTH * 0.04}px;
  font-weight: 300;
`;

export default ({title, icon, tint}) => (
  <Container tint={tint}>
    <Icon name={icon} size={_WIDTH * 0.07} color={TintColor} />
    <Text>{title}</Text>
  </Container>
);
