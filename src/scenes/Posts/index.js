import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";


const Posts = props => {
  const id = props.match.params.id;
  return <div>{JSON.stringify(props.posts)}</div>
};


const stateToProps = state => ({
  posts: state.posts,
  status: state.status
});
export default withRouter(
  connect(stateToProps)(Posts)
);