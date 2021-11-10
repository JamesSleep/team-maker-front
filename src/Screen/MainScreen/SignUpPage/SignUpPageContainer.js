import React, { useState, useEffect } from "react";
import SignUpPagePresenter from "./SignUpPagePresenter";
import { userAPI } from "../../../Common/api";
import { postMessage } from "../../../Util/postMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: ""
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
    passwordCheck: true
  });

  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (first) validation();
  }, [data, first]);

  const setState = (property, value) => {
    setData({
      ...data,
      [property]: value
    });
  }

  const postData = async () => {
    // 최초진행시
    if (!first) {
      const email = emailValidation();
      const password = passwordValidation();
      const passwordCheck = data.password === data.passwordCheck;

      if (!(email && password && passwordCheck)) {
        setFirst(true);
        return;
      }
    }

    if (!(valid.email && valid.password && valid.passwordCheck)) return;

    // 중복체크
    const overlapCheck = await userAPI.getOneUser(data.email);
    if (overlapCheck[0]) {
      postMessage("중복된 이메일이 존재합니다");
      return;
    }

    const signUpData = JSON.stringify({
      "email": data.email,
      "password": data.password
    });
    
    const result = await userAPI.signUp(signUpData);

    if (result[0]) {
      console.log(result[1]);
      const user = result[1];
      await AsyncStorage.setItem("loginInfo", JSON.stringify({"token": user.auth_token}));
      await AsyncStorage.setItem(
        "userInfo",
        JSON.stringify({
          "email": data.email,
          "password": data.password,
          "guild": user.guild,
        })
      );
      //탭 화면 넘어가기
      navigation.reset({
        index: 0,
        routes: [{ name: 'Option' }],
      });
    } else {
      console.log(result[1]);
      postMessage(result[1]);
      return;
    }
  }

  const validation = () => {
    setValid({ 
      email: emailValidation(),
      password: passwordValidation(),
      passwordCheck: data.password == data.passwordCheck
    })
  }

  const emailValidation = () => {
    let atIndex = 0;
    if (data.email.length < 1) return false;
    atIndex = data.email.indexOf("@");
    if (atIndex < 1) return false;
    if (data.email.indexOf(".") > atIndex) return true;
    else return false;
  }

  const passwordValidation = () => {
    if (data.password.length > 5 && data.password.length < 21) return true;
    else return false;
  }

  return (
    <SignUpPagePresenter 
      navigation={navigation}
      postData={postData}
      setData={setState}
      data={data}
      valid={valid}
      setValid={setValid}
      setFirst={setFirst}
    />
  )
}