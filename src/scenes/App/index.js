import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import PostCreationForm from "../PostCreationForm";
import Posts from "../Posts";
import {connect} from 'react-redux';
import {actionFetchAllPosts} from "../Posts/services/postsActions";


class App extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div>
        <nav>
          <Link to={'/posts'}>Posts</Link>
          <Link to={'/create'}>New</Link>
        </nav>
        <main>
          <Route exact path={'/create'} component={PostCreationForm}/>
          <Route exact path={'/posts/:id?'} component={Posts}/>
        </main>
      </div>
    );
  }
}

const dispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(actionFetchAllPosts())
});

export default connect(null, dispatchToProps)(App);
