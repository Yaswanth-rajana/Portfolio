import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import PillNav from './PillNav'
import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'works', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  const handleNavigation = (href, label) => {
    // Extract section name from href (assuming format like '#home' or '#about')
    const section = href.replace('#', '')
    scrollToSection(section)
  }

  const navItems = [
    { label: 'Home', href: '#home', section: 'home' },
    { label: 'About', href: '#about', section: 'about' },
    { label: 'Works', href: '#works', section: 'works' },
    { label: 'Contact', href: '#contact', section: 'contact' }
  ]

  // Determine active href based on current section
  const getActiveHref = () => {
    const activeItem = navItems.find(item => item.section === activeSection)
    return activeItem ? activeItem.href : '#home'
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <h2>Your Name</h2> */}
          </motion.div>

          {/* PillNav for desktop */}
          <div className="pill-nav-container">
            <PillNav
              // logoAlt="Company Logo"
              items={navItems}
              activeHref={getActiveHref()}
              className="custom-nav"
              ease="power2.easeOut"
              baseColor="#000000"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#000000"
              onNavigate={handleNavigation}
            />
          </div>

          {/* Original nav for mobile fallback
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <button onClick={() => scrollToSection('home')}></button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}></button>
              </li>
              <li>
                <button onClick={() => scrollToSection('works')}></button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}></button>
              </li>
            </ul>
          </nav> */}

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header