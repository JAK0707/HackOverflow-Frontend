import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white hover:shadow-lg hover:shadow-[rgba(var(--primary),0.3)]',
    secondary: 'bg-gradient-to-r from-[rgb(var(--secondary))] to-[rgb(var(--accent))] text-white hover:shadow-lg hover:shadow-[rgba(var(--secondary),0.3)]',
    outline: 'border border-[rgba(var(--primary),0.3)] text-[rgb(var(--primary))] dark:text-[rgb(var(--primary-light))] hover:border-[rgba(var(--primary),0.6)]',
    ghost: 'bg-transparent text-[rgb(var(--primary))] dark:text-[rgb(var(--primary-light))] hover:bg-[rgba(var(--primary),0.1)]',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;