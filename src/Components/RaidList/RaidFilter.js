import React from 'react';
import styled from 'styled-components/native';
import { TextColor, TintColor, ButtonColor } from '../../common/theme';
import { ScrollView, TouchableOpacity, Image } from 'react-native';

const Container = styled.View`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom-width: 0.2px;
  border-bottom-color: ${ButtonColor};
`;

const Title = styled.Text`
  color: ${TextColor};
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FilterBox = styled.View`
  width: 60px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const FilterIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${TintColor};
`;

const FilterText = styled.Text`
  margin-top: 5px;
  color: ${TextColor};
  font-size: 11px;
`;

const FilterList = [
  { name: '발탄', url: require('../../images/baltan_icon.png') },
  { name: '비아키스', url: require('../../images/viakiss.png') },
  { name: '쿠크세이튼', url: require('../../images/kukosaton_icon.png') },
  { name: '아브렐슈드', url: require('../../images/abrellsude_icon.png') },
  { name: '아르고스', url: require('../../images/argos_icon.png') },
  { name: '기타', url: require('../../images/etc_icon.png') },
];

export default ({ filter, setFilter }) => (
  <Container>
    {/* <Title>필터</Title> */}
    <ScrollView horizontal>
      {FilterList.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            filter === item.name ? setFilter('') : setFilter(item.name);
          }}
        >
          <FilterBox>
            <FilterIcon source={item.url} resizeMode="cover" />
            <FilterText>{item.name}</FilterText>
          </FilterBox>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </Container>
);
