import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resumeAboutAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeAbout = (props) => {
  const { about } = props.about;
  
  useEffect(() => {
    props.resumeAboutAction(); 
  }, []);

  return (
    <div className="rsm about">
    <div className="titol fx fxdr fxaic fxjcfs">
    <div className="fx fxdr fxjcc fxaic"><span role="img" aria-label="About">📜</span></div><div>About Me</div>
    </div>
    <div className="rsmdv wspl">
    {about.me}
    </div>
    </div>
  )
};

ResumeAbout.propTypes = {
    resumeAboutAction: PropTypes.func.isRequired,
    about: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
      about: state.resumeReducer
});
  
export default connect(
  mapStateToProps,
  { resumeAboutAction }
)(ResumeAbout);

