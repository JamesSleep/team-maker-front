import React from "react";
import styled from "styled-components/native";
import { _WIDTH, TextColor } from "../../Common/theme";

const Container = styled.View`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH * 0.045}px;
  font-weight: bold;
  color: ${TextColor};
`;

export default ({ title }) => (
  <Container>
    <Text>{title}</Text>
  </Container>
)