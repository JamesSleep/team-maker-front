import React from 'react';
import styled from 'styled-components/native';
import {TintColor, _WIDTH, TextColor, ButtonColor} from '../../common/theme';

const Container = styled.View`
  height: ${_WIDTH * 0.13}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: ${TintColor};
  border-bottom-width: ${prop => (prop.tint ? 0.2 : 0)}px;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: ${_WIDTH * 0.04}px;
  color: ${prop => (prop.button ? ButtonColor : TextColor)};
  font-weight: bold;
`;

const Content = styled.Text`
  font-size: ${_WIDTH * 0.038}px;
  font-weight: 300;
  color: ${TextColor};
`;

export default ({title, content, tint, button}) => (
  <Container tint={tint}>
    <Title button={button}>{title}</Title>
    <Content>{content}</Content>
  </Container>
);
