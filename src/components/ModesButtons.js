import React, { useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function ModesButtons(props) {
    const [mode, setMode] = useState('dark')
    
    useEffect(() => {
        if (mode === 'dark') {
            document.body.style.backgroundColor = 'black';
            
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
        // eslint-disable-next-line
    }, [])

    const handleModeButton = () => {
        if (mode === 'dark') {
            setMode('light')
        } else {
            setMode('dark')
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