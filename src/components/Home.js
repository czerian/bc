import React, { Component } from 'react';
import { Niro, Skills } from './'


class Home extends Component {
  render() {
    return (

        <div className="fx fxdr fxjcc fxaic">
        <div className="w50">
          <Niro/>
          </div>
          <div className="w50">
          <Skills/>
          </div>
        </div>
  
    );
  }
}

export default Home;
