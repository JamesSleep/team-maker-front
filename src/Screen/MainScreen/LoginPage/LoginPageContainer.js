import React, { useEffect, useState } from "react";
import LoginPagePresenter from "./LoginPagePresenter";
import { userAPI } from "../../../Common/api";
import { postMessage } from "../../../Util/postMessage";

export default ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: "", password: ""
  });

  const postData = async () => {
    if (!validation()) return;

    const data = JSON.stringify({
      "email": loginData.email,
      "password": loginData.password
    });

    const result = await userAPI.login(data);

    console.log(result);
    if (!result) postMessage("로그인정보를 확인해주세요");
    else postMessage("로그인성공");
  }

  const validation = () => {
    if (loginData.email === "") {
      postMessage("이메일을 확인해주세요");
      return false;
    }
    if (loginData.password === "") {
      postMessage("비밀번호를 확인해주세요");
      return false;
    }
    return true;
  }

  return (
    <LoginPagePresenter 
      navigation={navigation}
      postLoginData={postData}
      data={loginData}
      setData={setLoginData}
    />
  )
}