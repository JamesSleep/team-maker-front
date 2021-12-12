import React from "react";
import styled from "styled-components/native";
import ColumnTitle from "./ColumnTitle";
import { TextColor, _WIDTH, SubColor, PlaceHolder, MainColor, TintColor } from "../../Common/theme";
import { Image, ScrollView, TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-bottom: 20px;
`;

const InputView = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.13}px;
  padding-left: 15px;
  margin-bottom: 10px;
  background-color: ${SubColor};
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${_WIDTH * 0.125}px;
  padding-left: 0px;
  font-size: 17px;
  color: ${TextColor};
`;

const Text = styled.Text`
  font-size: 17px;
  color: ${TextColor};
`;

const ClassBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 5px;
  padding: 5px;
  background-color: ${prop=>prop.selected ? TintColor : MainColor};
  border-radius: 10px;
`;

const ClassName = styled.Text`
  color: ${TextColor};
  font-size: 12px;
  margin-top: 5px;
  font-weight: 700;
`;

export default ({ data, setData, leader }) => (
  <Container>
    <ColumnTitle title="공대장 정보" />
    <InputView>
      <Text>{leader.nickname}</Text>
    </InputView>
    <InputView>
      <TextInput
        placeholder="참가할 캐릭터명"
        placeholderTextColor={PlaceHolder}
        value={data.charactor}
        onChangeText={text=>setData({...data, charactor: text})}
      />
    </InputView>
    <ScrollView 
      horizontal
      contentContainerStyle={{ marginVertical: 5 }}
    >
      { ClassList.map((item, index) => (
        <TouchableOpacity 
          key={index}
          onPress={() => setData({...data, class: item.name})}
        >
          <ClassBox selected={data.class===item.name}>
            <Image 
              source={item.url} 
              style={{ width: 50, height: 50 }} 
              resizeMode="contain"
            />
            <ClassName>{item.name}</ClassName>
          </ClassBox>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </Container>
);

const ClassList = [
  { name: "디스트로이어", url: require("../../images/destroyer.png") },
  { name: "워로드", url: require("../../images/warload.png") },
  { name: "버서커", url: require("../../images/berserker.png") },
  { name: "홀리나이트", url: require("../../images/holynight.png") },
  { name: "배틀마스터", url: require("../../images/battlemaster.png") },
  { name: "인파이터", url: require("../../images/infighter.png") },
  { name: "기공사", url: require("../../images/soulmaster.png") },
  { name: "창술사", url: require("../../images/lancemaster.png") },
  { name: "스트라이커", url: require("../../images/striker.png") },
  { name: "데빌헌터", url: require("../../images/devilhunter.png") },
  { name: "블래스터", url: require("../../images/blaster.png") },
  { name: "호크아이", url: require("../../images/hawkeye.png") },
  { name: "스카우터", url: require("../../images/scouter.png") },
  { name: "건슬링어", url: require("../../images/gunslinger.png") },
  { name: "바드", url: require("../../images/bard.png") },
  { name: "서머너", url: require("../../images/summoner.png") },
  { name: "아르카나", url: require("../../images/arcana.png") },
  { name: "소서리스", url: require("../../images/sorceress.png") },
  { name: "블레이드", url: require("../../images/blade.png") },
  { name: "데모닉", url: require("../../images/demonic.png") },
  { name: "리퍼", url: require("../../images/reaper.png") },
]