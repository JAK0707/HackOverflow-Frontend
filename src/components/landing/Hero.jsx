import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.random() > 0.5 ? '255, 98, 120' : '97, 85, 255'}, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900">
      <canvas ref={particlesRef} className="absolute inset-0 w-full h-full"></canvas>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <span className="text-sm font-medium text-primary">Web3 + AI Marketplace</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Revolutionize</span> the Way You <br />
              Build <span className="gradient-text">AI Models</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              The first decentralized marketplace connecting AI developers, 
              dataset providers, and GPU resources in one seamless ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-3xl gradient-text">500+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI Models</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-3xl gradient-text">10K+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Datasets</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-3xl gradient-text">5K+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full filter blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 right-4 w-72 h-72 bg-secondary/20 rounded-full filter blur-2xl opacity-70 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative glass-effect rounded-2xl p-6 shadow-xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                  <Brain className="w-10 h-10" />
                </div>
                
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Marketplace" 
                  className="w-full h-auto rounded-xl"
                />
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold dark:text-white">Connect, Create, and Monetize</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share datasets, train on distributed GPUs, and sell your AI models 
                    in a decentralized ecosystem.
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(index => (
                        <div key={index} className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                          index % 2 === 0 
                            ? 'from-primary to-primary-light' 
                            : 'from-secondary to-secondary-light'
                        } flex items-center justify-center text-white text-xs font-bold`}>
                          {String.fromCharCode(64 + index)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Join 5,000+ creators
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;