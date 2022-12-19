import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faListCheck, faGraduationCap,faSuitcase,faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="nav-container">
                    <a href="#home">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </a>
                </div>
                <div className="nav-container">
                    <a href="#skills">
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Skills</span>
                    </a>
                </div>
                <div className="nav-container">
                    <a href="#education">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>Education</span>
                    </a>
                </div>
                <div className="nav-container">
                    <a href="#experience"><FontAwesomeIcon icon={faSuitcase} />
                        <span>Experience</span>
                    </a>
                </div>
                <div className="nav-container">
                    <a href="#details">
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span>Details</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;