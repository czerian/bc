import React from 'react'
import { Skills, Navigation, ContactBtn } from "./";
import {Helmet} from "react-helmet";

const SkillsCon = () => {
    return (
      <>
      <Helmet>
        <title>Skills Summary | Full-Stack JavaScript Engineer | React Genius</title>
        <meta name="theme-color" content="#4682b4" />
        <meta name="sexxy" content="Skills Summary | Full-Stack JavaScript Engineer | React Genius" />                   
      </Helmet>
        <div className="fx fxdr fxjcc fxaic">
          <Navigation />
          <Skills /> 
          <ContactBtn/>
        </div>
      </>
    )
}

export default SkillsCon
