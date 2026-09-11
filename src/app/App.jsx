import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import StoryPage from '../pages/story/StoryPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-story" element={<StoryPage />} />
    </Routes>
  );
};

export default App;