/* eslint-env browser */

/* global
  fetch
*/
import axios from 'axios';

export const baseUrl = (process.env.NODE_ENV === 'production')
  ? 'https://fast-food-fast-chinemelu.herokuapp.com/api/v1'
  : 'http://localhost:3000/api/v1';

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    token: window.localStorage.getItem('token')
  },
  credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('token');
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (route) => {
  try {
    const response = await request.get(route);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await request.post(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await request.put(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await request.delete(route, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
