import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Building2, 
  ClipboardList, 
  MapPin, 
  Users, 
  TrendingUp,
  Zap,
  Target
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'AI Pitch Generator',
      description: 'Generate compelling project pitches with AI assistance',
      link: '/pitch',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Building2,
      title: 'Business Model Canvas',
      description: 'Create comprehensive business models visually',
      link: '/business-model',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: ClipboardList,
      title: 'Implementation Plans',
      description: 'Detailed step-by-step implementation strategies',
      link: '/implementation',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Project Roadmap',
      description: 'Visual timeline and milestone tracking',
      link: '/roadmap',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Resource Planning',
      description: 'Team and resource allocation strategies',
      link: '/resources',
      color: 'from-red-400 to-rose-500'
    }
  ];

  const stats = [
    { label: 'Projects Created', value: '150+', icon: Target },
    { label: 'Success Rate', value: '94%', icon: TrendingUp },
    { label: 'AI Efficiency', value: '10x', icon: Zap }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Project Creation
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Reimagined
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform your ideas into reality with our AI-powered project creation platform. 
          From pitch to implementation, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pitch"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Creating
          </Link>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Dashboard;
