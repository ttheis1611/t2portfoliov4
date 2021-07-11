import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css'

function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
  
    return (
      <section className="contact">
        <h3 data-testid="h1tag">Let me know what is on your mind</h3>
        <form id="contact-form" onSubmit={handleSubmit}>
        <br/>
          <div>
            <label htmlFor="name">Name:</label>
            <br/>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <br/>
          <div>
            <label htmlFor="email">Email address:</label>
            <br/>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <br/>
          <div >
            <label  htmlFor="message">Message</label>
            <br/>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          <br/>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    );
};

export default Contact;