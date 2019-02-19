import React from 'react';
import {withRouter} from "react-router-dom";


const Posts = props => {
  const id = props.match.params.id;
  return <div>posts</div>
};

export default withRouter(Posts)