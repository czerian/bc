import React, { useEffect } from "react";
import { Images } from "../theme";
import { connect } from "react-redux";
import { resumeDevAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeDev = (props) => {

  const { dev } = props.niro;

  useEffect(() => {
    // props.resumeDevAction(); 
  });

  return (
        <div className="fx fxdc fxjcc fxaic tac">
          <div className="bio">
            <div className="fx fxdr fxjcc fxaic">    
                <div className="bioimg">
                  <img src={Images.bmw} alt="Crassus Niro" />
                </div>
            </div>
            <h1>
              {dev[0].name}
            </h1>
            <h2>
              {dev[1].name}
            </h2>
            <h3>{dev[2].name}</h3>
          </div>
        </div>
  )
};

ResumeDev.propTypes = {
  resumeDevAction: PropTypes.func.isRequired,
  niro: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
      niro: state.resumeReducer
});
  
export default connect(
  mapStateToProps,
  { resumeDevAction }
)(ResumeDev);
