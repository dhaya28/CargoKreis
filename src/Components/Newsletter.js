import React, { useState } from 'react';
import '../Styles/Newsletter.css';

const NewsletterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name, 'Email:', email);
  };

  return (
    <div className="newsletter">
      <h2>Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="newsletter-input"
        />
        <input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
        />
        <p className="newsletter-info">
        We respect your inbox. Only promotional offers, never spam
        </p>
        <button type="submit" className="newsletter-button">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;