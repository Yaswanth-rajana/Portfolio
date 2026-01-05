import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.scss'

const About = lazy(() => import('./components/About'))
const Works = lazy(() => import('./components/Works'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
// import { ScrollStack } from '@/components/scroll-stack';

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Update progress percentage
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20) // 20ms * 100 = 2000ms (2 seconds)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Loading pixels</h2>
          <div className="loading-bar">
            <motion.div
              className="loading-progress"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
          <span className="loading-percentage">{progress}%</span>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ height: '50vh', background: '#242424' }} />}>
          <About />
          <Works />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App