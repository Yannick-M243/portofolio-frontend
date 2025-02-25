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
import powerAppLogo from '../images/power-app.png'
import powerAutoLogo from '../images/power-automate.png'
import powerBiLogo from '../images/power-bi.png'
import powerPlatformLogo from '../images/power-platform.png'
import supabase from '../images/supabase.png'
import useWindowSize from './utilities/useWindowSize'
import checkDevice from './utilities/checkDevice'

function Skills() {
    const size = useWindowSize();
    const isMobile = checkDevice(size)

    if (isMobile) {
        return (
            <section id="skills">
                <h2>Skills</h2>
                <h3>These are all the technologies I can work with</h3>
                <div className='container'>
                    <img src={cssLogo} alt="css" data-aos="zoom-out"></img>
                    <img src={sassLogo} alt="sass" className='sass' data-aos="zoom-out"></img>
                    <img src={htmlLogo} alt="html" data-aos="zoom-out" ></img>
                    <img src={figmaLogo} alt="figma" data-aos="zoom-out"></img>
                    <img src={laravelLogo} alt="laravel" data-aos="zoom-out"></img>
                    <img src={expressLogo} alt="express" data-aos="zoom-out"></img>
                    <img src={javaLogo} alt="java" data-aos="zoom-out"></img>
                    <img src={javascriptLogo} alt="javascript" data-aos="zoom-out"></img>
                    <img src={mongoLogo} alt="mongo" className='mongo' data-aos="zoom-out"></img>
                    <img src={mysqlLogo} alt="mysql" data-aos="zoom-out"></img>
                    <img src={phpLogo} alt="php" className='php' data-aos="zoom-out"></img>
                    <img src={reactLogo} alt="react" data-aos="zoom-out"></img>
                    <img src={nodeLogo} alt="node" data-aos="zoom-out"></img>
                    <img src={sqlLogo} alt="sql" data-aos="zoom-out"></img>
                    <img src={supabase} alt="supabase" data-aos="zoom-out"></img>
                    <img src={powerAppLogo} alt="power app" data-aos="zoom-out"></img>
                    <img src={powerAutoLogo} alt="power auto" data-aos="zoom-out"></img>
                    <img src={powerBiLogo} alt="power bi" data-aos="zoom-out"></img>
                    <img src={powerPlatformLogo} alt="power plat" data-aos="zoom-out"></img>
                </div>
            </section>
        );
    } else {
        return (
            <section id="skills">
                <h2>Skills</h2>
                <h3>These are all the technologies I can work with</h3>
                <div className='container'>
                    <img src={cssLogo} alt="css" data-aos="flip-left"></img>
                    <img src={sassLogo} alt="sass" className='sass' data-aos="flip-left"></img>
                    <img src={htmlLogo} alt="html" data-aos="flip-left" ></img>
                    <img src={figmaLogo} alt="figma" data-aos="flip-left"></img>
                    <img src={laravelLogo} alt="laravel" data-aos="flip-left"></img>
                    <img src={expressLogo} alt="express" data-aos="flip-left"></img>
                    <img src={javaLogo} alt="java" data-aos="flip-left"></img>
                    <img src={javascriptLogo} alt="javascript" data-aos="flip-left"></img>
                    <img src={mongoLogo} alt="mongo" className='mongo' data-aos="flip-left"></img>
                    <img src={mysqlLogo} alt="mysql" data-aos="flip-left"></img>
                    <img src={phpLogo} alt="php" className='php' data-aos="flip-left"></img>
                    <img src={reactLogo} alt="react" data-aos="flip-left"></img>
                    <img src={nodeLogo} alt="node" data-aos="flip-left"></img>
                    <img src={sqlLogo} alt="sql" data-aos="zoom-out"></img>
                    <img src={supabase} alt="supabase" data-aos="zoom-out"></img>
                    <img src={powerAppLogo} alt="power app" data-aos="zoom-out"></img>
                    <img src={powerAutoLogo} alt="power auto" data-aos="zoom-out"></img>
                    <img src={powerBiLogo} alt="power bi" data-aos="zoom-out"></img>
                    <img src={powerPlatformLogo} alt="power plat" data-aos="zoom-out"></img>
                </div>
            </section>
        );
    }
}

export default Skills;