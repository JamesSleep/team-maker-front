import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor, HeaderColor, _WIDTH } from "../../../../Common/theme";
import MenuColumn from "../../../../Components/Setting/MenuColumn";
import { TouchableOpacity, ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${HeaderColor};
`;

const Inner = styled.View`
  flex: 1;
  background-color: ${MainColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 13px 90px 13px;
`;

const ImageView = styled.View`
  height: 150px;
  border-radius: 20px;
  margin-bottom: 25px;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${_WIDTH * 0.07}px;
  color: ${TextColor};
  margin: 0px 0px 20px 20px;
`;

export default ({ data }) => (
  <Container>
    <Inner>
      <ScrollView>
        { data.map((item, index) => (
          <TouchableOpacity key={index} onPress={item.func}>
            <ImageView>
              <Image source={item.image} />
              <Text>{item.name}</Text>
            </ImageView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Inner>
  </Container>
)