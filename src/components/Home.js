import React, { Component } from "react";
import { Niro, Skills, Navigation, ContactBtn } from "./";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    // const { items } = this.props.item;
    return (
      <div className="home fx fxdr fxjcc fxaic">
        <Navigation/>
        <div className="w50">
          <Niro />
          {/* <Niro hitems={items} /> */}
          {/* <Progbar tsteps={tsteps} cstep={cstep} crhit={crhit} /> */}
        </div>
        <div className="w50">
          <Skills />
        </div>
        <ContactBtn/>
      </div>
    );
  }
}

Home.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(
  mapStateToProps,
  { getItems }
)(Home);
