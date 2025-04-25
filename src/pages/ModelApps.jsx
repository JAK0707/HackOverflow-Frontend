import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

// Original model apps data
const modelApps = [
  {
    id: 1,
    name: 'Road Pothole Detector',
    description: 'Upload an image or video and detect potholes using YOLOv8.',
    creator: 'Jaiditya Kapoor',
    demoLink: 'https://pothole-detector.streamlit.app/',
    tags: ['Computer Vision', 'YOLOv8', 'Streamlit'],
    price: 0,
    downloads: 0,
    rating: 0,
    image: 'https://miro.medium.com/v2/resize:fit:720/1*7MAcOo7vLf4w_AvP8Ph_vA.png'
  },
  {
    id: 2,
    name: 'Text Sentiment Analyzer',
    description: 'Enter any sentence and classify its sentiment using BERT.',
    creator: 'AI Wizard',
    demoLink: 'https://huggingface.co/spaces/AIWizard/SentimentApp',
    tags: ['NLP', 'Sentiment', 'Transformers'],
    price: 0,
    downloads: 0,
    rating: 0,
    image: 'https://community.qlik.com/legacyfs/online/44103_wordle-infoaccess_20080725-51.png'
  },
  {
    id: 3,
    name: 'Currency Note Forgery Detector',
    description: 'Upload currency note images and check for counterfeits.',
    creator: 'SecureNet',
    demoLink: 'https://example.com/currency-app',
    tags: ['Classification', 'CNN', 'Security'],
    price: 0,
    downloads: 0,
    rating: 0,
    image: 'https://www.financialexpress.com/wp-content/uploads/2019/05/currency1-1.jpg?w=440'
  },
  {
    id: 4,
    name: 'AI Art Generator',
    description: 'Generate stunning artwork using AI-powered diffusion models.',
    creator: 'ArtifyAI',
    demoLink: 'https://example.com/ai-art',
    tags: ['Art', 'Generative', 'Diffusion'],
    price: 49,
    downloads: 120,
    rating: 4.5,
    image: 'https://us.v-cdn.net/6036147/uploads/SUCMXLZSV1B2/r-20-3-1-1200x675.jpg'
  },
  {
    id: 5,
    name: 'Voice Cloning Tool',
    description: 'Clone voices with high accuracy for dubbing and voiceovers.',
    creator: 'VoiceCloneAI',
    demoLink: 'https://example.com/voice-clone',
    tags: ['Speech', 'Voice', 'Cloning'],
    price: 99,
    downloads: 85,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/3782234/pexels-photo-3782234.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Stock Price Predictor',
    description: 'Predict stock prices using time-series forecasting models.',
    creator: 'FinanceAI',
    demoLink: 'https://example.com/stock-predictor',
    tags: ['Finance', 'Forecasting', 'Time Series'],
    price: 199,
    downloads: 200,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    name: 'Language Translator',
    description: 'Translate text between 100+ languages with high accuracy.',
    creator: 'GlobalTranslate',
    demoLink: 'https://example.com/translator',
    tags: ['NLP', 'Translation', 'Multilingual'],
    price: 0,
    downloads: 500,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ModelApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [priceFilter, setPriceFilter] = useState('all');

  // Compute unique tags for filter dropdown
  const allTags = ['All', ...new Set(modelApps.flatMap(app => app.tags))];

  // Filter and sort apps
  const filteredApps = modelApps
    .filter(app => {
      const matchesSearch =
        searchTerm === '' ||
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'All' || app.tags.includes(selectedTag);
      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'free' && app.price === 0) ||
        (priceFilter === 'paid' && app.price > 0);
      return matchesSearch && matchesTag && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });

  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', darkModeEnabled);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Apps Marketplace</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Explore and try ready-to-use AI applications built with cutting-edge models.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search apps..."
                  className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <select
                    className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20 appearance-none"
                    value={selectedTag}
                    onChange={e => setSelectedTag(e.target.value)}
                  >
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
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

          {/* Results Grid */}
          {filteredApps.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map(app => (
                <div key={app.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col">
                  <img src={app.image} alt={app.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">By {app.creator}</p>
                  <p className="flex-1 text-gray-700 dark:text-gray-200 mb-4">{app.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {app.price === 0 ? 'Free' : `$${app.price}`}
                    </span>
                    <a
                      href={app.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition"
                    >
                      Try App
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">No apps found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModelApps;
