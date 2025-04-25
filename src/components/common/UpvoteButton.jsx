import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const UpvoteButton = ({ initialCount = 0, size = 'md' }) => {
  const [count, setCount] = useState(initialCount);
  const [upvoted, setUpvoted] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleUpvote = () => {
    if (!upvoted) {
      setCount(prev => prev + 1);
      setUpvoted(true);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    } else {
      setCount(prev => prev - 1);
      setUpvoted(false);
    }
  };

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <button
      onClick={handleUpvote}
      className={`flex flex-col items-center transition-all duration-200 ${
        upvoted ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
      }`}
    >
      <ChevronUp 
        className={`${animate ? 'scale-125' : 'scale-100'} transition-transform duration-200`}
        size={size === 'sm' ? 16 : size === 'md' ? 20 : 24}
      />
      <span className={`font-medium ${sizes[size]}`}>{count}</span>
    </button>
  );
};

export default UpvoteButton;