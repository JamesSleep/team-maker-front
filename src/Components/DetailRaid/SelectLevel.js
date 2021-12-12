import React from "react";
import styled from "styled-components/native";
import ColumnTitle from "./ColumnTitle";
import { TouchableOpacity } from "react-native";
import { _WIDTH, TintColor, TextColor, MainColor } from "../../Common/theme";

const Container = styled.View`
  margin-bottom: 20px;
`;

const OptionBox = styled.View`
  width: ${_WIDTH * 0.25}px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-color: ${TintColor};
  border-width: 0.4px;
  border-radius: 20px;
  background-color: ${prop => prop.selected ? TintColor : MainColor};
`;

const OptionText = styled.Text`
  color: ${TextColor};
  font-size: ${_WIDTH * 0.04}px;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const Level = [
  { name: "발탄", level: ["노말", "하드", "헬"] },
  { name: "비아키스", level: ["노말", "하드", "헬"] },
  { name: "쿠크세이튼", level: ["리허설", "노말"] },
  { name: "아브렐슈드", level: ["데자뷰", "노말", "하드"] },
  { name: "아르고스", level: ["1페이즈", "2페이즈", "3페이즈"] },
]

export default ({ raid, option, setOption }) => (
  <Container>
    <ColumnTitle title="난이도선택" />
    <Content>
      { Level.map((item) => {
        if (item.name === raid) {
          return (
            item.level.map((item2, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => setOption({
                  ...option,
                  level: option.level===item2 ? null : item2
                })}
              >
                <OptionBox selected={option.level === item2}>
                  <OptionText>{item2}</OptionText>
                </OptionBox>
              </TouchableOpacity>
            ))
          )
        }
      })}
    </Content>
  </Container>
)