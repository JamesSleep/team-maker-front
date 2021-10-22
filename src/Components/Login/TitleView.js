import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../Common/theme";

const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: #e5e9f2;
  font-size: ${_WIDTH * 0.08}px;
  font-weight: bold;
`;

export default () => (
  <Container>
    <Title></Title>
  </Container>
)