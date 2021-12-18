import React from "react";
import styled from "styled-components/native";
import { MainColor, TextColor, HeaderColor } from "../../../../Common/theme";
import { TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import RaidBox from "../../../../Components/RaidList/RaidBox";
import RaidFilter from "../../../../Components/RaidList/RaidFilter";

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

const GarbageBox = styled.View`
  margin-bottom: 90px;
`;

export default ({ navigation, data, getData, filter, setFilter, nickname, refreshing, setRefreshing }) => (
  <Container>
    <Inner>
      <RaidFilter filter={filter} setFilter={setFilter} />
      <ScrollView
        refreshControl={
          <RefreshControl 
            onRefresh={async() => {
              setRefreshing(true);
              await getData();
              setRefreshing(false);
            }}
            refreshing={refreshing}
            enabled={false}
            tintColor={"white"}
          />
        }
      >
        { data.map((item, index) => (
          <RaidBox 
            key={index} 
            data={item} 
            navigation={navigation} 
            myName={nickname}
          />
        ))}
        <GarbageBox />
      </ScrollView>
    </Inner>
  </Container>
)