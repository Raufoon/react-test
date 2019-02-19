import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import PostCreationForm from "../PostCreationForm";
import Posts from "../Posts";


class App extends Component {
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

export default App;
