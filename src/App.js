import React, { Component } from 'react';
import { Images } from './theme'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Skills, Niro, Nope } from './components'

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/niro' component={Niro}/>
            <Route exact path='/skills' component={Skills}/>
            <Route component={Nope}/>
          </Switch>
        </Router>

    );
  }
}

export default App;
