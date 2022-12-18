import React from 'react'

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className='container'>
                <h3>Soft Skills</h3>
            </div>

            <div className='container'>
                <div className='skill-container'>
                    <h4> General</h4>
                    <ul>
                        <li>Effective Time Management</li>
                        <li>Microsoft Office Suite</li>
                        <li>Fast Learner</li>
                        <li>Ability to work in Team</li>
                        <li>Computer skills</li>
                    </ul>
                </div>
                <div className='skill-container'>
                    <h4>Languages</h4>
                    <ul>
                        <li>French</li>
                        <li>English</li>
                        <li>Lingala</li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <h3>Hard Skills</h3>
            </div>

            <div className='container'>
                <div className='skill-container'>
                    <h4>General</h4>
                    <ul>
                        <li>Fontend Development</li>
                        <li>Backend Development</li>
                        <li>Agile Software Development</li>
                        <li>Database Design & Management</li>
                        <li>Information Systems</li>
                    </ul>
                </div>
                <div className='skill-container'>
                    <h4>Programming Languages</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className='skill-container'>
                    <h4>Database </h4>
                    <ul>
                        <li>MySQL Workbench</li>
                        <li>XAMPP</li>
                        <li>NoSQL</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills