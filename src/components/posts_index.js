import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    // called as soon as the component appears in the DOM
    // after the component renders to the screen
    // lets do an initial import of posts
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
