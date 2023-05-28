import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

function Story() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/quiz');
  };

  return (
    <div className="story-container">
      <h1>Story Page</h1>
      <p>The story goes here</p>
      <button className="continueBtn" onClick={handleClick}>Continue</button>
    </div>
  );
}

export default Story;
