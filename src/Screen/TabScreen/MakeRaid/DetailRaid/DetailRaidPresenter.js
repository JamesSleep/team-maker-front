import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor, HeaderColor, _WIDTH, ButtonColor, TintColor } from "../../../../Common/theme";
import MenuColumn from "../../../../Components/Setting/MenuColumn";
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import SelectLevel from "../../../../Components/DetailRaid/SelectLevel";
import RaidTitle from "../../../../Components/DetailRaid/RaidTitle";
import LeaderColumn from "../../../../Components/DetailRaid/LeaderColumn";
import DateSetting from "../../../../Components/DetailRaid/DateSetting";

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
  padding: 35px 13px 20px 13px;
`;

const Button = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${ButtonColor};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 90px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${_WIDTH * 0.045}px;
  color: ${TextColor};
  font-weight: bold;
`;

export default ({ raid, data, setData, leader, loading, dateObj, calanderPage, setCalanderPage, postDataHandler }) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
    <Container>
      <Inner>
        <ScrollView>
          { !loading && (
            <>
              { raid !== "기타" && (
                <SelectLevel raid={raid} option={data} setOption={setData} />
              )}
              <RaidTitle data={data} setData={setData} />
              <LeaderColumn data={data} setData={setData} leader={leader} title={"공대장 정보"} />
              <DateSetting 
                dateObj={dateObj} 
                page={calanderPage} 
                setPage={setCalanderPage} 
                data={data} 
                setData={setData} 
              />
              <TouchableOpacity onPress={() => postDataHandler()}>
                <Button>
                  <ButtonText>레이드 생성</ButtonText>
                </Button>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </Inner>
    </Container>
  </KeyboardAvoidingView>
)