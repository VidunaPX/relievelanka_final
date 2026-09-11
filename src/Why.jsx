import React, { useState, useEffect } from 'react';
import './styles/global.css';
import './styles/waterfall.css';

import BackgroundEffects from './components/BackgroundEffects';
import TransitionSection from './components/TransitionSection';
import OurWork from './components/OurStory';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import useScrollObserver from './hooks/useScrollObserver';
import { smoothScrollToId } from './utils/smoothScroll';

const Why = () => {
  const [funding, setFunding] = useState(0);
  const [donors, setDonors] = useState(0);
  const goal = 5000;

  // Initialize scroll observer
  useScrollObserver();

  // Use fixed funding and donor count
  useEffect(() => {
    setFunding(52);
    setDonors(2);
  }, []);

  const handleDonation = (amount) => {
    setFunding(prev => Math.min(prev + amount, goal));
    setDonors(prev => prev + 1);
  };

  const handleShowDonationDetails = () => {
    smoothScrollToId('donate', { offset: 24 });
  };

  return (
    <div className="why">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Toast Notification */}
      <div
        id="toast"
        className="toast"
        role="alert"
        aria-live="polite"
      ></div>

      {/* Main Content */}
      <main className="relative z-10">
        <OurStory />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Why;