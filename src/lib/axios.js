'use client';

import axios from 'axios';

export  const axiosInstance = axios.create({
  baseURL: 'https://www.jvsmindia.com/api/',
  withCredentials: true,
});