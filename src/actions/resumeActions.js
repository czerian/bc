import { RESUME_ABOUT, RESUME_DEV, RESUME_EDUCATION, RESUME_PROFILE, RESUME_SKILLS } from "./types";

export const resumeAboutAction = () => {
    return {
        type: RESUME_ABOUT,
      };};

export const resumeDevAction = () => {
    return {
      type: RESUME_DEV,
    };
  };

export const resumeEducationAction = () => {
    return {
      type: RESUME_EDUCATION
    };
};

export const resumeProfileAction = () => {
    return {
      type: RESUME_PROFILE,
    };
  };

export const resumeSkillsAction = () => {
    return {
      type: RESUME_SKILLS,
    };
};
