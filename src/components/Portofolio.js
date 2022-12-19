import React from 'react'
import Welcome from './Welcome'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Details from './Details'
import Footer from './Footer'
import Socials from './Socials'
import Navbar from './Navbar'
import Project from './Project'
import Contact from './Contact'

function Portofolio(){
  return (
      <div>
          <Socials/>
          <Welcome/>
          <Skills />
          <Education />
          <Experience />
      <Project />
      <Contact />
          <Details />
          <Footer />
    </div>
  )
}

export default Portofolio