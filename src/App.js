import React, { Component } from "react";
import { Images } from "./theme";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SkillsCon, NiroCon, Nope } from "./components";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/niro" component={NiroCon} />
            <Route exact path="/skills" component={SkillsCon} />
            <Route component={Nope} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
