import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#works">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Social</h4>
                <div className="social-links">
                  {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> */}
                  {/* </a> */}
                </div>
              </div>
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
}

export default Footer
