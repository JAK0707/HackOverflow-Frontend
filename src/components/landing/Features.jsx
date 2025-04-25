import React from 'react';
import { Brain, Database, Cpu, BookOpen, Grid, Cloud, MessageSquare, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="glass-effect p-6 rounded-2xl card-hover">
      <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${gradient}`}>
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Training Assistant',
      description: 'Get step-by-step guidance for training your AI models with our interactive chatbot.',
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-500'
    },
    {
      icon: Database,
      title: 'Dataset Marketplace',
      description: 'Browse, buy, or sell datasets from around the world to train your AI models.',
      gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      icon: Cpu,
      title: 'Model Marketplace',
      description: 'Discover pre-trained AI models for your specific use case or sell your own.',
      gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Research Paper Assistant',
      description: 'Get guidance on trending topics and help with writing AI research papers.',
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      icon: Grid,
      title: 'Custom App Showcase',
      description: 'Explore custom AI applications built by the community or showcase your own.',
      gradient: 'bg-gradient-to-r from-amber-500 to-orange-600'
    },
    {
      icon: Cloud,
      title: 'Cloud GPU Resources',
      description: 'Access on-demand GPU computing power for training your AI models.',
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Community Interaction',
      description: 'Connect with other AI developers, researchers, and enthusiasts in real-time.',
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Courses',
      description: 'Explore AI/ML and Web3 courses curated by experts to boost your skills and portfolio.',
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-500'
    }    
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">AI Platform</span> Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to develop, train, and monetize AI models in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;