import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Category from "./Category";
import Story from "./Story";
import Quiz from "./Quiz";
import AboutUs from "./AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/story/:name/:cate" element={<Story />} />
      <Route path="/quiz/:name/:cate" element={<Quiz />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
);
