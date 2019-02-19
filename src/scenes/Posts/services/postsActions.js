import {fetchAllPosts} from "../../../services/api";

export const actionFetchAllPosts = () => dispatch => {
  return fetchAllPosts()
    .then(postsDTO => {
      dispatch(actionFetchAllPostSuccess(postsDTO))
    })
};

export const ACTION_FETCH_ALL_POSTS_SUCCESS = 'ACTION_FETCH_ALL_POSTS_SUCCESS';
export const actionFetchAllPostSuccess = postsDTO => (
  {
    type: ACTION_FETCH_ALL_POSTS_SUCCESS,
    postsDTO
  }
);

export const ACTION_POST_OPENED = 'ACTION_POST_OPENED';
export const actionPostOpened = openedPostId => ({
  type: ACTION_POST_OPENED,
  openedPostId
});