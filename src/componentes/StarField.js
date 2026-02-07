import React from 'react';
import '../hojas-de-estilo/StarField.css';

function StarField() {
  return (
    <div className="stars-container">
      <div className="star-layer stars-small"></div>
      <div className="star-layer stars-medium"></div>
      <div className="star-layer stars-large"></div>
      <div className="twinkle" style={{ top: '15%', left: '25%', animationDelay: '0.3s' }}></div>
      <div className="twinkle" style={{ top: '25%', left: '55%', animationDelay: '0.8s' }}></div>
      <div className="twinkle" style={{ top: '35%', left: '75%', animationDelay: '1.3s' }}></div>
      <div className="twinkle" style={{ top: '45%', left: '15%', animationDelay: '0.5s' }}></div>
      <div className="twinkle" style={{ top: '55%', left: '85%', animationDelay: '1.8s' }}></div>
      <div className="twinkle" style={{ top: '65%', left: '35%', animationDelay: '2.3s' }}></div>
      <div className="twinkle" style={{ top: '75%', left: '65%', animationDelay: '0.1s' }}></div>
      <div className="twinkle" style={{ top: '85%', left: '45%', animationDelay: '1.1s' }}></div>
      <div className="twinkle" style={{ top: '10%', left: '90%', animationDelay: '1.6s' }}></div>
      <div className="twinkle" style={{ top: '20%', left: '40%', animationDelay: '2.1s' }}></div>
      <div className="twinkle" style={{ top: '40%', left: '20%', animationDelay: '0.6s' }}></div>
      <div className="twinkle" style={{ top: '60%', left: '10%', animationDelay: '1.4s' }}></div>
      <div className="twinkle" style={{ top: '80%', left: '80%', animationDelay: '2.6s' }}></div>
      <div className="twinkle" style={{ top: '5%', left: '60%', animationDelay: '0.9s' }}></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
    </div>
  );
}

export default StarField;
