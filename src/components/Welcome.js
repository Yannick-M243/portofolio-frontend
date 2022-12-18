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
                    <p>I am an <span className='primary-font'>Aspiring software engineer</span>, who seeks to aquire more
                        knowledge from experienced mentors
                        and individuals in my fields</p>
                </div>
                <div className='image-container'>
                    <img src={profilePic} alt="profile" />
                </div>
            </div>
        </section>
    );

}

export default Welcome;