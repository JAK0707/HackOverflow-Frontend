import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import ModelCard from '../components/marketplace/ModelCard';
import DatasetCard from '../components/marketplace/DatasetCard';
import GPUCard from '../components/marketplace/GPUCard';
import AppCard from '../components/marketplace/AppCard';

// Mock data
const featuredModels = [
  {
    id: 1,
    title: 'GPT-4 Optimized for Medical Research',
    description: 'A specialized language model fine-tuned for medical research and diagnosis with 99.2% accuracy.',
    category: 'NLP',
    rating: 4.9,
    downloads: 1248,
    price: 299,
    author: 'MedAI Labs',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Vision Transformer for Object Detection',
    description: 'State-of-the-art object detection model based on Vision Transformer architecture with 95% mAP.',
    category: 'Computer Vision',
    rating: 4.7,
    downloads: 856,
    price: 0,
    author: 'DeepVision',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Multilingual Sentiment Analysis',
    description: 'Support for 50+ languages with 92% accuracy for sentiment analysis on social media content.',
    category: 'NLP',
    rating: 4.6,
    downloads: 723,
    price: 149,
    author: 'GlobalNLP',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const featuredDatasets = [
  {
    id: 1,
    title: 'Global Climate Patterns 2000-2023',
    description: 'Comprehensive dataset with temperature, precipitation, and atmospheric conditions from 1000+ stations worldwide.',
    category: 'tabular',
    size: 2048,
    records: 1500000,
    price: 199,
    author: 'ClimateResearch'
  },
  {
    id: 2,
    title: 'Medical Imaging Collection',
    description: 'Annotated collection of X-rays, MRIs, and CT scans covering 20+ conditions with expert annotations.',
    category: 'image',
    size: 4500,
    records: 250000,
    price: 399,
    author: 'MedicalDataCorp'
  },
  {
    id: 3,
    title: 'Multi-Language Speech Recognition',
    description: 'Audio samples in 15 languages with transcriptions for speech recognition training.',
    category: 'audio',
    size: 800,
    records: 50000,
    price: 0,
    author: 'OpenSpeech'
  }
];

const featuredGPUs = [
  {
    id: 1,
    title: 'NVIDIA A100 Cluster',
    description: 'High-performance computing cluster with 8x NVIDIA A100 GPUs for large-scale AI training.',
    type: 'NVIDIA A100',
    memory: 80,
    performance: 312,
    availability: 85,
    price: 4.5,
    provider: 'CloudGPU'
  },
  {
    id: 2,
    title: 'AMD MI250 Accelerator',
    description: 'Optimized for scientific computing and AI workloads with excellent performance/cost ratio.',
    type: 'AMD MI250',
    memory: 128,
    performance: 383,
    availability: 60,
    price: 3.8,
    provider: 'RedCompute'
  },
  {
    id: 3,
    title: 'RTX 4090 Workstation',
    description: 'Affordable GPU option for smaller AI projects and development with good performance.',
    type: 'NVIDIA RTX 4090',
    memory: 24,
    performance: 82.6,
    availability: 95,
    price: 1.2,
    provider: 'DevGPU'
  }
];

const featuredApps = [
  {
    id: 1,
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and analyze information from documents with 98% accuracy.',
    category: 'Business',
    rating: 4.8,
    views: 5623,
    author: 'DocuMind',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'AI Music Composer',
    description: 'Generate custom music across various genres and moods using advanced AI.',
    category: 'Creative',
    rating: 4.6,
    views: 4281,
    author: 'MelodyAI',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Predictive Maintenance Platform',
    description: 'Minimize downtime by predicting equipment failures before they occur.',
    category: 'Industry',
    rating: 4.9,
    views: 3894,
    author: 'IndustryAI',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const SectionHeader = ({ title, link, linkText }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">
      {title}
    </h2>
    <Link to={link} className="text-primary dark:text-primary-light font-medium flex items-center hover:underline">
      {linkText} <ArrowRight size={16} className="ml-1" />
    </Link>
  </div>
);

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Welcome to AIMarket</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Your one-stop platform for all AI development resources
            </p>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { title: 'Train Models', link: '/training', color: 'from-pink-500 to-rose-500' },
              { title: 'Find Datasets', link: '/datasets', color: 'from-blue-500 to-indigo-600' },
              { title: 'Browse Models', link: '/models', color: 'from-purple-500 to-indigo-600' },
              { title: 'Use Cloud GPU', link: '/cloud-gpu', color: 'from-cyan-500 to-blue-500' }
            ].map((action, index) => (
              <Link 
                key={index} 
                to={action.link}
                className={`bg-gradient-to-r ${action.color} text-white font-medium rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <span className="text-lg">{action.title}</span>
              </Link>
            ))}
          </div>
          
          {/* Featured Models */}
          <section className="mb-12">
            <SectionHeader title="Featured AI Models" link="/models" linkText="View all models" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredModels.map(model => (
                <ModelCard key={model.id} {...model} />
              ))}
            </div>
          </section>
          
          {/* Featured Datasets */}
          <section className="mb-12">
            <SectionHeader title="Popular Datasets" link="/datasets" linkText="Explore all datasets" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDatasets.map(dataset => (
                <DatasetCard key={dataset.id} {...dataset} />
              ))}
            </div>
          </section>
          
          {/* Featured Apps */}
          <section className="mb-12">
            <SectionHeader title="Custom AI Apps" link="/apps" linkText="Discover all apps" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredApps.map(app => (
                <AppCard key={app.id} {...app} />
              ))}
            </div>
          </section>
          
          {/* Featured GPUs */}
          <section className="mb-12">
            <SectionHeader title="Available Cloud GPUs" link="/cloud-gpu" linkText="See all GPUs" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGPUs.map(gpu => (
                <GPUCard key={gpu.id} {...gpu} />
              ))}
            </div>
          </section>
          
          {/* Research Assistance Banner */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-2">Need Help With Research?</h2>
                  <p className="mb-4 max-w-xl">
                    Get assistance with your AI research papers, discover trending topics, and accelerate your academic work.
                  </p>
                  <Link to="/research">
                    <Button variant="secondary">
                      Explore Research Assistant
                    </Button>
                  </Link>
                </div>
                <img 
                  src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Research Assistant" 
                  className="w-full md:w-80 h-auto rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;