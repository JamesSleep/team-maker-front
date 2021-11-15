import React, { useState } from "react";
import QuestionPresenter from "./QuestionPresenter";
import { userAPI } from "../../../../Common/api";
import { postMessage } from "../../../../Util/postMessage";

export default ({ navigation, route }) => {
  const { email } = route.params.userInfo;
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  const postData = async () => {
    if (data.title.length < 1) {
      postMessage("제목을 입력해주세요.");
      return;
    }
    if (data.content.length < 1) {
      postMessage("내용을 입력해주세요.");
      return;
    }
    const post = JSON.stringify({
      "email": email,
      "title": data.title,
      "content": data.content
    });
    const result = await userAPI.question(post);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Menu' }],
    });
  }

  return (
    <QuestionPresenter 
      navigation={navigation}
      data={data}
      setData={setData}
      postData={postData}
    />
  )
}