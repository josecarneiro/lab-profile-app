import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Link to="/login" className="btn">
          Log In
        </Link>
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
    );
  }
}
