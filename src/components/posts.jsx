import React, { Component } from "react";
import "./posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const datac = this.state.posts.map(post => (
      <div key={post.id}>
        <span className="Title"> {post.title}</span>
        <span>{post.body}</span>
      </div>
    ));

    return <h1> {datac} </h1>;
  }
}

export default Posts;
