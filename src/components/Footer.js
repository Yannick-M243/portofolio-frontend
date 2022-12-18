import React from 'react'
import CV from '../docs/CV-Yannick-Boteti-Makwenge-2023.pdf';

function Footer() {
  return (
      <section id="cta">
          <a href="./docs/CV-Yannick-Boteti-Makwenge-2023.pdf" download={CV}
              target="_blank" rel="noreferrer">
              <div className='link-container'>Download my CV</div>
          </a>
      </section>
  )
}

export default Footer