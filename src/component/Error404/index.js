import React, { Component } from "react";

class Error404 extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1 className="center">Ops! Error page not found</h1>
        <h3 className="center">
          Requested url
          <span>{this.props.location.pathname}</span> was not found!
        </h3>
      </React.Fragment>
    );
  }
}
export default Error404;
