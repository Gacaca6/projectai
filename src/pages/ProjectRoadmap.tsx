import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Target, TrendingUp } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  progress: number;
}

const ProjectRoadmap: React.FC = () => {
  const [milestones] = useState<Milestone[]>([
    {
      id: '1',
      title: 'Project Initialization',
      description: 'Define project scope, gather requirements, and assemble the team',
      date: '2025-01-15',
      status: 'completed',
      progress: 100
    },
    {
      id: '2',
      title: 'Market Research & Validation',
      description: 'Conduct market analysis, competitor research, and validate business assumptions',
      date: '2025-02-01',
      status: 'completed',
      progress: 100
    },
    {
      id: '3',
      title: 'Design & Prototyping',
      description: 'Create user experience designs, wireframes, and interactive prototypes',
      date: '2025-02-28',
      status: 'current',
      progress: 65
    },
    {
      id: '4',
      title: 'MVP Development',
      description: 'Build the minimum viable product with core features',
      date: '2025-04-15',
      status: 'upcoming',
      progress: 0
    },
    {
      id: '5',
      title: 'Beta Testing',
      description: 'Release beta version and gather user feedback',
      date: '2025-05-01',
      status: 'upcoming',
      progress: 0
    },
    {
      id: '6',
      title: 'Product Launch',
      description: 'Official product launch and marketing campaign',
      date: '2025-06-01',
      status: 'upcoming',
      progress: 0
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'current': return 'bg-blue-500';
      case 'upcoming': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'current': return 'text-blue-600';
      case 'upcoming': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-6">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Roadmap</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Visualize your project timeline with key milestones and track progress toward your goals.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
            <Target className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-600">
            {milestones.filter(m => m.status === 'completed').length}
          </p>
          <p className="text-sm text-gray-600">milestones</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">In Progress</h3>
          <p className="text-3xl font-bold text-blue-600">
            {milestones.filter(m => m.status === 'current').length}
          </p>
          <p className="text-sm text-gray-600">milestones</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Progress</h3>
          <p className="text-3xl font-bold text-purple-600">
            {Math.round(milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length)}%
          </p>
          <p className="text-sm text-gray-600">complete</p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Project Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`flex items-center justify-center w-16 h-16 ${getStatusColor(milestone.status)} rounded-full z-10 shadow-lg`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusTextColor(milestone.status)} bg-gray-100`}>
                        {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(milestone.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  
                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{milestone.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${getStatusColor(milestone.status)} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${milestone.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Update Progress
        </button>
        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
          Export Timeline
        </button>
        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
          Share Roadmap
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectRoadmap;
