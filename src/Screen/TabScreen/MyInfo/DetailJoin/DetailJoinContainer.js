import React, {useState, useEffect} from 'react';
import DetailJoinPresenter from './DetailJoinPresenter';
import {raidersAPI, userAPI, teamAPI} from '../../../../common/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RaidDetailPresenter from '../../Main/RaidDetail/RaidDetailPresenter';

export default ({navigation, route}) => {
  const {teamInfo} = route.params;
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [joinCheck, setJoinCheck] = useState(false);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    getData();
  }, []);

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

    const today = new Date();
    const time = today.getTime();

    setTimestamp(time > teamInfo.timestamp);
    setData(array);
    setLoading(false);
  };

  const deleteRaid = async () => {
    const result = await teamAPI.remove(teamInfo.index);

    if (result[0]) {
      navigation.reset({
        index: 0,
        routes: [{name: 'JoinList'}],
      });
    }
  };

  return (
    <RaidDetailPresenter
      teamInfo={teamInfo}
      data={data}
      loading={loading}
      userInfo={userInfo}
      visible={false}
      joinCheck={joinCheck}
      deleteRaid={deleteRaid}
      timestamp={timestamp}
    />
  );
};
