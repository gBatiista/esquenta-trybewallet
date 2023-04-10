import { GET_POSTS, FAILED_REQUEST, SUCCEEDED_REQUEST } from '../types/postsType';

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,

};
function postsReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
  case GET_POSTS:
    return {
      ...state,
      isLoading: true,
    };
  case SUCCEEDED_REQUEST:
    console.log(payload);
    return {
      ...state,
      isLoading: false,
      posts: payload,

    };
  case FAILED_REQUEST:
    return {
      ...state,
      isLoading: false,
      error: payload,

    };
  default:
    return state;
  }
}
export default postsReducer;
