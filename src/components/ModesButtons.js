import React, { useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function ModesButtons(props) {
    const [mode, setMode] = useState('dark')
    
    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }else{
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        // eslint-disable-next-line
    }, [])

    const handleModeButton = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            
        } else {
            setMode('dark')
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
    }

    if (mode === 'dark') {
        return (
            <div className='mode-btn-container sun'>
                <button onClick={handleModeButton}>
                    <FontAwesomeIcon icon={faSun} />
                </button>
            </div>
        )
    } else {
        return (
            <div className='mode-btn-container moon'>
                <button onClick={handleModeButton}>
                    <FontAwesomeIcon icon={faMoon}/>
                </button>
            </div>
        )
    }
}
export default ModesButtons