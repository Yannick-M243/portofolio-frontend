import React from 'react'

function Footer() {
  return (
      <section id="footer">
          <p>Want more details?</p> 
          <a href="mailto:yannickmakwenge@gmail.com" rel="noreferrer">
              <div className='link-container'>Get in touch</div>
          </a> 
          <div className='outer-footer'>
              <span className='copyright'>&copy;2025 Copyright <a href="https://github.com/Yannick-M243" target="_blank" rel="noreferrer">Yannick Makwenge.</a></span>
          </div>
      </section>
  )
}

export default Footer;