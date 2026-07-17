
import React from 'react';
import '../styleCompants/AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Viduna Pilanavithanage',
      role: 'Founder',
      image: 'viduna-pfp6.png',
      alt: "Viduna Pilanavithanage",
      bio: 'Driven by his heritage and a sense of debt to the Sri Lankan education system, Viduna founded Relieve Lanka to ensure merit is the only determinant for success.'
    },
    {
      name: 'Deepaka Wickramasekara',
      role: 'Logistics & Finance Manager',
      image: 'deepaka-pfp.jpg',
      alt: "Deepaka Wickramasekara",
      bio: 'Deepaka leads the "Precision over Plurality" strategy, ensuring that over 90% of funds go directly to the field to create deep, long-term impact for selected students.'
    },
    {
      name: 'Jaynil Patel',
      role: 'Research Lead',
      image: 'jaynil-pfp.jpg',
      alt: 'Jaynil Patel',
      bio: 'Jaynil spearheads the data-driven side of the mission, analyzing regional geohazards and socioeconomic gaps to identify the students most at risk of being "filtered out" by the system.'
    },
    {
      name: 'Joshitaa Ganapathy',
      role: 'Operations Manager',
      image: 'joshitaa-pfp3.jpg',
      alt: 'Joshitaa Ganapathy',
      bio: 'Joshitaa manages the "Zero Direct Funds" policy, overseeing the complex reimbursement process and bi-weekly audits to ensure every dollar is used strictly for its intended educational purpose.'
    },
    {
      name: 'Tanushka Koturu',
      role: 'Brand Lead',
      image: 'https://picsum.photos/seed/team5/300/300.jpg',
      alt: 'Tanushka Koturu',
      bio: 'Tanushka leads the organization\'s commitment to absolute transparency, ensuring our digital presence accurately reflects our "field-first" model and provides donors with constant, authenticated updates.'
    },
    {
      name: 'Omar Mohamoud',
      role: 'Event Coordinator',
      image: '/omar-pfp.jpg',
      alt: 'Omar Mohamoud',
      bio: 'Omar organizes fundraising events and community outreach programs to raise awareness and gather support for our mission.'
    }
  ];

  return (
    <section
      id="about"
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#050956',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Mountain Background Layers */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <img 
          src="/mountain4.png" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 'auto',
            opacity: '0.3',
            objectFit: 'cover'
          }}
        />
        <img 
          src="/mountain3.png" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 'auto',
            opacity: '0.4',
            objectFit: 'cover'
          }}
        />
        <img 
          src="/mountain2.png" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 'auto',
            opacity: '0.5',
            objectFit: 'cover'
          }}
        />
        <img 
          src="/mountain.png" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 'auto',
            opacity: '0.6',
            objectFit: 'cover'
          }}
        />
        <img 
          src="/mountainfront.png" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 'auto',
            opacity: '0.7',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: '#ffffff',
          marginBottom: '16px',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          The Team
        </h2>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1.1rem',
          marginBottom: '60px',
          maxWidth: '600px',
          margin: '0 auto 60px auto'
        }}>
          Meet the people behind Relieve Lanka
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          justifyContent: 'center'
        }}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '30px 20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <img 
                src={member.image} 
                alt={member.alt}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
              />
              <h3 style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                color: '#ffffff',
                marginBottom: '8px',
                fontWeight: 600
              }}>
                {member.name}
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.95rem',
                fontWeight: 500,
                marginBottom: '0'
              }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;