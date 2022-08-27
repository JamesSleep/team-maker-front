import React from 'react';
import styled from 'styled-components/native';
import {
  HeaderColor,
  MainColor,
  ButtonColor,
  TextColor,
  SubColor,
  TintColor,
} from '../../../../common/theme';
import RaidInfoColumn from '../../../../components/RaidDetail/RaidInfoColumn';
import { ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import RaidMember from '../../../../components/RaidDetail/RaidMember';
import Modal from 'react-native-modal';
import LeaderColumn from '../../../../components/DetailRaid/LeaderColumn';

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

const Button = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${ButtonColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 100px;
`;

const ButtonText = styled.Text`
  color: ${TextColor};
  font-size: 18px;
  font-weight: bold;
`;

const ModalView = styled.View`
  background-color: ${MainColor};
  padding: 15px;
  border-radius: 10px;
`;

const ModalButton = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${ButtonColor};
  border-radius: 15px;
`;

const ModalButtonText = styled.Text`
  color: ${TextColor};
  font-size: 16px;
  font-weight: bold;
`;

export default ({
  navigation,
  teamInfo,
  data,
  setData,
  loading,
  userInfo,
  joinInfo,
  setJoinInfo,
  visible,
  setVisible,
  joinRaid,
  cancelRaid,
  joinCheck,
  deleteRaid,
  timestamp,
}) => (
  <Container>
    <Inner>
      {loading && <ActivityIndicator size="large" color={TextColor} />}
      {!loading && (
        <ScrollView>
          <RaidInfoColumn data={teamInfo} />
          {data.map((item, index) => (
            <RaidMember
              key={index}
              raidInfo={item.raidInfo}
              userInfo={item.userInfo}
              leader={teamInfo.leader}
            />
          ))}
          {userInfo.nickname != teamInfo.leader ? (
            !timestamp && (
              <TouchableOpacity
                onPress={() => {
                  joinCheck ? cancelRaid() : setVisible(true);
                }}
              >
                <Button>
                  <ButtonText>{joinCheck ? '파티탈퇴' : '참가신청'}</ButtonText>
                </Button>
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity onPress={() => deleteRaid()}>
              <Button>
                <ButtonText>파티모집중단</ButtonText>
              </Button>
            </TouchableOpacity>
          )}
          <Modal isVisible={visible}>
            <ModalView>
              <LeaderColumn
                leader={userInfo}
                data={joinInfo}
                setData={setJoinInfo}
                title={'참가자 정보'}
              />
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  joinRaid();
                }}
              >
                <ModalButton>
                  <ModalButtonText>신청완료</ModalButtonText>
                </ModalButton>
              </TouchableOpacity>
            </ModalView>
          </Modal>
        </ScrollView>
      )}
    </Inner>
  </Container>
);
