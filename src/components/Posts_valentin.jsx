import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post_valentin extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.remoteArticles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    remoteArticles: state.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post_valentin);
