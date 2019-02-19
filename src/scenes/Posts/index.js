import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from "react-router-dom";
import {dtoToList} from "./services/utils";
import PostDetails from "./components/PostDetails";
import {actionPostOpened} from "./services/postsActions";


class Posts extends React.Component {
  componentDidMount() {
    const openedPostId = this.props.match.params.id;
    if (openedPostId) {
      this.props.dispatch(actionPostOpened(openedPostId))
    }
  }

  render() {
    const postList = dtoToList(this.props.posts);
    const openedPostId = this.props.match.params.id;

    return (
      <div>
        <div className={'float-left'}>
          {
            postList.map(post => (
              <NavLink
                className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4"
                key={post.id}
                to={`/posts/${post.id}`}>
                {post.title}
              </NavLink>
            ))
          }
        </div>
        {
          postList.length > 0
          && openedPostId
          && <PostDetails {...this.props.posts[openedPostId]}/>
        }
      </div>
    )
  }
}


const stateToProps = state => ({
  posts: state.posts,
  status: state.status,
});

export default withRouter(
  connect(stateToProps)(Posts)
);