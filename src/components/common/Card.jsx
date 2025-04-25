import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-2xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    glass: 'glass-effect',
    gradient: 'bg-gradient-to-br from-[rgba(var(--primary),0.1)] to-[rgba(var(--secondary),0.1)]',
  };
  
  const hoverClasses = hover ? 'card-hover' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;