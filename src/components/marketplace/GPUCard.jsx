import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Clock, Wifi } from 'lucide-react';
import Card from '../common/Card';
import UpvoteButton from '../common/UpvoteButton';
import Button from '../common/Button';

const GPUCard = ({ 
  id, 
  title, 
  description, 
  type, 
  memory, 
  performance, 
  availability, 
  price, 
  provider 
}) => {
  // Convert availability percentage to status
  const getAvailabilityStatus = () => {
    if (availability >= 80) return { label: 'High Availability', class: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' };
    if (availability >= 40) return { label: 'Medium Availability', class: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' };
    return { label: 'Low Availability', class: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' };
  };

  const availabilityStatus = getAvailabilityStatus();

  return (
    <Card className="flex flex-col h-full">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <UpvoteButton initialCount={Math.floor(Math.random() * 50)} />
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400">Memory</div>
            <div className="font-medium">{memory} GB</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400">Performance</div>
            <div className="font-medium">{performance} TFLOPS</div>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <Wifi className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span className={`text-sm px-2 py-0.5 rounded-full ${availabilityStatus.class}`}>
            {availabilityStatus.label}
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">By </span>
            <span className="font-medium text-sm">{provider}</span>
          </div>
          <div className="text-lg font-bold gradient-text">
            ${price.toFixed(2)}/hr
          </div>
        </div>
        
        <Link to={`/cloud-gpu/${id}`} className="mt-4">
          <Button variant="primary" className="w-full">
            Rent GPU <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default GPUCard;