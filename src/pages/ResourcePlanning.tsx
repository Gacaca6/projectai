import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Clock, TrendingUp, User, Briefcase } from 'lucide-react';
import { faker } from '@faker-js/faker';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  hourlyRate: number;
  availability: number;
  skills: string[];
  avatar: string;
}

interface Resource {
  id: string;
  name: string;
  type: 'software' | 'hardware' | 'service';
  monthlyCost: number;
  required: boolean;
}

const ResourcePlanning: React.FC = () => {
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: faker.person.fullName(),
      role: 'Frontend Developer',
      hourlyRate: 85,
      availability: 80,
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      avatar: faker.image.avatar()
    },
    {
      id: '2',
      name: faker.person.fullName(),
      role: 'Backend Developer',
      hourlyRate: 90,
      availability: 100,
      skills: ['Node.js', 'PostgreSQL', 'AWS'],
      avatar: faker.image.avatar()
    },
    {
      id: '3',
      name: faker.person.fullName(),
      role: 'UI/UX Designer',
      hourlyRate: 75,
      availability: 60,
      skills: ['Figma', 'Prototyping', 'User Research'],
      avatar: faker.image.avatar()
    },
    {
      id: '4',
      name: faker.person.fullName(),
      role: 'Project Manager',
      hourlyRate: 95,
      availability: 90,
      skills: ['Agile', 'Scrum', 'Leadership'],
      avatar: faker.image.avatar()
    }
  ]);

  const [resources] = useState<Resource[]>([
    { id: '1', name: 'GitHub Pro', type: 'service', monthlyCost: 44, required: true },
    { id: '2', name: 'AWS Services', type: 'service', monthlyCost: 150, required: true },
    { id: '3', name: 'Figma Professional', type: 'software', monthlyCost: 75, required: true },
    { id: '4', name: 'MacBook Pro', type: 'hardware', monthlyCost: 200, required: false },
    { id: '5', name: 'Adobe Creative Suite', type: 'software', monthlyCost: 60, required: false }
  ]);

  const [projectDuration, setProjectDuration] = useState(6); // months
  const [workingHoursPerWeek] = useState(160); // total team hours per week

  const calculateTeamCost = () => {
    return teamMembers.reduce((total, member) => {
      const weeklyHours = (workingHoursPerWeek * member.availability / 100) / 4;
      const monthlyCost = weeklyHours * 4 * member.hourlyRate;
      return total + monthlyCost;
    }, 0);
  };

  const calculateResourceCost = () => {
    return resources.reduce((total, resource) => total + resource.monthlyCost, 0);
  };

  const totalMonthlyCost = calculateTeamCost() + calculateResourceCost();
  const totalProjectCost = totalMonthlyCost * projectDuration;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl mb-6">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Planning</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Plan your team composition, budget allocation, and resource requirements for project success.
        </p>
      </motion.div>

      {/* Cost Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Cost</h3>
          <p className="text-2xl font-bold text-blue-600">${calculateTeamCost().toFixed(0)}</p>
          <p className="text-sm text-gray-600">per month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
            <Briefcase className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources</h3>
          <p className="text-2xl font-bold text-green-600">${calculateResourceCost()}</p>
          <p className="text-sm text-gray-600">per month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
            <DollarSign className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Total</h3>
          <p className="text-2xl font-bold text-purple-600">${totalMonthlyCost.toFixed(0)}</p>
          <p className="text-sm text-gray-600">all costs</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
            <TrendingUp className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Total</h3>
          <p className="text-2xl font-bold text-red-600">${totalProjectCost.toFixed(0)}</p>
          <p className="text-sm text-gray-600">{projectDuration} months</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Team Composition</h2>
          
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">${member.hourlyRate}/hr</p>
                  <p className="text-sm text-gray-600">{member.availability}% available</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full mt-6 px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors">
            + Add Team Member
          </button>
        </motion.div>

        {/* Resources & Tools */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resources & Tools</h2>
          
          <div className="space-y-4">
            {resources.map((resource, index) => {
              const getTypeIcon = (type: string) => {
                switch (type) {
                  case 'software': return '💻';
                  case 'hardware': return '🖥️';
                  case 'service': return '🌐';
                  default: return '📦';
                }
              };

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                      <p className="text-sm text-gray-600 capitalize">{resource.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">${resource.monthlyCost}/mo</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      resource.required 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {resource.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="w-full mt-6 px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors">
            + Add Resource
          </button>
        </motion.div>
      </div>

      {/* Project Duration Slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white rounded-2xl shadow-lg p-6 mt-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Timeline</h2>
        
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Project Duration: {projectDuration} months
          </label>
          <input
            type="range"
            min="1"
            max="24"
            value={projectDuration}
            onChange={(e) => setProjectDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>1 month</span>
            <span>24 months</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcePlanning;
