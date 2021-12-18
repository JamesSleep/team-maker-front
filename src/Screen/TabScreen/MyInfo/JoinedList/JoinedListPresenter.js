import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor, HeaderColor, PlaceHolder } from "../../../../Common/theme";
import { TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import RaidBox from "../../../../Components/RaidList/RaidBox";

const Container = styled.View`
  flex: 1;
  background-color: ${HeaderColor};
`;

const Inner = styled.View`
  flex: 1;
  background-color: ${MainColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 13px 10px 13px;
`;

const FilterView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterText = styled.Text`
  color: ${props => props.select ? TextColor : PlaceHolder};
  font-size: 15px;
`;

const FilterLine = styled.View`
  width: 1px;
  height: 20px;
  border-color: ${TextColor};
  border-width: 0.5px;
  margin: 0px 20px;
`;

const LoadingView = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export default ({ navigation, filter, setFilter, data, userInfo, loading, setLoading }) => (
  <Container>
    <Inner>
      <FilterView>
        <TouchableOpacity onPress={() => {
          setLoading(true);
          setFilter(true);
        }}>
          <FilterText select={filter}>진행중인 레이드</FilterText>
        </TouchableOpacity>
        <FilterLine />
        <TouchableOpacity onPress={() => {
          setLoading(true);
          setFilter(false)
        }}>
          <FilterText select={!filter}>종료된 레이드</FilterText>
        </TouchableOpacity>
      </FilterView>
      <ScrollView >
        {
          loading ? (
            <LoadingView>
              <ActivityIndicator 
                size="large"
                color={TextColor}
              />
            </LoadingView>
          ) : (
            data.map((item, index) => (
              <RaidBox 
                key={index}
                data={item}
                navigation={navigation}
                myName={userInfo.nickname}
                route={true}
              />
            ))
          )
        }
      </ScrollView>
    </Inner>
  </Container>
)