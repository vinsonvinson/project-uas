import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Story.css";

function Story() {
  const navigate = useNavigate();
  let { name } = useParams();
  let { cate } = useParams();

  const handleClick = () => {
    navigate("/quiz/" + name + "/" + cate);
  };

  return (
    <div className="">
      <div className="text-center mt-5">
        <img
          src="../character/satrio.gif"
          className="satrio mx-5 mb-0"
          alt=""
        />
        <img
          src="../character/bromocakra.gif"
          className="monster mt-5"
          alt=""
        />
        <img
          src="../character/brajasambu.gif"
          className="monster mt-5"
          alt=""
        />
        <img src="../character/malaupata.gif" className="monster mt-5" alt="" />
      </div>
      <div className="m-5 p-3 fs-3 story-container">
        <p>
          In a kingdom called Beringkarsa, there lived a peaceful society.
          However, the peace was disturbed by the attacks of 3 legendary
          monsters named Malaupata, Bromocakra, and Brajasambu. The king sent
          his trusted knight, {name}, to protect the kingdom and defeat the
          three monsters.
        </p>
      </div>
      <div className="text-center">
        <button className="contBtn" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Story;
