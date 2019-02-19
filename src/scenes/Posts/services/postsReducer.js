import initialAppState from "../../../services/initialAppState";
import {ACTION_FETCH_ALL_POSTS_SUCCESS} from "./postsActions";


const postsReducer = (state = initialAppState.posts, action) => {
  let updatedState;

  switch (action.type) {
    case ACTION_FETCH_ALL_POSTS_SUCCESS:
      updatedState = {
        ...state,
        ...action.postsDTO
      };
      break;

    default:
      updatedState = state;
  }
  return updatedState;
};

export default postsReducer