import React, { Component } from 'react';
import {NavLink, Route, Switch, withRouter} from 'react-router-dom';
import PostCreationForm from "../PostCreationForm";
import Posts from "../Posts";
import {connect} from 'react-redux';
import {actionFetchAllPosts} from "../Posts/services/postsActions";


class App extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const openedPostId = this.props.openedPostId;

    let allPostUrl = '/posts';
    if (openedPostId) {
      allPostUrl += openedPostId;
    }

    return (
      <div>
        <nav>
          <NavLink to={allPostUrl}>Posts</NavLink>
          <NavLink to={'/create'}>New</NavLink>
        </nav>
        <Switch>
          <Route exact path={'/create'} component={PostCreationForm}/>
          <Route exact path={'/posts/:id?'} component={Posts}/>
        </Switch>
      </div>
    );
  }
}

const stateToProps = state => ({
  openedPostId: state.openedPostId
});

const dispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(actionFetchAllPosts())
});

export default withRouter(
  connect(stateToProps, dispatchToProps)(App)
);
