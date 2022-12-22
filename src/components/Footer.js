import React from 'react'
import CV from '../docs/CV-Yannick-Boteti-Makwenge-2023.pdf';

function Footer() {
  return (
      <section id="cta">
          <p>Want more details?</p>
          <a href={CV} download="CV-Yannick-Boteti-Makwenge-2023"
              target="_blank" rel="noreferrer">
              <div className='link-container'>Download my CV</div>
          </a>
      </section>
  )
}

export default Footer