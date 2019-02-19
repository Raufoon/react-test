import initialAppState from "../../../services/initialAppState";
import {ACTION_FETCH_ALL_POSTS_SUCCESS} from "./postsActions";
import {ACTION_CREATE_POST_SUCCESS} from "../../PostCreationForm/services/postCreationActions";


const postsReducer = (state = initialAppState.posts, action) => {
  let updatedState;

  switch (action.type) {
    case ACTION_FETCH_ALL_POSTS_SUCCESS:
      updatedState = {
        ...state,
        ...action.postsDTO
      };
      break;

    case ACTION_CREATE_POST_SUCCESS:
      updatedState = {
        ...state,
        [action.id]: {
          title: action.title,
          body: action.body,
        }
      };
      break;

    default:
      updatedState = state;
  }
  return updatedState;
};

export default postsReducer