import React, { useState, useEffect } from "react";
import RaidListPresenter from "./RaidListPresenter";
import { teamAPI } from "../../../../Common/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [myName, setMyName] = useState("");

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const result = await teamAPI.getAllTeam();
    if (!result[0]) return;

    if (filter != "") {
      let array = result[1];
      array = array.filter(item => item.type === filter);
      setData(array);
    } else setData(result[1]);

    const UserInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    setMyName(UserInfo.nickname);
  }

  return (
    <RaidListPresenter 
      navigation={navigation}
      data={data}
      filter={filter}
      setFilter={setFilter}
      nickname={myName}
    />
  )
}