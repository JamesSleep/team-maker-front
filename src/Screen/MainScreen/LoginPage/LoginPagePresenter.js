import React from "react";
import styled from "styled-components/native";
import TitleView from "../../../Components/Login/TitleView";
import InputContainer from "../../../Components/Login/InputContainer";
import OptionContainer from "../../../Components/Login/OptionContainer";
import { _WIDTH, ButtonColor, TextColor } from "../../../Common/theme";
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Cover = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  padding-left: ${_WIDTH * 0.1}px;
  padding-right: ${_WIDTH * 0.1}px;
  padding-bottom: ${_WIDTH * 0.25}px;
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

const ButtonContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH * 0.13}px;
  background-color: ${props => props.buttonColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${props=>props.textColor};
  font-size: ${_WIDTH * 0.05}px;
  font-weight: bold;
`;

export default ({ navigation }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <IamgeView>
        <Image source={require("../../../images/loginback.png")} />
      </IamgeView>
      <Cover>
        <TitleView />
        <InputContainer />
        <ButtonContainer>
          <TouchableOpacity>
            <Button buttonColor={ButtonColor}>
              <ButtonText textColor={TextColor}>로그인</ButtonText>
            </Button>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Button buttonColor={TextColor}>
              <ButtonText textColor={"#2f3640"}>회원가입</ButtonText>
            </Button>
          </TouchableOpacity>
        </ButtonContainer>
        <OptionContainer />
      </Cover>
    </Container>
  </TouchableWithoutFeedback>
)