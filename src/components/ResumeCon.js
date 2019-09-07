import React from 'react'
import { Resume, Navigation, ContactBtn } from "./";
import {Helmet} from "react-helmet";

const ResumeCon = () => {
    return (
      <>
      <Helmet>
        <title>My Resume | Full-Stack JavaScript Engineer</title>
        <meta name="theme-color" content="#2e8b57" />
        <meta name="sexxy" content="My Resume | Full-Stack JavaScript Engineer" />                   
      </Helmet>
        <div className="fx fxdr fxjcc fxaic">
          <Navigation />
          <Resume /> 
          <ContactBtn/>    
        </div>
      </>
    )
}

export default ResumeCon
