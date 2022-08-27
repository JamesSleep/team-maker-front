import React from 'react';
import styled from 'styled-components/native';
import {
  HeaderColor,
  MainColor,
  _WIDTH,
  TextColor,
  SubColor,
  ButtonColor,
} from '../../../../common/theme';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${HeaderColor};
`;

const Inner = styled.View`
  flex: 1;
  background-color: ${MainColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 15px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH * 0.05}px;
  font-weight: bold;
  color: ${TextColor};
  margin-bottom: 10px;
`;

const TitleView = styled.View`
  height: 60px;
  background-color: ${SubColor};
  margin-bottom: 20px;
  border-radius: 10px;
  justify-content: center;
  padding: 0px 10px;
`;

const TitleInput = styled.TextInput`
  font-size: ${_WIDTH * 0.045}px;
  color: ${TextColor};
`;

const ContentView = styled.View`
  height: 200px;
  background-color: ${SubColor};
  margin-bottom: 30px;
  border-radius: 10px;
  justify-content: center;
  padding: 10px 10px;
`;

const ContentInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: ${_WIDTH * 0.045}px;
  color: ${TextColor};
`;

const Button = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${ButtonColor};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${_WIDTH * 0.05}px;
  color: ${TextColor};
  font-weight: bold;
`;

export default ({navigation, data, setData, postData}) => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Inner>
          <Text>제목</Text>
          <TitleView>
            <TitleInput
              value={data.title}
              onChangeText={text => setData({...data, title: text})}
            />
          </TitleView>
          <Text>내용</Text>
          <ContentView>
            <ContentInput
              multiline
              value={data.content}
              onChangeText={text => setData({...data, content: text})}
            />
          </ContentView>
          <TouchableOpacity onPress={() => postData()}>
            <Button>
              <ButtonText>문의보내기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Inner>
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
