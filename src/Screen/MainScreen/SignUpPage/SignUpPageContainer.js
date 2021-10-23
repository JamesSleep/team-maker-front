import React, { useState } from "react";
import SignUpPagePresenter from "./SignUpPagePresenter";
import { userAPI } from "../../../Common/api";

export default ({ navigation }) => {
  const [data, setData] = useState({
    guild: "",
    email: "",
    password: "",
    passwordCheck: ""
  });

  const setState = (property, value) => {
    setData({
      ...data,
      [property]: value
    });
  }

  const postData = async () => {
    // 유효성 검사 추가

    const signUpData = JSON.stringify({
      "guild": data.guild,
      "email": data.email,
      "password": data.password
    });

    console.log(signUpData);
    
    const result = await userAPI.signUp(signUpData);

    if (result) {
      console.log("complete");
    } else {
      console.log("error");
    }
  }

  return (
    <SignUpPagePresenter 
      navigation={navigation}
      postData={postData}
      setData={setState}
      data={data}
    />
  )
}