import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from "react-router-dom";
import {dtoToList} from "./services/utils";
import PostDetails from "./components/PostDetails";


const Posts = props => {
  const pid = props.match.params.id;
  const postList = dtoToList(props.posts);
  return (
    <div>
      {
        postList.map(post => (
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            {post.title}<br/>
          </NavLink>
        ))
      }
      {
        postList.length > 0
        && pid
        && <PostDetails {...props.posts[pid]}/>
      }
    </div>
  )
};


const stateToProps = state => ({
  posts: state.posts,
  status: state.status
});
export default withRouter(
  connect(stateToProps)(Posts)
);