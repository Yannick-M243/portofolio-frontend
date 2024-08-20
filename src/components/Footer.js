import React from 'react'
import CV from '../docs/CV-Yannick-Boteti-Makwenge-2024.pdf';

function Footer() {
  return (
      <section id="footer">
          <p>Want more details?</p> 
          <a href={CV} download="CV-Yannick-Boteti-Makwenge-2024"
              target="_blank" rel="noreferrer">
              <div className='link-container'>Download my CV</div>
          </a> 
          <div className='outer-footer'>
              <span className='copyright'>&copy;2024 Copyright <a href="https://github.com/Yannick-M243" target="_blank" rel="noreferrer">Yannick Makwenge.</a></span>
          </div>
      </section>
  )
}

export default Footer;