import axios from 'axios';
const baseURL = 'http://localhost/api';

const api = axios.create({
  baseURL
});

export const login = async (email, password) =>
  api.post('/users/login', { email, password });

export const productList = async token =>
  api.get('/bpm/products-list', {
    headers: { authorization: `Bearer ${token}` }
  });

export const prepareSale = async (data, token) =>
  api.post('/bpm/prepare-sale', {
    headers: { authorization: `Bearer ${token}` }
  });

export const confirmSale = async (data, token) =>
  api.post('/bpm/confirm-sale', data, {
    headers: { authorization: `Bearer ${token}` }
  });
