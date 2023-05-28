import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Category.css";

function Story(props) {
  const navigate = useNavigate();
  let { name } = useParams();

  const [cate, setCate] = useState("");

  const handleClick = () => {
    navigate("/Story/" + name + "/" + cate);
  };

  return (
    <div className="text-center">
      <div className="select">
        <select name="cars" id="cars" onChange={(e) => setCate(e.target.value)}>
          <option value="any">Any Category</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theaters</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime & Manga</option>
          <option value="32">Cartoon & Animation</option>
        </select>

        <div className="select_arrow"></div>
      </div>
      <div className="text-center mt-5">
        <button className="contBtn" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Story;
