import React from 'react'

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className='container'>
                <div className='education-cont'>
                    <h4>Matric</h4>
                    <span>Commerce & IT</span>
                    <span>Safak International School</span>
                    <span>Kinshasa</span>
                    <span className='opac-font'>2016</span>
                </div>
                <div className='education-cont'>
                    <h4>Higher Certificate</h4>
                    <span>Information Technology</span>
                    <span>CTI Education Group</span>
                    <span>Cape Town</span>
                    <span className='opac-font'>Feb 2018 - Dec 2018</span>
                </div>
                <div className='education-cont'>
                    <h4>Bachelor of Science</h4>
                    <span>Information Technology</span>
                    <span>Eduvos</span>
                    <span>Cape Town</span>
                    <span className='opac-font'>Feb 2019 - Dec 2021</span>
                </div>
            </div>
        </section>
    );
}

export default Education