import axios from 'axios';
const baseURL = 'http://localhost/api';

const api = axios.create({
  baseURL
});

export const login = async (email, password) =>
  api.post(`/users/login`, { email, password });
