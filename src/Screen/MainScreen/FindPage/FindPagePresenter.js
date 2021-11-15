import React from "react";
import styled from "styled-components/native";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { _WIDTH, MainColor, TextColor } from "../../../Common/theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import TitleView from "../../../Components/FindPage/TitleView";
import InputContainer from "../../../Components/FindPage/InputContainer";

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

export default ({ navigation, data, setData, visible, visibleController, parent }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        { parent === "Login" && (
          <>
          <BackButton>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={_WIDTH * 0.09} color={TextColor} />
            </TouchableOpacity>
          </BackButton>
          <TitleView />
          </>
        )}
        <InputContainer 
          visible={visible} data={data} setData={setData} visibleControlloer={visibleController}
        />
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)