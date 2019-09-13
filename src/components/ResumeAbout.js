import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resumeAboutAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeAbout = (props) => {
  const { about } = props.about;
  useEffect(() => {
    // props.resumeDevAction(); 
  });

  return (
    <div className="fx fxdc fxjcc fxaic">
        <div className="skills">
            <div className="">
                About Me
                <hr />
                {about.me}
            </div>
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

