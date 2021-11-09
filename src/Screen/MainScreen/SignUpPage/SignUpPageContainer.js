import React, { useState, useEffect } from "react";
import SignUpPagePresenter from "./SignUpPagePresenter";
import { userAPI } from "../../../Common/api";

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
    if (!(valid.email && valid.password && valid.passwordCheck && first)) {
      setFirst(true); return;
    }
    const signUpData = JSON.stringify({
      "email": data.email,
      "password": data.password
    });
    
    const result = await userAPI.signUp(signUpData);

    if (result[0]) {
      console.log(result);
      console.log("complete");
    } else {
      console.log(result[1]);
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