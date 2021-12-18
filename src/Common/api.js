import axios from "axios";
import { postMessage } from "../Util/postMessage";

//const URL = "http://34.233.79.112:3000"; // amazon
const URL = "http://192.168.0.15:3000"; //macbook

const getRequest = (path, params) => axios.get(`${URL}${path}${params}`);
const postRequest = (path, params) => axios.post(`${URL}${path}`, params, {
  headers: { "Content-Type": "application/json" }
});

const getData = async (path, param) => {
  try {
    const {
      data: data
    } = await getRequest(path, param);
    console.log(data);
    return [data.success, data.data];
  } catch (e) {
    console.log(e);
    postMessage("서버에 접속할 수 없습니다");
    return [null, e];
  }
}

const postData = async (path, param) => {
  try {
    const {
      data: data
    } = await postRequest(path, param);
    console.log(data);
    return [data.success, data.data];
  } catch (e) {
    console.log(e);
    postMessage("서버에 접속할 수 없습니다");
    //에러발생 메시지 만들기
    return [null, e];
  }
}

export const userAPI = {
  getAllUser: () => getData("/user", "/"),
  getOneUser: query => getData("/user/findUser/", query),
  findPassword: query => getData("/user/findPass/", query),
  findGuild: query => getData("/user/findGuild/", query),
  delete: query => getData("/user/delete/", query),
  login: query => postData("/user/login", query),
  signUp: query => postData("/user/join", query),
  modify: query => postData("/user/modify", query),
  question: query => postData("/user/question", query)
}

export const teamAPI = {
  getAllTeam: () => getData("/team", "/"),
  getOneTeam: query => getData("/team/findTeam/", query),
  getAllTeamByMan: query => getData("/team/findTeamByMan/", query),
  create: query => postData("/team/make/", query),
  remove: query => getData("/team/remove/", query)
}

export const raidersAPI = {
  create: query => postData("/raiders/make/", query),
  getOneRaiders: query => getData("/raiders/", query),
  remove: query => getData("/raiders/delete/", query),
}