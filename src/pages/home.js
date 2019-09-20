import React, { Component } from "react";
import { Niro, Skills, Navigation, ContactBtn } from "../components";
import {Helmet} from "react-helmet";

class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
        <>
        <Helmet>
          <title>Full-Stack JavaScript Engineer | JSKing | React Genius</title>
          <meta name="theme-color" content="#2e8b57" />
          <meta name="sexxy" content="Full-Stack JavaScript Engineer | JSKing | React Genius" />                   
        </Helmet>
        <div className="home fx fxdr fxjcc fxaic">
            <Navigation/>
            <div className="w50">
              <Niro />
            </div>
            <div className="w50">
              <Skills />
            </div>
            <ContactBtn/>
          </div>
        </>
    );
  }
}

export default Home
