import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobile } from 'react-icons/fa'
import './Works.scss'
import './Works.scss'
import ScrollFloat from './ScrollFloat'
import { projects } from '../data/projects'

const ProjectCard = memo(({ project, itemVariants }) => {
  return (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      layout
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          className="project-img"
        />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
              <FaGithub />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
})

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: 'All', icon: <FaCode /> },
    { key: 'web', label: 'Web', icon: <FaCode /> },
    { key: 'mobile', label: 'Mobile', icon: <FaMobile /> },
    { key: 'design', label: 'Design', icon: <FaPalette /> }
  ]

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.category === activeFilter
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="works" className="works section">
      <div className="container">
        <motion.div
          className="works-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="section-title"
            textClassName=""
            style={{ color: 'white' }}
          >
            My Works
          </ScrollFloat>

          <motion.div className="filter-tabs" variants={itemVariants}>
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} itemVariants={itemVariants} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Works
