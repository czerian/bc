import React from 'react'
import { Contact, Navigation, ContactBtn } from "./";
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
          <ContactBtn/>    
        </div>
      </>
    )
}

export default ContactCon
