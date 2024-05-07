import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devfront.staging.shoppbud.com.br',
});

export default api;
