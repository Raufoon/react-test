export const actionCreatePosts = (id, title, body='') => dispatch => {
  return Promise.resolve(1)
    .then(() => {
      dispatch(actionCreatePostSuccess({
        id, title, body
      }))
    })
};


export const ACTION_CREATE_POST_SUCCESS = 'ACTION_CREATE_POST_SUCCESS';

export const actionCreatePostSuccess = (post) => ({
  type: ACTION_CREATE_POST_SUCCESS,
  ...post
});