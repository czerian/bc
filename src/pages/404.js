import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nope extends Component {
  render() {
    return (
      <div className="notfound fx fxdc fxjcc fxaic tac">
        <h1>404</h1>
        <h2>Nothing to See Here Folks</h2>
        <h3>Looks like you're lost.</h3>
        <h4>
          Go =&gt; <Link to="/">Home</Link>
        </h4>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/niro">Niro</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><a href="https://github.com/czerian/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://upwork.com/fl/bryanczar/" target="_blank" rel="noopener noreferrer">Upwork</a></li>
          <li><Link to="/contact-me">Contact Me</Link></li>
          <li><Link to="/dummy">404 Page</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nope;



