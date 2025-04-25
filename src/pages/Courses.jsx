import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ModelCard from '../components/marketplace/ModelCard';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

// Mock data
const coursesData = [
  {
    id: 1,
    title: 'Deep Learning with TensorFlow',
    description: 'Comprehensive course on deep learning using TensorFlow.',
    category: 'Deep Learning',
    rating: 4.8,
    downloads: 1024,
    price: 199,
    author: 'AI Academy',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning',
    description: 'Learn the basics of machine learning with hands-on projects.',
    category: 'Machine Learning',
    rating: 4.7,
    downloads: 856,
    price: 0,
    author: 'ML Experts',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Computer Vision with OpenCV',
    description: 'Master computer vision techniques using OpenCV.',
    category: 'Computer Vision',
    rating: 4.6,
    downloads: 723,
    price: 149,
    author: 'VisionAI',
    image: 'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    description: 'Dive into NLP with real-world applications.',
    category: 'NLP',
    rating: 4.5,
    downloads: 612,
    price: 199,
    author: 'NLP Hub',
    image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [priceFilter, setPriceFilter] = useState('all');

  const categories = ['All', 'Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP'];

  // Filter and sort courses
  const filteredCourses = coursesData
    .filter(course => {
      const matchesSearch = searchTerm === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesPrice = 
        priceFilter === 'all' || 
        (priceFilter === 'free' && course.price === 0) ||
        (priceFilter === 'paid' && course.price > 0);
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
            <h1 className="text-3xl font-bold mb-2">AI Courses Marketplace</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Explore and enroll in AI courses to enhance your skills and knowledge.
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
                  placeholder="Search courses..."
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
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <ModelCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
