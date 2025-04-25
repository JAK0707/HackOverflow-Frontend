import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--secondary),0.05)] dark:from-[rgba(var(--primary),0.1)] dark:to-[rgba(var(--secondary),0.1)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join the <span className="gradient-text">AI Revolution?</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, developer, or enthusiast, our platform provides everything you need to succeed in the rapidly evolving AI landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link to="/register">
              <Button variant="primary" size="lg">
                Get Started <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { count: '500+', label: 'AI Models' },
              { count: '10K+', label: 'Datasets' },
              { count: '5K+', label: 'Users' },
              { count: '100+', label: 'GPU Providers' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold gradient-text">{stat.count}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;