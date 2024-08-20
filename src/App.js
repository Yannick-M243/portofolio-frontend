
import React, { useState, useEffect } from 'react'
import './styles/style.scss';
import Welcome from '../src/components/Welcome'
import Skills from '../src/components/Skills'
import Education from '../src/components/Education'
import Details from '../src/components/Details'
import Footer from '../src/components/Footer'
import GithubProject from './components/GithubProject'
import Projects from './components/Projects'
import Contact from '../src/components/Contact'
import Socials from '../src/components/Socials'
import ModesButtons from '../src/components/ModesButtons'
import Particles from '../src/components/utilities/Particles'

function App() {
  const [mode, setMode] = useState('dark')
  const [color, setColor] = useState("rgba(30, 143, 255, 0.478)") 

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      setColor("rgba(30, 143, 255, 0.478)")
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      setColor("rgb(30, 100, 255)")
    }
    // eslint-disable-next-line
  }, [])

  const handleModeButton = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      setColor("rgb(30, 100, 255)")

    } else {
      setMode('dark')
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      setColor("rgba(30, 143, 255, 0.478)")
    }
  }
  return (
    <div className="App">
      <Particles color={color} />
      <ModesButtons handleModeButton={handleModeButton} mode={mode} />
      <Welcome />
      <Skills />
      <Education />
      <Projects />
      <GithubProject/>
      <Contact />
      <Details />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
