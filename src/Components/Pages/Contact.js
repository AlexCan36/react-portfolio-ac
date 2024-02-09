import Header from "../Header";
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // //const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit Form', formState);
    //     }
    // };

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ width: '50%', minWidth: '300px', textAlign: 'left' }}>
            <Header title="Contact" subtitle="Always looking for new opportunities !" />
            <h3>Contact Me 📠 📧 💻:</h3>
            <form id="contact-form" action="https://formsubmit.co/el.winy.36@gmail.com" method="post">
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} style={{ width: '100%', padding: '5px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} style={{ width: '100%', padding: '5px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} style={{ width: '100%', padding: '5px' }} />
              </div>
              {errorMessage && (
                <div style={{ marginBottom: '10px' }}>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      );
              }      

export default Contact;