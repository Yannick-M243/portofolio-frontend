import React from 'react'
import Welcome from './Welcome'
import Skills from './Skills'
import Education from './Education'
import Details from './Details'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import Socials from './Socials'
import ModesButtons from './ModesButtons'


function Portofolio() {
  return (
    <div>
      <ModesButtons/>
      <Welcome />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <Details />
      <Socials/>
      <Footer />
    </div>
  )
}

export default Portofolio;