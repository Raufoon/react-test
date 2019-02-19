import {combineReducers} from 'redux'
import postsReducer from "../../Posts/services/postsReducer";
import statusReducer from "../../Posts/services/statusReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  status: statusReducer
});

export default rootReducer;