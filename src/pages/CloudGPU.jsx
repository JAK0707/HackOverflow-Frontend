import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const gpuList = [
  {
    id: 1,
    provider: "Jaiditya Labs",
    specs: "NVIDIA RTX 4090 | 24GB VRAM",
    location: "Delhi, India",
    pricePerHour: "0.5 ICP",
    status: "Available",
    contact: "mailto:jaiditya@example.com"
  },
  {
    id: 2,
    provider: "AIForge",
    specs: "NVIDIA A100 | 40GB VRAM",
    location: "California, USA",
    pricePerHour: "1.2 ICP",
    status: "Busy",
    contact: "mailto:support@aiforge.ai"
  },
  {
    id: 3,
    provider: "TensorHive",
    specs: "NVIDIA T4 | 16GB VRAM",
    location: "Berlin, Germany",
    pricePerHour: "0.35 ICP",
    status: "Available",
    contact: "mailto:tensorhive@domain.com"
  },
  {
    id: 4,
    provider: "CloudCompute",
    specs: "NVIDIA V100 | 32GB VRAM",
    location: "Tokyo, Japan",
    pricePerHour: "0.8 ICP",
    status: "Available",
    contact: "mailto:cloudcompute@example.com"
  },
  {
    id: 5,
    provider: "DeepAI Rentals",
    specs: "NVIDIA RTX 3080 | 10GB VRAM",
    location: "London, UK",
    pricePerHour: "0.4 ICP",
    status: "Busy",
    contact: "mailto:deepai@example.com"
  },
  {
    id: 6,
    provider: "GPUHub",
    specs: "NVIDIA A40 | 48GB VRAM",
    location: "Sydney, Australia",
    pricePerHour: "1.0 ICP",
    status: "Available",
    contact: "mailto:gpuhub@example.com"
  }
];

const CloudGPU = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');

  const filteredGPUs = gpuList
    .filter(gpu => {
      const matchesSearch = searchTerm === '' || gpu.provider.toLowerCase().includes(searchTerm.toLowerCase()) || gpu.specs.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || gpu.status.toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.pricePerHour);
      const priceB = parseFloat(b.pricePerHour);
      return sortBy === 'price-high' ? priceB - priceA : priceA - priceB;
    });

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Cloud GPU Marketplace</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Rent high-performance GPUs on demand from verified providers across the globe.
            </p>
          </div>

          {/* Search & Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search providers or specs..."
                  className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <select
                    className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring focus:ring-primary/20 appearance-none"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="busy">Busy</option>
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
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ArrowUpDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPU Cards */}
          {filteredGPUs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGPUs.map(gpu => (
                <div
                  key={gpu.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{gpu.provider}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{gpu.specs}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">📍 {gpu.location}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">💰 <span className="font-medium">{gpu.pricePerHour}</span> per hour</p>
                    <p className={`mb-2 ${gpu.status === 'Available' ? 'text-green-500' : 'text-yellow-500'}`}>⚙️ {gpu.status}</p>
                    <a
                      href={gpu.contact}
                      className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Contact Provider
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">No GPUs found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudGPU;
