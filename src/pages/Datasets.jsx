import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Datasets = () => {
  const [datasets, setDatasets] = useState([
    {
      id: 1,
      name: 'Medical Imaging Dataset',
      stipend: '2.5 ICP',
      parameters: 'epochs=50, batch=32',
      fileName: 'medical_images.zip',
      uploader: 'MedAI Labs'
    },
    {
      id: 2,
      name: 'E-commerce Transactions',
      stipend: '1.8 ICP',
      parameters: 'epochs=30, batch=16',
      fileName: 'transactions.csv',
      uploader: 'CommerceAI'
    },
    {
      id: 3,
      name: 'Weather Forecast Data',
      stipend: '2.0 ICP',
      parameters: 'epochs=40, batch=20',
      fileName: 'weather_data.csv',
      uploader: 'ClimateAI'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    stipend: '',
    parameters: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.stipend || !formData.parameters || !formData.file) {
      alert("Please fill in all fields.");
      return;
    }

    const newDataset = {
      id: datasets.length + 1,
      name: formData.name,
      stipend: formData.stipend,
      parameters: formData.parameters,
      fileName: formData.file.name,
      uploader: 'You'
    };

    setDatasets(prev => [...prev, newDataset]);
    setFormData({ name: '', stipend: '', parameters: '', file: null });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">🌍 Global Dataset Listings</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Explore datasets shared by the community for AI model training.
            </p>
          </div>

          {/* Global Datasets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {datasets.map(dataset => (
              <div key={dataset.id} className="border rounded-xl p-4 shadow-sm bg-white dark:bg-gray-800">
                <h3 className="text-lg font-bold">{dataset.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Uploaded by:</strong> {dataset.uploader} <br />
                  <strong>File:</strong> {dataset.fileName} <br />
                  <strong>Params:</strong> {dataset.parameters} <br />
                  <strong>Stipend:</strong> {dataset.stipend}
                </p>
                <button
                  className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Accept & Train
                </button>
              </div>
            ))}
          </div>

          {/* Upload Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">📤 Upload Your Dataset</h2>
              <form
                onSubmit={handleUpload}
                className="border p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800"
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Dataset Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Stipend for Training (e.g. 1.8 ICP)</label>
                  <input
                    type="text"
                    name="stipend"
                    value={formData.stipend}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Training Parameters (e.g. epochs=30, batch=16)</label>
                  <textarea
                    name="parameters"
                    rows={3}
                    value={formData.parameters}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Dataset File</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Upload Dataset
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datasets;
