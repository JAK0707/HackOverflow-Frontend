import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Eye } from 'lucide-react';
import Card from '../common/Card';
import UpvoteButton from '../common/UpvoteButton';
import Button from '../common/Button';

const AppCard = ({ 
  id, 
  title, 
  description, 
  category, 
  rating, 
  views, 
  author, 
  image 
}) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
          {category}
        </div>
        <div className="absolute top-3 right-3">
          <UpvoteButton initialCount={Math.floor(Math.random() * 150)} />
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Star className="text-yellow-400 w-4 h-4 mr-1" fill="currentColor" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Eye className="w-4 h-4 mr-1" />
            <span>{views}+</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">By </span>
            <span className="font-medium text-sm">{author}</span>
          </div>
          <div className="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            Try it now
          </div>
        </div>
        
        <Link to={`/apps/${id}`} className="mt-4">
          <Button variant="primary" className="w-full">
            View App <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AppCard;