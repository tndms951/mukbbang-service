import axios from 'axios';

// 절대 경로로 지정하는 것
const instance = axios.create({
  baseURL: 'https://api.mercuryeunoia.com'
});

export const setAuthorization = (token) => {
  instance.defaults.headers.common.Authorization = token;
  console.log(token);
};

export const setAuthorizationReset = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
