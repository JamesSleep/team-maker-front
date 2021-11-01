import axios from "axios";

const URL = "http://192.168.0.15:3000";

const getRequest = (path, params) => axios.get(`${URL}${path}`, params);
const postRequest = (path, params) => axios.post(`${URL}${path}`, params, {
  headers: { "Content-Type": "application/json" }
});

const getData = async (path, param) => {
  try {
    const {
      data: data
    } = await getRequest(path, param);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return [null, e];
  }
}

const postData = async (path, param) => {
  try {
    const {
      data: data
    } = await postRequest(path, param);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    //에러발생 메시지 만들기
    return [null, e];
  }
}

export const userAPI = {
  getAllUser: () => getData("/user/"),
  login: query => postData("/user/login", query),
  signUp: query => postData("/user/join", query)
}