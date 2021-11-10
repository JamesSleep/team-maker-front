import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor } from "../../../../Common/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${MainColor};
`;
const Text = styled.Text`
  font-size: 20px;
  color: ${TextColor};
`;

export default () => (
  <Container>
    <Text>MyInfo</Text>
  </Container>
)