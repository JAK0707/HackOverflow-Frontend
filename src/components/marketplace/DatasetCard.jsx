import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, FileText } from 'lucide-react';
import Card from '../common/Card';
import UpvoteButton from '../common/UpvoteButton';
import Button from '../common/Button';

const DatasetCard = ({ 
  id, 
  title, 
  description, 
  category, 
  size, 
  records, 
  price, 
  author 
}) => {
  const formattedSize = () => {
    if (size < 1024) return `${size} MB`;
    return `${(size / 1024).toFixed(1)} GB`;
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            category === 'image' 
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
              : category === 'text' 
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
          }`}>
            <Database className="w-5 h-5" />
          </div>
          <UpvoteButton initialCount={Math.floor(Math.random() * 100)} />
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400">Size</div>
            <div className="font-medium">{formattedSize()}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400">Records</div>
            <div className="font-medium">{records.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <FileText className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">{category} Dataset</span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">By </span>
            <span className="font-medium text-sm">{author}</span>
          </div>
          <div className="text-lg font-bold gradient-text">
            {price > 0 ? `$${price.toFixed(2)}` : 'Free'}
          </div>
        </div>
        
        <Link to={`/datasets/${id}`} className="mt-4">
          <Button variant="primary" className="w-full">
            View Details <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DatasetCard;