import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-story" element={<OurStory />} />
    </Routes>
  );
};

export default App;