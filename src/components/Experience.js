import React from 'react'
import ceLogo from '../images/ce-logo.png';
import kdaLogo from '../images/kda-logo.webp';

function Experience() {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className='container'>
                <div className='exp-container'>
                    <div className='img-container'>
                        <img className='ce-logo' src={ceLogo} alt="congo-equiment logo" />
                    </div>
                    <div className='text-container'>
                        <p>Lubumbashi DR Congo : Feb 2022 - Mar 2022</p>
                        <ul>
                            <li>Creating a Web application</li>
                            <li>Conceptualising and implementing a database for a Web application</li>
                            <li>Analysing and working on existing project</li>
                            <li>Generating PDF report</li>
                            <li>Software testing</li>
                        </ul>
                        <div className='tools'>
                            <span>ASP.NET MVC</span>
                            <span>C#</span>
                            <span>HTML/CSS</span>
                            <span>BootStrap</span>
                            <span>SQL</span>
                            <span>Microsoft SQL Server</span>
                            <span>VB6</span>
                        </div>
                    </div>
                </div>
                <div className='exp-container'>
                    <div className='img-container'>
                        < img className='kda-logo logo' src={kdaLogo} alt="kda logo" />
                    </div>
                    <div className='text-container'>
                        <p>Kinshasa DR Congo : April 2022</p>
                        <ul>
                            <li>UI/UX design</li>
                            <li>Improving Git and GitHub skills</li>
                            <li>Contributing to existing projects</li>
                        </ul>
                        <div className='tools'>
                            <span>Laravel</span>
                            <span>PHP</span>
                            <span>HTML/CSS/SCSS</span>
                            <span>Bootstrap</span>
                            <span>FIGMA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience