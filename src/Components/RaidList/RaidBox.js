import React from 'react';
import styled from 'styled-components/native';
import {
  SubColor,
  TextColor,
  TintColor,
  PlaceHolder,
  ButtonColor,
  _WIDTH,
} from '../../common/theme';
import { textCut } from '../../util/textCut';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  width: 100%;
  height: 130px;
  background-color: ${SubColor};
  margin: 10px 0px;
  border-radius: 10px;
  padding: 12px 15px;
`;

const InfoColumn = styled.View`
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 10px;
`;

const TextBox = styled.View`
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${TextColor};
  font-size: 19px;
  font-weight: bold;
`;

const LeaderView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Leader = styled.Text`
  color: ${PlaceHolder};
  font-size: 16px;
  margin-right: 5px;
`;

const Date = styled.Text`
  color: ${PlaceHolder};
  font-size: 14px;
`;

const ButtonColumn = styled.View`
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LevelView = styled.View`
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${TextColor};
  border-radius: 10px;
`;

const LevelText = styled.Text`
  color: ${TextColor};
  font-size: 13px;
`;

const JoinButton = styled.View`
  width: 80px;
  height: 30px;
  background-color: ${ButtonColor};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const CountText = styled.Text`
  color: ${TextColor};
  font-size: 15px;
`;

const IconList = {
  발탄: require('../../images/baltan_icon.png'),
  비아키스: require('../../images/viakiss.png'),
  쿠크세이튼: require('../../images/kukosaton_icon.png'),
  아브렐슈드: require('../../images/abrellsude_icon.png'),
  아르고스: require('../../images/argos_icon.png'),
  기타: require('../../images/etc_icon.png'),
};

export default ({ data, navigation, myName, route }) => (
  <Container>
    <InfoColumn>
      <Icon source={IconList[data.type]} resizeMode="cover" />
      <TextBox>
        <Title>{textCut(data.title, 15)}</Title>
        <LeaderView>
          <Leader>{data.leader}</Leader>
          {myName === data.leader && (
            <FontAwesome name="user" size={_WIDTH * 0.04} color={TextColor} />
          )}
        </LeaderView>
        <Date>{`${data.start_date} ${data.time}`}</Date>
      </TextBox>
    </InfoColumn>
    <ButtonColumn>
      <LevelView>
        <LevelText>{data.level}</LevelText>
      </LevelView>
      <TouchableOpacity
        onPress={() => {
          route
            ? navigation.navigate({
                name: 'DetailJoin',
                params: { teamInfo: data },
              })
            : navigation.navigate({
                name: 'RaidDetail',
                params: { teamInfo: data },
              });
        }}
      >
        <JoinButton>
          <CountText>상세정보</CountText>
        </JoinButton>
      </TouchableOpacity>
    </ButtonColumn>
  </Container>
);
