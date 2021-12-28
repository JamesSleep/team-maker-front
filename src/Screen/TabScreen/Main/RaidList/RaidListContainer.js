import React, { useState, useEffect } from "react";
import RaidListPresenter from "./RaidListPresenter";
import { teamAPI, userAPI } from "../../../../Common/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [myName, setMyName] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const UserInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    const result = await teamAPI.getAllTeam();
    const Guild = await userAPI.findGuild(UserInfo.guild);

    if (!result[0]) return;

    let array = result[1];
    let guildArray = Guild[1];

    array = array.filter(item => {
      for (let i=0; i<guildArray.length; i++) {
        if (item.leader === guildArray[i].nickname)
          return item;
      }
    });

    if (filter != "") {
      array = array.filter(item => item.type === filter);
    }

    const today = new Date();
    const timestamp = today.getTime();
    array = array.filter(item => item.timestamp >= timestamp);

    setData(array);
    setMyName(UserInfo.nickname);
  }

  return (
    <RaidListPresenter 
      navigation={navigation}
      data={data}
      filter={filter}
      setFilter={setFilter}
      nickname={myName}
      refreshing={refreshing}
      setRefreshing={setRefreshing}
      getData={getData}
    />
  )
}