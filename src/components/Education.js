import React from 'react';
import ceLogo from '../images/ce-logo.png';
import kdaLogo from '../images/kda-logo1.svg';
import babuLogo from '../images/babu-text-logo.png'
import aglLogo from '../images/agl_blanc.svg';

function Education() {
    return (
        <section id="education">
            <h2>Education & Experience</h2>
            <div className='container'>
                <div className='left-container'>
                    <div className='education-cont item' data-aos="fade-right">
                        <h4>Matric</h4>
                        <span>Commerce & IT</span>
                        <span>Safak International School</span>
                        <span>Kinshasa</span>
                        <span className='opac-font'>2016</span>
                    </div>
                    <div className='education-cont item' data-aos="fade-right">
                        <h4>Higher Certificate</h4>
                        <span>Information Technology</span>
                        <span>CTI Education Group</span>
                        <span>Cape Town</span>
                        <span className='opac-font'>Feb 2018 - Dec 2018</span>
                    </div>
                    <div className='education-cont item' data-aos="fade-right">
                        <h4>Bachelor of Science</h4>
                        <span>Information Technology</span>
                        <span>Eduvos</span>
                        <span>Cape Town</span>
                        <span className='opac-font'>Feb 2019 - Dec 2021</span>
                    </div>
                    <div className="education-cont" data-aos="fade-right">
                        <h4>Bootcamp</h4>
                        <span>Fullstack Web developer & </span>
                        <span>Software Engineer</span>
                        <span>HyperionDev</span>
                        <span>Cape Town</span>
                        <span className="opac-font">May 2022 - Nov 2022</span>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='exp-container' data-aos="fade-left">
                        <div className='img-container'>
                            <img className='ce-logo' src={ceLogo} alt="congo-equiment logo" />
                        </div>
                        <div className='text-container'>
                            <h4>Developer Intern</h4>
                            <p>Lubumbashi DR Congo</p>
                            <p className='date'> Feb 2022 - April 2022</p>
                            <div className='tools'>
                                <span>ASP.NET MVC</span>
                                <span>C#</span>
                                <span>JavaScript</span>
                                <span>HTML/CSS</span>
                                <span>BootStrap</span>
                                <span>SQL</span>
                                <span>Microsoft SQL Server</span>
                                <span>VB6</span>
                                <span>JQuery</span>
                            </div>
                        </div>
                    </div>
                    <div className='exp-container' data-aos="fade-left">
                        <div className='img-container'>
                            < img className='kda-logo logo' src={kdaLogo} alt="kda logo" />
                        </div>
                        <div className='text-container'>
                            <h4>Developer Intern</h4>
                            <p>Kinshasa DR Congo</p>
                            <p className='date'>April 2022 - May 2022</p>
                            <div className='tools'>
                                <span>Laravel</span>
                                <span>PHP</span>
                                <span>JavaScript</span>
                                <span>HTML/CSS/SCSS</span>
                                <span>Bootstrap</span>
                                <span>FIGMA</span>
                            </div>
                        </div>
                    </div>
                    <div className='exp-container' data-aos="fade-left">
                        <div className='img-container'>
                            < img className='babu-logo logo' src={babuLogo} alt="babu logo" />
                        </div>
                        <div className='text-container'>
                            <h4>Front-end Developer</h4>
                            <p>Cape Town South Africa</p>
                            <p className='date'>April 2023 - December 2023</p>
                            <div className='tools'>
                                <span>Cordova</span>
                                <span>JavaScript</span>
                                <span>HTML/CSS</span>
                                <span>Bootstrap</span>
                                <span>JQuery</span>
                            </div>
                        </div>
                    </div>
                    <div className='exp-container' data-aos="fade-left">
                        <div className='img-container'>
                            < img className='agl-logo logo' src={aglLogo} alt="agl logo" />
                        </div>
                        <div className='text-container'>
                            <h4>Digital Transformation Developer</h4>
                            <p>Lubumbashi DR Congo</p>
                            <p className='date'>April 2024 - PRESENT</p>
                            <div className='tools'>
                                <span>Microsoft Power Apps</span>
                                <span>Power Automate</span>
                                <span>Power BI</span>
                                <span>Power Fx</span>
                                <span>DAX</span>
                                <span>.NET</span>
                                <span>JavaScript</span>
                                <span>PHP</span>
                                <span>HTML/CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education