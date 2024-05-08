import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

function ModesButtons(props) {
    const mode = props.mode;
    const handleModeButton = props.handleModeButton;

    if (mode === 'dark') {
        return (
            <div className='mode-btn-container sun'>
                <button onClick={handleModeButton}>
                    <FontAwesomeIcon icon={faCircleHalfStroke} />
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