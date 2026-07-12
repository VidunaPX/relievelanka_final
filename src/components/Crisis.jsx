import React, { useState, useEffect, useCallback } from 'react';
import '../styleCompants/Crisis.css';
import useEmblaCarousel from 'embla-carousel-react';
import image1 from '/flood1.jpg';
import image2 from '/landslide1.jpg';
import image3 from '/landslide2.jpg';
import image4 from '/school.jpg';
import image5 from '/school2.jpg';

const SLIDE_DATA = [
  { title: "The Disaster", desc: "Cyclone Ditwah made landfall in November 2025, triggering flooding and landslides across the region. In the villages we work in, the damage wasn't a single bad storm, it was the start of a crisis that's still unfolding months later.", image: image1 },
  { title: "The Damage", desc: "In the hills around Yahangala, land collapsed to depths of nearly 40 feet. Udattawa, Nelum Mala, Gala Naka, Mada Kele, and Uda Gal Debokkawa, the villages our program serves, were declared no-man's-land, unsafe for anyone to return to.", image: image2 },
  { title: "The Cost", desc: "More than a dozen homes in Udattawa were buried outright. Dozens of bodies have been recovered, but recovery teams believe more remain 30 to 40 feet under the debris, so the full toll on these communities still isn't known.", image: image3 },
  { title: "The Aftermath", desc: "Over 1,600 schools across Sri Lanka were damaged by the cyclone, including ones in our own service area. Even where buildings survived, torn roofs, flooded classrooms, and missing supplies have kept children from a normal school day.", image: image4 },
  { title: "The Gap", desc: "Months after the cyclone, national relief funding still falls over $1.5 million short of what's needed for education alone, and supply shipments to affected regions face weeks of delay. In villages like ours, that gap is still being felt in classrooms today.", image: image5 },

];

const Crisis = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect(); // Set initial state
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="crisis" className="crisis-section">
      <div className="crisis-component-wrapper">
        <div className="crisis-container">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {SLIDE_DATA.map((slide, i) => (
                  <div className="embla__slide" key={i}>
                    <div className="stat-card">
                      <img src={slide.image} alt={slide.title} className="slide-image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="content-row">
              <div className="nav-panel">
                <div className="buttons-wrapper">
                  <button className="nav-btn prev" onClick={scrollPrev} aria-label="Previous slide">
                    &lt;
                  </button>
                  <button className="nav-btn next" onClick={scrollNext} aria-label="Next slide">
                    &gt;
                  </button>
                </div>
                <h3 className="content-heading">What we tackle</h3>
              </div>
              <div className="vertical-divider" aria-hidden="true" />
              <div className="text-area">
                <h2>{SLIDE_DATA[selectedIndex].title}</h2>
                <div className="desc-box">
                  <p>{SLIDE_DATA[selectedIndex].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crisis;