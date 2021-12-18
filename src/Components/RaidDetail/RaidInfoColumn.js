import React from "react";
import styled from "styled-components/native";
import { TextColor, PlaceHolder, ButtonColor, TintColor } from "../../Common/theme";

const Container = styled.View`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-color: ${ButtonColor};
  border-bottom-width: 0.2px;
`;

const Title = styled.Text`
  color: ${TextColor};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Leader = styled.Text`
  color: ${PlaceHolder};
  font-size: 14px;
  margin-bottom: 10px;
`;

const Date = styled.Text`
  color: ${PlaceHolder};
  font-size: 14px;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  color: ${TextColor};
  font-size: 15px;
`;

const BlockBox = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

const RaidBlock = styled.View`
  width: 90px;
  height: 30px;
  background-color: ${ButtonColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const BlockText = styled.Text`
  color: ${TextColor};
  font-size: 15px;
`;

export default ({ data }) => (
  <Container>
    <Title>{data.title}</Title>
    <Leader>{data.leader}</Leader>
    <Date>{`${data.start_date} ${data.time}`}</Date>
    <BlockBox>
      <RaidBlock>
        <BlockText>{data.type}</BlockText>
      </RaidBlock>
      <RaidBlock>
        <BlockText>{data.level}</BlockText>
      </RaidBlock>
    </BlockBox>
    <Description>{data.description}</Description>
  </Container>
)