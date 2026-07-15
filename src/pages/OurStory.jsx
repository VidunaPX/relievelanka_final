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
        <Hero title="Our Story" showCta={false} variant="compact" />

        <section className="story-page">
          <div className="story-page__inner">
            <div className="story-who-we-are">
              <h2 className="story-section-heading">Who we are</h2>
              <p className="story-body">
                Relieve Lanka is a youth-led organization dedicated to ensuring that potential
                is defined by intellect, not circumstance. Born out of a real crisis during the
                floods in Ratnapura, we grew from a shared spreadsheet into a platform that
                connects donors directly with families and students across Sri Lanka — building
                trust through transparency, not phone calls that may never come.
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
                  To ensure merit is the only determinant for success by providing direct,
                  transparent support to students affected by disaster and poverty — so no
                  young person&apos;s future is limited by the circumstances they were born into.
                </p>
              </div>
              <div className="story-inner-box">
                <h3 className="story-inner-heading">Our Vision</h3>
                <p>
                  A Sri Lanka where every young person&apos;s potential is defined by intellect
                  and effort, where communities and the diaspora look after each other with
                  clarity, accountability, and lasting impact.
                </p>
              </div>
            </div>

            <div className="story-image-section">
              <img
                src="/students_flood.jpg"
                alt="Students supported by Relieve Lanka"
                className="story-image"
              />
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
