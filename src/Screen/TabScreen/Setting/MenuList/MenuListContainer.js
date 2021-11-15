import React, { useState, useEffect } from "react";
import MenuListPresenter from "./MenuListPresenter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export default ({ navigation }) => {
  const MyInfoItem = [
    { title: "개인정보 관리", icon: "user", tint: true, 
      func: () => navigation.navigate({ name: "MyInfo", params: { userInfo: data.user } })},
    { title: "비밀번호 변경", icon: "lock", tint: true, 
      func: () => navigation.navigate({ name: "PassFind", params: { parent: "Setting" } }) },
    { title: "팀 정보", icon: "flag", tint: true,
      func: () => navigation.navigate({ name: "TeamInfo", params: { userInfo: data.user } })},
    { title: "알림설정", icon: "bells", tint: false },
  ];
  
  const SupItem = [
    { title: "문의하기", icon: "mail", tint: true,
      func: () => navigation.navigate({ name: "Question", params: { userInfo: data.user } })},
    { title: "로그아웃", icon: "logout", tint: false,
      func: () => message()},
  ];

  const [data, setData] = useState({
    loading: false,
    user: null
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("userInfo"));
    setData({
      loading: true,
      user: user
    });
  }

  const message = () => {
    Alert.alert(
      "",
      "로그아웃 하시겠습니까?",
      [
        { text: "예", onPress: () => logout()},
        { text: "아니오", style: "cancel" }
      ]
    );
  }

  const logout = async () => {
    await AsyncStorage.multiRemove(["loginInfo", "userInfo"]);
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
  }

  return (
    <MenuListPresenter 
      MyInfoItem={MyInfoItem}
      SupItem={SupItem}
      loading={data.loading}
    />
  )
}