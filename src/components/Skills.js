import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { skillsAction } from "../actions/skillsActions";
import PropTypes from "prop-types";

class Skills extends Component {
  componentDidMount() {
    this.props.skillsAction();
  }

  render() {
    const { greens } = this.props.skills;
    return (
      <div className="homerit fx fxdc fxjcc fxaic">
        <div className="skills">
          <div className="">
            <Link to="/">Skills Summary</Link>
            <hr />

            {greens.map(green => {
                        const { id, skillt, skilld } = green;
                        return <p key={id}>{skillt}{"\n"}{skilld}</p>;
                        // return <p key={id}>{skillt}{": \n ✓ "}{skilld}</p>;
                      })}
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skillsAction: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  skills: state.skillsReducer,
});

export default connect(
  mapStateToProps,
  { skillsAction }
)(Skills);