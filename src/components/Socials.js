import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
      <div className="social-media">
          <ul>
              {/*<li><a href="https://www.facebook.com/boteti" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>*/}
              <li><a href="https://github.com/Yannick-M243" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              </li>
              <li><a href="https://www.linkedin.com/in/yannick-makwenge-0b741620b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              {/*<li><a href="https://www.instagram.com/yannick_boteti/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram } /></a></li>*/}
              
          </ul>
      </div>
  )
}

export default Socials