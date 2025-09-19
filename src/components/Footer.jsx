import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.scss'

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ willChange: 'transform' }}
        >
          <div className="footer-main">
            <div className="footer-info">
              <h3>Yaswanth Rajana</h3>
              <p>Web Developer, Designer</p>
              <div className="contact-info">
                <p>Phone: +91 8919171136</p>
                <p>Email: yaswanthrajanaindiann@gmail.com</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <nav>
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/* <div className="link-group">
                <h4>Social</h4>
                <div className="social-links">
                  <a href="https://github.com/Yaswanth-rajana" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <FaGithub aria-hidden="true" />
                  </a>
                  <a href="https://www.linkedin.com/in/yaswanth-rajana-591a3828a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <FaLinkedin aria-hidden="true" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                    <FaTwitter aria-hidden="true" />
                  </a>
                </div> */}
              {/* </div> */}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {currentYear} All rights reserved | Yaswanth Rajana
            </p>
            {/* <p className="made-with-love">
              Made with <FaHeart className="heart" /> by Your Name
            </p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
