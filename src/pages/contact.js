import React from 'react'
import { Contact, Navigation } from "../components";
import {Helmet} from "react-helmet";

const ContactCon = () => {
    return (
      <>
        <Helmet>
          <title>Say Hello | Full-Stack JavaScript Engineer</title>
          <meta name="theme-color" content="#0056b3" />
          <meta name="sexxy" content="Say Hello | Contact Me | Full-Stack JavaScript Engineer" />                   
        </Helmet>
        <div className="minvh fx fxdr fxjcc fxaic">
          <Navigation />
          <Contact /> 
        </div>
      </>
    )
}

export default ContactCon
