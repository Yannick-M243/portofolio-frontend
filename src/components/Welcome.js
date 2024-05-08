import React from 'react';
import profilePic from '../images/MAKWENGE-YAN-15.jpg';

function Welcome() {
    return (
        <section id="home">
            <div className='container'>
                <div className='text-container'>
                    <div className='name-cont'>
                        <span className='opac-font'>HI, MY NAME IS</span>
                        <h1 className='primary-font'>Yannick Makwenge</h1>
                    </div>
                    <p>I'm a<span className='primary-font'> Software Developer</span> interested in <span className='primary-font'>Digital Transformation</span> and <span className='primary-font'>Data Analysis. </span>
                        I'm constantly diving into new technologies and eager to collaborate on exciting projects.
                        Let's connect and create something amazing together!&#128640;</p>
                </div>
                <div className='image-container'>
                    <img src={profilePic} alt="profile" />
                </div>
            </div>
        </section>
    );

}

export default Welcome;