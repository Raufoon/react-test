import React from 'react';


const PostDetails = props => {
  const {title, body} = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
};

export default PostDetails;