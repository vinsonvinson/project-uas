import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import App from './App';
import Story from './Story';
import Quiz from './Quiz';
import AboutUs from './AboutUs';

function AppWithTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/story" element={<Story />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppWithTransitions />
  </Router>,
);
