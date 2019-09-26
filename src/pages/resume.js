import React from 'react'
import { ResumeDev, ResumeProfile, ResumeAbout, ResumeSkills, ResumeEducation, Navigation, ContactBtn } from "../components";
import {Helmet} from "react-helmet";

const ResumeCon = () => {
    return (
      <>
        <Helmet>
          <title>My Resume | Full-Stack JavaScript Engineer</title>
          <meta name="theme-color" content="#2e8b57" />
          <meta name="sexxy" content="My Resume | Full-Stack JavaScript Engineer" /> 
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700&display=swap" rel="stylesheet"></link>                 
        </Helmet>
        <Navigation />
        <div className="resumecon">
            <div className="resume fx fxdr fxjcc">
              <div className="w30">
                <ResumeDev /> 
                <ResumeProfile />
              </div>
              <div className="w70">
                <ResumeAbout /> 
                <ResumeSkills /> 
                <ResumeEducation /> 
              </div>
                <ContactBtn/>    
            </div>
        </div>
      </>
    )
}

export default ResumeCon
