import React, { useState, useEffect } from "react";
import SelectOptionPresenter from "./SelectOptionPresenter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postMessage } from "../../../Util/postMessage";
import { userAPI } from "../../../Common/api";
import { Alert } from "react-native";

export default ({ navigation }) => {
  const [data, setData] = useState("");

  const postData = async () => {
    if (data.length < 1) {
      postMessage("팀명을 입력해주세요");
      return;
    }
    const result = await userAPI.findGuild(data);
    if (!result[0]) {
      Alert.alert(
        "",
        `${data} 팀이 존재하지않습니다\n새로운 팀을 생성하시겠습니까?`,
        [
          { text: "예", onPress: () => alertHandler()},
          { text: "아니오", style: "cancel" }
        ]
      );
    } else alertHandler();
  }

  const alertHandler = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    const userData = JSON.stringify({
      "email": userInfo.email,
      "password": userInfo.password,
      "guild": data,
      "nickname": userInfo.nickname
    });
    console.log("디버깅",userData);
    await AsyncStorage.setItem(
      "userInfo",
      userData
    );
    const result = await userAPI.modify(userData);
    if (result[0]) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      console.log(result);
    }
  }

  return (
    <SelectOptionPresenter 
      postData={postData}
      data={data}
      setData={setData}
    />
  )
}