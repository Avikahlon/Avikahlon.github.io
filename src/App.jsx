import React from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills'

function App() {
  return (
    <div className="app">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </Router>
      </motion.div>
    </div>
  )
}

export default App