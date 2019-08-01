import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let post = { title: this.state.title, body: this.state.body };

    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(p => p.json())
      .then(p => console.log(p));
  }
  render() {
    return (
      <div>
        {" "}
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor=""> Title: </label>
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor=""> body: </label>
            <input type="text" name="body" onChange={this.onChange} />
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
