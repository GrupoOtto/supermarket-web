import jwt from 'jwt-decode';

const extractUser = token => {
  try {
    return jwt(token);
  } catch (error) {
    return null;
  }
};

export const getUser = ({ login }) => ({ user: extractUser(login.token) });

export const getToken = ({ login }) => ({ token: login.token });
