import React, { Component } from "react";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>Sorry We Couldn't Find That Page.</h2>
        <button onClick={()=>{window.location="/"}}>Back to the site</button>
      </div>
    );
  }
}

export default NoMatch;
