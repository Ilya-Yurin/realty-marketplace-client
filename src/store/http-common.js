import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {
    Authorization: 'Bearer {token}',
  },
});

export default HTTP;
