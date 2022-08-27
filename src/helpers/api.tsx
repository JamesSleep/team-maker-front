import axios from 'axios';

const URL = 'http://localhost:3000/';

axios.defaults.baseURL = URL;

const getRequest = (path: string, param: string | number) =>
  axios.get(path + param);

const getResponse = async (path: string, param: string | number) => {
  try {
  } catch (e) {}
};
