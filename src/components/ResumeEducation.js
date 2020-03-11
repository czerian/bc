import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resumeEducationAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeEducation = (props) => {
  const { education } = props.education;
  useEffect(() => {
    props.resumeEducationAction(); 
  }, []);

  return (
    <div className="rsm education">
    <div className="titol fx fxdr fxaic fxjcfs">
    <div className="fx fxdr fxjcc fxaic"><span role="img" aria-label="Education">🎓</span></div><div>Education Background</div>
    </div>   
    <div className="rsmdv">             
    {education.map(edu => {
                            const { id, tittle, school, period, grade, semoji, pemoji } = edu;
                            return (
                                <div key={id}>
                                    <h3>{tittle}</h3>
                                    <div>
                                      <div><span role="img" aria-label="">{semoji}</span> <small>{school}</small></div> 
                                      <div><span role="img" aria-label="">{pemoji}</span> <small>{period}</small></div>
                                    </div>
                                    <h4>{grade}</h4>
                                </div>
                            )

                        })}
    </div>
    </div>    
  )
};

ResumeEducation.propTypes = {
  resumeEducationAction: PropTypes.func.isRequired,
  education: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    education: state.resumeReducer
});
  
export default connect(
  mapStateToProps,
  { resumeEducationAction }
)(ResumeEducation);


