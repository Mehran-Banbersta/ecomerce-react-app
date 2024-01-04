import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="news-letter-container">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="email-input">
        <input type="email" placeholder="Your Email ..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
