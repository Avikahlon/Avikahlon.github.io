import React from 'react';
import './ContactPage.css'
import Navbar from '../../components/Navbar/navbar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import MagnetLines from '../../components/MagnetLines/MagnetLines';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-page">
      <Navbar />
      <div className="contact-page">
        <div className="contact-left">
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="tomato"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
          />
        </div>

        <div className="contact-right">
          <div className="contact-heading">
            <h2>Contact Me</h2>
            <span className="vector">📩</span>
          </div>
          <p className="contact-subheading">Wanna get in touch? Fill out the form below.</p>

          <form id="contactForm" action="https://formspree.io/f/myzjeyjo" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company <span className="optional">(Optional)</span></label>
              <input type="text" id="company" name="company" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>

            <button type="submit">
              Send Message <span className="vector">➡️</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;