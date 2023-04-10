import { ADD_INFO, LOGIN } from '../types/userType';

const INITIAL_STATE = {
  email: '',
  password: '',
  userName: '',
  phone: '',

};
function userReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  case ADD_INFO:
    return {
      ...state,
      userName: payload.userName,
      phone: payload.phone,

    };
  default:
    return state;
  }
}
export default userReducer;
