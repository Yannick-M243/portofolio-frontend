import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseFlag, faMapPin, faEnvelope, faDumbbell } from '@fortawesome/free-solid-svg-icons'

function Details() {
        return (
                <section id="details">
                        <h2>Details</h2>
                        <div className='container'>
                                <p><span className="primary-font"><FontAwesomeIcon icon={faHouseFlag} /> Nationality :</span>Congolese</p>
                                <p><span className="primary-font"><FontAwesomeIcon icon={faMapPin} /> Location :</span> Cape Town, South Africa</p>
                                <p><span className="primary-font"><FontAwesomeIcon icon={faEnvelope} /> Email Address : </span>Yannickmakwenge@gmail.com</p>
                                <p><span className="primary-font"><FontAwesomeIcon icon={faDumbbell} /> Hobbies : </span>Fitness / Gaming</p>
                        </div>
                </section>
        );
}

export default Details;