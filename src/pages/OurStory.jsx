import React from 'react';
import '../styles/global.css';
import '../styleCompants/Story.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const jotNotes = [
  {
    label: 'Field-first transparency',
    text: 'Every donation is tracked in real time so donors see exactly where their support goes — not just that it was received.',
  },
  {
    label: 'Precision over plurality',
    text: 'Over 90% of funds go directly to the field, creating deep, long-term impact for the students we serve.',
  },
  {
    label: 'Education over circumstance',
    text: 'We focus on students most at risk of being filtered out by disaster, poverty, and systemic gaps.',
  },
  {
    label: 'From youth, for youth',
    text: 'Relieve Lanka is built and led by young people who believe merit — not background — should define success.',
  },
];

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
                In November 2025, Cyclone Ditwah tore through the Knuckles Mountain Range in Sri Lanka. Landslide zones were declared across the Yahangala area. In Nelum Mala, 31 people died when the mountain gave way, and of thirteen houses in the village, only one was left standing.
              </p>
              <p className="story-body">
                For a few days, the cyclone was national news. Then the cameras moved on. Three months later, a report from Nelum Mala found villagers still waiting on relief officials had promised the day after the disaster, including, according to a local temple monk quoted in that report, school supplies for children that still hadn't arrived. The story doesn't end when the coverage does. It just stops being anyone's problem to report on.
              </p>
              <p className="story-body">
                Relieve Lanka began in that gap. We're starting in Nelum Mala, the hardest-hit of the Yahangala villages, with plans to extend support to neighboring communities as this work continues.
              </p>
              <p className="story-body">
                Rather than spreading limited support thinly across many places, we're committing to doing this properly in one village first: shoes, uniforms, books, and basic school supplies, the same essentials families in Nelum Mala are still waiting on months later. Structural repairs to school buildings are planned for a later phase, once this groundwork is fully in place.
              </p>
            </div>

            <ul className="story-jot-notes">
              {jotNotes.map((note) => (
                <li key={note.label}>
                  <strong>{note.label}</strong>
                  {' — '}
                  {note.text}
                </li>
              ))}
            </ul>

            <div className="story-mission-vision-box">
              <div className="story-inner-box">
                <h3 className="story-inner-heading">Our Mission</h3>
                <p>
                  Relieve Lanka delivers direct, transparent support to children whose education has been disrupted by disaster, starting in Nelum Mala and the villages of Yahangala.
                </p>
              </div>
              <div className="story-inner-box">
                <h3 className="story-inner-heading">Our Vision</h3>
                <p>
                  A Sri Lanka where a child's circumstances are never the end of their story.
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
