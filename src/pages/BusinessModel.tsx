import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, DollarSign, Target, Truck, Heart } from 'lucide-react';

const BusinessModel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('value-proposition');

  const canvasSections = [
    {
      id: 'key-partners',
      title: 'Key Partners',
      icon: Users,
      color: 'bg-blue-100 border-blue-300',
      description: 'Who are your key partners and suppliers?'
    },
    {
      id: 'key-activities',
      title: 'Key Activities',
      icon: Target,
      color: 'bg-green-100 border-green-300',
      description: 'What key activities does your value proposition require?'
    },
    {
      id: 'key-resources',
      title: 'Key Resources',
      icon: Building2,
      color: 'bg-yellow-100 border-yellow-300',
      description: 'What key resources does your value proposition require?'
    },
    {
      id: 'value-proposition',
      title: 'Value Propositions',
      icon: Heart,
      color: 'bg-red-100 border-red-300',
      description: 'What value do you deliver to your customers?'
    },
    {
      id: 'customer-relationships',
      title: 'Customer Relationships',
      icon: Users,
      color: 'bg-purple-100 border-purple-300',
      description: 'What type of relationship do you establish with your customers?'
    },
    {
      id: 'channels',
      title: 'Channels',
      icon: Truck,
      color: 'bg-indigo-100 border-indigo-300',
      description: 'Through which channels do you reach your customers?'
    },
    {
      id: 'customer-segments',
      title: 'Customer Segments',
      icon: Target,
      color: 'bg-pink-100 border-pink-300',
      description: 'For whom are you creating value?'
    },
    {
      id: 'cost-structure',
      title: 'Cost Structure',
      icon: DollarSign,
      color: 'bg-orange-100 border-orange-300',
      description: 'What are the most important costs inherent in your business model?'
    },
    {
      id: 'revenue-streams',
      title: 'Revenue Streams',
      icon: DollarSign,
      color: 'bg-emerald-100 border-emerald-300',
      description: 'For what value are your customers really willing to pay?'
    }
  ];

  const [canvasData, setCanvasData] = useState<Record<string, string>>({});

  const updateCanvasData = (sectionId: string, value: string) => {
    setCanvasData(prev => ({ ...prev, [sectionId]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl mb-6">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Model Canvas</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Design and visualize your business model using the proven Business Model Canvas framework.
        </p>
      </motion.div>

      {/* Canvas Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
      >
        {/* Row 1 */}
        <div className="md:col-span-1 lg:col-span-1">
          {canvasSections.slice(0, 1).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-48 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-20 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          {canvasSections.slice(1, 3).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-23 mb-4 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-2">
                  <Icon className="w-4 h-4 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-16 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          {canvasSections.slice(3, 4).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-48 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-20 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          {canvasSections.slice(4, 6).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-23 mb-4 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-2">
                  <Icon className="w-4 h-4 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-16 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          {canvasSections.slice(6, 7).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-48 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-20 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className="md:col-span-3 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {canvasSections.slice(7, 9).map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.color} rounded-lg p-4 h-32 cursor-pointer transition-all hover:shadow-lg ${
                  activeSection === section.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{section.description}</p>
                <textarea
                  value={canvasData[section.id] || ''}
                  onChange={(e) => updateCanvasData(section.id, e.target.value)}
                  className="w-full h-12 text-xs border-0 bg-transparent resize-none focus:outline-none"
                  placeholder="Enter details..."
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Save Canvas
        </button>
        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
          Export PDF
        </button>
        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
          Share Canvas
        </button>
      </motion.div>
    </div>
  );
};

export default BusinessModel;
