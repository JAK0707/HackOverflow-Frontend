import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { BookOpen, Code, Brain, Layers, Server, Database, Share2, Zap } from 'lucide-react';
import Chatbot from '../components/common/Chatbot';

const TrainingGuide = () => {
  const [messages, setMessages] = useState([
    { id: Date.now() + '_b', sender: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const fetchResponse = async (query) => {
    const apiKey = 'AIzaSyDTPaU1XmJWCDaiqkk_SYBdFOBZzDW5DUE';
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: query }] }] })
        }
      );
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    } catch (err) {
      console.error(err);
      return 'Error: Unable to fetch response.';
    }
  };

  const handleUserMessage = async (message) => {
    setMessages((prev) => [...prev, { id: Date.now() + '_u', sender: 'user', text: message }]);
    setInput('');

    const botText = await fetchResponse(message);
    setMessages((prev) => [...prev, { id: Date.now() + '_b', sender: 'bot', text: botText }]);
  };

  const steps = [
    {
      icon: Database,
      title: 'Data Preparation',
      description: 'Clean, normalize, and preprocess your data for optimal model performance.',
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'Model Selection',
      description: 'Choose the right model architecture for your specific task and data type.',
      color: 'bg-purple-500'
    },
    {
      icon: Layers,
      title: 'Model Training',
      description: 'Configure hyperparameters and train your model to achieve optimal results.',
      color: 'bg-pink-500'
    },
    {
      icon: Code,
      title: 'Fine-tuning',
      description: 'Make incremental improvements to boost model performance and accuracy.',
      color: 'bg-indigo-500'
    },
    {
      icon: Server,
      title: 'Deployment',
      description: 'Optimize your model for production environments and deploy efficiently.',
      color: 'bg-green-500'
    },
    {
      icon: Share2,
      title: 'Monetization',
      description: 'List your model on our marketplace and set your preferred pricing model.',
      color: 'bg-amber-500'
    }
  ];

  const resources = [
    {
      title: 'Introduction to Neural Networks',
      type: 'Video Tutorial',
      duration: '45 minutes',
      level: 'Beginner'
    },
    {
      title: 'Data Preprocessing Techniques',
      type: 'Guide',
      duration: '15 minutes',
      level: 'Intermediate'
    },
    {
      title: 'Building Computer Vision Models',
      type: 'Tutorial',
      duration: '60 minutes',
      level: 'Advanced'
    },
    {
      title: 'NLP Model Fine-tuning',
      type: 'Guide',
      duration: '30 minutes',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">AI Training Assistant</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Get personalized guidance for training your AI models, whether you're a beginner or an experienced developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl text-white mb-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">How It Works</h2>
                </div>
                <p className="mb-4">
                  Our AI training assistant will guide you through the entire process of developing and training AI models.
                  Ask questions, get code samples, and receive step-by-step instructions tailored to your specific project.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">For Beginners</h3>
                    <p className="text-sm">Learn ML concepts and get started with simple models</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">For Experts</h3>
                    <p className="text-sm">Advanced techniques, optimization, and architecture design</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Training Process</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {steps.map((step, index) => (
                    <Card key={index} variant="glass" className="p-4">
                      <div className="flex items-start">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-3 ${step.color}`}>
                          <step.icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{step.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  {resources.map((resource, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer ${
                        index !== resources.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <h3 className="font-medium">{resource.title}</h3>
                          <div className="flex text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <span className="mr-3">{resource.type}</span>
                            <span className="mr-3">{resource.duration}</span>
                            <span>{resource.level}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-primary">View</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[600px]">
              <Chatbot
                title="AI Training Assistant"
                subtitle="Ask me about model training, data preprocessing, or any ML topic"
                messages={messages}
                onSendMessage={(message) => handleUserMessage(message)}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainingGuide;