import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ModelCard from '../components/marketplace/ModelCard';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

// Mock data
const modelsData = [
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
  },
  {
    id: 4,
    title: 'Time Series Forecasting Model',
    description: 'Accurate forecasting for financial data, weather patterns, and other time-dependent variables.',
    category: 'Forecasting',
    rating: 4.5,
    downloads: 612,
    price: 199,
    author: 'PredictiveAI',
    image: 'https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'Deep Reinforcement Learning for Robotics',
    description: 'Pre-trained model for robotic control tasks with efficient learning and adaptation.',
    category: 'Reinforcement Learning',
    rating: 4.8,
    downloads: 438,
    price: 349,
    author: 'RoboAI',
    image: 'https://images.pexels.com/photos/8566358/pexels-photo-8566358.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Speech-to-Text Transcription',
    description: 'Highly accurate multi-language transcription with support for domain-specific terminology.',
    category: 'Speech',
    rating: 4.4,
    downloads: 925,
    price: 99,
    author: 'VoiceAI',
    image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    title: 'Recommendation Engine',
    description: 'Personalized recommendation system trained on diverse e-commerce and content platforms.',
    category: 'Recommendation',
    rating: 4.3,
    downloads: 776,
    price: 179,
    author: 'RecAI',
    image: 'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 8,
    title: 'Image Segmentation Model',
    description: 'Pixel-level segmentation for medical imaging, autonomous driving, and scene understanding.',
    category: 'Computer Vision',
    rating: 4.7,
    downloads: 583,
    price: 249,
    author: 'PixelAI',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 9,
    title: 'Anomaly Detection Framework',
    description: 'Identify outliers and anomalies in complex datasets for fraud detection and quality control.',
    category: 'Anomaly Detection',
    rating: 4.6,
    downloads: 412,
    price: 199,
    author: 'DetectionAI',
    image: 'https://images.pexels.com/photos/7319080/pexels-photo-7319080.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Models = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [priceFilter, setPriceFilter] = useState('all');

  const categories = ['All', 'NLP', 'Computer Vision', 'Forecasting', 'Reinforcement Learning', 'Speech', 'Recommendation', 'Anomaly Detection'];

  // Filter and sort models
  const filteredModels = modelsData
    .filter(model => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
      
      // Price filter
      const matchesPrice = 
        priceFilter === 'all' || 
        (priceFilter === 'free' && model.price === 0) ||
        (priceFilter === 'paid' && model.price > 0);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Models Marketplace</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Discover and purchase pre-trained AI models for various applications and domains.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search models..."
                  className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <select
                    className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20 appearance-none"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="relative">
                  <select
                    className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20 appearance-none"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                    <option value="downloads">Most Downloads</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ArrowUpDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  priceFilter === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setPriceFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  priceFilter === 'free' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setPriceFilter('free')}
              >
                Free
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  priceFilter === 'paid' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setPriceFilter('paid')}
              >
                Paid
              </button>
            </div>
          </div>

          {/* Results */}
          {filteredModels.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map(model => (
                <ModelCard key={model.id} {...model} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">No models found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Models;