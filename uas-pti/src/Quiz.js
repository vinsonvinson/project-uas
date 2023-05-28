import React from "react";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="Quiz-container">
      <div className="m-5 p-3 fs-3 question-container d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-plus statusIcon"></i>
          <div id="health" className="healthbar">
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div>Level</div>
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-skull statusIcon"></i>
          <div id="enemy" className="enemybar">
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 d-flex justify-content-around align-items-end">
        <img src="../character/satrio.gif" className="satrio" alt="" />
        <img src="../character/bromocakra.gif" className="monster" alt="" />
      </div>
      <div className="m-5 p-3 fs-3 question-container">
        <p>
          In a kingdom called Beringkarsa, there lived a peaceful society.
          However, the peace was disturbed by the attacks of 3 legendary
          monsters named Malaupata, Bromocakra, and Brajasambu. The king sent
          his trusted knight, to protect the kingdom and defeat the three
          monsters.
        </p>
      </div>
      {/* <div className="text-center">
        <button className="contBtn" onClick={handleClick}>
          Continue
        </button>
      </div> */}
    </div>
  );
}

export default Quiz;
