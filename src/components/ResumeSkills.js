import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resumeSkillsAction } from "../actions/resumeActions";
import PropTypes from "prop-types";


const ResumeSkills = (props) => {
  const { skills } = props.skills;
  useEffect(() => {
    // props.resumeDevAction(); 
  });

  return (
    <div className="rsm skills">
    <div className="titol fx fxdr fxaic fxjcfs">
    <div className="fx fxdr fxjcc fxaic"><span role="img" aria-label="Skills">💼</span></div><div>Skills Summary</div>
    </div> 
    <div className="rsmdv">             
    <div>
    I have an all round knowledge of the web environment and various web technologies. I’ve received professional training, learned, practiced and mastered:
    </div>   
    {skills.map(skill => {
                            const { id, skillt, skilld } = skill;
                            return <p key={id}><strong>{skillt}</strong>{"\n"}{skilld}</p>;
                        })}
    </div>
    </div>    
  )
};

ResumeSkills.propTypes = {
  resumeSkillsAction: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
      skills: state.resumeReducer
});
  
export default connect(
  mapStateToProps,
  { resumeSkillsAction }
)(ResumeSkills);

