import React from "react";
import styled from "styled-components/native";
import { HeaderColor, MainColor, _WIDTH, TextColor } from "../../../../Common/theme";
import { TouchableOpacity, ScrollView } from "react-native";
import MemberColumn from "../../../../Components/Setting/MemberColumn";

const Container = styled.View`
  flex: 1;
  background-color: ${HeaderColor};
`;

const Inner = styled.View`
  flex: 1;
  background-color: ${MainColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 0px;
`;

const TeamName = styled.Text`
  font-size: ${_WIDTH * 0.055}px;
  font-weight: bold;
  color: ${TextColor};
  padding-left: 15px;
`;

export default ({ loading, data, guild, myName }) => (
  <Container>
    <Inner>
      { !loading && (
        <>
        <TeamName>{guild}</TeamName>
        <ScrollView>
          { data.map((item, index) => (
            <MemberColumn 
              key={index} 
              data={item.nickname} 
              myName={myName}
            />
          )) }
        </ScrollView>
        </>
      )}
    </Inner>
  </Container>
)