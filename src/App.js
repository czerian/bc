import React, { Component } from 'react';
import logo from './logo.svg';
import { Images } from './theme'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fx fxdr fxjcc fxaic">
        <div className="homelft w50 fx fxdc fxjcc fxaic tac">
            <div className="bio">
              <div className="bioimg">
                <img src={Images.dp} alt="Crassus Niro" />
              </div>
              <p>Lithium Crassus Niro</p>
            </div>
        </div>
        <div className="homerit w50 fx fxdc fxjcc fxaic">
            <div className="skills">
              <div className="">
              </div>
              Skills Summary
                <p>Full-Stack JavaScript Engineer | JSKing | React Genius</p>
            </div>
        </div>
      </div>   
    );
  }
}

export default App;
