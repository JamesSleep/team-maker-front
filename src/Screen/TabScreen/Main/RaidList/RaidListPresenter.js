import React from 'react';
import styled from 'styled-components/native';
import {MainColor, TextColor, HeaderColor} from '../../../../common/theme';
import {TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import RaidBox from '../../../../components/RaidList/RaidBox';
import RaidFilter from '../../../../components/RaidList/RaidFilter';

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

const Empty = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: 20px;
  color: ${TextColor};
`;

export default ({
  navigation,
  data = [],
  getData,
  filter,
  setFilter,
  nickname,
  refreshing,
  setRefreshing,
}) => (
  <Container>
    <Inner>
      <RaidFilter filter={filter} setFilter={setFilter} />
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={async () => {
              setRefreshing(true);
              await getData();
              setRefreshing(false);
            }}
            refreshing={refreshing}
            enabled={false}
            tintColor={'white'}
          />
        }
      >
        {data.length < 1 && (
          <Empty>
            <EmptyText>{`등록된 레이드가 없습니다\n`}</EmptyText>
            <EmptyText>새로운 레이드를 만들어보세요!</EmptyText>
          </Empty>
        )}
        {data.map((item, index) => (
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
);
