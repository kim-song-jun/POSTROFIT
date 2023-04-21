import axios from 'axios';

const baseAxios = axios.create({
  // baseURL: 'http://54.168.210.4:8000/backend-service',
  baseURL: 'http://18.183.199.196:8000/backend-service/',
});

export default baseAxios;
