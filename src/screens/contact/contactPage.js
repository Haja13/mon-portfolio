import React from 'react';
import './style.css';
export const ContactPage = () => {
  return (
    <div className='content-contact'>
      <div className='title-contact'>
        <h1>Get in <span className='highlight'>Touch</span></h1>
      </div>

      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Let's talk about your project</h3>
          <p>I'm currently available for freelance work or full-time positions. If you have a question or just want to say hi, feel free to contact me!</p>
          
          <div className='info-item'>
            <span className='icon'>📍</span>
            <p>II-E 81 S Tsarahonenana, Madagascar</p>
          </div>
          <div className='info-item'>
            <span className='icon'>📧</span>
            <p>rajerisonkarter98@gmail.com</p>
          </div>
          <div className='info-item'>
            <span className='icon'>🔗</span>
            <p>linkedin.com/in/AjaahRAJERISON</p>
          </div>
        </div>

        <form className='contact-form'>
          <div className='input-group'>
            <input type='text' placeholder='Full Name' required />
            <input type='email' placeholder='Email Address' required />
          </div>
          <input type='text' placeholder='Subject' required />
          <textarea placeholder='Your Message' rows='5' required></textarea>
          <button type='submit' className='btn-submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};