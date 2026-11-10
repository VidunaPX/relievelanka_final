import React from 'react';
import '../styleCompants/Story.css';
 
 
const OurStory = () => {
  return (
    <section
      id="our-story"
      className="relative z-10 py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, var(--dark-blue) 0%, var(--light-blue) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <i className="fa-solid fa-leaf" style={{ color: 'var(--accent)' }}></i>
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.15em' }}
          >
            Our Story
          </span>
        </div>
 
        <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-6 max-w-2xl">
          It started with a spreadsheet that couldn't keep up.
        </h2>
 
        <p
          className="text-sm md:text-base leading-relaxed mb-16"
          style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '60ch' }}
        >
          Relieve Lanka wasn't planned as a platform. It grew out of a real
          problem, during a real flood, when a group of volunteers realised
          that trust between a donor and a family shouldn't depend on a phone
          call that may never come.
        </p>
 
        <div className="story-timeline">
          {milestones.map((item, index) => (
            <div className="story-row" key={item.year}>
              <div className="story-rail">
                <span className="story-dot" style={{ animationDelay: `${index * 0.15}s` }} />
                {index < milestones.length - 1 && <span className="story-line" />}
              </div>
 
              <div className="story-content">
                <span className="story-year font-display" style={{ color: 'var(--accent)' }}>
                  {item.year}
                </span>
                <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '52ch' }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default OurStory;