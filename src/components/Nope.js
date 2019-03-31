import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nope extends Component {
  render() {
    return (

        <div className="homerit fx fxdc fxjcc fxaic">
            <div className="skills">
              <div className="">
              </div>
              Nothing to See Here Folks
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/niro'>Niro</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
              </ul>
            </div>
        </div>

    );
  }
}

export default Nope;
