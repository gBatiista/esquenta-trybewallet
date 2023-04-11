import fetchPosts from '../../utils/fetchPosts';
import { FAILED_REQUEST, GET_POSTS, SUCCEEDED_REQUEST } from '../types/postsType';

export const getPosts = () => ({
  type: GET_POSTS,
});
export const succedRequest = (payload) => ({
  type: SUCCEEDED_REQUEST,
  payload,
});
export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const fetchApiThunk = () => async (dispatch) => {
  try {
    dispatch(getPosts());
    const posts = await fetchPosts();
    dispatch(succedRequest(posts.filter((element) => element.userId === 2)));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};
