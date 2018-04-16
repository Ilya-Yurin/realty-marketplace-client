import axios from 'axios';
import _ from 'lodash';
import { GENERAL } from '../constants/';

const baseUrl = `${_.trimEnd(GENERAL.API_BASE_URL, '/')}/${_.trimEnd(GENERAL.API_PREFIX_V1, '/')}`;

const HTTP = axios.create({
  baseURL: baseUrl,
});

export default HTTP;
