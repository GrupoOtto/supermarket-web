import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dssd-supermarket.herokuapp.com/products/',
  headers: {}
});

export default instance;
