import React from 'react';
import { Lock, Zap, Clock, DollarSign } from 'lucide-react';

const USPItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const USP = () => {
  const uspItems = [
    {
      icon: Lock,
      title: 'Secure Blockchain Integration',
      description: 'All transactions and model ownership are secured by blockchain technology, ensuring immutable records and transparency.'
    },
    {
      icon: Zap,
      title: 'Distributed Computing Power',
      description: 'Access a global network of GPUs to speed up your model training at a fraction of traditional cloud costs.'
    },
    {
      icon: Clock,
      title: 'Time-to-Market Acceleration',
      description: 'Reduce development time by 60% with our streamlined workflows, pre-trained models, and expert guidance.'
    },
    {
      icon: DollarSign,
      title: 'Monetize Your AI Assets',
      description: 'Generate passive income by sharing your datasets, renting your GPU, or selling your custom AI models.'
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">AI Marketplace?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our platform offers unique advantages that set us apart from traditional AI development environments.
            </p>
            
            <div className="space-y-8">
              {uspItems.map((item, index) => (
                <USPItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 glass-effect rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI Marketplace Advantages" 
                className="w-full h-auto"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Join the AI Revolution</h3>
                  <p className="text-sm opacity-90">
                    Our marketplace connects over 5,000 AI developers with resources they need
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/30 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full filter blur-xl"></div>
            
            <div className="absolute -top-4 -left-4 w-40 h-40 border-2 border-dashed border-primary/20 rounded-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border-2 border-dashed border-secondary/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;