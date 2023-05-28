import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import './Story.css';

function Story() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {};
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
      navigate('/quiz');
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  return (
    <div className="story-container">
      <h1 className='storytitle'>Story Page</h1>
      <div className="paper">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "This story is about " +name+ ", a hero from the land of Nusantara. " +name+ " is a smart yet brave hero that will bring peace to Nusantara. "
              +"However, " +name+ " will face some tough challenges ahead that will test the hero's knowledge and determination. Monsters from the depths of darkness have come to purge the land of Nusantara."
              +" In order to fight these monsters, the hero " +name+ " will have to use their knowledge that can help overcome the obstacles ahead."
            )
            .pauseFor(1800)
            .callFunction(handleComplete)
            .start();
        }}
        options={{
          delay: 40,
          cursor: "",
        }}
      />
      <br />
      {isComplete && (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Will " +name+ " be able to achieve victory and save the land of Nusantara? Only you can know the answer."
            )
            .start();
        }}
        options={{
          delay: 30,
          cursor: "",
        }}
      />
      )}
      </div>
      <button className="continueBtn" onClick={handleClick}>Continue</button>
    </div>
  );
}

export default Story;
