import React from "react";
import styled from "styled-components/native";
import { _WIDTH, ButtonColor, TextColor } from "../../Common/theme";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  width: 100%;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-color: #E42346;
  border-width: 1px;
  border-radius: 30px;
  flex-direction: column;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  padding-left: 7px;
  font-size: 17px;
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

export default ({ data, setData, visible, visibleControlloer }) => (
  <Container>
    { visible[0].value && (
      <>
      <InputView>
        <TextInput 
          placeholder="이메일주소를 입력해주세요"
          placeholderTextColor="rgba(245,246,250, 0.5)"
          color="#e5e9f2"
          keyboardType={'email-address'}
          value={data.email}
          onChangeText={text => setData({...data, email: text})}
        />
      </InputView>
      <ButtonContainer>
        <TouchableOpacity onPress={() => visibleControlloer("verify")}>
          <Button buttonColor={ButtonColor}>
            <ButtonText textColor={TextColor}>인증번호전송</ButtonText>
          </Button>
        </TouchableOpacity>
      </ButtonContainer>
      </>
    )}
    { visible[1].value && (
      <>
      <InputView>
        <TextInput 
          placeholder="인증번호를 입력해주세요"
          placeholderTextColor="rgba(245,246,250, 0.5)"
          color="#e5e9f2"
          keyboardType={'number-pad'}
          value={data.verify}
          onChangeText={text => setData({...data, verify: text})}
        />
      </InputView>
      <ButtonContainer>
        <TouchableOpacity onPress={() => visibleControlloer("password")}>
          <Button buttonColor={ButtonColor}>
            <ButtonText textColor={TextColor}>인증번호확인</ButtonText>
          </Button>
        </TouchableOpacity>
      </ButtonContainer>
      </>
    )}
    { visible[2].value && (
      <>
      <InputView>
        <TextInput 
          placeholder="비밀번호를 입력해주세요"
          placeholderTextColor="rgba(245,246,250, 0.5)"
          color="#e5e9f2"
          secureTextEntry={true}
          textContentType="oneTimeCode"
          value={data.password}
          onChangeText={text => setData({...data, password: text})}
        />
      </InputView>
      <InputView>
        <TextInput 
          placeholder="비밀번호를 한번 더 입력해주세요"
          placeholderTextColor="rgba(245,246,250, 0.5)"
          color="#e5e9f2"
          secureTextEntry={true}
          textContentType="oneTimeCode"
          value={data.passwordCheck}
          onChangeText={text => setData({...data, passwordCheck: text})}
        />
      </InputView>
      <ButtonContainer>
        <TouchableOpacity onPress={() => visibleControlloer("submit")}>
          <Button buttonColor={ButtonColor}>
            <ButtonText textColor={TextColor}>확인</ButtonText>
          </Button>
        </TouchableOpacity>
      </ButtonContainer>
      </>
    )}
  </Container>
)