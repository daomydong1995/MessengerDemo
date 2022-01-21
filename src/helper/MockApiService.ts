import axios from 'axios';
import {Alert} from 'react-native';
const baseUrl = 'https://61e987e97bc0550017bc6360.mockapi.io';
const timeOut = 1000 * 20;

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Acess-Control-Allow-Origin': '*',
  Accept: 'application/json',
  // 	,
};

const mockApi = axios.create({
  baseURL: baseUrl,
  headers: headers,
  timeout: timeOut,
});
// baseURL: Core.baseUrl
mockApi.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

mockApi.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      Alert.alert(error.response.headers);
    } else {
      Alert.alert(error.message);
    }
    return Promise.resolve({error});
  },
);

export const mockApiGet = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    mockApi
      .get(url, {params})
      .then(({data}) => {
        resolve(data);
      })
      .catch(err => {
        reject({err: JSON.stringify(err)});
      });
  });
};
