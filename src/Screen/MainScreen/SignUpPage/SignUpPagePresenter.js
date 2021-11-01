import React from "react";
import styled from "styled-components/native";
import TitleView from "../../../Components/SignUp/TitleView";
import { MainColor, _WIDTH, ButtonColor, TextColor } from "../../../Common/theme";
import InputContainer from "../../../Components/SignUp/InputContainer";
import { TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-left: ${_WIDTH * 0.05}px;
  padding-right: ${_WIDTH * 0.05}px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${MainColor};
`;

const BackButton = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.9}px;
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

export default ({ navigation, postData, data, setData, valid, setValid, setFirst }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <BackButton>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="arrow-back" size={_WIDTH * 0.09} color={TextColor} />
          </TouchableOpacity>
        </BackButton>
        <TitleView />
        <InputContainer 
          data={data} 
          setData={setData}
          valid={valid}
        />
        <ButtonContainer>
          <TouchableOpacity onPress={() => postData()}>
            <Button buttonColor={ButtonColor}>
              <ButtonText textColor={TextColor}>가입하기</ButtonText>
            </Button>
          </TouchableOpacity>
        </ButtonContainer>
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)