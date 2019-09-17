import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resumeProfileAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeProfile = (props) => {
  const { profile } = props.profile;
  useEffect(() => {
    // props.resumeDevAction(); 
  });

  return (
            <div className="rsm profile">
              <div className="titol fx fxdr fxaic fxjcfs">
                <div className="fx fxdr fxjcc fxaic"><span role="img" aria-label="Profile" className="lft">👤</span></div><div>My Profile</div>
              </div>   
            <div><ul>              
                {profile.map(prof => {
                            const { id, tittle, description } = prof;
                            return <li key={id}><h6>{tittle}</h6><p>{description}</p></li>;
                        })}
            </ul></div>
            </div>   
  )
};

ResumeProfile.propTypes = {
    resumeProfileAction: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.resumeReducer
});
  
export default connect(
  mapStateToProps,
  { resumeProfileAction }
)(ResumeProfile);


