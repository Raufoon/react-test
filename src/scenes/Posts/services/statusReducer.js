import initialAppState from "../../../services/initialAppState";
import {ACTION_FETCH_ALL_POSTS_SUCCESS} from "./postsActions";


const statusReducer = (state = initialAppState.status, action) => {
  let updatedState;

  switch (action.type) {
    case ACTION_FETCH_ALL_POSTS_SUCCESS:
      updatedState = {
        ...state,
        isFetched: true
      };
      break;

    default:
      updatedState = state;
  }
  return updatedState;
};

export default statusReducer