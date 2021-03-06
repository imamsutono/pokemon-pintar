import axios from 'axios';
import {BASE_URL} from './config';

const fetchApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default fetchApi;
