import { FAILED_REQUEST, SUCCEEDED_REQUEST } from '../types/postsType';

// export const getPosts = () => {
//   try {

//   } catch (error) {

//   }
// };
export const succedRequest = (payload) => ({
  type: SUCCEEDED_REQUEST,
  payload,
});
export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});
