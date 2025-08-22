import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  phase: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'completed';
  estimatedHours: number;
  dependencies: string[];
}

const ImplementationPlan: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Market Research & Analysis',
      description: 'Conduct comprehensive market research to validate the project concept',
      phase: 'Planning',
      priority: 'high',
      status: 'completed',
      estimatedHours: 40,
      dependencies: []
    },
    {
      id: '2',
      title: 'Technical Architecture Design',
      description: 'Design the technical architecture and select technology stack',
      phase: 'Planning',
      priority: 'high',
      status: 'in-progress',
      estimatedHours: 60,
      dependencies: ['1']
    },
    {
      id: '3',
      title: 'UI/UX Design & Prototyping',
      description: 'Create user interface designs and interactive prototypes',
      phase: 'Design',
      priority: 'high',
      status: 'todo',
      estimatedHours: 80,
      dependencies: ['1']
    },
    {
      id: '4',
      title: 'Backend Development Setup',
      description: 'Set up backend infrastructure and core services',
      phase: 'Development',
      priority: 'high',
      status: 'todo',
      estimatedHours: 120,
      dependencies: ['2']
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    phase: 'Planning',
    priority: 'medium' as const,
    estimatedHours: 8
  });

  const [showAddTask, setShowAddTask] = useState(false);

  const phases = ['Planning', 'Design', 'Development', 'Testing', 'Deployment'];

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      status: 'todo',
      dependencies: []
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      phase: 'Planning',
      priority: 'medium',
      estimatedHours: 8
    });
    setShowAddTask(false);
  };

  const updateTaskStatus = (taskId: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'todo': return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default: return null;
    }
  };

  const getPhaseProgress = (phase: string) => {
    const phaseTasks = tasks.filter(task => task.phase === phase);
    const completedTasks = phaseTasks.filter(task => task.status === 'completed');
    return phaseTasks.length > 0 ? (completedTasks.length / phaseTasks.length) * 100 : 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-6">
          <ClipboardList className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Implementation Plan</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Break down your project into manageable tasks and track progress through each phase.
        </p>
      </motion.div>

      {/* Phase Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
      >
        {phases.map((phase, index) => {
          const progress = getPhaseProgress(phase);
          const phaseTasks = tasks.filter(task => task.phase === phase);
          
          return (
            <div key={phase} className="bg-white rounded-xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{phase}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>{phaseTasks.length} tasks</span>
                <span>{progress.toFixed(0)}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Tasks List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Project Tasks</h2>
          <button
            onClick={() => setShowAddTask(true)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Task
          </button>
        </div>

        {/* Add Task Form */}
        {showAddTask && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 rounded-lg p-4 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Task title"
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select
                value={newTask.phase}
                onChange={(e) => setNewTask({...newTask, phase: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {phases.map(phase => (
                  <option key={phase} value={phase}>{phase}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Task description"
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
              rows={2}
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value as Task['priority']})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="number"
                  placeholder="Hours"
                  value={newTask.estimatedHours}
                  onChange={(e) => setNewTask({...newTask, estimatedHours: parseInt(e.target.value) || 0})}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={addTask}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddTask(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tasks Grid */}
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(task.status)}
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {task.phase}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.estimatedHours} hours estimated
                  </div>
                </div>
                <div className="flex space-x-2">
                  <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value as Task['status'])}
                    className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImplementationPlan;
