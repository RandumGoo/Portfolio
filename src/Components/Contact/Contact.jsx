// File: Contact.js
import React from 'react';
import './Contact.scss';
import '../main.scss';

function Contact() {
  return (
    <footer className="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </footer>
  );
}

export default Contact;
