import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import PitchGenerator from './pages/PitchGenerator';
import BusinessModel from './pages/BusinessModel';
import ImplementationPlan from './pages/ImplementationPlan';
import ProjectRoadmap from './pages/ProjectRoadmap';
import ResourcePlanning from './pages/ResourcePlanning';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pitch" element={<PitchGenerator />} />
              <Route path="/business-model" element={<BusinessModel />} />
              <Route path="/implementation" element={<ImplementationPlan />} />
              <Route path="/roadmap" element={<ProjectRoadmap />} />
              <Route path="/resources" element={<ResourcePlanning />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

export default App;
