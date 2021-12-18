import React, { useState, useEffect } from "react";
import JoinedListPresenter from "./JoinedListPresenter";
import { teamAPI, userAPI } from "../../../../Common/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {
  const [filter, setFilter] = useState(true);
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    const searchUser = await userAPI.getOneUser(userInfo.email);
    setUserInfo(searchUser[1]);

    if (!searchUser[0]) return;

    const searchTeam = await teamAPI.getAllTeamByMan(searchUser[1].index);
    let array = searchTeam[1];

    const today = new Date();
    const timestamp = today.getTime();

    if (filter) {
      array = array.filter(item => item.timestamp >= timestamp);
      setData(array);
    } else {
      array = array.filter(item => item.timestamp < timestamp);
      setData(array);
    }
    setLoading(false);
  }

  return (
    <JoinedListPresenter 
      navigation={navigation}
      filter={filter}
      setFilter={setFilter}
      data={data}
      userInfo={userInfo}
      loading={loading}
      setLoading={setLoading}
    />
  )
}