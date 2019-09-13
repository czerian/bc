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
    <div className="fx fxdc">
        <div className="skills">
            <div className="">
                Skills Summary
                <hr />

                {skills.map(skill => {
                            const { id, skillt, skilld } = skill;
                            return <p key={id}>{skillt}{"\n"}{skilld}</p>;
                            // return <p key={id}>{skillt}{": \n ✓ "}{skilld}</p>;
                        })}
            </div>
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

