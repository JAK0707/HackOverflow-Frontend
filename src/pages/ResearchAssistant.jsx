import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { BookOpen, Search, Brain, Layers, Edit, Share2, CheckCircle } from 'lucide-react';
import Chatbot from '../components/common/Chatbot';

const ResearchAssistant = () => {
  const [messages, setMessages] = useState([
    { id: Date.now() + '_b', sender: 'bot', text: "Hello! I'm your AI assistant. How can I help you with your research today?" }
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
      icon: Search,
      title: 'Identify Interests',
      description: 'Explore areas of interest and identify topics that excite you.',
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'Literature Review',
      description: 'Review existing research to find gaps and opportunities.',
      color: 'bg-purple-500'
    },
    {
      icon: Layers,
      title: 'Narrow Down',
      description: 'Focus on a specific problem or question within your chosen area.',
      color: 'bg-pink-500'
    },
    {
      icon: Edit,
      title: 'Draft Proposal',
      description: 'Write a clear and concise research proposal outlining your objectives.',
      color: 'bg-indigo-500'
    },
    {
      icon: Share2,
      title: 'Collaborate',
      description: 'Discuss your ideas with peers or mentors for feedback.',
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Finalize Topic',
      description: 'Confirm your research topic and start planning your study.',
      color: 'bg-amber-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">AI Research Assistant</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
              Get personalized guidance for choosing and refining your research topic, whether you're a student or an experienced researcher.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl text-white mb-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Latest Research Topics in AI/ML</h2>
                </div>
                <p className="mb-4">
                  Stay updated with cutting-edge advancements in Artificial Intelligence and Machine Learning. 
                  Explore trending topics, groundbreaking research, and emerging technologies in the field.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">Generative AI</h3>
                    <p className="text-sm">Dive into the world of generative models like GPT and diffusion models.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">Reinforcement Learning</h3>
                    <p className="text-sm">Explore advancements in decision-making and autonomous systems.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">Explainable AI</h3>
                    <p className="text-sm">Understand the push for transparency and interpretability in AI systems.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-1">AI Ethics</h3>
                    <p className="text-sm">Learn about ethical considerations and responsible AI development.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Research Topic Selection Process</h2>
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
            </div>

            <div className="h-[600px]">
              <Chatbot
                title="AI Research Assistant"
                subtitle="Ask me about research topics, literature reviews, or drafting proposals"
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

export default ResearchAssistant;