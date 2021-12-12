import React, { useState, useEffect } from "react";
import DetailRaidPresenter from "./DetailRaidPresenter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userAPI, teamAPI, raidersAPI } from "../../../../Common/api";
import { dateHandler } from "../../../../Util/scrollCalander";
import { postMessage } from "../../../../Util/postMessage";

export default ({ navigation, route }) => {
  const { raid } = route.params;
  const [data, setData] = useState({
    level: null,
    title: null,
    description: null,
    charactor: null,
    class: null,
    date: null,
    time: null
  });
  const [leader, setLeader] = useState({
    loading: true,
    info: null
  });

  const [calanderPage, setCalanderPage] = useState(0);
  const [dateObj, setDateObj] = useState([]);

  useEffect(() => {
    getLeader();
    weekHandler();
  }, [calanderPage]);

  const getLeader = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    const result = await userAPI.getOneUser(userInfo.email);
    
    setLeader({
      loading: false,
      info: result[1]
    });
  }

  const weekHandler = () => {
    let array = dateHandler(calanderPage);
    setDateObj(array);
  }

  const postDataHandler = async () => {
    for (let key in data) {
      if (data[key] === null) {
        postMessage("설정을 모두 완료해주세요.");
        return;
      } 
    }

    const leaderName = leader.info.nickname;

    const postData = JSON.stringify({
      "title": data.title,
      "leader": leaderName,
      "start_date": `${data.date.month} ${data.date.date}일 ${data.date.day}`,
      "type": raid,
      "description": data.description,
      "time": data.time,
      "level": data.level,
    });

    const result = await teamAPI.create(postData);

    if (!result[0]) {
      console.log(result);
      return;
    }
    const postRaider = JSON.stringify({
      "member_index": leader.index,
      "team_index": result[1].index,
      "char_name": data.charactor,
      "class": data.class
    });
    
    const result2 = await raidersAPI.create(postRaider);

    if (result2[0]) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'SelectRaid' }],
      });
    } else {
      console.log(result2);
    }
  }

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
  )
}