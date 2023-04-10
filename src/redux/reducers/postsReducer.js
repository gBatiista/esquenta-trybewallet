const INITIAL_STATE = {
  posts: [],

};
function postsReducer(state = INITIAL_STATE, action) {
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
export default postsReducer;
