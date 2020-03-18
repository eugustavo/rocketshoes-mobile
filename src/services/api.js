import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eugustavo/api-rocketshoes-json',
});

export default api;
