import React from 'react'
import cssLogo from '../images/css.png';
import htmlLogo from '../images/html.png';
import sassLogo from '../images/sass.png';
import figmaLogo from '../images/figma.png';
import laravelLogo from '../images/laravel.png';
import expressLogo from '../images/express.png';
import javascriptLogo from '../images/javascript.png';
import javaLogo from '../images/java.png';
import mongoLogo from '../images/mongo.png';
import mysqlLogo from '../images/mysql.png';
import phpLogo from '../images/php.png';
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import sqlLogo from '../images/sql.png';

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <h3>This are all the technologies I can work with</h3>
            <div className='container'>
                <img src={cssLogo} alt="css" data-aos="flip-left"></img>
                <img src={sassLogo} alt="sass" className='sass' data-aos="flip-left"></img>
                <img src={htmlLogo} alt="html" data-aos="flip-left"></img>
                <img src={figmaLogo} alt="figma" data-aos="flip-left"></img>
                <img src={laravelLogo} alt="laravel" data-aos="flip-left"></img>
                <img src={expressLogo} alt="express" data-aos="flip-left" className='express'></img>
                <img src={javaLogo} alt="java" data-aos="flip-left"></img>
                <img src={javascriptLogo} alt="javascript" data-aos="flip-left"></img>
                <img src={mongoLogo} alt="mongo" className='mongo' data-aos="flip-left"></img>
                <img src={mysqlLogo} alt="mysql" data-aos="flip-left"></img>
                <img src={phpLogo} alt="php" className='php' data-aos="flip-left"></img>
                <img src={reactLogo} alt="react" data-aos="flip-left"></img>
                <img src={nodeLogo} alt="node" data-aos="flip-left"></img>
                <img src={sqlLogo} alt="node" data-aos="flip-left"></img>
            </div>
        </section>
    );
}

export default Skills;