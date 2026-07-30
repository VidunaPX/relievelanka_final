import React from 'react';
import '../styles/global.css';
import '../styleCompants/Story.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const OurStory = () => {
  return (
    <div className="App our-story-page">
      <Header />
      <main className="relative z-10 our-story-main">
        <Hero title="About Us" showCta={false} variant="compact" />

        <section className="story-page">
          <div className="story-page__inner">
            <div className="story-who-we-are">
              <h2 className="story-section-heading">Who we are</h2>
              <p className="story-body">
                In November 2025, Cyclone Ditwah tore through the Knuckles Mountain Range in Sri Lanka. Landslide zones were declared across the Yahangala region. In Nelum Mala, 31 people died when the mountain gave way, and out of thirteen houses in the village, only one was left standing.
              </p>
              <p className="story-body">
                For a several days, the cyclone was on national news. Then the it disappeared overshadowed by other events. Three months later, a report from Nelum Mala found villagers still waiting on relief officials had promised the day after the disaster, including, according to a local temple monk quoted in a report, school supplies for children that still hadn't arrived. The story does not end when the coverage does. It just stops being anyone's problem to report on.
              </p>
              <p className="story-body">
                Relieve Lanka began in that gap. We are starting in Nelum Mala, one of the most affected of the Yahangala villages, with plans to extend support to neighboring communities as support continues to grow.
              </p>
              <p className="story-body">
                Rather than spreading limited resources thinly across many places, we're committing to doing this properly in one village first: shoes, uniforms, books, and basic school supplies, the same essentials that families in Nelum Mala are still waiting on months later. Structural repairs for school buildings are planned for a later phase, once the foundation is established.
              </p>
            </div>

            <div className="story-mission-vision-box">
              <div className="story-inner-box">
                <h3 className="story-inner-heading">Our Mission</h3>
                <p>
                  Relieve Lanka delivers direct, transparent support to children whose education has been disrupted by disaster, starting in Nelum Mala and the villages of the Yahangala region.
                </p>
              </div>
              <div className="story-inner-box">
                <h3 className="story-inner-heading">Our Vision</h3>
                <p>
                  Our vision is for a Sri Lanka where a child's circumstances are never the end of their story.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AboutUs />
      </main>
      <Footer backgroundColor="#050956" />
    </div>
  );
};

export default OurStory;
