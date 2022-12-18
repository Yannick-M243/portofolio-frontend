import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_TEMPLATE, form.current, processenv.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          alert("Email successfully sent!")
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea name="message" />
          </div>
          <div className='form-group'>
            <input type="submit" value="Send Message" className='btn'/>
          </div>
        </form>
      </div>

    </section>
  )
}
export default Contact;