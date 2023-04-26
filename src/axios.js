import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://18.183.199.196:8000/backend-service',
});

export default baseAxios;
