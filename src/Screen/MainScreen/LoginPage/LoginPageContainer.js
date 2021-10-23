import React, { useEffect } from "react";
import LoginPagePresenter from "./LoginPagePresenter";
import { userAPI } from "../../../Common/api";

export default ({ navigation }) => {

  const test = async () => {
    await userAPI.getAllUser();
  }

  return (
    <LoginPagePresenter 
      navigation={navigation}
      postLoginData={test}
    />
  )
}