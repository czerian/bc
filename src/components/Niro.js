import React, { Component } from 'react';
import { Images } from '../theme'
import { Link } from "react-router-dom";


class Niro extends Component {
  render() {
    return (

        <div className="homelft fx fxdc fxjcc fxaic tac">
            <div className="bio">
              <div className="fx fxdr fxjcc fxaic">
                  <Link to='/niro'>               
                    <div className="bioimg">
                        <img src={Images.dp} alt="Crassus Niro" />
                    </div>
                  </Link>

              </div>
              <h1><Link exact to='/'>Lithium Crassus Niro</Link></h1>
              <h2><Link to='/skills'>Full-Stack JavaScript Engineer</Link></h2>
              <h3>(JavaScript/React/Redux/React Native/Node) + Rails</h3>
            </div>
        </div>
  
    );
  }
}

export default Niro;
