import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './ScrollFloat.scss';

const ScrollFloat = ({
  children,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  stagger = 0.03
}) => {
  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        duration: animationDuration,
        ease: "easeOut"
      }
    }
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 100, // equivalent to yPercent: 120 approx
      scaleY: 2.0,
      scaleX: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      scaleX: 1,
      transition: {
        duration: animationDuration,
      }
    }
  };

  return (
    <h2 className={`scroll-float ${containerClassName}`}>
      <motion.span
        className={`scroll-float-text ${textClassName}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {splitText.map((char, i) => (
          <motion.span
            key={i}
            className="char"
            variants={charVariants}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
};

export default ScrollFloat;
