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
          <input type="text" id="name" name="name" placeholder="Nom" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="E-mail" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </footer>
  );
}

export default Contact;
