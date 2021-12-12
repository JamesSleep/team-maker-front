import React from "react";
import styled from "styled-components/native";
import ColumnTitle from "./ColumnTitle";
import { _WIDTH, MainColor, SubColor, PlaceHolder, TextColor } from "../../Common/theme";

const Container = styled.View`
  margin-bottom: 20px;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: ${SubColor};
  border-radius: 15px;
  flex-direction: column;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  padding-left: 7px;
  font-size: 17px;
  color: ${TextColor};
`;

const ContentView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.26}px;
  padding: 10px 10px;
  margin-bottom: 10px;
  background-color: ${SubColor};
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
`;

const ContentInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.25}px;
  padding: 10px 7px;
  font-size: 17px;
  color: ${TextColor};
`;

export default ({ data, setData }) => (
  <Container>
    <ColumnTitle title="레이드 정보" />
    <InputView>
      <TextInput 
        placeholder="제목"
        placeholderTextColor={PlaceHolder}
        value={data.title}
        onChangeText={text=>setData({...data, title: text})}
      />
    </InputView>
    <ContentView>
      <ContentInput 
        placeholder="설명"
        placeholderTextColor={PlaceHolder}
        multiline
        value={data.description}
        onChangeText={text=>setData({...data, description: text})}
      />
    </ContentView>
  </Container>
)