import React from 'react';
import styled from 'styled-components/native';
import {TextColor, MainColor, SubColor, PlaceHolder} from '../../common/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin: 10px 0px;
  padding: 5px 20px;
  background-color: ${SubColor};
  align-items: center;
  border-radius: 10px;
`;

const ClassImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const InfoColumn = styled.View`
  margin-left: 15px;
`;

const CharNameBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CharName = styled.Text`
  color: ${TextColor};
  font-size: 18px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Nickname = styled.Text`
  color: ${PlaceHolder};
  font-size: 14px;
`;

const ClassIcon = {
  디스트로이어: {url: require('../../images/destroyer.png')},
  워로드: {url: require('../../images/warload.png')},
  버서커: {url: require('../../images/berserker.png')},
  홀리나이트: {url: require('../../images/holynight.png')},
  배틀마스터: {url: require('../../images/battlemaster.png')},
  인파이터: {url: require('../../images/infighter.png')},
  기공사: {url: require('../../images/soulmaster.png')},
  창술사: {url: require('../../images/lancemaster.png')},
  스트라이커: {url: require('../../images/striker.png')},
  데빌헌터: {url: require('../../images/devilhunter.png')},
  블래스터: {url: require('../../images/blaster.png')},
  호크아이: {url: require('../../images/hawkeye.png')},
  스카우터: {url: require('../../images/scouter.png')},
  건슬링어: {url: require('../../images/gunslinger.png')},
  바드: {url: require('../../images/bard.png')},
  서머너: {url: require('../../images/summoner.png')},
  아르카나: {url: require('../../images/arcana.png')},
  소서리스: {url: require('../../images/sorceress.png')},
  블레이드: {url: require('../../images/blade.png')},
  데모닉: {url: require('../../images/demonic.png')},
  리퍼: {url: require('../../images/reaper.png')},
};

export default ({raidInfo, userInfo, leader}) => (
  <Container>
    <ClassImage source={ClassIcon[raidInfo.class].url} resizeMode="contain" />
    <InfoColumn>
      <CharNameBox>
        <CharName>{raidInfo.char_name}</CharName>
        {leader === userInfo.nickname && (
          <Icon name="crown" color={TextColor} size={20} />
        )}
      </CharNameBox>
      <Nickname>{userInfo.nickname}</Nickname>
    </InfoColumn>
  </Container>
);
