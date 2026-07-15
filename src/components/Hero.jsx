import React, { useState, useEffect, useRef } from 'react';
import '../styleCompants/Hero.css';
import "../styles/global.css"
import myVideo from '/hero_video_2.mp4';
import { smoothScrollToId } from '../utils/smoothScroll';

const NAV_ITEMS = [
  { label: 'What We Tackle', id: 'crisis' },
  { label: 'Goals & Objectives', id: 'goals' },
  { label: 'Our Work', id: 'impact' },
  { label: 'Donate', id: 'donate' },
  { label: 'About Us', id: 'about' },
];

const Hero = ({
  onShowDonationDetails,
  title = 'Ensuring potential is defined by intellect, not circumstance',
  showCta = true,
  variant = 'default',
}) => {
  const [ctaPhraseIndex, setCtaPhraseIndex] = useState(0);
  const [isRotatingOut, setIsRotatingOut] = useState(false);
  const lastScrollY = useRef(0);

  const ctaPhrases = [
    'to save a future.',
    'to change lives.',
    'to build hope.',
    'to create opportunity.',
    'to empower youth.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotatingOut(true);
      setTimeout(() => {
        setCtaPhraseIndex((prev) => (prev + 1) % ctaPhrases.length);
        setIsRotatingOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);





  return (
    <section
      id="hero"
      className={`relative${variant === 'compact' ? ' hero--compact' : ''}`}
    >
      <div className="hero-video-shell">
        <div className="video-background">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={myVideo} type="video/mp4" />
          </video>
          
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            {showCta && (
              <div className="cta-wrapper">
                <button className="cta-button-white" onClick={onShowDonationDetails}>
                  Donate
                </button>
                <p className={`cta-text${isRotatingOut ? ' rotate-out' : ''}`}>
                  {ctaPhrases[ctaPhraseIndex]}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;