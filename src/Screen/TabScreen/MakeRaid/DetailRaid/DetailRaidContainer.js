import React, {useState, useEffect} from 'react';
import DetailRaidPresenter from './DetailRaidPresenter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userAPI, teamAPI, raidersAPI} from '../../../../common/api';
import {dateHandler} from '../../../../util/scrollCalander';
import {postMessage} from '../../../../util/postMessage';

export default ({navigation, route}) => {
  const {raid} = route.params;
  const [data, setData] = useState({
    level: null,
    title: null,
    description: null,
    charactor: null,
    class: null,
    date: null,
    time: {text: null, hour: null},
  });
  const [leader, setLeader] = useState({
    loading: true,
    info: null,
  });

  const [calanderPage, setCalanderPage] = useState(0);
  const [dateObj, setDateObj] = useState([]);

  useEffect(() => {
    getLeader();
    weekHandler();
  }, [calanderPage]);

  const getLeader = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
    const result = await userAPI.getOneUser(userInfo.email);

    setLeader({
      loading: false,
      info: result[1],
    });
  };

  const weekHandler = () => {
    let array = dateHandler(calanderPage);
    setDateObj(array);
  };

  const postDataHandler = async () => {
    for (let key in data) {
      if (data[key] === null) {
        postMessage('설정을 모두 완료해주세요.');
        return;
      }
    }

    const leaderName = leader.info.nickname;

    const MonthArray = [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];
    let timestamp;
    const thisDay = new Date();
    thisDay.setFullYear(data.date.year);
    thisDay.setMonth(data.date.month);
    thisDay.setDate(data.date.date);
    thisDay.setHours(data.time.hour);
    thisDay.setMinutes(0);
    thisDay.setSeconds(0);
    timestamp = thisDay.getTime();

    const postData = JSON.stringify({
      title: data.title,
      leader: leaderName,
      start_date: `${MonthArray[data.date.month]} ${data.date.date}일 ${
        data.date.day
      }`,
      type: raid,
      description: data.description,
      time: data.time.text,
      level: data.level,
      timestamp: timestamp.toString(),
    });

    const result = await teamAPI.create(postData);

    if (!result[0]) {
      console.log(result);
      return;
    }

    const leaderIndex = leader.info.index;
    const postRaider = JSON.stringify({
      member_index: leaderIndex,
      team_index: result[1].index,
      char_name: data.charactor,
      class: data.class,
    });

    const result2 = await raidersAPI.create(postRaider);

    if (result2[0]) {
      navigation.reset({
        index: 0,
        routes: [{name: 'RaidList'}],
      });
      navigation.reset({
        index: 0,
        routes: [{name: 'SelectRaid'}],
      });
    } else {
      console.log(result2);
    }
  };

  return (
    <DetailRaidPresenter
      raid={raid}
      data={data}
      setData={setData}
      leader={leader.info}
      loading={leader.loading}
      dateObj={dateObj}
      calanderPage={calanderPage}
      setCalanderPage={setCalanderPage}
      postDataHandler={postDataHandler}
    />
  );
};
