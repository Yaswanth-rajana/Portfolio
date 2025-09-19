// About.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import TextReveal from './TextReveal';
import ScrollFloat from './ScrollFloat';

const About = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ willChange: 'transform' }}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="section-title"
            textClassName=""
          >
            About Me
          </ScrollFloat>

          <div className="about-text">
            <TextReveal>
              <p>
                I'm a passionate developer and designer who loves creating digital
                experiences. I started my journey with curiosity about how things
                work on the web, which evolved into a deep interest in both design
                and development. Over the years, I've worked on various projects
                ranging from simple websites to complex web applications.
              </p>
            </TextReveal>
            <TextReveal>
              <p>
                Currently, I'm focused on building modern, responsive web
                applications using React and other cutting-edge technologies. I
                believe in the power of good design and clean code to create
                meaningful user experiences.
              </p>
            </TextReveal>
          </div>

          {/* Added Skills Heading */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="section-title skills-heading"
            textClassName=""
            style={{ marginTop: '3rem' }}
          >
            Skills
          </ScrollFloat>

          <motion.div variants={itemVariants} className="scrollstack-container" style={{ willChange: 'transform' }}>
            <ScrollStack useWindowScroll={false}>
              <ScrollStackItem style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
                <h3>Frontend Development</h3>
                <p>Specializing in React, Vue, and modern JavaScript frameworks</p>
              </ScrollStackItem>
              <ScrollStackItem style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white" }}>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and beautiful user experiences</p>
              </ScrollStackItem>
              <ScrollStackItem style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white" }}>
                <h3>Full Stack Solutions</h3>
                <p>End-to-end development with Node.js and various databases</p>
              </ScrollStackItem>
            </ScrollStack>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
