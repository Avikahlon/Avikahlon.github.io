import React from 'react';

const ContactFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form id="contactForm" action="https://formspree.io/f/myzjeyjo" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </footer>
  );
};

export default ContactFooter;