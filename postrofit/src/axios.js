import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://yukmaro.cafe24.com:8080/backend-service',
});

export default baseAxios;
