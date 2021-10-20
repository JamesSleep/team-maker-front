import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Cover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
`;

const IamgeView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default () => (
  <Container>
    <IamgeView>
      <Image source={require("../../../images/loginback.png")} />
    </IamgeView>
    <Cover></Cover>
  </Container>
)