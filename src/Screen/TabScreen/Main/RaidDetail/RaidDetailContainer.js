import React, {useState, useEffect} from 'react';
import RaidDetailPresenter from './RaidDetailPresenter';
import {raidersAPI, userAPI} from '../../../../common/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postMessage} from '../../../../util/postMessage';

export default ({navigation, route}) => {
  const {teamInfo} = route.params;
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [joinInfo, setJoinInfo] = useState({
    charactor: '',
    class: '',
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshTrigger, setTrigger] = useState(false);
  const [joinCheck, setJoinCheck] = useState(false);

  useEffect(() => {
    getData();
  }, [refreshTrigger]);

  const getData = async () => {
    const result = await raidersAPI.getOneRaiders(teamInfo.index);
    const UserInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
    const userRequest = await userAPI.getOneUser(UserInfo.email);
    setUserInfo(userRequest[1]);

    const array = result[1];
    for (let i = 0; i < array.length; i++) {
      if (userRequest[1].index === array[i].raidInfo.member_index) {
        setJoinCheck(true);
      }
    }
    setData(array);
    setLoading(false);
  };

  const joinRaid = async () => {
    if (teamInfo.type === '쿠크세이튼') {
      if (data.length === 4) {
        postMessage('인원이 가득찼습니다.');
        return;
      }
    } else if (data.length === 8) {
      postMessage('인원이 가득찼습니다.');
      return;
    }
    const postData = JSON.stringify({
      member_index: userInfo.index,
      team_index: teamInfo.index,
      char_name: joinInfo.charactor,
      class: joinInfo.class,
    });
    const result = await raidersAPI.create(postData);
    if (result[0]) {
      setTrigger(!refreshTrigger);
      setJoinCheck(true);
    }
  };

  const removeRaid = async () => {
    let index;
    for (let i = 0; i < data.length; i++) {
      if (userInfo.index === data[i].userInfo.index) {
        index = data[i].raidInfo.index;
      }
    }
    const result = await raidersAPI.remove(index);
    if (result[0]) {
      setTrigger(!refreshTrigger);
      setJoinCheck(false);
    }
  };

  return (
    <RaidDetailPresenter
      navigation={navigation}
      teamInfo={teamInfo}
      data={data}
      setData={setData}
      loading={loading}
      userInfo={userInfo}
      joinInfo={joinInfo}
      setJoinInfo={setJoinInfo}
      visible={isModalVisible}
      setVisible={setModalVisible}
      joinRaid={joinRaid}
      joinCheck={joinCheck}
      cancelRaid={removeRaid}
    />
  );
};
