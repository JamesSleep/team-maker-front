import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor, HeaderColor } from "../../../../Common/theme";
import MenuColumn from "../../../../Components/Setting/MenuColumn";
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
  padding: 35px 13px 90px 13px;
  justify-content: space-between;
`;

const Category = styled.View``;

const CategoryText = styled.Text`
  font-size: 19px;
  color: ${TextColor};
  font-weight: bold;
  margin-bottom: 30px;
`;

export default ({ MyInfoItem, SupItem, loading }) => (
  <Container>
    { loading && (
      <Inner>
        <Category>
          <CategoryText>내 정보</CategoryText>
          { MyInfoItem.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.func}>
              <MenuColumn title={item.title} icon={item.icon} tint={item.tint} />
            </TouchableOpacity>
          ))}
        </Category>
        <Category>
          <CategoryText>지원</CategoryText>
          { SupItem.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.func}>
              <MenuColumn title={item.title} icon={item.icon} tint={item.tint} />
            </TouchableOpacity>
          ))}
        </Category>
      </Inner>
    )}
  </Container>
)