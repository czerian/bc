import React from 'react'
import { Niro, Navigation, ContactBtn } from "./";
import {Helmet} from "react-helmet";


const NiroCon = () => {
    return (
      <>
      <Helmet>
        <title>Niro | React Genius</title>
        <meta name="theme-color" content="#4682b4" />
        <meta name="sexxy" content="Niro - React Genius" />                   
      </Helmet>
        <div className="fx fxdr fxjcc fxaic">
          <Navigation />
          <Niro />   
          <ContactBtn/>    
        </div>
      </>
    )
}

export default NiroCon
