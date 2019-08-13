import React, { Component } from "react";
import { Images } from "../theme";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { niroAction } from "../actions/niroActions";
import PropTypes from "prop-types";

class Niro extends Component {
  componentDidMount() {
    this.props.niroAction();
  }

  render() {
    const { items } = this.props.niro;
    return (
      <div className="homelft fx fxdc fxjcc fxaic tac">
        <div className="bio">
          <div className="fx fxdr fxjcc fxaic">
            <Link to="/niro">
              <div className="bioimg">
                <img src={Images.bmw} alt="Crassus Niro" />
              </div>
            </Link>
          </div>
          <h1>
            <Link to="/">{items[0].name}</Link>
          </h1>
          <h2>
            <Link to="/skills">{items[1].name}</Link>
          </h2>
          <h3>{items[2].name}</h3>
          {/* {hitems.map(hitem => {
            const { id, name } = hitem;
            return <div key={id}>{name}</div>;
          })} */}
        </div>
      </div>
    );
  }
}

Niro.propTypes = {
  niroAction: PropTypes.func.isRequired,
  niro: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  niro: state.niroReducer,
});

export default connect(
  mapStateToProps,
  { niroAction }
)(Niro);
