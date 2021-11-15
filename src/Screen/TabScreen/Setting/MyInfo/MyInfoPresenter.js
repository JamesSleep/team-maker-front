import React from "react";
import styled from "styled-components/native";
import { HeaderColor, MainColor } from "../../../../Common/theme";
import MyInfoColumn from "../../../../Components/Setting/MyInfoColumn";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${HeaderColor};
`;

const Inner = styled.View`
  flex: 1;
  background-color: ${MainColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 15px;
`;

export default ({ UserItem }) => (
  <Container>
    <Inner>
      { UserItem.map((item, index)=> {
        if (item.button) return (
          <TouchableOpacity key={index} onPress={item.func}>
            <MyInfoColumn title={item.title} button={item.button} tint={item.tint} />
          </TouchableOpacity>
        ) 
        else return (
          <MyInfoColumn key={index} title={item.title} content={item.content} tint={item.tint} />
        )
      })}
    </Inner>
  </Container>
)