import React, { useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import successIcon from '../images/success.png';
import FadeLoader from "react-spinners/FadeLoader";
import useWindowSize from './utilities/useWindowSize'
import checkDevice from './utilities/checkDevice' 
import { Slide } from '@mui/material';

function Contact() {
  const size = useWindowSize();
  const isMobile = checkDevice(size)

  const form = useRef();

  const [isShown, setIsShown] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setError(null);
  }, [name, message, email])

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === null || name === "") {
      setError("Please enter your name first");
    } else if (email === null || email === "") {
      setError("Please enter your email first");
    } else if (message === null || message === "") {
      setError("Please enter a message first");
    } else {
      setStatus("loading");
      emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setStatus("success");
            setTimeout(() => {
              setStatus(null);
            }, 3000);
          }
        }, (error) => {
          setError("An error occured while sending the message, refresh the page and try again");
          console.log(error.text);
        });
    }
  }
  const showHide = (e) => {
    e.preventDefault();
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true)
    }
  }


  if (isShown || isMobile) {
    return (

      <Slide direction="left" in={isShown || isMobile} mountOnEnter unmountOnExit timeout={800} >
      <section id='contact'>
        <div className='exit-box'>
          <button onClick={showHide} className='exit-btn'>
            <span><FontAwesomeIcon icon={faRectangleXmark} /></span>
          </button>
        </div>
        <div className='container'>
          <h2>Leave me a message</h2>
          {error !== null ? <p className='error'>{error}</p> : ''}
          {status === null ? <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea name="message" onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className='form-group'>
                <input type="submit" value="Send Message" className='btn' />
              </div>
            </form>
          </div> :
            <div className='success-container'>
              {status === "success" ?
                <div className='success-container'>
                  <p className='success'>Your Message was successfully sent!</p>
                  <img src={successIcon} alt="success"></img>
                </div> :
                <div className='success-container'>
                  <FadeLoader color="white" />
                </div>}
            </div>}
        </div>
        </section>
      </Slide>
    )
  } else {
    return (
      <section id='contact-button'>
        <button onClick={showHide} className='message-btn'>
          <span><FontAwesomeIcon icon={faMessage} /></span>
        </button>
      </section>
    )
  }
}
export default Contact;