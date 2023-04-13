import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://54.168.210.4:8000//backend-service',
});

export default baseAxios;
