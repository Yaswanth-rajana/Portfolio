// components/TextReveal.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words
    const words = el.textContent.split(/(\s+)/).map((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      if (!word.match(/^\s+$/)) {
        span.className = 'word';
      }
      return span;
    });

    el.textContent = '';
    words.forEach(word => el.appendChild(word));

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: 0.2, y: '100%', rotateX: 90, transformOrigin: 'top center' },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div className="text-reveal-container" ref={containerRef}>
      {children}
    </div>
  );
};

export default TextReveal;