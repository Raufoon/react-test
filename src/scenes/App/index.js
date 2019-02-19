import React, { Component } from 'react';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div >

      </div>
    );
  }
}

const s2p = state => state;
export default connect(s2p)(App);
