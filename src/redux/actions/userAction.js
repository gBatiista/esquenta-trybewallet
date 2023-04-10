import { ADD_INFO, LOGIN } from '../types/userType';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addInfo = (payload) => ({
  type: ADD_INFO,
  payload,
});
